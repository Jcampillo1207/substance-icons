# Substance Icons

Monorepo for the Substance Icons library and its documentation site.

| Workspace | Description |
| --- | --- |
| [`packages/icons`](./packages/icons) | `@intello/substance-icons` — the published React icon library |
| `apps/web` | Documentation site (not created yet) |

## Getting started

```bash
npm install
npm run build
```

Common tasks run through Turborepo from the root and are cached:

```bash
npm run build       # build every workspace
npm run typecheck
npm run test
npm run dev
```

## Working on icons

Icon components are **generated** from the SVG files in `packages/icons/svg/`. Never edit
anything under `packages/icons/src/icons/` by hand: the next generator run overwrites it,
and CI fails the `icons in sync with svg/` check.

```bash
# Add or replace SVGs in packages/icons/svg/, then:
npm run generate-icons
npm run build
```

The generator refuses to run when it would destroy work — an empty `svg/`, a set smaller
than what is already generated, two files that map to the same component name, or a
filename that cannot become a valid identifier.

## Releasing

Two paths, and only one of them should normally be used:

```bash
# Preferred: bump, push the tag, and let the Release workflow publish with provenance.
npm run deploy --workspace @intello/substance-icons

# Escape hatch: publish straight from this machine, no provenance, no push.
npm run ship --workspace @intello/substance-icons
```

The Release workflow authenticates to npm through Trusted Publishing (OIDC), configured
on npmjs.com against this repository and `release.yml`. There is no publish token to
store or rotate, and every published tarball carries a provenance attestation.

## License

ISC. See [LICENSE](./LICENSE).
