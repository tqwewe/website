## Conventional commits

`coco` allows you to easily create commits respecting the
[conventional commits specification](https://www.conventionalcommits.org/en/v1.0.0/). It comes with a set of predefined
arguments named after conventional commit types and
[Angular commit convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
: (`feat`, `fix`, `style`, `build`, `refactor`, `ci`, `test`, `perf`, `chore`, `revert`, `docs`).

As described in the specification conventional commits messages are structured as follows :

```conventional_commit
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

All `coco` commit type subcommands follow the same structure :

```sh
coco [OPTIONS] <type> <message> [scope]
```

Note that `coco` commit scope comes after the commit description.
This allows using positional arguments instead of typing a scope flag every time.

**Example :**

If you want to create the following commit : `feat: add awesome feature` :

```sh
# With coco
coco feat "add awesome feature"
# With git
git commit -m "add awesome feature"
```

## Helpful error messages

Using `coco` should prevent a wide range of error in your conventional commit message. But if you still made a mistake,
`coco` will display an error explaining what went wrong :

```bash
❯ coco feat "add ability to parse arrays" "sco(pe"
Error: A scope value cannot contains inner parenthesis

Caused by:
     --> 1:9
      |
    1 | feat(sco(pe): add ability to parse arrays
      |         ^---
      |
      = expected no_parenthesis
```

## Breaking changes

All `coco` arguments are positional except the optional `-B` flag used to create breaking changes commits :

```bash
coco fix -B "add fix a nasty bug" cli
```

This would create the following [breaking change](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with--to-draw-attention-to-breaking-change)
commit : `fix(cli)!: fix a nasty bug`.

`coco` use the `!` notation to denote breaking changes commit because it can be easily seen in your git log, however if
you manually create breaking changes commits with [the footer notation](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer)
cocogitto tools will still pick them.


## Commit Body and footers

If you need to create more complex commit messages with body and footers use the `--edit` flag.

**Example:** 

```bash
coco refactor -e -B "drop support for Node 6" runtime 
```

This would open the following commit message template in your `$EDITOR` of choice : 

```editor:line-numbers
# Enter the commit message for your changes.
# Lines starting with # will be ignored, and empty body/footer are allowed.
# Once you are done, save the changes and exit the editor.
# Remove all non-comment lines to abort.
#
# WARNING: This will be marked as a breaking change!
refactor(runtime): drop support for Node 6

# Message body


# Message footer
# For example, foo: bar
```

Upon save a commit will be created with the body and footer typed. 

::: tip
There are to kind of footer separators in conventional commits : `token: message` and `token #message`.

GitHub automatically link issues prefixed with a hash. 

**Example:** 
```
    feat(changelog): add full_hash changelog template

    Closes #127
```
:::


## Custom commit types

By default `coco` supports standard conventional commits type `feat`, `fix` plus the angular commit types: `build`, `ci`, 
`revert`, `docs`, `test`, `style`, `chore`, `perf`. If you want to use more types you can add them to a file named 
`cog.toml` in your repository root directory : 

```toml
[commit_types]
hotfix = { changelog_title = "Hotfixes" }
release = { changelog_title = "Releases" }
```

The above config would generate a `coco hotfix` and `coco release` subcommands following the same structure as the default ones. 


