/*jshint esversion: 6 */

const markdownIt       = require("markdown-it");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

const markdownLib = markdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})
  .use(require('markdown-it-anchor'), {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: ''
  })
  .use(require("markdown-it-toc-done-right"), {
    level: 1
  })
  .use(require('markdown-it-link-attributes'), {
    pattern: /^https?:\/\//,
    attrs: {
      target: '_blank',
      rel:    'noreferrer'
    }
});

module.exports = eleventyConfig => {
  eleventyConfig.setLibrary("md", markdownLib);
  
  eleventyConfig.addPassthroughCopy({ "node_modules/lazysizes/lazysizes.min.js": "assets/scripts/lazysizes.min.js" });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy(".lazyimages.json");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addPlugin(lazyImagesPlugin, {
    preferNativeLazyLoad: true,
    scriptSrc: '/assets/scripts/lazysizes.min.js'
  });
};
