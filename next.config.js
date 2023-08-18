/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/campaign",
        destination: "/campaign/messages",
        permanent: true,
      },
      {
        source: "/",
        destination: "/campaign/messages",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
