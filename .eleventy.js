/*jshint esversion: 6 */

module.exports = function(eleventyConfig) {

  let markdownIt = require("markdown-it");

  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  };

  let markdownLib = markdownIt(options)
    .use(require('markdown-it-anchor'), {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '' // §
    })
    .use(require("markdown-it-toc-done-right"), {
      level: 1
    })
    .use(require('markdown-it-link-attributes'), {
      pattern: /^https?:\/\//,
      attrs: {
        target: '_blank'
        }
    });

  eleventyConfig.setLibrary("md", markdownLib);
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("_redirects");

};
