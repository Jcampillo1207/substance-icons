import * as substance from "@intello/substance-icons"
import type { IconName } from "@intello/substance-icons"
import type { ComponentType, SVGProps } from "react"

export type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string; color?: string }
>

export type IconEntry = {
  name: IconName
  Component: IconComponent
}

/**
 * The package exports 141 things but ships 140 icons: the extra one is `Substance`,
 * the universal dispatcher that renders any icon by name. It is not part of the
 * IconName union and has no SVG behind it, so a naive Object.keys() would drop the
 * dispatcher into the grid as if it were an icon.
 */
export const icons: IconEntry[] = Object.entries(substance)
  .filter(([name]) => name !== "Substance")
  .map(([name, Component]) => ({
    name: name as IconName,
    Component: Component as IconComponent,
  }))

export const iconCount = icons.length
