# Introduction

**A note for Windows:** this project's scripts (`build.sh`, etc.) are bash scripts targeting Linux-style paths, so these instructions assume you're using **WSL2** (Windows Subsystem for Linux) with an Ubuntu distro rather than native Windows tools. To set it up:
1. Open PowerShell or Command Prompt as Administrator and run `wsl --install` (Windows 11, or recent Windows 10 builds — this installs WSL2 with Ubuntu by default).
2. Reboot when prompted.
3. Launch "Ubuntu" from the Start menu and finish the first-run setup (choose a Unix username/password).
4. Do all the install steps below inside that Ubuntu terminal, and keep the project checked out on the Linux filesystem (e.g. `~/district24-website`) rather than under `/mnt/c/...` for much better performance.

## Prerequisites
* git (v 2.x)
* IDE (stands for **I**ntegrated **D**evelopment **E**nvironment)
    * WebStorm (JetBrains)
    * VS Code (Microsoft)
* Node.js (v 20.x | also provides npm)
* Either Rancher Desktop or Docker Desktop (current version)
* nginx -- this is optional; this is great if you're flipping back and forth between multiple websites you're developing


## git
Version control system that tracks changes to the source and lets us collaborate without overwriting each other's work. Install from [git-scm.com](https://git-scm.com/) or via your OS package manager (`brew install git`, `apt install git`, etc.).

**macOS**
- Easiest: install the Xcode Command Line Tools, which include git — in Terminal run 

`xcode-select --install`   
- Or download the installer from [git-scm.com](https://git-scm.com/download/mac).

**Windows (via WSL)**
- Inside your WSL Ubuntu terminal (see the WSL note at the top of this doc): 

`sudo apt update`  
`sudo apt install git`  

**Configure**
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
If you'll push/pull over SSH (as the clone command below does), generate a key and add it to your GitHub account under Settings > SSH and GPG keys:
```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

To get the project:
```bash
cd
mkdir Projects
cd Projects
git clone git@github-mike.com:mike-mke/district24-website.git
cd district24-website
```
Day-to-day: `git pull` to get latest changes, `git checkout -b my-change` to start work on a branch, `git add` / `git commit` to save changes, `git push` to share them.


## Node.js (also provides npm)
JavaScript runtime used here only for build tooling — the site itself ships as plain HTML/CSS/JS with React loaded from a CDN (see `index.html`). npm (bundled with Node) installs and runs those build tools. Install v20.x (this matches the `node:20-alpine` image used in `Dockerfile`, so local builds behave the same as the Docker build).

**macOS**
- Download the v20.x LTS installer (.pkg) from [nodejs.org](https://nodejs.org/) and run it.
- Or via [nvm](https://github.com/nvm-sh/nvm) if you need to switch Node versions across projects: install nvm, then `nvm install 20`.

**Windows (via WSL)**
- Inside your WSL Ubuntu terminal, install via [nvm](https://github.com/nvm-sh/nvm) (recommended — Ubuntu's packaged Node is usually outdated):
  ```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  # restart the terminal, then:
  nvm install 20
  ```

**Verify** (either OS): `node -v` should print `v20.x`, `npm -v` should print a version too.

Once installed, from the project root:
```bash
npm install
```
This reads `package.json` / `package-lock.json` and installs `esbuild`, the only build dependency, into `node_modules/`. You only need to re-run it when dependencies change.


## IDE (Integrated Development Environment)
While any editor works, you will want to use an IDE because of all the features it provides. The ones below are what we recommend for use on this project. The JetBrains IDEs are my personal favorites and WebStorm is their JS/TS-focused option. VS Code is a popular choice for JS/React work (extensions for JSX/ESLint, integrated terminal). 

**WebStorm**
- macOS: download from [jetbrains.com/webstorm](https://www.jetbrains.com/webstorm/) (or install the JetBrains Toolbox app to manage installs/updates), open the `.dmg`, drag to Applications.
- Windows: install the JetBrains WebStorm `.exe` from [jetbrains.com/webstorm](https://www.jetbrains.com/webstorm/) natively on Windows, but open the project through WSL — use File > Remote Development, or set Settings > Languages & Frameworks > Node.js interpreter to the WSL one, so it picks up the Node 20 you installed inside Ubuntu.

**Opening WSL Projects in WebStorm**
You can access and work on code directly out of your WSL distribution:
1. Open WebStorm on your Windows desktop.
2. Click Open on the Welcome screen.
3. In the path selection dialog, navigate to or type the explicit WSL path:  
   `\wsl.localhost\<DistributionName>\home\<username>\Projects\district24-website`   
     (replace \<DistributionName> with Ubuntu, Debian, etc.).
4. Modern WebStorm versions will activate EEL mode automatically, letting you manage the project efficiently directly within the Windows IDE window.

**VS Code**
- macOS: download the `.zip` from [code.visualstudio.com](https://code.visualstudio.com/) and drag to Applications.
- Windows: install VS Code natively, then add the "WSL" extension (ms-vscode-remote.remote-wsl). From your WSL Ubuntu terminal, `cd` into the project and run `code .` — this opens VS Code connected to WSL so its integrated terminal, extensions, and Node all run inside Ubuntu.
- Recommended extensions either way: ESLint, and a JSX/React syntax highlighting extension.


## nginx or Docker (optional)
Either is a way to serve the built site locally so you can view it in a browser; you don't need both.

- **nginx**: a lightweight web server. `./build.sh local` copies the built files straight into nginx's web root (`/usr/local/nginx/html/`), so nginx must already be installed and running on your machine.
- **Docker** (or Rancher Desktop, a Docker-compatible alternative): a container runtime. `./build.sh docker` builds an image (per `Dockerfile`, which runs its own `npm ci` + esbuild step) and runs it, mapping container port 8080 to `http://localhost:8080`. Nothing else needs to be installed on your machine besides Docker itself.

**Rancher Desktop or Docker Desktop**
- macOS: download the `.dmg` from [rancherdesktop.io](https://rancherdesktop.io/) or [docker.com](https://www.docker.com/products/docker-desktop/), drag to Applications, launch and let it finish initializing (this sets up a Linux VM + container runtime). In Rancher Desktop, set the container engine to "dockerd (moby)" under Preferences so plain `docker` commands work.
- Windows: install Docker Desktop or Rancher Desktop from the same sites, running the Windows installer directly (not inside WSL). Both use WSL2 as their backend. For Docker Desktop, go to Settings > Resources > WSL Integration and enable integration for your Ubuntu distro — then run `docker build` / `docker run` from inside the WSL Ubuntu terminal where the rest of this project lives.

**nginx**
- macOS: `brew install nginx`. Note that Homebrew's default docroot (typically `/opt/homebrew/var/www` on Apple Silicon or `/usr/local/var/www` on Intel) doesn't match the `/usr/local/nginx/html/` path `build.sh local` deploys to. Either point nginx's config at `build/` yourself, or just use `./build.sh docker` instead — it needs no path setup.
- Windows (via WSL): `sudo apt install nginx`. Same path mismatch as macOS applies (`apt` installs to `/etc/nginx`, not `/usr/local/nginx`), so again `./build.sh docker` is the path of least resistance unless you adjust the config.
