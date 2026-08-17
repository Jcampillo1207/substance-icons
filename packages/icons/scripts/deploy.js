// Generate, gate, version and push the tag. The Release workflow publishes to npm with
// provenance from there — this script deliberately does not publish. See scripts/release.js.
const { release } = require("./release");

release({ mode: "ci" });
