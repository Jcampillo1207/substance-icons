export const PACKAGE_NAME = "@intello/substance-icons"

export const installCommands = {
  npm: `npm install ${PACKAGE_NAME}`,
  pnpm: `pnpm add ${PACKAGE_NAME}`,
  yarn: `yarn add ${PACKAGE_NAME}`,
  bun: `bun add ${PACKAGE_NAME}`,
} as const

export type PackageManager = keyof typeof installCommands

// Always the named import, never <Substance name="…" />: the dispatcher statically
// imports all 140 icons, so any snippet using it teaches people to pin the whole
// library into their bundle.
export const importSnippet = (name: string) =>
  `import { ${name} } from "${PACKAGE_NAME}"`

export const usageSnippet = (name: string) =>
  `<${name} className="size-5 text-foreground" />`
