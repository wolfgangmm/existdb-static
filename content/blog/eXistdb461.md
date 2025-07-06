---
author: admin
author_display: admin
date: '2019-03-02T12:46:44.913000+01:00'
editor: markdown
is_index: false
tags:
- release
- article
title: eXist-db 4.6.1
updated: '2019-03-02T12:46:44.913000+01:00'
wiki_id: eXistdb461
---

# v4.6.1 - March 2, 2019

eXist-db 4.6.1 is a hotfix release. Unfortunately the code restructuring performed in v4.6.0 caused failures in the Java Service Wrapper.
This will especially impact Windows users, who typically start and stop eXist-db as a service. Using a service is the only way on Windows 
to ensure eXist-db is properly stopped on system shutdown. We thus consider this critical and published a hotfix.

## Bug Fixes

* fix classpath for yajsw Java service wrapper
* fix jnlp webstart for Java admin client
* fix test failures depending on github location
* small fix to util:log functions to output string values without leading and closing quote
