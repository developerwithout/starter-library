import { join } from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import css from "rollup-plugin-import-css";
import tailwind from "@developerwithout/rollup-tailwind";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      css(),
      // postcss({
      //   plugins: [
      //     postcssImport(),
      //   ],
      // }),
      tailwind({
        input: join(__dirname, "/src/tailwind.css"),
        purge: true,
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
    external: ["react", "react-dom"],
  },
  // {
  //   input: "src/index.ts",
  //   output: [{ file: "dist/types.d.ts", format: "esm" }],
  //   plugins: [dts.default()],
  // },
];
