import Link from "next/link"
import { ExternalLink } from "@intello/substance-icons"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export const SiteHeader = ({ version }: { version: string }) => (
  <header className="bg-background sticky top-0 z-40 w-full border-b">
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-3 md:px-5">
      <div className="flex items-baseline gap-x-3">
        <Link href="/" className="text-sm font-medium">
          Substance Icons
        </Link>
        <span className="text-muted-foreground text-xs tabular-nums">
          v{version}
        </span>
      </div>

      <div className="flex items-center gap-x-0.5">
        <Button variant="ghost" size="sm" asChild>
          <a
            href="https://github.com/Jcampillo1207/substance-icons"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <ExternalLink />
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  </header>
)
