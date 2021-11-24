## Repository initialization

To get the most out of cocogitto you need to have a `cog.toml` config at the root of your repository.
You can create this file manually or generate the default one with `cog init`.

### Create a new repository

```bash
mkdir my_repo && cd my_repo
cog init
```

`cog init` works like `git init` except it create a template `cog.toml` config file,
and an initial commit with the following message : `chore: initial commit`.

You can specify the target path of the repository you want to create :

```bash
cog init my_repo
```

### Initialize an existing repo

Running `cog init` on an existing repository will just create a template configuration without creating any commit :

```bash
git init my_repo && cd my_repo
cog init
```

```bash
❯ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   cog.toml
```

## Check commit history

Running `cog check` will check your commit history against the conventional commit specification :

```bash
❯ cog check
No errored commits
```

Let us create an invalid commit :
```bash
git commit -m "Your Mother Was A Hamster, And Your Father Smelt Of Elderberries"
```

And check our commit history again :
```bash
❯ cog check
Error:
Found 1 non compliant commits in c7bee8..HEAD:

_________________________________________________________

Errored commit: 097a12f9c124b7015afa8c9b0e0be95ac6db89ad <Paul Delafosse>
	Commit message: 'Your Mother Was A Hamster, And Your Father Smelt Of Elderberries'
	Cause: Missing commit type separator `:`
```


::: tip
You can check your history, starting from the latest tag using `--from-latest-tag` or `-l` flag.  
This is useful when your git repo started to use conventional commits from a certain point in history and you
don't care about editing old commits.
:::

## Rewrite non-compliant commits

::: danger
Using `cog edit` will modify your commit history and change the commit SHA of edited commit
and their child.
:::

Once you have spotted invalid commits you can quickly fix your commit history by running `cog edit`.
This will perform an automatic rebase, cycling through each malformed commit, and letting you edit them with your `$EDITOR`
of choice.

**Example :**

```editor:line-numbers
# Editing commit c2bb56b93821ff34282f322be4d2231f53b9ada8
# Replace this message with a conventional commit compliant one
# Save and exit to edit the next errored commit
Your Mother Was A Hamster, And Your Father Smelt Of Elderberries
```

::: tip
You can use the `--from-latest-tag` or `-l` to edit only commits since the latest tag in your repository.
:::

## Conventional commit log

`cog log` is just like `git log` but it displays additional conventional commit information, such as commit scope,
commit type etc.


