"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "@intello/substance-icons"

import { Button } from "@/components/ui/button"
import { hitAreaIcon } from "@/lib/hit-area"

/**
 * Mirrors the "d" hotkey the ThemeProvider already binds, for people who use a mouse.
 * Renders a stable placeholder until mounted: resolvedTheme is undefined on the server,
 * and branching on it during hydration swaps the icon mid-render.
 */
export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      className={hitAreaIcon}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}
