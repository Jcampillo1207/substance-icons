/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proxy PostHog through our own origin so ad blockers, which block posthog.com by
  // hostname, do not silently drop every event. instrumentation-client.ts points
  // api_host at "/ingest" and these rewrites carry it the rest of the way.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://us-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ]
  },
  // Required by the proxy above: without it Next redirects /ingest/foo/ and the
  // ingestion endpoint never sees the request.
  skipTrailingSlashRedirect: true,
}

export default nextConfig
