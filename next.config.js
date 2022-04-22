module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["api.golfbettingsystem.com"],
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
}
