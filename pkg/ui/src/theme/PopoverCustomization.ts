import { popoverAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(popoverAnatomy.keys);

const badgeVariant = definePartsStyle({
  header: {
    textStyle: "label2",
    fontWeight: "normal",
    color: "surfaceContentSecondary",
    height: 8,
    px: 4,
    borderBottom: "1px solid",
    borderColor: "border",
    textAlign: "left",
  },
  closeButton: {
    color: "surfaceIcon",
  },
  content: {
    minW: "fit-content",
    w: "sm",
    boxShadow: "md",
  },
  footer: {
    border: "none",
    p: 4,
  },
  body: {
    p: 4,
    pb: "0 !important",
  },
});

const popoverTheme = defineMultiStyleConfig({
  variants: { badge: badgeVariant },
});

export default popoverTheme;
