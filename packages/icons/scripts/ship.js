// Generate, gate, version and publish straight from this machine, without pushing.
// Escape hatch — prefer `npm run deploy`, which publishes through CI with provenance.
// See scripts/release.js.
const { release } = require("./release");

release({ mode: "local" });
