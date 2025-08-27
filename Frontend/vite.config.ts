import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";
import { fileURLToPath, URL } from "node:url";
// import plugins from "./plugins";

export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      checker({
        typescript: true,
        // eslint: { lintCommand: 'eslint "./src/**/*.{ts,tsx}"' },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
    build: {
      sourcemap: true, // enable for easier prod debugging (optional)
      cssCodeSplit: true, // default in Vite, keeps CSS split
      reportCompressedSize: true,
    },
  };
});
