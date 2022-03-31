module.exports = {
  reactStrictMode: true,
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS.split(", "),
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
}
