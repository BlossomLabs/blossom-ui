export function colorModeFormatter(
  light: string,
  dark?: string
): { default: string; _dark: string } {
  return {
    default: light,
    _dark: dark ?? light,
  };
}
