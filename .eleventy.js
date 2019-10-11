module.exports = function(eleventy) {

	// Passthrough
	eleventy.addPassthroughCopy({'./assets/styles': 'styles'});
	// eleventy.addPassthroughCopy('./src/assets/fonts');
	// eleventy.addPassthroughCopy('./src/assets/vectors');

	// eleventy.addPassthroughCopy({ "./assets/static": "static" });
	// eleventy.addPassthroughCopy({ "assets/styles": "styles" });
	// eleventy.addPassthroughCopy({ "assets/robots.txt": "robots.txt" });
	// eleventy.addPassthroughCopy({ "assets/sitemap.xml": "sitemap.xml" });
	// eleventy.addPassthroughCopy({ "assets/serviceworker.js": "serviceworker.js" });

	// Config
	return {
		dir: {
			input: 'src',
			output: 'www',
			includes: "includes"
		},
		markdownTemplateEngine: "njk",
		templateFormats: [
			"html",
			"njk",
			"md"
		],
		passthroughFileCopy: true
	};
}
