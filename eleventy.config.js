import "tsx/esm";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  const EleventyPluginVite = (await import("@11ty/eleventy-plugin-vite"))
    .default;
  const tailwindcss = (await import("@tailwindcss/vite")).default;

  const isProd = process.env.NODE_ENV === "production";

  eleventyConfig.addPlugin(EleventyPluginVite, {
    viteOptions: {
      plugins: [tailwindcss()],
      root: "src",
      base: isProd ? "/lara-landing-page/" : "/",
    },
  });

  eleventyConfig.addWatchTarget("./src/**/*.tsx");

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
