import commonjs from "@rollup/plugin-commonjs"; // Convert CommonJS modules to ES6
import vue from "rollup-plugin-vue"; // Handle .vue SFC files
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/App.vue", // Path relative to package.json
    output: [
      {
        name: "App",
        exports: "named",
        file: "./dist/App.js",
        format: "cjs",
        plugins: [],
      }
    ],
    external: ["vue", "@vue/server-renderer"],
    plugins: [
      commonjs({
        extensions: ["js"],
      }),
      vue({
        target: "node",
        preprocessStyles: true,
      }),
      postcss(),
    ],
  },
  {
    input: "src/components/Hi.vue", // Path relative to package.json
    output: [
      {
        name: "Hi",
        exports: "named",
        file: "./dist/Hi.js",
        format: "cjs",
        plugins: [],
      }
    ],
    external: ["vue", "@vue/server-renderer"],
    plugins: [
      commonjs({
        extensions: ["js"],
      }),
      vue({
        target: "node",
        preprocessStyles: true,
      }),
      postcss(),
    ],
  }
];
