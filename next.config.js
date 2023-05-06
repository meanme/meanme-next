/** @type {import("next").NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/meanme-next" : "";


const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
