/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "udahtenang.buzz",
        port: "",
        pathname: "/data/**",
      },
      {
        protocol: "https",
        hostname: "cdn.menantuincaran.lol",
        port: "",
        pathname: "/gbr/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i2.wp.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
