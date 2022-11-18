/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};
