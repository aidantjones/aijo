---
layout: post
title: "The PGLT Workflow: Automatic PDF generation from GitHub repos of LaTeX projects"
date: 2019-12-20
tags: ["compile","compiler","download","git","github","latex","latex.online","mulitcol","overleaf","pdf","twocolumn","workflow", "posts"]
description: "This workflow automatically compiles PDFs of your <span class='latex'>L<sup>a</sup>T<sub>e</sub>X</span> project on the fly based on the most recent version, all just by clicking a link available to anyone."
image: "/assets/img/posts/pglt.jpg"
---
<section class="post-content">

## What

This workflow automatically compiles PDFs of your <span class="latex">L<sup>a</sup>T<sub>e</sub>X</span> project on the fly based on the most recent version, all just by clicking a link available to anyone.

## Why

Anyone who's worked on a large writing project knows the pains of manual versioning. GitHub is a popular version control platform. I wanted to build the final link in the chain to enable automatic, web-based <span class="latex">L<sup>a</sup>T<sub>e</sub>X</span> PDF creation.

## How

It is entirely web-based (see "Notes" for alternate setups), utilizing [Overleaf](http://overleaf.com) and [<span class="latex">L<sup>a</sup>T<sub>e</sub>X</span> Cloud Compiler](https://latexonline.cc/).

## Instructions

1. Create or use an existing [Overleaf](http://overleaf.com) project
2. Within that project, click on the "GitHub" link in the menu
3. This will prompt you to create a repo for the project. For the rest of this sequence to work, it must be public
4. Copy GitHub's repo link
5. Enter it into the [<span class="latex">L<sup>a</sup>T<sub>e</sub>X</span> Cloud Compiler](https://latexonline.cc/)
6. Click "Generate Build URL" and copy the resulting URL in your address bar. This is essentially your new PDF link that can be used to grab the most recent version of your project

## Notes

You don't need to use Overleaf to create the repo; it can originate from anywhere. The process is just easier with Overleaf for those who may not be as familiar with manual setup.

## Limitations

*   <span class="latex">L<sup>a</sup>T<sub>e</sub>X</span> Cloud Compiler only contains the compilers pdflatex, xelatex, and lualatex. These should work for almost everyone, however.
*   PDFs may compile slightly different. On my document, the only difference I noticed was a multicols environment not behaving as expected (with or without the asterisk). It produced a flush end to a section instead of a ragged one like on Overleaf. Using `\twocolumn` fixed the problem. Therefore, you may have to troubleshoot similar issues if your document is complex.

</section>
