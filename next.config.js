/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images.unoptimized = true
  trailingSlash: true,
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // exportPathMap: async function (defaultPathMap) {
  //   return {
  //     '/auth/index.html': { page: '/auth' },
  //   };
  // },
  sassOptions: {
    additionalData: `@import "@/styles/commons/media_breakpoints.scss";`,
  },
}




module.exports = nextConfig
