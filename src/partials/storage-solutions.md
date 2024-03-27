{% section %}
# Multiple storage solutions

## Access your content in any form

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

{% tabs %}

{% tab title=$arrayInFile.title icon=$arrayInFile.icon %}
{% showcase title=$arrayInFile.title  description=$arrayInFile.description mirror=true %}
  {% editor %}
  {% file title="db.yaml" %}
  ```yaml
  collections:
    myCollection:
      storageEngine:
        arrayInFile:
          path: content/myCollection.yaml
          format: yaml
          field: documents
  ```
  {% /file %}
  {% file title="content/myCollection.yaml" %}
  ```yaml
  documents:
    - _id: foo
      title: Foo
    - _id: bar
      title: Bar
  ```
  {% /file %}
  {% /editor %}
{% /showcase %}
{% /tab %}

{% tab title=$objectInFile.title icon=$objectInFile.icon %}
{% showcase title=$objectInFile.title  description=$objectInFile.description mirror=true %}
  {% editor %}
  {% file title="db.yaml" %}
  ```yaml
  collections:
    myCollection:
      storageEngine:
        objectInFile:
          path: content/myCollection.yaml
          format: yaml
          field: documents
  ```
  {% /file %}
  {% file title="content/myCollection.yaml" %}
  ```yaml
  documents:
    foo:
      title: Foo
    bar:
      title: Bar
  ```
  {% /file %}
  {% /editor %}
{% /showcase %}
{% /tab %}

{% tab title=$directory.title icon=$directory.icon %}
{% showcase title=$directory.title  description=$directory.description mirror=true %}
  {% editor %}
  {% file title="db.yaml" %}
  ```yaml
  collections:
    posts:
      storageEngine:
        directory:
          path: ./content/myCollection
          extension: .yaml
          format: yaml
  ```
  {% /file %}
  {% file title="content/myCollection/foo.yaml" %}
  ```yaml
  title: Foo
  ```
  {% /file %}
  {% file title="content/myCollection/bar.yaml" %}
  ```yaml
  title: Bar
  ```
  {% /file %}
  {% /editor %}
{% /showcase %}
{% /tab %}

{% tab title=$glob.title icon=$glob.icon %}
{% showcase title=$glob.title  description=$glob.description mirror=true %}
  {% editor %}
  ```yaml
  collections:
    myCollection:
      storageEngine:
        directory:
          path: ./content/myCollection
          extension: .yaml
          format: yaml
  ```
  {% /editor %}
{% /showcase %}
{% /tab %}

{% /tabs %}

{% /section %}