[![asciicast](https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe.svg)](https://asciinema.org/a/ssH4yRSlc28Rb9dHEDN7TowGe)


::: tip
You can filter the log content with the following flags :

- `-B` : display breaking changes only
- `-t` : filter on commit types
- `-a` : filter on commit authors
- `-s` : filter on commit scopes
- `-e` : ignore non compliant commits

Those flag can be combined to achieve complex search in your commit history :

```bash
cog log --author "Paul Delafosse" "Mike Lubinets" --type feat --scope cli --no-error
```
:::

## Changelogs 

`cog changelog` can generate changelog automatically. 

Let's assume the following history : 

```git
* e3ff26a - (HEAD -> master) feat!: implement parser specification <Paul Delafosse>
* 78dedea - feat: a commit <Paul Delafosse>
* c361eea - feat: say hello to the world <Paul Delafosse>
* 6d014b4 - chore: initial commit <Paul Delafosse>
```

Let us now get a changelog : 
```bash
cog changelog
```

```markdown
## 0.2.0 - 2021-11-10
#### Features
- **(hello)** say hello to the galaxy - (da4af95) - Paul Delafosse
#### Refactoring
- **(hello)** say hello to the martians - (22db158) - Paul Delafosse
- - -
## 0.1.0 - 2021-11-10
#### Features
- implement parser specification - (e3ff26a) - Paul Delafosse
- a commit - (78dedea) - Paul Delafosse
- say hello to the world - (c361eea) - Paul Delafosse
```

As you can see above a changelog is generated for each semver compliant tag.

::: tip
You can specify a custom changelog range or tag like so :
```bash
# Display the changelog between `^1` and `2.0.0`
cog changelog --at 2.0.0

# From `8806a5` to `1.0.0`
cog changelog 8806a5..1.0.0

# From `8806a5` to `HEAD`
cog changelog 8806a55..

# From first commit to `1.0.0`
cog changelog 8806a5..1.0.0
```
:::

### Built-in templates

A raw changelog is nice, but its even nicer to generate some links for repository hosted on git web platforms 
such as GitHub. To do this you can use the `--template` or `t` flag. Cocogitto comes with three pre built templates: 

#### `default`

The default template we saw in the previous section

#### `full_hash`

A changelog template tailored for GitHub releases
```bash
cog changelog --template hull_hash
```

```markdown
  #### Features
  - da4af95b223bb8942ffd289d1a62d930c80d7bbd - **(hello)** say hello to the galaxy - @oknozor
  #### Refactoring
  - 22db158f6c75aa5e9e7d4ed4a5b5af7b147453d7 - **(hello)** say hello to the martians - @oknozor
  - - -
  #### Features
  - e3ff26a8247b9690ce241e9843eea595bcac8d06 - implement parser specification - @oknozor
  - 78dedeaf5e7222cd338627f7ee982e271a3f9a4c - a commit - Paul Delafosse
  - c361eeae958a0a28041aecfed10091dc0e6768dd - say hello to the world - @oknozor
```
  
Below is the changelog as rendered by GitHub release, notice how the committer git signature as been replaced 
by their github username. To do that you need to tell cocogitto about your contributor's username in `cog.toml`:

```toml
  [changelog]
  authors = [
      { username = "oknozor", signature = "Paul Delafosse" }
  ]
  ```
<img :src="$withBase('github-release-changelog.png')" alt="Github release changelog screenshot">

#### `remote`

A template generating links for web platform hosted repository.
  
```bash
cog changelog --at 0.1.0 -t remote --remote github.com --owner oknozor --repository  cocogitto
```

As you can see below a changelog is generated with full links to issues, tags, diff and usernames according
to the provided remote, owner and repository flags. 

```markdown
## [0.1.0](https://github.com/oknozor/cocogitto/compare/6d014b40f552fc1ad08f574fe33355175b0783ff..0.1.0) - 2021-11-11
#### Features
- implement parser specification - ([e3ff26a](https://github.com/oknozor/cocogitto/commit/e3ff26a8247b9690ce241e9843eea595bcac8d06)) - [@oknozor](https://github.com/oknozor)
- a commit - ([78dedea](https://github.com/oknozor/cocogitto/commit/78dedeaf5e7222cd338627f7ee982e271a3f9a4c)) - [@oknozor](https://github.com/oknozor)
- say hello to the world - ([c361eea](https://github.com/oknozor/cocogitto/commit/c361eeae958a0a28041aecfed10091dc0e6768dd)) - [@oknozor](https://github.com/oknozor)
```
::: tip 
To avoid typing the remote information and changelog template everytime you can set  some default values in `cog.toml`.

Here is the config used by cocogitto itself. 

```toml
[changelog]
path = "CHANGELOG.md"
template = "remote"
remote = "github.com"
repository = "cocogitto"
owner = "cocogitto"
authors = [
  { signature = "Paul Delafosse", username = "oknozor" },
  { signature = "Jack Dorland", username = "jackdorland" },
  { signature = "Mike Lubinets", username = "mersinvald" },
  { signature = "Marcin Puc", username = "tranzystorek-io" },
  { signature = "Renault Fernandes", username = "renaultfernandes" },
  { signature = "Pieter Joost van de Sande", username = "pjvds" },
  { signature = "orhun", username = "orhun" },
  { signature = "Danny Tatom", username = "its-danny" },
]
```
:::

### Custom templates

If you are not happy with the default you can create your own changelog template. 
Internally cocogitto uses [tera](https://tera.netlify.app/) template engine to render changelogs. 

Also see [template reference](../template).

**Example:**

```tera
{% for type, typed_commits in commits | sort(attribute="type")| group_by(attribute="type")%}                            
#### {{ type | upper_first }}
                                                                                                                        
    {% for scope, scoped_commits in typed_commits | group_by(attribute="scope") %}                                      
        {% for commit in scoped_commits | sort(attribute="scope") %}                                                    
            {% if commit.author %}                                                                                      
                {% set author = "@" ~ commit.author %}                                                                  
            {% else %}                                                                                                  
                {% set author = commit.signature %}                                                                     
            {% endif %}                                                                                                 
            - {{ commit.id }} - **({{ scope }})** {{ commit.summary }} - {{ author }}
        {% endfor %}                                                                                                    
    {% endfor %}                                                                                                        
    {% for commit in typed_commits | unscoped %}                                                                        
        {% if commit.author %}                                                                                          
            {% set author = "@" ~ commit.author %}                                                                      
        {% else %}                                                                                                      
            {% set author = commit.signature %}                                                                         
        {% endif %}                                                                                                     
            - {{ commit.id }} - {{ commit.summary }} - {{ author }}
    {% endfor %}                                                                                                        
{% endfor %}                                                                                                            
```


## Automatic versioning

The purpose of conventional commits is to be able to bump your project version and changelog
automatically. Cocogitto allow you to do this with the `cog bump` command.

The `bump` subcommand will execute the following steps :

1. Calculate the next version based on the commit types since the latest tag.
2. Append the changes for this version to `CHANGELOG.md`.
3. Execute a set configuration defined pre-bump hooks.
4. Create a version commit containing changes made during the previous steps.
5. Create a git tag on the version commit.
6. Execute a set of configuration defined post-bump hook.

### Auto bump

`cog bump` will calculate the next version based on your commit history since the latest
semver tag. Once a tag number as been calculated it will create a tagged commit containing 
the changelog for this new tag. 

**Example:** 

Assuming we are working on the following git repository :
```git
* 8e08b78 - (HEAD -> master) feat: another cool feature <Paul Delafosse>
* 490b846 - docs: add some documentation <Paul Delafosse>
* 8bc0d28 - fix: fix a ugly bug <Paul Delafosse>
* a0c9050 - feat: add awesome feature <Paul Delafosse>
* 6d014b4 - chore: initial commit <Paul Delafosse>
```

Let us now create a version :
```bash
❯ cog bump --auto
Warning: using 'cog bump' with the default configuration.
You may want to create a 'cog.toml' file in your project root to configure bumps.

Failed to get current version, falling back to 0.0.0
Skipping irrelevant commits:
	- docs: 1

Found feature commit 8e08b7
Found bug fix commit 8bc0d2
Found feature commit a0c905
Bumped version: ... -> 0.1.0
```

If we look again at our git log :
```git
* 76c0ffd - (HEAD -> master, tag: 0.1.0) chore(version): 0.1.0 (2 minutes ago) <Paul Delafosse>
... 
```

Also, a `CHANGELOG.md` file have been created using the `default` template: 

```markdown
# Changelog
All notable changes to this project will be documented in this file. See [conventional commits](https://www.conventionalcommits.org/) for commit guidelines.
- - -

## 0.1.0 - 2021-11-11
#### Bug Fixes
- fix a ugly bug - (8bc0d28) - Paul Delafosse
#### Documentation
- add some documentation - (490b846) - Paul Delafosse
#### Features
- another cool feature - (8e08b78) - Paul Delafosse
- add awesome feature - (a0c9050) - Paul Delafosse

- - -
Changelog generated by [cocogitto](https://github.com/cocogitto/cocogitto).
```

Also see [template config](/config) if you need to change the default changelog template.

::: tip
Sometimes getting a version number automatically is not what you want.
Cocogitto let you specify the target version with the following flags : 
- `--auto` : choose the next version for you (based on feature commit, bug fixes commit and BREAKING_CHANGE commit).
- `--major` : increment the MAJOR version.
- `--minor` : increment the MINOR version.
- `--patch` : increment the PATCH version.
- `--version <version>` : set version manually ( ex : `cog bump --version 3.2.1`).
- `--pre <metadata>` : set the [pre-release metatada](https://semver.org/#spec-item-9).

**Example:**
```bash
cog bump --major --pre "beta.1"
# 1.2.3 -> 2.0.0-beta.1
```
:::

**Note:** `cog bump --auto` treats `0.y.z` versions specially,
i.e. it will never do an auto bump to the `1.0.0` version, even if there are breaking changes.
That way, you can keep adding features in the development stage and decide yourself, when your API is stable.

### Bump hooks

#### Pre bump hooks

Creating git tag automatically is great, but sometimes you need to edit some file with the new version number,
or perform some additional checks before doing so.

A typical example is editing your project manifest in your package manager configuration file.
You can run pre bump commands with the `latest` and `version` aliases to reference respectively
the latest known tag and the target version.

**Example:**

When adding the following hooks to `cog.toml`, the hook commands will be run before creating the version commit : 

```toml
# cog.toml
pre_bump_hooks = [
    "cargo build --release",
    "echo 'bumping from {{latest}} to {{version}}'",
    "cargo bump {{version}}",
]
```

And result in the following bump: 

```bash
❯ cog bump --auto
Skipping irrelevant commits:

Found feature commit 9055d9
   Compiling my_awesome_repo v0.1.0 (/home/okno/_Workshop/MyRepos/my_awesome_repo)
    Finished release [optimized] target(s) in 0.86s
bump from 0.1.0 to 0.2.0
Bumped version: 0.1.0 -> 0.2.0
```

::: tip 
If any of the pre-bump command fails cocogitto will abort the bump. 
Any changes made to the repository during the pre-bump phase will be stashed under `cog_bump_{{version}}`.

**Example:**

cog.toml :
```toml
pre_bump_hooks = [
  "cargo build --release",
  "echo 'bump from {{latest}} to {{version}}'",
  "exit 1" # Fail on purpose here
]
```

run :
```bash
❯ cog bump --auto
Skipping irrelevant commits:

Found bug fix commit a0de11
   Compiling my_awesome_repo v0.2.0 (/home/okno/_Workshop/MyRepos/my_awesome_repo)
    Finished release [optimized] target(s) in 0.22s
bump from 0.2.0 to 0.2.1
Error: prehook run `exit 1` failed
	All changes made during hook runs have been stashed on `cog_bump_0.2.1`
	you can run `git stash apply stash@0` to restore these changes.
```
:::


#### Post bump hooks

Post-bump hooks works exactly like pre-bum hooks. They are run after the version has been created 
and are typically used to push changes to the remote, publish packages and apply branching model strategies.

```toml
# cog.toml
post_bump_hooks = [
    "git push",
    "git push origin {{version}}",
    "cargo publish"
]
```  

::: danger
There is no rollback procedure for post-bump hook, on failure cog will abort and leave the repository
in an undefined state. 
We are working on allowing user to define there rollback procedures but it is not there yet. 
:::

#### Version DSL

It is common to bump your development branch version package manifest after creating a new release.
A typical example in the java world would be to bump your maven snapshot on your development branch after a release.

```toml
# cog.toml
post_bump_hooks = [
    "git push",
    "git push origin {{version}}",
    "git checkout develop",
    "git rebase master",
    "mvn versions:set -DnewVersion={{version+minor-SNAPSHOT}}",
    "coco chore \"bump snapshot to {{version+1minor-SNAPSHOT}}\"",
    "git push",
]
```

As you can see we are bumping the manifest using a small DSL. It as only a few keywords :
- start with the `version` or `latest` keyword.
- followed by the `+` operator.
- `major`, `minor` and `patch` to specify the kind of increment you want.
  Then an optional amount, default being one (`version+1minor` and `version+minor` being the same).
- followed by any number of `+{amount}{kind}` (exemple: `version+2major+1patch`)
- ended by any alphanumeric character (SemVer additional labels for pre-release and build metadata), here `-SNAPSHOT`.

#### Bump profiles

For some branching model or release cadence you might want to bump your versions with
different hooks. 

To do so you can define alternate profile hooks in `cog.toml` :

```toml
[bump_profiles.hotfix]
pre_bump_hooks = [
  # Ensure we are performing a bump from the latest release branch
  """
    [[ "$(git rev-parse --abbrev-ref HEAD)" == "release/{{latest}}" ]] && echo "On branch release/{{latest}}" || exit 1
    """,
]

post_bump_hooks = []
```

Once your custom hook profile is set you can call it with the `--hook-profile` flag :

```bash 
❯ cog bump -h hotfix --auto
Skipping irrelevant commits:

Found feature commit 5b21b3
Found bug fix commit a0de11
[[ $(git rev-parse --abbrev-ref HEAD) == release/0.2.0 ]] && echo On branch release/0.2.0 || exit 1
On branch release/0.2.0
Bumped version: 0.2.0 -> 0.3.0
```

Note that for the sake of readability in this documentation, the above example use a oneliner 
to check the current branch but you would probably want to can a shell script instead :  

```toml
pre_bump_hooks = [
  """
    sh -c "./check_branch.sh"
    """,
]
```

::: warning
Hooks are run in isolation therefore, **you need to spawn a sub-shell to be able to 
access your shell environment** :

```toml
pre_bump_hooks = [ "echo $HOME" ] # This will print "$HOME"
```

```toml
pre_bump_hooks = [ "sh -c \"echo $HOME\"" ] # This works
```
You can use the ```"""``` syntax to automatically escape quotes: 

```toml
pre_bump_hooks = [
  """
    sh -c "echo $HOME"
    """,
]
```
:::

## Tag prefix

It is common to use a tag prefix when creating version in your repository. This is described in the [SemVer specification
FAQ](https://semver.org/#is-v123-a-semantic-version). This convention provide a handy way to distinguish between release 
versions and tags that does not represent releases. 

To tell `cog` to pick only version starting with a prefix set this in your `cog.toml` file : 

```toml
tag_prefix = "v"
```
