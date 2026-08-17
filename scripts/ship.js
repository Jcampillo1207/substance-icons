// Generate, gate, version and publish — without pushing. See scripts/release.js.
const { release } = require("./release");

release({ push: false });
