const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function(eleventyConfig){
    eleventyConfig.addPlugin(svgContents);

    return {
        templateFormats: [
            "md",
            "jpg",
            "png",
            "svg",
            "liquid",
            "njk",
            "css" // css is not yet a recognized template extension in Eleventy
        ]
    };
}