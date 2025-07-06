---
author: adam
author_display: adam
date: '2021-12-16T16:26:06.009000+02:00'
editor: markdown
is_index: false
tags:
- release
- article
title: eXist-db 4.8.0
updated: '2021-12-16T16:26:59.872000+02:00'
wiki_id: eXistdb480
---

# eXist-db 4.8.0 Release Notes

This is mainly a security hot-fix for eXist-db 4.7.1 and addresses and closes CVE-2021-44228 by updating log4j to version 2.15.0. Other small enhancements and bug fixes include:

## Enhancements

* Include stack detail in XPathExceptions from fn:doc and fn:collection

## Bug Fixes

* Improve security when opening a Collection by checking that the calling user has Permission.EXECUTE all the way from the root of the Collection hierarchy
* Fix a memory-leak that can occir during shutdown
* Fix a concurrent modification issue during shutdown
* Made JMX Agent Factory Thread Safe
* Small fixes to YAJSW service scripts
* Avoid a NPE when reporting an error
* Fix build scripts for DMG to work on latest macOS
* Fix dist-war build to use HTTPS instead of HTTP for downloads
