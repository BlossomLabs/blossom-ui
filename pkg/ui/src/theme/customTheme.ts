import { extendTheme } from "@chakra-ui/react";
import Button from "./ButtonCustomization";

const theme = {
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  components: {
    Button,
  },
};

export default extendTheme(theme);
