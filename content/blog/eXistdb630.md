---
author: aretter
author_display: Adam Retter
date: '2024-10-19T20:47:23.666000+02:00'
editor: markdown
is_index: false
tags:
- release
- article
title: eXist-db 5.5.2
updated: '2024-10-19T20:53:04.627000+02:00'
---

# eXist-db 5.5.2 Release Notes

Version 5.5.2 includes critical fixes for defects found in version 5.5.1. It is recommended that all users of eXist-db 5.x.x upgrade to version 5.5.2 or newer.


## Bug Fixes

* Ensure that XSLT stylesheets are only compiled once when used from an xsl-pi in the REST Server [#4709](https://github.com/eXist-db/exist/pull/4709)
* Ensure that EXPath packages installed in $EXIST_HOME/data/expathrepo are filesystem portable [#4914](https://github.com/eXist-db/exist/pull/4914)
* Correct function signatures that return empty sequences [#4982](https://github.com/eXist-db/exist/pull/4982)
* Fix a bug in Node Path equality [#5048](https://github.com/eXist-db/exist/pull/5048)
* Fix an issue where XQuery Trigger state may leak [#5482](https://github.com/eXist-db/exist/pull/5482)
* Fixes to fn:replace, fn:tokenize, and fn:analyze-string [#4866](https://github.com/eXist-db/exist/pull/4866)

Full Changelog: https://github.com/eXist-db/exist/compare/eXist-5.5.1...eXist-5.5.2
