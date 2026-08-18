"use client"

import * as React from "react"

import { installCommands, type PackageManager } from "@/lib/snippets"
import { Bun, Npm, Pnpm, Yarn } from "@/components/brand-icons"
import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const MANAGERS: { name: PackageManager; Logo: typeof Npm }[] = [
  { name: "npm", Logo: Npm },
  { name: "pnpm", Logo: Pnpm },
  { name: "yarn", Logo: Yarn },
  { name: "bun", Logo: Bun },
]

export const InstallBlock = () => {
  const [manager, setManager] = React.useState<PackageManager>("npm")
  const command = installCommands[manager]

  return (
    <div className="flex w-full min-w-0 flex-col">
      <div className="flex items-center gap-x-0.5 border-b pb-2">
        {MANAGERS.map(({ name, Logo }) => (
          <Button
            key={name}
            variant={name === manager ? "secondary" : "ghost"}
            size="xs"
            onClick={() => setManager(name)}
            aria-pressed={name === manager}
          >
            {/* Unselected logos sit at reduced opacity rather than greyscale: the colour
                is what identifies them, so draining it costs more than it buys. */}
            <Logo
              aria-hidden="true"
              className={cn("size-4", name !== manager && "opacity-55")}
            />
            {name}
          </Button>
        ))}
      </div>
      <div className="flex min-w-0 items-center gap-x-3 py-3">
        <code className="min-w-0 flex-1 overflow-x-auto text-xs whitespace-pre">
          {command}
        </code>
        <CopyButton value={command} className="shrink-0" size="xs" />
      </div>
    </div>
  )
}
