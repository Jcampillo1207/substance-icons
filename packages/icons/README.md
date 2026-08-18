<img src="https://www.substance.jmcr.beer/icon.svg" alt="Substance" width="64" height="64" />

# Substance Icons

140 icons for React, and nothing else. Every icon is a typed component that forwards
refs and props, ships no runtime dependencies, and tree shakes down to the ones you
import. Drawn on a 24x24 grid with a 2px square capped stroke.

[Browse the set](https://www.substance.jmcr.beer) &middot;
[npm](https://www.npmjs.com/package/@intello/substance-icons)

## Install

```bash
npm install @intello/substance-icons
```

```bash
pnpm add @intello/substance-icons
```

```bash
yarn add @intello/substance-icons
```

```bash
bun add @intello/substance-icons
```

React 16.8 or newer. No other runtime dependency.

## Usage

Import each icon by name. Your bundler drops the 139 you did not ask for.

```tsx
import { ArrowRight, Check, Search } from "@intello/substance-icons"

export const Toolbar = () => (
  <div>
    <Search />
    <Check />
    <ArrowRight />
  </div>
)
```

## Props

Every icon is a `forwardRef` component over `<svg>`, so anything valid on an SVG
element works, including `onClick`, `id`, `role`, `aria-*`, `data-*`, `style` and
`ref`.

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `size` | `number \| string` | `24` | Sets `width` and `height`. Accepts CSS units, for example `"1em"`. |
| `color` | `string` | `currentColor` | Sets the stroke. Prefer a text colour class, see below. |
| `className` | `string` | | Applied to the root `<svg>`. |
| `...props` | `SVGProps<SVGSVGElement>` | | Spread last, so your value wins over the default. |

### Colour

Icons stroke with `currentColor`, so they inherit the text colour of their container.
That is the path you want: it survives theme switches and hover states for free.

```tsx
<button className="text-neutral-500 hover:text-neutral-900">
  <Check />
</button>
```

The `color` prop is there for the cases CSS cannot reach, such as inlining into an
email. Passing it pins the stroke to that value and opts the icon out of inheriting,
which is usually not what you want.

### Size

`size` writes `width` and `height` attributes. A CSS class beats an attribute, so a
utility like `size-5` overrides it and keeps the icon in step with your spacing scale.

```tsx
<ArrowRight size={16} />
<ArrowRight className="size-4" />
```

### Refs

```tsx
const ref = useRef<SVGSVGElement>(null)

<Check ref={ref} />
```

## TypeScript

Types ship with the package. `IconName` is a union of all 140 names, useful for props
that take an icon by name.

```tsx
import type { IconName } from "@intello/substance-icons"

type ButtonProps = {
  icon: IconName
}
```

Each icon also exports its own props type, named after it.

```tsx
import type { CheckProps } from "@intello/substance-icons"
```

## Rendering an icon by name

`Substance` resolves a name at runtime.

```tsx
import { Substance } from "@intello/substance-icons"

<Substance name="Check" />
```

It imports all 140 icons to do so, which pins the whole library into your bundle,
roughly 73 KB against roughly 1.2 KB for a single named import. Reach for it only when
the name genuinely is not known until runtime, for example when it comes from a CMS.
If you can name the icon while writing the code, import it directly.

## Browser support

Anything that runs React 16.8. The output targets ES5 and the components are plain
SVG, so there is nothing to polyfill.

## Contributing

Icons live in [the monorepo](https://github.com/Jcampillo1207/substance-icons). The
components under `src/icons` are generated from the SVG files in `svg/`, so edit the
SVG and regenerate rather than editing a component by hand.

Bugs and requests: [open an issue](https://github.com/Jcampillo1207/substance-icons/issues).

## License

ISC. See [LICENSE](./LICENSE).

Built by [José Campillo](https://jmcr.beer).
