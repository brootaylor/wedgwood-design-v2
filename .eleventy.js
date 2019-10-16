const htmlmin = require("html-minifier");

module.exports = function(eleventy) {

	// BrowserSync
	eleventy.setBrowserSyncConfig(require('./configs/browser-sync.config.js'));

	// Passthrough
	eleventy.addPassthroughCopy('./src/assets/ico');
	eleventy.addPassthroughCopy('./src/assets/images');
	eleventy.addPassthroughCopy({ './src/robots.txt': 'robots.txt' });
	eleventy.addPassthroughCopy({ './src/sitemap.xml': 'sitemap.xml' });

	// Plugins
	eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

	// Transforms
	eleventy.addTransform('minify', require('./configs/minify.js')); // HTML Minifier

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
