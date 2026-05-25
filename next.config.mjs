/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  basePath: "/portfolio-v4",
  assetPrefix: "/portfolio-v4/",
};
export default nextConfig;
