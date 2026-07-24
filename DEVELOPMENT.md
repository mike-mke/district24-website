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

### NGINX  

To build and deploy to nginx running locally, you'll first want to do _one_ of the following.  

**Method 1**
- (recommended) Set the environment variable to the correct location for your html files
- Open a Terminal in WebStorm. If this isn't an Ubuntu (WSL) Terminal stop! Google how to set up WebStorm so that it integrates with WSL.
- Type in these commands:

```bash
pwd
cd
cat "export NGINX_HTML=/var/www/html" >> .bashrc
source .bashrc
```
Now you want to switch back to the directory that was printed out after you typed in 'pwd'. To do so, type in cd <directory name>

**Method 2**  
You will make a small change to the build script.  
Edit `build.sh` (using WebStorm) and change the path specified after NGINX_HTML from `"/usr/local/nginx/html"` to `"/var/www/html"`

After setting the env variable or changing the build script you will want to do this :

```bash
./build.sh local
```
Use your browser to view the site locally:

http://localhost/

### RANCHER or DOCKER  
First open Rancher Desktop or Docker Desktop, whichever you installed.  
Now, to build and deploy to Rancher or Docker, run this:
```bash
./build.sh docker
```

Use your browser to view the site locally:

http://localhost:8080/

In either case, the build process bundles `src/main.jsx` (esbuild) into `js/index.compiled.js`, and copies `index.html` and `css` into `build/`. 
React and ReactDOM load from CDN via `index.html`, not bundled.

## Deploy targets

```
./build.sh build    # builds the site, then stops
./build.sh local    # build + deploy to local nginx (either /usr/local/nginx/html or /var/www/html)
./build.sh docker   # build Docker image + run at http://localhost:8080
./build.sh aws      # build + deploy to AWS Amplify
```

AWS deploy requires `aws login --profile district24` first.
