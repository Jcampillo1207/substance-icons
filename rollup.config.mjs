// rollup.config.mjs
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

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
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
      format: {
        comments: false,
      },
    }),
  ],
  external: ["react", "react-dom"],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
};
