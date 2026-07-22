# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build main site — mirrors what build.sh does locally
RUN npx esbuild src/main.jsx --bundle --outfile=js/index.compiled.js \
      --jsx-factory=React.createElement --jsx-fragment=React.Fragment --minify && \
    mkdir -p build && \
    cp -a index.html build/ && \
    cp -a css build/ && \
    mkdir -p build/js && \
    cp -a js/index.compiled.js build/js/

# ── Stage 2: Serve ────────────────────────────────────────────────────────────
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
#EXPOSE 8080
EXPOSE 80
