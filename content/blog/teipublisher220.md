---
author: wolf
author_display: wolf
date: '2017-08-09T12:51:38.367000+02:00'
editor: markdown
is_index: false
tags:
- teipublisher
title: TEI Publisher v2.2.0
updated: '2017-08-09T13:35:47.771000+02:00'
wiki_id: teipublisher220
---

<div class="row">
<div class="col-md-3"><img src="mobile.png"/></div>
<div class="col-md-9">
We're pleased to announce that the eXist-based [TEI Publisher](http://teipublisher.com) has been released in version 2.2.0. Besides numerous fixes, the most notable change is an **improved responsive design**. Browsing and navigation should now work flawlessly on mobile devices. Other changes:

* Drop /works prefix from document paths to simplify URLs
* Renditions defined in tei header were no longer applied
* Fix image resolving for generated apps
* Allow documents to be deleted via UI
* Include direct link to uploaded document

## Important note

This version also requires an update to the library package `tei-publisher-lib`, which is not backwards compatible with older releases. If you generated an app, it may throw an error after the update.

To fix this, run `.../your-app/modules/lib/regenerate.xql` once from within the browser or eXide.

## Installation

TEI Publisher is available via eXist's package manager in the dashboard. It requires at least eXist 3.1.0.
</div>
</div>
