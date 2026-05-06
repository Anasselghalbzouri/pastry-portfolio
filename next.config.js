/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/pastry-portfolio",
  assetPrefix: "/pastry-portfolio",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
};

module.exports = nextConfig;
