import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        palmGreen: {
          DEFAULT: { value: "#37AA73" },
          50: { value: "#EBF6F1" },
          100: { value: "#D7EEE3" },
          200: { value: "#AFDDC7" },
          300: { value: "#87CCAB" },
          400: { value: "#5FBB8F" },
          500: { value: "#37AA73" },
          600: { value: "#2C885C" },
          700: { value: "#216645" },
          800: { value: "#16442E" },
          900: { value: "#0B2217" },
        },
        gray: {
          DEFAULT: { value: "#7E8792" },
          50: { value: "#F9FAFB" },
          100: { value: "#E6E7E9" },
          200: { value: "#BFC3C9" },
          300: { value: "#9EA5AD" },
          400: { value: "#7E8792" },
          500: { value: "#5E6977" },
          600: { value: "#4B545F" },
          700: { value: "#383F47" },
          800: { value: "#262A30" },
          900: { value: "#131518" },
        },
        atlantic: {
          DEFAULT: { value: "#556781" },
          50: { value: "#F3F7FF" },
          100: { value: "#DEE8F8" },
          200: { value: "#B7C8E1" },
          300: { value: "#7284A0" },
          400: { value: "#556781" },
          500: { value: "#5E6977" },
          600: { value: "#162336" },
          700: { value: "#111A29" },
          800: { value: "#0B121B" },
          900: { value: "#06090E" },
        },
        cherryRed: {
          DEFAULT: { value: "#E02424" },
          50: { value: "#FDF2F2" },
          100: { value: "#FDE8E8" },
          200: { value: "#FBD5D5" },
          300: { value: "#F8B4B4" },
          400: { value: "#F98080" },
          500: { value: "#F05252" },
          600: { value: "#E02424" },
          700: { value: "#C81E1E" },
          800: { value: "#9B1C1C" },
          900: { value: "#771D1D" },
        },
        pallet: {
          DEFAULT: { value: "#76B947" },
          1: { value: "#76B947" },
          2: { value: "#B1D8B7" },
          3: { value: "#2F5233" },
          4: { value: "#94C973" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: { base: "palmGreen.500" } },
        secondary: { value: { base: "palmGreen.600" } },
      },
    },
  },
  strictTokens: true,
});

const system = createSystem(defaultConfig, config);

export default system;
