/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    BASE_API_URL: "https://stage-frontend-eucalyptogroup.herokuapp.com/",
  },
  reactStrictMode: true,

  images: {
    domains: [
      "localhost",
      "https://stage-frontend-eucalyptogroup.herokuapp.com/",
    ],
  },
};
