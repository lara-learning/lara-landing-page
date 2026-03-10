import "tsx/esm";

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

  eleventyConfig.addExtension(["11ty.ts", "11ty.tsx"], {
    key: "11ty.js",
  });

  eleventyConfig.addTemplateFormats("11ty.ts,11ty.tsx");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
}
