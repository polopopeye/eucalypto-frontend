/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    BASE_API_URL: "https://frontEnd-Eucalypto.herokuapp.com",
  },
  reactStrictMode: true,

  images: {
    domains: ["localhost", "https://aqueous-everglades-48092.herokuapp.com"],
  },
};
