import { resolve } from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), eslint()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui",
      // the proper extensions will be added
      fileName: "ui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "react",
        "react-dom",
        "react-blockies",
        "@chakra-ui/anatomy",
        "@chakra-ui/icons",
        "@chakra-ui/react",
        "@chakra-ui/styled-system",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-blockies": "Blockies",
          "@chakra-ui/anatomy": "@chakra-ui/anatomy",
          "@chakra-ui/icons": "@chakra-ui/icons",
          "@chakra-ui/react": "@chakra-ui/react",
          "@chakra-ui/styled-system": "@chakra-ui/styled-system",
          "@emotion/react": "@emotion/react",
          "@emotion/styled": "@emotion/styled",
          "framer-motion": "framer-motion",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: false,
  },
});
