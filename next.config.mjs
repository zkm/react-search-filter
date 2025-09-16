/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/react-search-filter" : undefined,
  assetPrefix: isProd ? "/react-search-filter/" : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
