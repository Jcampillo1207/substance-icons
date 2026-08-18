import { createRequire } from "node:module"

import { iconCount } from "@/lib/icons"
import { IconBrowser } from "@/components/icon-browser"
import { InstallBlock } from "@/components/install-block"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

// Read at build time from the workspace package, so the header can never claim a
// version that was not the one built.
const require = createRequire(import.meta.url)
const { version } = require("@intello/substance-icons/package.json") as {
  version: string
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-5xl flex-1 px-3 md:px-5">
        <section className="flex w-full flex-col gap-y-4 py-10 lg:max-w-xl">
          <h1 className="text-base font-semibold lg:text-lg">
            {iconCount} icons for React, and nothing else.
          </h1>
          <p className="text-muted-foreground text-sm tracking-normal">
            Every icon is a typed component that forwards refs and props, ships no
            runtime dependencies, and tree-shakes down to the ones you import.
            Drawn on a 24×24 grid with a 2px square-capped stroke.
          </p>
          <InstallBlock />
        </section>

        <section className="flex w-full flex-col pb-16">
          <IconBrowser />
        </section>
      </main>

      <SiteFooter version={version} />
    </div>
  )
}
