const fs = require("fs-extra");
const path = require("path");
const { transform } = require("@svgr/core");
const { optimize } = require("svgo");

const svgDir = path.join(__dirname, "../svg");
const iconsDir = path.join(__dirname, "../src/icons");
const indexFile = path.join(__dirname, "../src/index.ts");
const typesFile = path.join(__dirname, "../src/icons/types.ts");

/**
 * Generate a React component from an SVG file
 */
const generateIconComponent = async (filePath, iconName) => {
  let svgCode = await fs.readFile(filePath, "utf-8");

  // Optimize the SVG
  const optimizedSvg = optimize(svgCode, {
    path: filePath,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
      "removeXMLNS",
    ],
  });
  svgCode = optimizedSvg.data;

  // Transform the optimized SVG into a React component
  const jsxCode = await transform(
    svgCode,
    {
      icon: true,
      typescript: true,
      expandProps: "end",
      svgo: false, // Already optimized
      jsx: {
        babelConfig: {
          plugins: [
            [
              "@svgr/babel-plugin-replace-jsx-attribute-value",
              {
                values: [
                  {
                    value: "currentColor",
                    newValue: "{color || 'currentColor'}",
                    literal: true,
                  },
                ],
              },
            ],
          ],
        },
      },
    },
    { componentName: iconName }
  );

  // Extract just the SVG content from the generated JSX
  // The jsxCode will contain something like:
  // import * as React from "react";
  // const SvgComponent = (props) => (<svg>...</svg>);
  // export default SvgComponent;

  // Extract the SVG element from the JSX code
  const svgMatch = jsxCode.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) {
    throw new Error(
      `Could not extract SVG from generated code for ${iconName}`
    );
  }

  let svgContent = svgMatch[0];

  // Remove existing width and height attributes (both string and JSX)
  svgContent = svgContent
    .replace(/\s+width="[^"]*"/g, "")
    .replace(/\s+width={[^}]*}/g, "")
    .replace(/\s+height="[^"]*"/g, "")
    .replace(/\s+height={[^}]*}/g, "");

  // Replace color attributes with dynamic props
  // Using negative lookahead (?!-) to avoid matching stroke-dasharray, stroke-width, etc.
  svgContent = svgContent
    // Handle fill attributes
    .replace(/fill="currentColor"/g, 'fill={color || "currentColor"}')
    .replace(/fill='currentColor'/g, 'fill={color || "currentColor"}')
    .replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill={color || "currentColor"}')
    .replace(/fill='#[0-9a-fA-F]{3,6}'/g, 'fill={color || "currentColor"}')
    // Handle stroke attributes (but not stroke-dasharray, stroke-width, etc)
    // The (?!-) ensures we don't match if there's a hyphen after 'stroke'
    .replace(/(\s)stroke="currentColor"/g, '$1stroke={color || "currentColor"}')
    .replace(/(\s)stroke='currentColor'/g, '$1stroke={color || "currentColor"}')
    .replace(
      /(\s)stroke="#[0-9a-fA-F]{3,6}"/g,
      '$1stroke={color || "currentColor"}'
    )
    .replace(
      /(\s)stroke='#[0-9a-fA-F]{3,6}'/g,
      '$1stroke={color || "currentColor"}'
    );

  // Add our custom attributes to the opening svg tag
  svgContent = svgContent.replace(
    /<svg/,
    `<svg\n    className={\`\${className}\`}\n    width={size}\n    height={size}`
  );

  // Create the component with TypeScript interface
  const componentCode = `import React from 'react';

interface ${iconName}Props extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name ${iconName}
 * @description Automatically generated SVG icon component for ${iconName}.
 * @param {object} props - SVG component props, including any valid SVG attribute.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color (defaults to currentColor).
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element} JSX element representing the SVG icon.
 */

const ${iconName}: React.FC<${iconName}Props> = ({
  size = 24,
  color,
  className = "",
  ...props
}) => (
  ${svgContent}
);

export default ${iconName};
`;

  // Write the component file
  const componentPath = path.join(iconsDir, `${iconName}.tsx`);
  await fs.outputFile(componentPath, componentCode);

  // Add to types file
  await fs.appendFile(typesFile, `  | "${iconName}"\n`);

  console.log(`  ✓ Generated ${iconName}`);
};

