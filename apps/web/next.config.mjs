/** @type {import('next').NextConfig} */
const nextConfig = {
  // The portfolio also proxies PostHog through /ingest here, together with
  // skipTrailingSlashRedirect. That block is deliberately absent until the
  // analytics decision is made — see apps/web/README.md.
}

export default nextConfig
