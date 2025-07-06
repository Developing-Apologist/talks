const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add Luxon date filter for footer component
  eleventyConfig.addFilter("date", function(date, format) {
    if (date === "now") {
      return DateTime.now().toFormat(format);
    }
    return DateTime.fromJSDate(date).toFormat(format);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/css/");

  // Custom date filter
  eleventyConfig.addFilter("dateFilter", function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // Absolute URL filter
  eleventyConfig.addFilter("absoluteUrl", function(url) {
    if (!url) return "";
    if (url.startsWith('http')) return url;
    return `https://talks.developingapologist.com${url}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    nunjucksOptions: {
      // Add shared includes to the search path
      searchPaths: [
        "src/_includes",
        "src/_includes/shared/includes"
      ]
    }
  };
}; 