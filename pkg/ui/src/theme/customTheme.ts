import { type ThemeConfig } from "@chakra-ui/react";
import Button from "./ButtonCustomization";
import Link from "./LinkCustomization";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme: Record<string, any> = {
  config,
  components: {
    Button,
    Link,
  },
  fontSizes: {
    "2xs": "0.625rem",
    "4xl": "2rem",
  },
};

export default theme;
