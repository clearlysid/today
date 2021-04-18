const NotionRenderer = require("./_includes/notion");
const CloudinaryRenderer = require("./_includes/cloudinary");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("favicons/");

	// cloudinary image shortcode
	eleventyConfig.addShortcode("cloudimage", (url, alt) =>
		CloudinaryRenderer(url, alt)
	);

	// Notion Renderer shortcode
	eleventyConfig.addShortcode("notion", (blocks) => NotionRenderer(blocks));

	return {
		// Opt-out of pre-processing global data JSON files: (default: `liquid`)
		dataTemplateEngine: false,
	};
};
