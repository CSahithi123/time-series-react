import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TimeSeriesReact",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: (id) =>
        [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
          "@emotion/react",
          "@emotion/styled",
        ].includes(id) || id.startsWith("@mui/"),
    },
  },
});
