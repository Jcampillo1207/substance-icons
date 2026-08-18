import Link from "next/link"
import { ExternalLink } from "@intello/substance-icons"

import { Button } from "@/components/ui/button"
import { hitArea } from "@/lib/hit-area"
import { SubstanceLockup } from "@/components/substance-lockup"
import { ThemeToggle } from "@/components/theme-toggle"

export const SiteHeader = () => (
  <header className="bg-background sticky top-0 z-40 w-full border-b">
    <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-3 py-3 md:px-5">
      {/* The lockup is paths, not text, so the link carries the accessible name. */}
      <Link href="/" aria-label="Substance Icons" className="flex items-center">
        <SubstanceLockup className="h-5 w-auto" />
      </Link>

      <div className="flex items-center gap-x-3">
        <Button variant="ghost" size="sm" className={hitArea} asChild>
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
