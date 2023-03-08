import { colorModeFormatter } from "../utils";

export type DefaultColorsType = Record<
  string,
  { default: string; _dark: string }
>;

const defaultColors: DefaultColorsType = {
  badge: colorModeFormatter("blue.50", "blue.800"),
  badgeContent: colorModeFormatter("blue.800", "white"),
  badgePressed: colorModeFormatter("gray.50", "blue.500"),
  border: colorModeFormatter("blackAlpha.300", "blue.900"),
  disabled: colorModeFormatter("blackAlpha.50", "blue.700"),
  disabledContent: colorModeFormatter("gray.500", "blue.500"),
  link: colorModeFormatter("blue.400", "blue.300"),
  positive: colorModeFormatter("green.300"),
  positiveContent: colorModeFormatter("white"),
  negative: colorModeFormatter("red.400"),
  negativeContent: colorModeFormatter("white"),
  surfaceContent: colorModeFormatter("gray.700", "white"),
  surfaceContentSecondary: colorModeFormatter("gray.500", "cyan.500"),
  surfaceIcon: colorModeFormatter("gray.400", "blue.600"),
  surfaceInteractive: colorModeFormatter("white", "blue.700"),
  tagIndicatorContent: colorModeFormatter("cyan.500", "cyan.400"),
};

export default defaultColors;
