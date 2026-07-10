/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats; the browser picks AVIF/WebP where supported.
    formats: ["image/avif", "image/webp"],
    // The source photography is very high-resolution; these breakpoints keep
    // delivered bytes sensible across the editorial grid.
    deviceSizes: [420, 640, 828, 1080, 1200, 1600, 1920, 2048],
    imageSizes: [200, 320, 480, 640, 828],
  },
  eslint: {
    // The site ships without an ESLint config; skip lint in CI builds so
    // Vercel deploys stay green. Type-safety is still enforced by `tsc`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
