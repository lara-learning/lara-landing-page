export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  const EleventyPluginVite = (await import("@11ty/eleventy-plugin-vite"))
    .default;
  const tailwindcss = (await import("@tailwindcss/vite")).default;

  eleventyConfig.addPlugin(EleventyPluginVite, {
    viteOptions: {
      clearScreen: false,
      appType: "mpa",
      plugins: [tailwindcss()],
      root: "src",
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
