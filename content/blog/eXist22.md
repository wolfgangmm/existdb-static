---
author: editor
author_display: editor
date: '2014-11-20T22:35:59.156000+01:00'
editor: markdown
is_index: false
tags:
- release
title: eXistdb 2.2 Released
updated: '2014-11-20T22:49:10.704000+01:00'
wiki_id: eXist22
---

<figure class="wysiwyg-float-right">
    <img class=" annotate" alt="eXide212.png" src="eXide212.png"/>
    <figcaption>
        <p>eXide 2.1.2</p>
    </figcaption>
</figure>
        
We've been busy since the summer to test and improve everything, so here it is: [eXistdb 2.2](http://sourceforge.net/projects/exist/files/Stable/2.2/) final is out! We think this is a major step forward in many areas. To just highlight a few:

* [New range index](http://exist-db.org/exist/apps/doc/newrangeindex.xml): the most important user-configurable index in eXist has been entirely rewritten for scalability and performance, now using Apache Lucene:
    * many times faster on large data sets
    * xpath expressions using multiple filters are optimized into a single index lookup
    * updates and queries scale very well with growing collection size
* App updates:
    * _eXide 2.1.2_ is more robust than ever and has many [new features](eXide209)
    * monex: a new app for monitoring and profiling eXist-db
* Extended the _security model_, now including setUid and setGid, to temporarily escalate permissions inside an application in a safe way
* Improved _crash recovery_ leading to a more robust recovery procedure and smaller transaction logs
* Enhancements to the query engine and optimizer leading to _improved overall performance_, in particular for queries using indexes

For those upgrading from 2.2-RC1 or 2.2-RC2, the main changes in 2.2 final are:

* improvements to backup/restore: sometimes a restore led to duplicate user accounts or invalid user IDs
* many improvements to the new range index based on user feedback (thanks!)
* map support in query engine aligned with XQuery 3.1 specification
* closed memory leaks

# LTS Edition

<div class="row">
    <div class="col-md-8">
        Along with the community release, the LTS edition has also been updated to 2.2. As with every major release, the LTS edition uses the same code base as the community edition, but all updates will be limited to carefully checked, production-ready, quality assured bug fixes and enhancements. With the LTS subscription, we make sure customers build their applications on a stable foundation and benefit from the latest improvements without the risk of using a development version.
    </div>
    <div class="col-md-4">
        <img class=" annotate" alt="lts.png" src="http://exist-db.org/exist/apps/homepage/resources/img/lts.png"/>
    </div>
</div>

To celebrate the 2.2 release, new customers get the LTS edition with a 50% discount during our autumn special. All money earned through the LTS subscription is directly funding eXistdb development. You thus benefit twice: by building your application on a quality assured version and contributing to the advancement of eXistdb.