/**
 * Generate the universal Icon component (Substance)
 */
const generateUniversalIconComponent = async () => {
  const files = await fs.readdir(iconsDir);
  const iconNames = files
    .filter((file) => file.endsWith(".tsx") && file !== "Substance.tsx")
    .map((file) => path.basename(file, ".tsx"));

  const iconImports = iconNames
    .map((iconName) => `import ${iconName} from './${iconName}';`)
    .join("\n");

  const componentCode = `import React from 'react';
${iconImports}
import { IconName } from './types';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

/**
 * @component
 * @name Substance
 * @description Universal icon component that renders any icon by name.
 * @param {object} props - Component props.
 * @param {IconName} props.name - The name of the icon to render.
 * @param {number} [props.size=24] - Icon size.
 * @param {string} [props.color] - Icon color.
 * @param {string} [props.className] - Additional CSS class for the icon.
 * @author José Campillo
 * @website https://intelloai.com/resources/substance/icons
 * @twitter https://x.com/Chema12071
 * @returns {JSX.Element | null} JSX element representing the SVG icon.
 */

const Substance: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = "",
  ...props
}) => {
  const icons: Record<string, React.ComponentType<any>> = { ${iconNames.join(
    ", "
  )} };
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(\`Icon "\${name}" not found\`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      {...props}
    />
  );
};

export default Substance;
`;

  const componentPath = path.join(iconsDir, "Substance.tsx");
  await fs.outputFile(componentPath, componentCode);
  console.log("  ✓ Generated Substance universal component");
};

/**
 * Generate the main index.ts file with all exports
 */
const generateIndexFile = async () => {
  const files = await fs.readdir(iconsDir);
  const iconNames = files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => path.basename(file, ".tsx"));

  const exports = iconNames
    .map(
      (iconName) =>
        `export { default as ${iconName} } from './icons/${iconName}';`
    )
    .join("\n");

  const indexContent = `${exports}\nexport { IconName } from './icons/types';`;
  await fs.outputFile(indexFile, indexContent);
  console.log("  ✓ Generated index file");
};

/**
 * Convert kebab-case or snake_case to PascalCase
 */
const toPascalCase = (str) => {
  return str
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());
};

/**
 * Process all SVG files in a directory recursively
 */
const processDirectory = async (dir) => {
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else if (path.extname(file) === ".svg") {
      const iconName = toPascalCase(path.basename(file, ".svg"));
      await generateIconComponent(filePath, iconName);
    }
  }
};

/**
 * Main function to generate all icons
 */
const generateIcons = async () => {
  console.log("🎨 Substance Icons Generator");
  console.log("===========================\n");

  // Check if svg directory exists
  if (!fs.existsSync(svgDir)) {
    console.error(`❌ Error: SVG directory not found at ${svgDir}`);
    console.log("\nPlease create the 'svg' directory and add your SVG files.");
    process.exit(1);
  }

  // Check if there are any SVG files
  const svgFiles = await fs.readdir(svgDir);
  const hasSvgFiles = svgFiles.some((file) => path.extname(file) === ".svg");

  if (!hasSvgFiles) {
    console.warn("⚠️  Warning: No SVG files found in the svg directory.");
    console.log(
      "\nPlease add SVG files to the 'svg' directory and run this command again."
    );
    process.exit(0);
  }

  // Clean the icons directory
  await fs.emptyDir(iconsDir);
  console.log("🧹 Cleaned icons directory\n");

  // Initialize the types file
  await fs.outputFile(typesFile, `export type IconName =\n`);

  // Process all SVG files
  console.log("📦 Generating icon components:");
  await processDirectory(svgDir);

  // Close the types file
  await fs.appendFile(typesFile, `;\n`);

  // Generate universal component and index
  console.log("\n🔧 Generating utility files:");
  await generateUniversalIconComponent();
  await generateIndexFile();

  console.log("\n✅ Icons generated successfully!");
  console.log(
    `📊 Total icons: ${svgFiles.filter((f) => f.endsWith(".svg")).length}\n`
  );
};

// Run the generator
generateIcons().catch((err) => {
  console.error("\n❌ Error generating icons:", err);
  process.exit(1);
});
