import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import defaultTheme from "./customTheme";
import defaultColors, { type DefaultColorsType } from "./colors";
import defaultTextStyles from "./textStyles";
import { colorModeFormatter } from "../utils";

/**
 * Formats a CustomColorsType object as a DefaultColorsType object.
 *
 * @param customColors - An object containing the customized colors. Check the example for reference.
 *
 * @returns a DefaultColorsType object containing the defined custom colors.
 *
 * @example
 * ### Contents of customColors
 * ```
 * {
 *   accent: ["purple.200", "purple.800"],
 *   control: ["gray.400"],
 *   newColor: ["green.100", "green.300"],
 * }
 * ```
 *
 * ### Result
 * ```
 * {
 *   accent: {
 *    default: "purple.200",
 *    _dark: "purple.800",
 *   },
 *   control: {
 *    default: "gray.400",
 *    _dark: "gray.400",
 *   },
 *   newColor: {
 *    default: "green.100",
 *    _dark: "green.300",
 *   },
 * }
 * ```
 */
function customColorsFormatter(
  customColors: CustomColorsType
): DefaultColorsType {
  const formattedCustomColors: DefaultColorsType = {};

  Object.keys(customColors).forEach((key) => {
    formattedCustomColors[key] = colorModeFormatter(...customColors[key]);
  });

  return formattedCustomColors;
}

/**
 * ChakraUI's theme provider component with our own custom theme.
 *
 * @param children
 * @param overrideDefaultTheme
 * @param customColors - An object containing the customized colors. Check the example for reference.
 *
 */
export default function ThemeProvider({
  children,
  overrideDefaultTheme,
  customColors = {},
  customTextStyles = {},
  fonts,
}: {
  children: React.ReactNode;
  overrideDefaultTheme?: Record<string, any>;
  customColors?: CustomColorsType;
  customTextStyles?: Record<string, any>;
  fonts: FontsTypes;
}) {
  const formattedCustomColors = customColorsFormatter(customColors);
  const initialColorMode =
    overrideDefaultTheme?.config?.initialColorMode ||
    defaultTheme.config.initialColorMode;

  const customTheme = {
    ...defaultTheme,
    ...overrideDefaultTheme,
    fonts,
    semanticTokens: {
      colors: {
        ...defaultColors,
        ...formattedCustomColors,
      },
    },
    textStyles: {
      ...defaultTextStyles,
      ...customTextStyles,
    },
  };

  return (
    <>
      <ColorModeScript initialColorMode={initialColorMode} />
      <ChakraProvider theme={extendTheme(customTheme)}>
        {children}
      </ChakraProvider>
    </>
  );
}

/**
 * The first element of the array is the light color, while the second element is the dark color.
 * @example
 * ```
 * {
 *   accent: ["purple.200", "purple.800"],
 *   control: ["gray.400"],
 *   newColor: ["green.100", "green.300"],
 * }
 * ```
 */
type CustomColorsType = Record<string, [string, string?]>;

type FontsTypes = {
  heading: string;
  body: string;
  monospace: string;
};
