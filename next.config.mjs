/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_MODE === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(isExport
    ? {
        // Static export for GitHub Pages hosting
        output: "export",
        basePath: "/the-twelve",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
