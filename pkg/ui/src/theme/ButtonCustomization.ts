import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle((props) => {
  const wide = props.wide
    ? { width: "full", display: "flex" }
    : { display: "inline-flex" };

  return {
    ...wide,
    border: "none",
    boxShadow: "sm",
    whiteSpace: "nowrap",
    textDecoration: "none",
    textAlign: "center",
    background: "none",
    borderRadius: "base",
    _disabled: {
      background: "disabled",
      color: "disabledContent",
      border: "0",
      boxShadow: "none",
    },
  };
});

const positiveVariant = defineStyle({
  background: "positive",
  color: "positiveContent",
  iconColor: "positiveContent",
});

const negativeVariant = defineStyle({
  background: "negative",
  color: "negativeContent",
});

const defaultVariant = defineStyle({
  background: "surfaceInteractive",
  color: "surfaceContent",
  border: "1px solid",
  borderColor: "border",
});

const customIconButton = defineStyle({
  bgColor: "inherit",
  outline: "none",
  transition: "none",
  boxShadow: "none",
  _hover: {
    bgColor: "inherit",
    border: "none",
    outline: "none",
    transition: "none",
  },
  color: "surfaceIcon",
});

const badgeVariant = defineStyle((props) => {
  const { compact, disabled } = props;

  return {
    color: "badgeContent",
    background: compact ? "transparent" : "badge",
    boxShadow: "none",
    _active: {
      background: !disabled && compact ? "badgePressed" : "initial",
    },
    height: "full",
    w: "fit-content",
    paddingRight: 2,
    paddingLeft: 0,
    border: 0,
    outline: 0,
  };
});

const Button = defineStyleConfig({
  baseStyle,
  variants: {
    customIconButton,
    badge: badgeVariant,
    positive: positiveVariant,
    negative: negativeVariant,
    default: defaultVariant,
  },
  defaultProps: {
    size: "md",
    variant: "default",
  },
});

export default Button;
