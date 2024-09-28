// @ts-nocheck
import { darkMode } from "#tailwind-config";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primaryAccent: {
          100: "#FFF7D2",
          200: "#FDEBA3",
          300: "#FDE06F",
          400: "#FAD645",
          500: "#F4D03F",
          600: "#D1B035",
          700: "#AD902C",
          800: "#8A7024",
        },
        secondaryAccent: {
          100: "#FFE4D9",
          200: "#FFC4B0",
          300: "#FFA286",
          400: "#FF845F",
          500: "#FF6F3F",
          600: "#DB5933",
          700: "#B7442A",
          800: "#933120",
        },
        fire: "#FF5A00",
        grass: "#7CFC00",
        ice: "#B9E8EA",
        water: "#1CA3EC",
        bug: "#A1591A",
        normal: "#FEEB9F",
        poison: "#A584CE",
      },
    },
  },
};
