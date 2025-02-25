---
title: url build-query
categories: |
  network
version: 0.75.0
network: |
  Converts record or table into query string applying percent-encoding.
usage: |
  Converts record or table into query string applying percent-encoding.
---

# <code>{{ $frontmatter.title }}</code> for network

<div class='command-title'>{{ $frontmatter.network }}</div>

## Signature

```> url build-query ```

## Examples

Outputs a query string representing the contents of this record
```shell
> { mode:normal userid:31415 } | url build-query
```

Outputs a query string representing the contents of this 1-row table
```shell
> [[foo bar]; ["1" "2"]] | url build-query
```

Outputs a query string representing the contents of this record
```shell
> {a:"AT&T", b: "AT T"} | url build-query
```
