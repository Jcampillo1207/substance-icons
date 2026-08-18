"use client"

import * as React from "react"
import { Search, X } from "@intello/substance-icons"

import { icons, type IconEntry } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconDetail } from "@/components/icon-detail"

const SIZES = [16, 20, 24, 32] as const

/** "ChevronDownDashed" -> "chevron down dashed", so "chev down" matches. */
const searchable = (name: string) =>
  name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase()

const haystack = new Map(icons.map((i) => [i.name, searchable(i.name)]))

export const IconBrowser = () => {
  const [query, setQuery] = React.useState("")
  const [size, setSize] = React.useState<(typeof SIZES)[number]>(24)
  const [selected, setSelected] = React.useState<IconEntry | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Slash focuses search, the convention people already expect from docs sites.
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey) return
      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA")
      ) {
        return
      }
      event.preventDefault()
      inputRef.current?.focus()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  const results = terms.length
    ? icons.filter((icon) => {
        const text = haystack.get(icon.name)!
        return terms.every((term) => text.includes(term))
      })
    : icons

  return (
    <>
      <div className="flex w-full flex-col gap-y-3 border-b py-4 md:flex-row md:items-center md:justify-between md:gap-y-0">
        <div className="relative w-full md:max-w-xs">
          <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search 140 icons…"
            aria-label="Search icons"
            className="h-8 pl-8 text-base md:text-xs"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 focus-visible:border-ring absolute top-1/2 right-1 grid size-6 -translate-y-1/2 place-items-center transition-colors duration-300 ease-in-out focus-visible:ring-1 focus-visible:outline-none"
            >
              <X className="size-3.5" />
            </button>
          ) : null}
        </div>

        <div className="flex items-center gap-x-3">
          <span className="text-muted-foreground text-xs tabular-nums">
            {results.length} of {icons.length}
          </span>
          <div className="flex items-center gap-x-0.5">
            {SIZES.map((value) => (
              <Button
                key={value}
                variant={value === size ? "secondary" : "ghost"}
                size="xs"
                onClick={() => setSize(value)}
                aria-pressed={value === size}
                className="tabular-nums"
              >
                {value}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {results.length === 0 ? (
        <p className="text-muted-foreground py-16 text-center text-sm">
          No icon matches “{query}”.
        </p>
      ) : (
        <div className="grid grid-cols-3 border-l sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {results.map(({ name, Component }) => (
            <button
              key={name}
              type="button"
              title={name}
              onClick={() => setSelected({ name, Component })}
              className={cn(
                "group flex aspect-square flex-col items-center justify-center gap-y-2 border-r border-b",
                "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-1 focus-visible:outline-none"
              )}
            >
              <Component
                size={size}
                className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ease-in-out"
              />
              <span className="text-muted-foreground group-hover:text-foreground max-w-full truncate px-2 text-[10px] transition-colors duration-300 ease-in-out">
                {name}
              </span>
            </button>
          ))}
        </div>
      )}

      <IconDetail
        icon={selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      />
    </>
  )
}
