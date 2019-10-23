module.exports = function(eleventy) {

	// BrowserSync
	eleventy.setBrowserSyncConfig(require('./config/browser-sync.config.js'));

	// Plugins
	eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

	// Transforms
	eleventy.addTransform('minify', require('./config/minify.js'));

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

		pathPrefix: '',

		markdownTemplateEngine: 'liquid',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		passthroughFileCopy: true,

		dir: {
			input: 'src',
			includes: '_includes',
			data: '_data',
			output: 'www',
		}
	};
}
