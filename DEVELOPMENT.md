# Development

## Prerequisites
See [PREREQUISITES.md](PREREQUISITES.md) to get your local development environment set up.

## Build
Now that you have your local development environment all set up, you'll want to build and run the website locally. 
This allows you to test your changes prior to commiting them to our git repository. 

To install the software dependencies that are required to **build** the project, you will first need to run:
```bash
npm install
```
To build and deploy to nginx running locally, you'll first want to make a small change to the build script. 
Edit `build.sh` and change the path specified after NGINX_HTML from `"/usr/local/nginx/html"` to `"/var/www/html"`
Then do this:
```bash
./build.sh local
```

To build and deploy to Rancher or Docker, run this:
```bash
./build.sh docker
```

The build process bundles `src/main.jsx` (esbuild) into `js/index.compiled.js`, copies `index.html` and `css` into `build/`. 
React and ReactDOM load from CDN via `index.html`, not bundled.

## Deploy targets

```
./build.sh local    # build + deploy to local nginx (/usr/local/nginx/html/)
./build.sh docker   # build Docker image + run at http://localhost:8080
./build.sh aws      # build + deploy to AWS Amplify
```

AWS deploy requires `aws login --profile district24` first. It zips `css`, `js`, `index.html` into `dist/district24.zip`, creates an Amplify deployment (app `d2zcneygndvg6j`, branch `production`), uploads the zip, then starts the deployment.
