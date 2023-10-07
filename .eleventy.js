const fs = require("fs")

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles")

  eleventyConfig.addShortcode("component_dsd", function(name) {
    const fileContents = fs.readFileSync(`src/_includes/components/${name}.html`)
    return fileContents
  })

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
}
