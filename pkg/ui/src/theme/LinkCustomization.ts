import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  color: "link",
  textDecoration: "underline",
});

const Link = defineStyleConfig({
  baseStyle,
});

export default Link;
