/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosted as plain files on the campus cPanel server (evconcept.web.illinois.edu),
  // which can't run this app (its newest Node is 18). `npm run build` writes the whole
  // site to out/ as static HTML/CSS/JS; GitHub Actions publishes out/ to the `deploy`
  // branch and cPanel copies it into public_html. See .github/workflows/deploy.yml.
  output: "export",
  // Writes /team as team/index.html so Apache serves /team/ without rewrite rules.
  trailingSlash: true,
  images: {
    // Next's on-the-fly image resizing needs a running server, which cPanel doesn't
    // have, so images are served as-is. scripts/optimize-images.mjs already caps
    // their size (team 512px, cars 1200px, heroes 2560px).
    unoptimized: true,
  },
};

export default nextConfig;
