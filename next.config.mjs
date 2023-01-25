// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION;

/** @type {import("next").NextConfig} */
const config = {
 experimental: {
    appDir: true,
 },
  swcMinify: true,
  reactStrictMode: true,
  images: {
   domains: [
'images.unsplash.com',
   ]
  }
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};
export default config;
