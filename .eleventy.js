module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("style.css");

	return {
		// Opt-out of pre-processing global data JSON files: (default: `liquid`)
		dataTemplateEngine: false,
	};
};
