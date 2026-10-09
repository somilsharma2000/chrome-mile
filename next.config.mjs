/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT_MODE === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(isExport
    ? {
        // Static export for GitHub Pages hosting
        output: "export",
        basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
