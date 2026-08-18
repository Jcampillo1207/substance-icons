"use client"

import type { IconEntry } from "@/lib/icons"
import { importSnippet, usageSnippet } from "@/lib/snippets"
import { CopyButton } from "@/components/copy-button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const Snippet = ({ label, value }: { label: string; value: string }) => (
  <div className="flex w-full flex-col gap-y-1 border-b py-3 first:pt-0 last:border-b-0 last:pb-0">
    <span className="text-muted-foreground text-xs">{label}</span>
    <div className="flex items-center gap-x-3">
      <code className="min-w-0 flex-1 overflow-x-auto text-xs whitespace-pre">
        {value}
      </code>
      <CopyButton value={value} size="xs" />
    </div>
  </div>
)

export const IconDetail = ({
  icon,
  onOpenChange,
}: {
  icon: IconEntry | null
  onOpenChange: (open: boolean) => void
}) => (
  <Dialog open={icon !== null} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-lg">
      {icon ? (
        <>
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              {icon.name}
            </DialogTitle>
            <DialogDescription className="text-xs">
              Import it by name so your bundler can drop the other 139.
            </DialogDescription>
          </DialogHeader>

          <div className="flex items-center justify-center border-y py-8">
            <icon.Component className="size-10" />
          </div>

          <div className="flex flex-col">
            <Snippet label="Import" value={importSnippet(icon.name)} />
            <Snippet label="Usage" value={usageSnippet(icon.name)} />
          </div>
        </>
      ) : null}
    </DialogContent>
  </Dialog>
)
