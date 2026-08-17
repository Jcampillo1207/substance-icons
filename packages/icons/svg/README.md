# SVG Icons Directory

Place your SVG icon files in this directory.

## Usage

1. Add your optimized SVG files to this directory
2. Run `npm run generate-icons` to convert them to React components
3. Your icons will be available as React components in `src/icons/`

## Naming Convention

- Use kebab-case for file names (e.g., `user-icon.svg`, `arrow-right.svg`)
- Files will be converted to PascalCase components (e.g., `UserIcon`, `ArrowRight`)

## Example

If you add a file named `my-icon.svg`, it will generate:
- Component: `src/icons/MyIcon.tsx`
- Can be imported as: `import { MyIcon } from 'ethereal-icons'`
