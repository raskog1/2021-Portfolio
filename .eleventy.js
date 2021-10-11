module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/");

  // Returns work items, sorted by display order
  config.addCollection("projects", (collection) => {
    return collection
      .getFilteredByGlob("./src/projects/*.md")
      .sort((a, b) =>
        Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1
      );
  });

  // Returns a collection of blog posts in reverse date order
  config.addCollection("blogs", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  return {
    // Allows us to use .html files instead of .njk
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
