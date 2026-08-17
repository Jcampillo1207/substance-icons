import posthog from "posthog-js"

// Same PostHog project as the portfolio (org JMCR, project "Portfolio"). Both sites live
// under jmcr.beer, so the cookie is cross-subdomain by default and a visitor is one person
// across both. Two projects could never be joined back together; one project separates
// cleanly by $host or by the `site` super property below.
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: process.env.NODE_ENV === "development",
})

// Segment on this rather than on the URL: it survives a domain change, and it keeps the
// portfolio's funnels readable once both sites report into the same project.
posthog.register({ site: "substance" })
