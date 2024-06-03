/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com/www.maid.my.id",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
