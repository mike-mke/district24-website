# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Build main site — mirrors what build.sh does locally
RUN npx babel js/index.js --out-file js/index.compiled.js --presets @babel/preset-react && \
    mkdir -p build && \
    cp -a index.html build/ && \
    cp -a css build/ && \
    cp -a js build/ && \
    rm build/js/index.js

# ── Stage 2: Serve ────────────────────────────────────────────────────────────
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
