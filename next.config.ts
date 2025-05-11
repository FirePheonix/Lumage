import type { NextConfig } from "next";
import type {Configuration} from "webpack";

const repoName = "Lumage"; 

const nextConfig: NextConfig = {
  output: "export", // Enable static export for GitHub Pages
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true, // Required for static export if using <Image>
  },
  webpack(config: Configuration) {
    // Find the existing rule that handles SVGs
    const fileLoaderRule = config.module?.rules?.find(
      (rule: any) =>
        typeof rule === "object" &&
        rule !== null &&
        "test" in rule &&
        rule.test instanceof RegExp &&
        rule.test.test(".svg")
    ) as any;

    if (fileLoaderRule) {
      config.module?.rules?.push(
        // Reapply the existing rule but only for *.svg?url
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        // Convert *.svg to React components
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          },
          use: ["@svgr/webpack"],
        }
      );

      // Exclude .svg from the original rule
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
