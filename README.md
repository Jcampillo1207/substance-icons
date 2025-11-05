# Substance Icons

A lightweight and elegant React icon library that converts your SVG files into optimized, customizable React components with TypeScript support.

## Features

- 🎨 **Simple**: Drop SVG files and generate React components automatically
- 📦 **Optimized**: Built-in SVG optimization with SVGO and code minification
- 🔷 **TypeScript**: Full TypeScript support with auto-generated types
- ⚡ **Lightweight**: Tree-shakable exports for minimal bundle size
- 🎯 **Customizable**: Size, color, and className props for easy styling
- 🔧 **Developer Friendly**: Simple API and great DX
- 🚀 **Fast Deploy**: Single command to build, version, publish and push

## Installation

Install the library using npm or yarn:

```bash
# Using npm
npm install @intello/substance-icons@latest

# Using yarn
yarn add @intello/substance-icons@latest

# Using pnpm
pnpm add @intello/substance-icons@latest
```

## Usage

### Import Individual Icons

Import and use icons directly from the library:

```jsx
import React from "react";
import { User, Heart, Settings } from "@intello/substance-icons";

const App = () => (
  <div>
    <User size={32} color="blue" />
    <Heart size={32} color="red" />
    <Settings size={32} className="custom-class" />
  </div>
);

export default App;
```

### Universal Icon Component

Use the `Substance` component to dynamically render any icon by name:

```jsx
import React from "react";
import { Substance } from "@intello/substance-icons";

const App = () => {
  const iconName = "User"; // Can be dynamic

  return (
    <div>
      <Substance name="User" size={32} color="blue" />
      <Substance name={iconName} size={48} className="icon" />
    </div>
  );
};

export default App;
```

### TypeScript Support

Full TypeScript support with auto-generated types for all icons:

```tsx
import React from "react";
import { Substance, IconName } from "@intello/substance-icons";

const icons: IconName[] = ["User", "Heart", "Settings"];

const App = () => (
  <div>
    {icons.map((icon) => (
      <Substance
        key={icon}
        name={icon}
        size={32}
        color="currentColor"
      />
    ))}
  </div>
);

export default App;
```

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height of the icon in pixels |
| `color` | `string` | `currentColor` | Icon color (inherits from CSS if not specified) |
| `className` | `string` | `""` | Additional CSS classes |
| `...props` | `SVGProps` | - | Any valid SVG attributes (onClick, style, etc.) |

## Adding Your Own Icons

If you're forking this library to create your own icon set:

1. Place your SVG files in the `svg/` directory
2. Run `npm run generate-icons` to convert them to React components
3. Run `npm run build` to build the library
4. Your icons are ready to use!

```bash
# Add your SVGs
cp my-icon.svg svg/

# Generate React components
npm run generate-icons

# Build the library
npm run build
```

## Development

```bash
# Install dependencies
npm install

# Generate icons from SVG files
npm run generate-icons

# Build the library
npm run build

# Development workflow (generate + build)
npm run dev

# Deploy with one command (generate + build + version + publish + git push)
npm run deploy
```

## Quick Deploy

The `deploy` script allows you to build, update, and push your changes with a single command:

```bash
npm run deploy
```

This will:
1. Generate all icons from SVG files
2. Build the library with optimizations
3. Bump the patch version
4. Publish to npm
5. Push changes to GitHub

## Contributing to Your Fork

1. Add your SVG files to the `svg/` directory
2. Run `npm run generate-icons` to generate components
3. Test your changes
4. Build and publish your version

## Issues and Suggestions

If you encounter any issues or have suggestions for improvements, please:
- Open an issue on [GitHub](https://github.com/Jcampillo1207/substance-icons)
- Reach out on Twitter: [@Chema12071](https://x.com/Chema12071)

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for more details.

---

**Author**: José Campillo
**Website**: [intello.dev](https://intello.dev)
**Twitter**: [@Chema12071](https://x.com/Chema12071)
**GitHub**: [Jcampillo1207](https://github.com/Jcampillo1207)
