"use client"

import * as React from "react"
import { Check, Copy } from "@intello/substance-icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Swaps its own label for ~1.2s instead of raising a toast. The portfolio has no toast,
 * no skeleton and no spinner — its only loading affordance is plain swapped text — so a
 * toast here would be the first floating surface on either site.
 */
export const CopyButton = ({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  className,
  variant = "outline",
  size = "sm",
}: {
  value: string
  label?: string
  copiedLabel?: string
  className?: string
  variant?: React.ComponentProps<typeof Button>["variant"]
  size?: React.ComponentProps<typeof Button>["size"]
}) => {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 1200)
    return () => window.clearTimeout(timeout)
  }, [copied])

  return (
    <Button
      variant={variant}
      size={size}
      // The label swap changes the button's width, which reflows the code beside it.
      // Reserving the wider label's width keeps the row still.
      className={cn("gap-1.5 justify-start", className)}
      style={{ minWidth: `${copiedLabel.length + 5}ch` }}
      aria-label={`${label}: ${value}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
        } catch {
          // Clipboard is unavailable over plain http and in some embedded webviews.
          // Failing silently would look like a broken button, so say so.
          setCopied(false)
        }
      }}
    >
      {copied ? <Check /> : <Copy />}
      {copied ? copiedLabel : label}
    </Button>
  )
}
