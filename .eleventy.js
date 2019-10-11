module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "dist/static": "static" });
    eleventyConfig.addPassthroughCopy({ "dist/styles": "styles" });
    eleventyConfig.addPassthroughCopy({ "dist/robots.txt": "robots.txt" });
    eleventyConfig.addPassthroughCopy({ "dist/sitemap.xml": "sitemap.xml" });
    eleventyConfig.addPassthroughCopy({ "dist/serviceworker.js": "serviceworker.js" });

    return {
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: [
            "html",
            "njk",
            "md"
        ],
        dir: {
            input: "src",
            output: "_site",
            includes: "includes"
        }
    }
}
