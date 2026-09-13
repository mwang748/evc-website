/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF is off by default in Next 16; it's typically 20-30% smaller than WebP.
    formats: ["image/avif", "image/webp"],
    // No source image is wider than 2560 after scripts/optimize-images.mjs, so the
    // default ladder up to 3840 would only ever produce upscaled variants.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    // Headshots render in a 256px circle; subteam graphics at ~448px.
    imageSizes: [128, 256, 384, 512, 900],
    // These images effectively never change, so cache the transforms hard.
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

export default nextConfig;
