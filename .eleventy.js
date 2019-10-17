module.exports = function(eleventy) {

	// BrowserSync
	eleventy.setBrowserSyncConfig(require('./configs/browser-sync.config.js'));

	// Plugins
	eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

	// Transforms
	eleventy.addTransform('minify', require('./configs/minify.js')); // HTML Minifier

	// Passthrough
	eleventy.addPassthroughCopy('./src/assets/ico');
	eleventy.addPassthroughCopy('./src/assets/images');

	// Enable data deep merge
	eleventy.setDataDeepMerge(true);

	// Config
	return {
		templateFormats: [
			'md',
			'njk',
			'liquid',
			'html'
		],

		pathPrefix: '/',

		markdownTemplateEngine: 'liquid',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		passthroughFileCopy: true,

		dir: {
			input: 'src',
			includes: 'includes',
			//data: 'data',
			output: 'www',
		}
	};
}
