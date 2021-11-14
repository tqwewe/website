# Configuration reference

The config reference list all value that can be set in the `cog.toml` file at the root of a repository. 

## General

### `tag_prefix` 
    
- Type: `String`
- Optional: `true`
- Description: set a tag prefix value for cocogitto. For instance if you have a `v` as a tag prefix, cocogitto will
    generate version starting with `v` and commands like `cog changelog` will pick only those versions. 
- Example: 
    ```toml
    tag_prefix = "v"
    ```
- Also see: 

    [Cog guide -> Tag prefix](../cog_guide/#tag-prefix)

### `commit_types`

- Type: `Hashmap<String, ChangelogTitle>`
- Optional: `true`
- Description: extend the allowed commit types, creating a new `coco` command and allowing to generate changelog entries for the
    given type. 
- Example: 
    ```toml
    [commit_types]
    hotfix = { changelog_title = "Hotfixes" }
    release = { changelog_title = "Releases" }
    ```
- Also see: 
    
    [Coco guide -> Custom commit types](../coco_guide/#custom-commit-types)

## Bump config

### `pre_bump_hooks`

- Type: `Array<String>`
- Optional: `true`
- Description: an array of command to execute before a version bump.
- Example:
    ```toml
    pre_bump_hooks = [
        "sh -c \"./ci/check_branch.sh\"",
        "cargo test -- --test-threads 1",
        "cargo clippy",
        "cargo build --release",
        "cargo fmt --all",
        "cargo bump {{version}}",
    ]
    ```
- Also see:

    * [Cog guide -> Automatic Versioning](../cog_guide/#auto-bump)
    * [Cog guide -> Pre-bump hooks](../cog_guide/#pre-bump-hooks)
    * [Cog guide -> Version DSL](../cog_guide/#version-dsl)

### `post_bump_hooks`

- Type: `Array<String>`
- Optional: `true`
- Description: an array of command to execute after a version bump.
- Example:
    ```toml
    post_bump_hooks = [
        "git push",
        "git push origin {{version}}",
        "cargo package",
        "cargo publish"
    ]
    ```
- Also see:

    * [Cog guide -> Automatic Versioning](../cog_guide/#auto-bump)
    * [Cog guide -> Post-bump hooks](../cog_guide/#post-bump-hooks)
    * [Cog guide -> Version DSL](../cog_guide/#version-dsl)

### `bump_profiles` 


- Type: `Hashmap<String, BumpProfile>`
- Optional: `true`
- Description: add additional [pre-bump](./#pre_bump_hooks) and [post-bump](./#post_bump_hooks) hooks profile.
  a profile can be used with the `cog bump --hook-profile <profile_name>` flag.
- Example:
    ```toml
    [bump_profoiles.hotfix]
    pre_bump_hooks = [
        "cargo build --release",
        "cargo fmt --all",
        "cargo bump {{version}}",
    ]
  
    post_bump_hooks = [
        "cargo package",
        "cargo publish"
    ]
    ```
- Also see:

    * [Cog guide -> Automatic Versioning](../cog_guide/#auto-bump)
    * [Cog guide -> Post-bump hooks](../cog_guide/#post-bump-hooks)
    * [Cog guide -> Pre-bump hooks](../cog_guide/#pre-bump-hooks)
    * [Cog guide -> Version DSL](../cog_guide/#version-dsl)
    * [Cog guide -> Bump profiles](../cog_guide/cog_guide/#bump-profiles)

## Changelog

### `path`

- Type: `String`
- Optional: `true`
- Default value: `"CHANGELOG.md"`
- Description: path the repository markdown changelog.
- Example:
    ```toml
    [changelog]
    path = "my_changelog.md"
    ```
- Also see:

    * [Cog guide -> Automatic Versioning](../cog_guide/#auto-bump)
    * [Cog guide -> Changelog](../cog_guide/#changelogs)

### `template`

- Type: `String`
- Optional: `true`
- Default value: `"default"`
- Description: name of the builtin template to use for changelog generation or path to a custom template.
  Note that `remote`, `repository` and `owner` are mandatory if the "remote" built-in template us used or if your
  custom template make use of those variables. 
- Built-in templates : `default`, `remote`, `full_hash`
- Example:
    ```toml
    [changelog]
    template = "full_hash"
    ```
- Also see:

    * [Cog guide -> Changelog](../cog_guide/#changelogs)
    * [Cog guide -> Built-in templates](../cog_guide/#buiLt-in-templates)
    * [Cog guide -> Custom templates](../cog_guide/#custom-templates)

### `remote`

- Type: `String`
- Optional: `true`
- Description: domain name of the git platform hosting the repository, used for Markdown link generation in changelogs.
  when provided `repository` and `owner` are also required. 
- Example:
    ```toml
    [changelog]
    template = "remote"
    remote = "github.com"
    repository = "cocogitto"
    owner = "cocogitto"
    ```
- Also see:

    * [Cog guide -> Changelog](../cog_guide/#changelogs)
    * [Cog guide -> Built-in templates](../cog_guide/#buiLt-in-templates)
    * [Cog guide -> Custom templates](../cog_guide/#custom-templates)

### `repository`

- Type: `String`
- Optional: `true`
- Description: name of the repository on the remote git platform.
- Example:
    ```toml
    [changelog]
    template = "remote"
    remote = "github.com"
    repository = "cocogitto"
    owner = "cocogitto"
    ```
- Also see:

    * [Cog guide -> Changelog](../cog_guide/#changelogs)
    * [Cog guide -> Built-in templates](../cog_guide/#buiLt-in-templates)
    * [Cog guide -> Custom templates](../cog_guide/#custom-templates)

### `owner`

- Type: `String`
- Optional: `true`
- Description: owner of the repository on the remote git platform.
- Example:
    ```toml
    [changelog]
    template = "remote"
    remote = "github.com"
    repository = "cocogitto"
    owner = "cocogitto"
    ```
- Also see:

    * [Cog guide -> Changelog](../cog_guide/#changelogs)
    * [Cog guide -> Built-in templates](../cog_guide/#buiLt-in-templates)
    * [Cog guide -> Custom templates](../cog_guide/#custom-templates)

### `authors`


- Type: `Array<Author>`
- Optional: `true`
- Description: A list of commit authors. Used to generate Markdown links in changelogs. Si
- Example:
    ```toml
      [changelog]
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
- Also see:

    * [Cog guide -> Changelog](../cog_guide/#changelogs)
    * [Cog guide -> Built-in templates](../cog_guide/#buiLt-in-templates)








