# Development

## Prerequisites

* git (v 2.x)
* Node.js (v 20.x | also provides npm)
* Either Rancher Desktop or Docker Desktop (current version)
* nginx -- this is optional; this is great if you're flipping back and forth between multiple websites you're developing
* IDE (Integrated Development Environment)
  * WebStorm (JetBrains)
  * PyCharm (JetBrains)
  * GoLand (JetBrains)
  * VS Code (Microsoft)

### git
Version control system that tracks changes to the source and lets us collaborate without overwriting each other's work. Install from [git-scm.com](https://git-scm.com/) or via your OS package manager (`brew install git`, `apt install git`, etc.).

To get the project:
```bash
git clone git@github-mike.com:mike-mke/district24-website.git
cd district24-website
```
Day-to-day: `git pull` to get latest changes, `git checkout -b my-change` to start work on a branch, `git add` / `git commit` to save changes, `git push` to share them.

### Node.js (also provides npm)
JavaScript runtime used here only for build tooling — the site itself ships as plain HTML/CSS/JS with React loaded from a CDN (see `index.html`). npm (bundled with Node) installs and runs those build tools. Install v20.x from [nodejs.org](https://nodejs.org/) (this matches the `node:20-alpine` image used in `Dockerfile`, so local builds behave the same as the Docker build).

Once installed, from the project root:
```bash
npm install
```
This reads `package.json` / `package-lock.json` and installs `esbuild`, the only build dependency, into `node_modules/`. You only need to re-run it when dependencies change.

### nginx OR Docker
Either is a way to serve the built site locally so you can view it in a browser; you don't need both.

- **nginx**: a lightweight web server. `./build.sh local` copies the built files straight into nginx's web root (`/usr/local/nginx/html/`), so nginx must already be installed and running on your machine.
- **Docker**: a container runtime. `./build.sh docker` builds an image (per `Dockerfile`, which runs its own `npm ci` + esbuild step) and runs it, mapping container port 8080 to `http://localhost:8080`. Nothing else needs to be installed on your machine besides Docker itself.

### IDE (Integrated Development Environment)
Any editor works; these are just the ones recommended for use on this project. VS Code is the most common choice for JS/React work (extensions for JSX/ESLint, integrated terminal). The JetBrains IDEs are my personal favorites and WebStorm is their JS/TS-focused option.

## Build
Now that you've installed all the prerequisites, you'll want to build and run the website locally. 
This allows you test test your changes prior to commiting them to our git repository. 

To install the software dependencies that are required to build the project, you will first need to run:
```bash
npm install
```
To build and deploy to Rancher or Docker, run this:
```bash
./build.sh docker
```


Bundles `src/main.jsx` (esbuild) into `js/index.compiled.js`, copies `index.html` and `css` into `build/`. React/ReactDOM load from CDN via `index.html`, not bundled.

## Deploy targets

```
./build.sh local    # build + deploy to local nginx (/usr/local/nginx/html/)
./build.sh docker   # build Docker image + run at http://localhost:8080
./build.sh aws      # build + deploy to AWS Amplify
```

AWS deploy requires `aws login --profile district24` first. It zips `css`, `js`, `index.html` into `dist/district24.zip`, creates an Amplify deployment (app `d2zcneygndvg6j`, branch `production`), uploads the zip, then starts the deployment.
