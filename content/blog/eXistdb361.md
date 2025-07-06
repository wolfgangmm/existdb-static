---
author: admin
author_display: admin
date: '2018-01-03T22:12:44.866000+01:00'
editor: markdown
is_index: false
tags:
- release
title: eXist-db v3.6.1
updated: '2018-01-04T15:25:05.486000+01:00'
wiki_id: eXistdb361
---

## v3.6.1 - January 03, 2018

eXist-db v3.6.1 has just been released. This is a hotfix release, which contains bug fixes for several important issues discovered since eXist-db v3.6.0.

We recommend that all users of eXist 3.6.0 should upgrade to eXist 3.6.1.

### Bug fixes
* Fixed issue where the package manager wrote non-well-formed XML that caused problems during backup/restore. [#1620](https://github.com/eXist-db/exist/issues/1620) 
* Fixed namespace prefix for attributes and namespace nodes.
* Made sure the localName of a in memory element is correctly obtained under various namespace declaration conditions
* Fix for NPE in org.exist.xquery.functions.fn.FunId [#1642](https://github.com/eXist-db/exist/issues/1642)
* Several atomic comparisons raise wrong error code [#1638](https://github.com/eXist-db/exist/issues/1638)
* General comparison to empty sequence sometimes raises an error [#1639](https://github.com/eXist-db/exist/issues/1639)
* Warn if no <target> is found in an EXPath packages's repo.xml

### Backwards Compatibility

- eXist-db v3.6.1 is backwards binary-compatible as far as v3.0, but not with earlier versions. Users upgrading from previous versions should perform a full backup and restore to migrate their data.


### Downloading This Version

eXist-db v3.6.1 is available for download from [GitHub](https://github.com/eXist-db/exist/releases/tag/eXist-3.6.1). Maven artifacts for eXist-db v3.6.1 are available from our [mvn-repo](https://github.com/eXist-db/mvn-repo). Mac users of the [Homebrew](http://brew.sh) package repository may acquire eXist 3.6.1 directly from there.
