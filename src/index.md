---
home: true
heroImage: logo.png
tagline: The conventional commit toolbox 
actionText: Getting Started →
actionLink: /guide/
features:
- title: Verified commits️
  details: Create conventional compliant commits at ease.
- title: Automatic Version bump and changelog
  details: Automatically bump version and generate changelog with your own custom steps and workflows.
- title: Release profiles
  details: Your branching model requires different steps for releases, prerelease, hotfix ? We got you covered !
- title: Depends only on libgit2
  details: Cocogitto has two standalone binary, the only system dependency is libgit2.
- title: Conventional git log
  details: Search your commit history matching conventional commit items such as scope and commit type.
- title: Enforce conventional commits via github actions
  details: Check your commit compliance on every push to the remote and create release from your CI pipeline.
footer: MIT Licensed | Copyright © 2020 Paul Delafosse
---

## Installation

### Cargo

Cocogitto is available on [crates.io](https://crates.io/crates/cocogitto) :

```shell script
cargo install cocogitto
```

### Archlinux

```shell script
yay -S cocogitto-bin
```

## Shell completions

Before getting started you might want to install shell completions for `cog` and `coco` commands.
Supported shells are `bash`, `elvish`, `fish` and `zsh`.

Example installing completions:

```sh
# Bash
cog generate-completions bash > ~/.local/share/bash-completion/completions/cog
coco generate-completions bash > ~/.local/share/bash-completion/completions/coco

# Bash (macOS/Homebrew)
cog generate-completions bash > $(brew --prefix)/etc/bash_completion.d/cog.bash-completion
coco generate-completions bash > $(brew --prefix)/etc/bash_completion.d/coco.bash-completion

# Fish
mkdir -p ~/.config/fish/completions
cog generate-completions fish > ~/.config/fish/completions/cog.fish
coco generate-completions fish > ~/.config/fish/completions/coco.fish

# Zsh
cog generate-completions zsh > ~/.zfunc/_cog
coco generate-completions zsh > ~/.zfunc/_coco
```

## Introduction

Cocogitto comes with two standalone binaries : `coco` and `cog`.

Both of them and their subcommands have a `--help`  to display options and usage :

```shell
cog --help
cog changelog --help
# And so on...
```

Note that if you do not care about automatic release, changelog generation and just want
to create conventional commit message you can jump to the [conventional commits section](./coco_guide).

## Conventional commits  with `coco`

`coco` is primarily meant to be used as a replacement for the `git commit` command.
It will produce commits with messages respecting the conventional commits specification with
little effort.

**Example :**

```sh
# With git commit
git commit -m "feat: implement the parser specification"

# With coco
coco feat "implement the parser specification"
```

Using `coco` while working on a project using conventional commits is less verbose than good old git cli and prevent
typos and common mistake when writing conventional commit messages.

See [Coco guide](./coco_guide) for more information.


## Repository management with `cog`

While local commit are made with the `coco` binary, `cog` is meant to manage your repository both locally and in a
CI context. For an in depth guide on how to use it see [Cog guide](./cog_guide).



