# Introduction

Our source code lives on GitHub at [github.com/mike-mke/district24-website](https://github.com/mike-mke/district24-website). This guide walks you through:

1. Creating a GitHub account and getting access to the repository
2. Generating an SSH key so you can push and pull without typing a password
3. The everyday workflow: create a branch, push it, and open a Pull Request

If you haven't installed git yet, start with [PREREQUISITES.md](PREREQUISITES.md). Windows users: run **every** command below inside your WSL Ubuntu terminal, not PowerShell or Command Prompt.

## Create your account

1. Go to [github.com/signup](https://github.com/signup) and create a free account.
   * Use the same email address you gave to `git config --global user.email` (see PREREQUISITES.md). That way your commits are linked to your GitHub profile. If you'd rather use a different one, add it later under **Settings > Emails**.
   * Pick a username you're comfortable having visible to others; it shows up on every commit and Pull Request.
2. Verify your email address by clicking the link GitHub sends you.
3. Turn on two-factor authentication (2FA) under **Settings > Password and authentication**. GitHub requires 2FA for accounts that contribute code, so you may as well do it now. An authenticator app (Google Authenticator, Microsoft Authenticator, 1Password, etc.) works well. Save your recovery codes somewhere safe!
4. Send your GitHub username to Mike so he can add you as a collaborator on the repository.
5. Accept the invitation. You'll get an email, or you can go to [github.com/mike-mke/district24-website/invitations](https://github.com/mike-mke/district24-website/invitations) once Mike has sent it. Until you accept, you can't push to the repository.

## Generate your public/private key-pair

GitHub uses SSH keys to prove who you are when you push or pull. You generate a *pair* of keys:

* **Private key** (`id_ed25519`) stays on your computer. **Never share it, email it, or paste it anywhere.**
* **Public key** (`id_ed25519.pub`) gets uploaded to GitHub. It's safe to share.

The keys live in a hidden `.ssh` folder in your home directory:

| OS | Location |
|---|---|
| macOS | `/Users/<your-username>/.ssh/` (same as `~/.ssh/`) |
| Ubuntu (WSL) | `/home/<your-username>/.ssh/` (same as `~/.ssh/`) |

**WSL note:** keep your keys in the Linux home folder (`~/.ssh` inside Ubuntu), **not** in your Windows folder (`C:\Users\<you>\.ssh` or `/mnt/c/...`). Files on the Windows side can't be given the strict permissions SSH requires, and SSH will refuse to use them.

### 1. Check for an existing key

```bash
ls -al ~/.ssh
```

If you see `id_ed25519` and `id_ed25519.pub`, you already have a key; skip to step 3. If the folder doesn't exist or is empty, carry on.

### 2. Generate a new key

Same command on macOS and WSL. Use the email address from your GitHub account:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

* When asked where to save the file, press **Enter** to accept the default (`~/.ssh/id_ed25519`).
* When asked for a passphrase, enter one you'll remember. It protects your key if your computer is ever lost or stolen. (Nothing appears on screen as you type; that's normal.)

Make sure the permissions are locked down (`ssh-keygen` normally does this for you, but it doesn't hurt):

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

### 3. Tell SSH to use your key

Create (or edit) the file `~/.ssh/config` so SSH knows which key to use for GitHub.

**macOS**: this also stores your passphrase in the macOS Keychain so you only type it once:

```
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

Then add the key to the agent and Keychain:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

**Ubuntu (WSL)**:

```
Host github.com
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
```

Ubuntu doesn't have a Keychain, so you'll be asked for your passphrase the first time you use the key in each terminal session. To start the SSH agent automatically and avoid retyping it in every command, add this line to the end of your `~/.bashrc`, then open a new terminal:

```bash
eval "$(ssh-agent -s)" > /dev/null
```

Either OS, finish with:

```bash
chmod 600 ~/.ssh/config
```

### 4. Add your public key to GitHub

Copy the **public** key (note the `.pub`) to your clipboard:

* macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
* Ubuntu (WSL): `clip.exe < ~/.ssh/id_ed25519.pub`
  * (or run `cat ~/.ssh/id_ed25519.pub` and copy the single line it prints, starting with `ssh-ed25519`)

Then on GitHub:

1. Click your profile picture (top right) > **Settings** > **SSH and GPG keys** > **New SSH key**.
2. **Title**: something that identifies the computer, e.g. "MacBook Air" or "Windows laptop (WSL)".
3. **Key type**: Authentication Key.
4. **Key**: paste what you copied.
5. Click **Add SSH key**.

### 5. Test the connection

```bash
ssh -T git@github.com
```

The first time, you'll be asked whether you trust GitHub's host fingerprint. Type `yes`. You should see:

```
Hi <your-username>! You've successfully authenticated, but GitHub does not provide shell access.
```

That message means everything works. If you get `Permission denied (publickey)`, double-check that you uploaded the `.pub` file's contents and that `~/.ssh/config` points to the right key.

### 6. Clone the repository (or switch an existing clone to SSH)

If you haven't cloned the project yet:

```bash
cd ~/Projects
git clone git@github.com:mike-mke/district24-website.git
cd district24-website
```

If you already cloned it using the `https://` URL, switch it over to SSH:

```bash
cd ~/Projects/district24-website
git remote set-url origin git@github.com:mike-mke/district24-website.git
git remote -v   # both lines should now start with git@github.com:
```

## Create a branch and push to remote

We never commit directly to `main`. Instead, each change happens on its own **branch**, a separate line of work that doesn't affect anyone else until it's reviewed and merged. The general flow:

1. **Start from the latest `main`.** Switch to `main` and pull down any changes others have made, so your work starts from the current version of the site.
   ```bash
   git checkout main
   git pull
   ```
2. **Create a branch.** Give it a short name describing the change, e.g. `update-group-leads` or `fix-meeting-link`.
   ```bash
   git checkout -b update-group-leads
   ```
3. **Make your changes** in your IDE, then build and check the site locally (see [DEVELOPMENT.md](DEVELOPMENT.md)).
4. **Commit.** Stage the files you changed (`git add`) and save a snapshot with a short message explaining what you did (`git commit`). You can make as many commits on a branch as you like. `git status` shows what's changed at any point.
   ```bash
   git add .
   git commit -m "Updates group leads on the Tuesday Night page"
   ```
5. **Push your branch to GitHub.** The first push uses `-u` to link your local branch to one on GitHub; after that a plain `git push` is enough.
   ```bash
   git push -u origin update-group-leads
   ```

## Create a Pull Request

A **Pull Request** (PR) asks for your branch to be reviewed and merged into `main`. It's where others can see exactly what you changed, comment, and approve.

1. **Open the PR.** Go to the repository on GitHub. Right after you push, a yellow banner usually appears saying your branch had recent pushes, with a **Compare & pull request** button. (If it doesn't, go to the **Pull requests** tab > **New pull request** and choose your branch.) Make sure **base** is `main` and **compare** is your branch.
2. **Describe the change.** Give it a clear title and a short description of what you changed and why. A screenshot of the updated page is a big help for anything visual.
3. **Review.** Mike is automatically added as a reviewer. He may approve it, leave comments, or ask for changes. To make changes, just keep working on the same branch on your computer, then commit and push again. The PR updates automatically.
4. **Merge.** Once approved, the PR is merged into `main`, and GitHub offers to delete the branch on GitHub (go ahead).
5. **Clean up locally.** Switch back to `main`, pull the merged changes, and delete your old branch:
   ```bash
   git checkout main
   git pull
   git branch -d update-group-leads
   ```

You're ready for your next change. Start again at "Create a branch and push to remote."
