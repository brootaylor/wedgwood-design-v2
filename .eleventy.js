const htmlmin = require("html-minifier");

module.exports = function(eleventy) {

	// Passthrough
	eleventy.addPassthroughCopy('./src/assets/ico');
	eleventy.addPassthroughCopy('./src/assets/images');
	eleventy.addPassthroughCopy({ './src/robots.txt': 'robots.txt' });
	eleventy.addPassthroughCopy({ './src/sitemap.xml': 'sitemap.xml' });

	// BrowserSync
	eleventy.setBrowserSyncConfig({
		notify: true,
		watch: true,
		browser: ["firefox"],
		open: "local"
	});

	// HTML Minifier
	eleventy.addTransform("htmlmin", function(content, outputPath) {
		if( outputPath.endsWith(".html") ) {
		  let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true
		  });
		  return minified;
		}
		return content;
	});

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
