export function colorModeFormatter(
  light: string,
  dark?: string
): { default: string; _dark: string } {
  const lightValue = `light.${light}`;
  const darkValue = `dark.${dark}`;

  return {
    default: lightValue,
    _dark: darkValue ?? lightValue,
  };
}
