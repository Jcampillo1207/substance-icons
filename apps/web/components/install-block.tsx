"use client"

import * as React from "react"

import { installCommands, type PackageManager } from "@/lib/snippets"
import { CopyButton } from "@/components/copy-button"
import { Button } from "@/components/ui/button"

const MANAGERS = Object.keys(installCommands) as PackageManager[]

export const InstallBlock = () => {
  const [manager, setManager] = React.useState<PackageManager>("npm")
  const command = installCommands[manager]

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-x-0.5 border-b pb-2">
        {MANAGERS.map((name) => (
          <Button
            key={name}
            variant={name === manager ? "secondary" : "ghost"}
            size="xs"
            onClick={() => setManager(name)}
            aria-pressed={name === manager}
          >
            {name}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-x-3 py-3">
        <code className="min-w-0 flex-1 overflow-x-auto text-xs whitespace-pre">
          {command}
        </code>
        <CopyButton value={command} size="xs" />
      </div>
    </div>
  )
}
