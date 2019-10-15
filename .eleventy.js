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
