---
author: adam
author_display: adam
date: '2023-01-15T15:35:00.202000+01:00'
editor: markdown
is_index: false
tags:
- release
- article
title: eXist-db 6.1.0
updated: '2023-01-15T15:35:00.202000+01:00'
wiki_id: eXistdb610
lead: Supports all XQuery 3.1 functions. Includes numerous new features and critical fixes for defects found in version 6.0.1.
---

# eXist-db 6.1.0 Release Notes

Version 6.1.0 now supports all XQuery 3.1 functions. It also includes numerous new features and critical fixes for defects found in version 6.0.1. It is recommended that all users of eXist-db 6.x.x upgrade to version 6.1.0 or newer.

## Features and Improvements

* Implement fn:transform by @alanpaxton and @adamretter in [#4386](https://github.com/eXist-db/exist/pull/4386)
* Implement fn:default-language#0 by @alanpaxton in [#4360](https://github.com/eXist-db/exist/pull/4360)
* Implement fn:format-integer#2,#3 by @alanpaxton in [#4366](https://github.com/eXist-db/exist/pull/4366)
* Implement map:find#2 by @alanpaxton in [#4401](https://github.com/eXist-db/exist/pull/4401)
* Implement fn:round#2 by @alanpaxton in [#4400](https://github.com/eXist-db/exist/pull/4400)
* Implement fn:path#0 and fn:path#1 by @chris-evolvedbinary in [#4402](https://github.com/eXist-db/exist/pull/4402)
* Implement fn:collation-key by @chris-evolvedbinary in [#4435](https://github.com/eXist-db/exist/pull/4435)
* Implement minus unary operator for xs:dateTimeStamp by @adamretter in [#4477](https://github.com/eXist-db/exist/pull/4477)
* Implement fn:element-with-id by @chris-evolvedbinary in [#4485](https://github.com/eXist-db/exist/pull/4485)
* Implement fn:nillled  by @alanpaxton in [#4405](https://github.com/eXist-db/exist/pull/4405)
* Implement fn:uri-collection by @chris-evolvedbinary in [#4483](https://github.com/eXist-db/exist/pull/4483)
* Implement fn:serialize, use character maps by @alanpaxton in [#4527](https://github.com/eXist-db/exist/pull/4527)
* Implement serialization item separator by @chris-evolvedbinary in [#4456](https://github.com/eXist-db/exist/pull/4456)
* Add serialization option that inserts final newline by @line-o in [#4264](https://github.com/eXist-db/exist/pull/4264)
* Add xs:dateTimeStamp datatype by @rhubner in [#4393](https://github.com/eXist-db/exist/pull/4393)
* Use Saxon for fn:matches regular expression handling. by @rhubner in [#4407](https://github.com/eXist-db/exist/pull/4407)
* Allow all options in map:merge#2 by @line-o in [#4621](https://github.com/eXist-db/exist/pull/4621)
* New implementation of the XmlDiffModule by @adamretter in [#4554](https://github.com/eXist-db/exist/pull/4554)
* Enable Document Type Declaration Serialization by @adamretter in [#4547](https://github.com/eXist-db/exist/pull/4547)
* Improve out-of-scope detection for binary variables by @adamretter in [#4409](https://github.com/eXist-db/exist/pull/4409)
* Fix the Node Test for document-node(element(name)) by @adamretter in [#4395](https://github.com/eXist-db/exist/pull/4395)
* Allow BigDecimal and BigInteger values to be declared via XML:DB API by @adamretter in [#4418](https://github.com/eXist-db/exist/pull/4418)
* Fix XQuery Trigger chaining by @adamretter in [#4280](https://github.com/eXist-db/exist/pull/4280)
* Fix XML Catalogue Resolution by @adamretter in [#4328](https://github.com/eXist-db/exist/pull/4328)
* request:get-data#0 should support Chunked Transfer Encoding by @adamretter in [#4337](https://github.com/eXist-db/exist/pull/4337)
* Allow to set serialization options in file:sync#3 by @line-o in [#4254](https://github.com/eXist-db/exist/pull/4254)
* Optimise URI Encoding of Path Components by @adamretter in [#4294](https://github.com/eXist-db/exist/pull/4294)
* Log xsl:fo render errors to exist.log by @adamretter in [#4335](https://github.com/eXist-db/exist/pull/4335)
* Use newer Java 8 JVM memory options for better Docker compatibility by @adamretter in [#4281](https://github.com/eXist-db/exist/pull/4281)
* Docker enhancements for tools and debugging by @adamretter in [#4398](https://github.com/eXist-db/exist/pull/4398)
* Fix catalog uris when using Windows Paths by @adamretter in [#4338](https://github.com/eXist-db/exist/pull/4338)
* Run XQTS against eXist-db in CI by @adamretter in [#4333](https://github.com/eXist-db/exist/pull/4333)
* Improve performance of JAC Query Dialog by @adamretter in [#4356](https://github.com/eXist-db/exist/pull/4356)
* Capture xs:anyURI error details in XMLDB Module by @adamretter in [#4352](https://github.com/eXist-db/exist/pull/4352)
* Improvements to system:as-user by @adamretter in [#4349](https://github.com/eXist-db/exist/pull/4349)
* Improve XSLT errors by @adamretter in [#4372](https://github.com/eXist-db/exist/pull/4372)
* Fix issues with range, precision, and exponent with fn:xml-to-json by @adamretter in [#4387](https://github.com/eXist-db/exist/pull/4387)
* Share common code between RestoreHandler and SystemImportHandler by @adamretter in [#4392](https://github.com/eXist-db/exist/pull/4392)
* Report null results instead of throwing NPE by @adamretter in [#4488](https://github.com/eXist-db/exist/pull/4488)
* Tests to show that Path expression with nested positional predicate succeeds on database node by @adamretter in [#4472](https://github.com/eXist-db/exist/pull/4472)
* Add location information when throwing XPathException by @chris-evolvedbinary in [#4457](https://github.com/eXist-db/exist/pull/4457)
* Corrects issues with fn:local-name and unnecessary evaluation of path steps on empty sequences by @adamretter in [#4473](https://github.com/eXist-db/exist/pull/4473)
* Add missing location information in errors for functions inside element constructors (err:XQTY0105) by @chris-evolvedbinary in [#4444](https://github.com/eXist-db/exist/pull/4444)
* Add lowercase-expended-terms option documentation  by @marmoure in [#4583](https://github.com/eXist-db/exist/pull/4583)
* Field perf revised by @line-o in [#4541](https://github.com/eXist-db/exist/pull/4541)
* Use final log4j-slf4j2-impl bridge by @reinhapa in [#4563](https://github.com/eXist-db/exist/pull/4563)
* HTML5 serializer should escape contents of title and textarea elements by @joewiz in [#4668](https://github.com/eXist-db/exist/pull/4668)
* Refactor Sequence.of by @line-o in [#4627](https://github.com/eXist-db/exist/pull/4627)
* Analyzer conf doesn’t accept primitives by @marmoure in [#4635](https://github.com/eXist-db/exist/pull/4635)
* Fix function description of util:declared-variables by @joewiz in [#4654](https://github.com/eXist-db/exist/pull/4654)
* Also build the IzPack installer by @adamretter in [#4684](https://github.com/eXist-db/exist/pull/4684)

## Bug Fixes

* XML documents were stored incorrectly by WebDAV by @adamretter in [#4230](https://github.com/eXist-db/exist/pull/4230)
* Fix regression in util:document-id by @adamretter in [#4270](https://github.com/eXist-db/exist/pull/4270)
* Fix a security privilege escalation issue with XQueryTrigger by @adamretter in [#4274](https://github.com/eXist-db/exist/pull/4274)
* Fix Memory leaks caused by XQuery context and update listener leaks by @adamretter in [#4636](https://github.com/eXist-db/exist/pull/4636)
* file:sync#3 updates only changed files by @line-o in [#4322](https://github.com/eXist-db/exist/pull/4322)
* Do not override Bearer Authentication with Basic Authentication by @adamretter in [#4375](https://github.com/eXist-db/exist/pull/4375)
* Fix a bug in XSuite reporting too many failures by @adamretter in [#4648](https://github.com/eXist-db/exist/pull/4648)
* Override resource type from backup metadata by @reinhapa in [#4379](https://github.com/eXist-db/exist/pull/4379)
* Fix additional issues with ResourceType and MediaType during Restore by @adamretter in [#4390](https://github.com/eXist-db/exist/pull/4390)
* Fix div operator error when arg is a variable. by @rhubner in [#4432](https://github.com/eXist-db/exist/pull/4432)
* Fix numerous bugs in numeric operations by @adamretter in [#4433](https://github.com/eXist-db/exist/pull/4433)
* Don't allow xs:string to be cast as xs:QName by @rhubner in [#4439](https://github.com/eXist-db/exist/pull/4439)
* Fix the use of Function Reference from with a Predicate by @adamretter in [#4414](https://github.com/eXist-db/exist/pull/4414)
* Avoid an NPE when disposing Binary Values by @adamretter in [#4462](https://github.com/eXist-db/exist/pull/4462)
* Continue evaluation on preceding empty sequences for EnclosedExpr by @adamretter in [#4497](https://github.com/eXist-db/exist/pull/4497)
* Add missing XQuery Reserved Names by @adamretter in [#4498](https://github.com/eXist-db/exist/pull/4498)
* Fix xmldb:store for xs:anyURI by @rhubner in [#4454](https://github.com/eXist-db/exist/pull/4454)
* Fix Rest client file encoding  by @marmoure in [#4474](https://github.com/eXist-db/exist/pull/4474)
* Fix resource leak (and file lock) by @nverwer in [#4521](https://github.com/eXist-db/exist/pull/4521)
* fn:transform stylesheet document crash by @alanpaxton in [#4570](https://github.com/eXist-db/exist/pull/4570)
* Fix issues with document-node lookups on various axis by @adamretter in [#4548](https://github.com/eXist-db/exist/pull/4548)
* Fix empty array constructor by @marmoure in [#4587](https://github.com/eXist-db/exist/pull/4587)
* Fix issues with SMTP dialogue in the Mail Module when sending emails. by @adamretter in [#4597](https://github.com/eXist-db/exist/pull/4597)
* Fix mail:send-email via Java API in Docker by @adamretter in [#4601](https://github.com/eXist-db/exist/pull/4601)
* Fix issues with binary files being closed whilst they are still needed by @adamretter in [#4662](https://github.com/eXist-db/exist/pull/4662)
* Windows Service installer - prunsrv.exe expects memory to be supplied as an integer by @adamretter in [#4685](https://github.com/eXist-db/exist/pull/4685)
* Send a valid HTTP Accept Header by @adamretter in [#4291](https://github.com/eXist-db/exist/pull/4291)
* Restore libraries required for Monex's Remote Console pane by @joewiz in [#4215](https://github.com/eXist-db/exist/pull/4215)
* Generate required jacoco xml report files by @reinhapa in [#4226](https://github.com/eXist-db/exist/pull/4226)
* Removes non used junit-vintage-engine by @reinhapa in [#4235](https://github.com/eXist-db/exist/pull/4235)
* Import jetty Properties from SystemProperties by @agh2342 in [#4196](https://github.com/eXist-db/exist/pull/4196)
* Fix IDEA runconfiguration by @line-o in [#4259](https://github.com/eXist-db/exist/pull/4259)
* Add run configuration for local jetty server by @line-o in [#4263](https://github.com/eXist-db/exist/pull/4263)
* Fix license header (previously eXist 4.x.x syntax) by @adamretter in [#4302](https://github.com/eXist-db/exist/pull/4302)
* Increase timeout for slower CI VMs to 60s by @reinhapa in [#4269](https://github.com/eXist-db/exist/pull/4269)
* Replace utf8 literals by @line-o in [#4311](https://github.com/eXist-db/exist/pull/4311)
* Fix default encoding and file module tests on Windows by @line-o in [#4290](https://github.com/eXist-db/exist/pull/4290)
* Reinstate all XQuery 3 tests by @adamretter in [#4309](https://github.com/eXist-db/exist/pull/4309)
* Drop build workflow by @line-o in [#4315](https://github.com/eXist-db/exist/pull/4315)
* Use builtin maven-cache of setup-java action by @line-o in [#4316](https://github.com/eXist-db/exist/pull/4316)
* License file for exist-xqts distro needs to be excluded from license checks by @adamretter in [#4346](https://github.com/eXist-db/exist/pull/4346)
* Add missing entity-resolver elements to the Schema for collection.xconf by @adamretter in [#4362](https://github.com/eXist-db/exist/pull/4362)
* Limit the number of hardware threads to a max of 16 in some tests by @adamretter in [#4369](https://github.com/eXist-db/exist/pull/4369)
* Set permissions for GitHub actions by @naveensrinivasan in [#4381](https://github.com/eXist-db/exist/pull/4381)
* Use correct implementation for slf4j 2.0.0 by @reinhapa in [#4526](https://github.com/eXist-db/exist/pull/4526)
* Change URL for two unparsed-text tests by @line-o in [#4543](https://github.com/eXist-db/exist/pull/4543)
* Should never synchronize on a Boolean by @adamretter in [#4573](https://github.com/eXist-db/exist/pull/4573)
* Remove exist-serialize option by @marmoure in [#4582](https://github.com/eXist-db/exist/pull/4582)
* Fix namespace binding conflict errors with XQuery Update by @alanpaxton in [#4545](https://github.com/eXist-db/exist/pull/4545)
* Fixes an issue with XSuite not being able to run some formulations of XQsuite by @adamretter in [#4589](https://github.com/eXist-db/exist/pull/4589)
* Build timestamp should be the timestamp of the build and not the last git commit by @adamretter in [#4608](https://github.com/eXist-db/exist/pull/4608)
* Jetty dtd references must now use https instead of http by @StephanMa in [#4618](https://github.com/eXist-db/exist/pull/4618)
* Add delay so timing of collections are subtle different by @dizzzz in [#4623](https://github.com/eXist-db/exist/pull/4623), and [#4626](https://github.com/eXist-db/exist/pull/4626)
* Fix CI use of Coveralls Code Coverage by @adamretter in [#4647](https://github.com/eXist-db/exist/pull/4647)
* Fix http redirect schema test by @adamretter in [#4680](https://github.com/eXist-db/exist/pull/4680)

## Updated Application Dependencies

* Bump apache.httpcomponents.version from 4.5.13 to 4.5.14 by @dependabot in [#4638](https://github.com/eXist-db/exist/pull/4638)
* Bump assertj-core from 3.22.0 to 3.23.1 by @dependabot in [#4424](https://github.com/eXist-db/exist/pull/4424), and [#4426](https://github.com/eXist-db/exist/pull/4426)
* Bump commons-compress from 1.21 to 1.22 by @dependabot in [#4605](https://github.com/eXist-db/exist/pull/4605)
* Bump commons-daemon from 1.2.4 to 1.3.3 by @dependabot in [#4384](https://github.com/eXist-db/exist/pull/4384), and [#4630](https://github.com/eXist-db/exist/pull/4630)
* Bump easymock from 4.3 to 5.0.1 by @dependabot in [#4603](https://github.com/eXist-db/exist/pull/4603)
* Bump exist-xqts-runner_2.13 from 1.0.1 to 1.1.0 by @dependabot in [#4501](https://github.com/eXist-db/exist/pull/4501)
* Bump exquery.distribution.version from 0.2.0 to 0.2.1 by @dependabot in [#4298](https://github.com/eXist-db/exist/pull/4298)
* Bump fastutil from 8.5.6 to 8.5.11 by @dependabot in [#4237](https://github.com/eXist-db/exist/pull/4237), [#4577](https://github.com/eXist-db/exist/pull/4577), and [#4650](https://github.com/eXist-db/exist/pull/4650)
* Bump fop from 2.6 to 2.8 by @dependabot in [#4198](https://github.com/eXist-db/exist/pull/4198), and [#4629](https://github.com/eXist-db/exist/pull/4629)
* Bump greenmail.version from 2.0.0-alpha-2 to 2.0.0-alpha-3 by @dependabot in [#4666](https://github.com/eXist-db/exist/pull/4666)
* Bump H2 from 1.4.200 to 2.1.214 by @reinhapa and @dependabot in [#4411](https://github.com/eXist-db/exist/pull/4411), and [#4445](https://github.com/eXist-db/exist/pull/4445)
* Bump httpcore from 4.4.15 to 4.4.16 by @dependabot in [#4645](https://github.com/eXist-db/exist/pull/4645)
* Bump jackson-core from 2.13.1 to 2.13.4 by @dependabot in [#4265](https://github.com/eXist-db/exist/pull/4265), [#4391](https://github.com/eXist-db/exist/pull/4391), and [#4540](https://github.com/eXist-db/exist/pull/4540)
* Bump jctools-core from 3.3.0 to 4.0.1 by @dependabot in [#4427](https://github.com/eXist-db/exist/pull/4427), and [#4555](https://github.com/eXist-db/exist/pull/4555)
* Bump jetty.version from 9.4.44.v20210927 to 9.4.50.v20221201 by @dependabot in [#4227](https://github.com/eXist-db/exist/pull/4227), [#4450](https://github.com/eXist-db/exist/pull/4450), [#4453](https://github.com/eXist-db/exist/pull/4453), [#4559](https://github.com/eXist-db/exist/pull/4559), and [#4644](https://github.com/eXist-db/exist/pull/4644)
* Bump jing from 20181222 to 20220510 by @dependabot in [#4385](https://github.com/eXist-db/exist/pull/4385)
* Bump jmh.version from 1.35 to 1.36 by @dependabot in [#4634](https://github.com/eXist-db/exist/pull/4634)
* Bump junit.jupiter.version from 5.8.2 to 5.9.1 by @dependabot in [#4505](https://github.com/eXist-db/exist/pull/4505), and [#4566](https://github.com/eXist-db/exist/pull/4566)
* Bump junit-vintage-engine from 5.8.2 to 5.9.2 by @dependabot in [#4506](https://github.com/eXist-db/exist/pull/4506), [#4567](https://github.com/eXist-db/exist/pull/4567), and [#4674](https://github.com/eXist-db/exist/pull/4674)
* Bump log4j.version from 2.17.1 to 2.19.0 by @dependabot in [#4257](https://github.com/eXist-db/exist/pull/4257), [#4467](https://github.com/eXist-db/exist/pull/4467), and [#4561](https://github.com/eXist-db/exist/pull/4561)
* Bump objenesis from 3.2 to 3.3 by @dependabot in [#4510](https://github.com/eXist-db/exist/pull/4510)
* Bump rsyntaxtextarea from 3.1.6 to 3.2.0 by @dependabot in [#4273](https://github.com/eXist-db/exist/pull/4273), [#4571](https://github.com/eXist-db/exist/pull/4571), and [#4658](https://github.com/eXist-db/exist/pull/4658)
* Bump slf4j-api from 1.7.33 to 2.0.6 by @dependabot in [#4211](https://github.com/eXist-db/exist/pull/4211), [#4232](https://github.com/eXist-db/exist/pull/4232), [#4523](https://github.com/eXist-db/exist/pull/4523), [#4558](https://github.com/eXist-db/exist/pull/4558), [#4569](https://github.com/eXist-db/exist/pull/4569), [#4579](https://github.com/eXist-db/exist/pull/4579), [#4628](https://github.com/eXist-db/exist/pull/4628), and [#4653](https://github.com/eXist-db/exist/pull/4653)
* Bump tika.version from 2.2.1 to 2.6.0 by @dependabot in [#4228](https://github.com/eXist-db/exist/pull/4228), [#4378](https://github.com/eXist-db/exist/pull/4378), [#4448](https://github.com/eXist-db/exist/pull/4448), [#4581](https://github.com/eXist-db/exist/pull/4581), and [#4611](https://github.com/eXist-db/exist/pull/4611)
* Bump Xerces from 2.12.1 to 2.12.2 by @adamretter in [#4306](https://github.com/eXist-db/exist/pull/4306)
* Bump xmlgraphics-commons from 2.7 to 2.8 by @dependabot in [#4637](https://github.com/eXist-db/exist/pull/4637)
* Bump xmlresolver.version from 4.2.0 to 4.6.0 by @dependabot in [#4459](https://github.com/eXist-db/exist/pull/4459), [#4480](https://github.com/eXist-db/exist/pull/4480), [#4496](https://github.com/eXist-db/exist/pull/4496), [#4341](https://github.com/eXist-db/exist/pull/4341), [#4514](https://github.com/eXist-db/exist/pull/4514), [#4520](https://github.com/eXist-db/exist/pull/4520), [#4565](https://github.com/eXist-db/exist/pull/4565), and [#4624](https://github.com/eXist-db/exist/pull/4624)
* Bump xmlunit.version from 2.8.4 to 2.9.1 by @dependabot in [#4212](https://github.com/eXist-db/exist/pull/4212), and [#4682](https://github.com/eXist-db/exist/pull/4682)

## Updated Build System Dependencies

* Bump appbundler-maven-plugin from 1.0.7 to 2.0.0 by @dependabot in [#4613](https://github.com/eXist-db/exist/pull/4613)
* Bump dependency-check-maven from 6.5.3 to 7.4.4 by @dependabot in [#4260](https://github.com/eXist-db/exist/pull/4260), [#4296](https://github.com/eXist-db/exist/pull/4296), [#4359](https://github.com/eXist-db/exist/pull/4359), [#4440](https://github.com/eXist-db/exist/pull/4440), [#4522](https://github.com/eXist-db/exist/pull/4522), [#4557](https://github.com/eXist-db/exist/pull/4557), [#4568](https://github.com/eXist-db/exist/pull/4568), [#4592](https://github.com/eXist-db/exist/pull/4592), [#4633](https://github.com/eXist-db/exist/pull/4633), [#4646](https://github.com/eXist-db/exist/pull/4646), [#4651](https://github.com/eXist-db/exist/pull/4651), [#4664](https://github.com/eXist-db/exist/pull/4664), [#4669](https://github.com/eXist-db/exist/pull/4669)
* Bump docker-maven-plugin from 0.381.0 to 0.40.3 by @dependabot in [#4223](https://github.com/eXist-db/exist/pull/4223), [#4258](https://github.com/eXist-db/exist/pull/4258), [#4421](https://github.com/eXist-db/exist/pull/4421), [#4441](https://github.com/eXist-db/exist/pull/4441), [#4509](https://github.com/eXist-db/exist/pull/4509), and [#4659](https://github.com/eXist-db/exist/pull/4659)
* Bump exec-maven-plugin from 3.0.0 to 3.1.0 by @dependabot in [#4484](https://github.com/eXist-db/exist/pull/4484)
* Bump jacoco-maven-plugin from 0.8.7 to 0.8.8 by @dependabot in [#4317](https://github.com/eXist-db/exist/pull/4317)
* Bump maven-assembly-plugin from 3.3.0 to 3.4.2 by @dependabot in [#4468](https://github.com/eXist-db/exist/pull/4468), [#4476](https://github.com/eXist-db/exist/pull/4476), and [#4503](https://github.com/eXist-db/exist/pull/4503)
* Bump maven-clean-plugin from 3.1.0 to 3.2.0 by @dependabot in [#4318](https://github.com/eXist-db/exist/pull/4318
* Bump maven-compiler-plugin from 3.9.0 to 3.10.1 by @dependabot in [#4244](https://github.com/eXist-db/exist/pull/4244), and [#4267](https://github.com/eXist-db/exist/pull/4267)
* Bump maven-deploy-plugin from 3.0.0-M2 to 3.0.0 by @dependabot in [#4500](https://github.com/eXist-db/exist/pull/4500)
* Bump maven-failsafe-plugin from 3.0.0-M5 to 3.0.0-M7 by @dependabot in [#4431](https://github.com/eXist-db/exist/pull/4431), and [#4330](https://github.com/eXist-db/exist/pull/4330)
* Bump maven-install-plugin from 3.0.0-M1 to 3.1.0 by @dependabot in [#4499](https://github.com/eXist-db/exist/pull/4499), [#4502](https://github.com/eXist-db/exist/pull/4502), and [#4625](https://github.com/eXist-db/exist/pull/4625)
* Bump maven-jar-plugin from 3.2.2 to 3.3.0 by @dependabot in [#4562](https://github.com/eXist-db/exist/pull/4562)
* Bump maven-javadoc-plugin from 3.3.1 to 3.3.2 by @dependabot in [#4241](https://github.com/eXist-db/exist/pull/4241), [#4347](https://github.com/eXist-db/exist/pull/4347), and [#4515](https://github.com/eXist-db/exist/pull/4515)
* Bump maven-project-info-reports-plugin from 3.1.2 to 3.4.1 by @dependabot in [#4224](https://github.com/eXist-db/exist/pull/4224), [#4261](https://github.com/eXist-db/exist/pull/4261), [#4365](https://github.com/eXist-db/exist/pull/4365), [#4495](https://github.com/eXist-db/exist/pull/4495), and [#4516](https://github.com/eXist-db/exist/pull/4516)
* Bump maven-resources-plugin from 3.2.0 to 3.3.0 by @dependabot in [#4504](https://github.com/eXist-db/exist/pull/4504)
* Bump maven-scm-plugin from 1.12.2 to 1.13.0 by @dependabot in [#4422](https://github.com/eXist-db/exist/pull/4422
* Bump maven-shade-plugin from 3.2.4 to 3.4.1 by @dependabot in [#4319](https://github.com/eXist-db/exist/pull/4319), [#4556](https://github.com/eXist-db/exist/pull/4556), and [#4606](https://github.com/eXist-db/exist/pull/4606)
* Bump maven-site-plugin from 3.10.0 to 3.12.1 by @dependabot in [#4246](https://github.com/eXist-db/exist/pull/4246), [#4348](https://github.com/eXist-db/exist/pull/4348), and [#4511](https://github.com/eXist-db/exist/pull/4511)
* Bump maven-surefire-report-plugin from 3.0.0-M5 to 3.0.0-M8 by @dependabot in [#4314](https://github.com/eXist-db/exist/pull/4314), [#4430](https://github.com/eXist-db/exist/pull/4430), and [#4673](https://github.com/eXist-db/exist/pull/4673)
* Bump maven-surefire-plugin from 3.0.0-M5 to 3.0.0-M8 by @dependabot in [#4326](https://github.com/eXist-db/exist/pull/4326), [#4429](https://github.com/eXist-db/exist/pull/4429), and [#4683](https://github.com/eXist-db/exist/pull/4683)
* Bump versions-maven-plugin from 2.9.0 to 2.14.2 by @dependabot in [#4277](https://github.com/eXist-db/exist/pull/4277), [#4399](https://github.com/eXist-db/exist/pull/4399), [#4544](https://github.com/eXist-db/exist/pull/4544), [#4602](https://github.com/eXist-db/exist/pull/4602), [#4656](https://github.com/eXist-db/exist/pull/4656), and [#4663](https://github.com/eXist-db/exist/pull/4663)

## New Contributors
* @alanpaxton made their first contribution in [#4360](https://github.com/eXist-db/exist/pull/4360)
* @naveensrinivasan made their first contribution in [#4381](https://github.com/eXist-db/exist/pull/4381)
* @rhubner made their first contribution in [#4393](https://github.com/eXist-db/exist/pull/4393)
* @chris-evolvedbinary made their first contribution in [#4402](https://github.com/eXist-db/exist/pull/4402)
* @nverwer made their first contribution in [#4521](https://github.com/eXist-db/exist/pull/4521)

**Full Changelog**: [https://github.com/eXist-db/exist/compare/eXist-6.0.1...eXist-6.1.0](https://github.com/eXist-db/exist/compare/eXist-6.0.1...eXist-6.1.0)

## Backwards Compatibility

eXist-db 6.1.0 is backwards binary compatible with previous 6.x.x versions, which should make upgrading simple with no changes required to XQuery or XSLT application code. For those users migrating from 4.x.x or 5.x.x versions to 6.x.x a full backup and restore of the database will be required and possibly some small changes to XQuery and XSLT application code. Please review previous releases' notes for detailed information.
