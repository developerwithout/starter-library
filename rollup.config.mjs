import { join } from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import css from "rollup-plugin-import-css";
import tailwind from "rollup-tailwind";
import { dts } from "rollup-plugin-dts";

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
      peerDepsExternal(),
      resolve(),
      commonjs(),
      tailwind({
        input: join(__dirname, "/src/tailwind.css"),
        purge: true,
      }),
      css(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      terser(),
    ],
    external: [ ...Object.keys(packageJson.peerDependencies || {}) ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [ dts() ],
    external: [ /\.css$/, ...Object.keys(packageJson.peerDependencies || {}) ],
  },
];
