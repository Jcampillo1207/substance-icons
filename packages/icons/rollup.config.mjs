// rollup.config.mjs
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({
      extensions: [".ts", ".tsx"],
    }),
    commonjs(),
    // Declarations are emitted separately by `npm run build:types` (tsc), so this only
    // transpiles. Emitting them here too makes the plugin write the same .d.ts once per
    // output entry, and the two writes race.
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false,
      declarationMap: false,
      declarationDir: undefined,
    }),
    // No terser here on purpose. Each icon is a forwardRef() call at module scope, which a
    // consumer's bundler can only drop when the /*#__PURE__*/ annotation survives — and
    // terser consumes those annotations without re-emitting them, under every `comments`
    // setting. Minifying here would ship all 140 icons into every consumer bundle to save
    // bytes nobody downloads. Consumers minify their own build; that is where it belongs.
  ],
  external: ["react", "react-dom"],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
};
