import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const buttonBase = {
  whiteSpace: "nowrap",
  textDecoration: "none",
  textAlign: "center",
  background: "none",
  padding: 0,
  border: 0,
  outline: 0,
  borderRadius: "base",
};

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

const sizes = {
  md: defineStyle({
    height: 6,
  }),
};

const badgeVariant = defineStyle((props) => {
  const { compact, disabled } = props;

  return {
    ...buttonBase,
    color: "badgeContent",
    background: compact ? "transparent" : "badge",
    _active: {
      background: !disabled && compact ? "badgePressed" : "initial",
    },
  };
});

const Button = defineStyleConfig({
  variants: { customIconButton, badge: badgeVariant },
  sizes,
  defaultProps: {
    size: "md", // set the default color scheme to purple
  },
});

export default Button;
