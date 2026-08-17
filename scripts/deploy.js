// Same as ship, then pushes the commit and tag. See scripts/release.js.
const { release } = require("./release");

release({ push: true });
