import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customIconButton = defineStyle({
  bgColor: "inherit",
  border: "none",
  outline: "none",
  transition: "none",
  _hover: {
    bgColor: "inherit",
    border: "none",
    outline: "none",
    transition: "none",
  },
});

const Button = defineStyleConfig({
  variants: { customIconButton },
});

export default Button;
