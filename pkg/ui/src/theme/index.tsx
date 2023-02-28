import { ChakraProvider } from "@chakra-ui/react";
import theme from "./customTheme";

export default function ThemeProvider({
  children,
  overrideDefaultTheme,
}: {
  children: React.ReactNode;
  overrideDefaultTheme?: Record<string, string | number>;
}) {
  return (
    <ChakraProvider
      theme={{
        ...theme,
        ...overrideDefaultTheme,
      }}
    >
      {children}
    </ChakraProvider>
  );
}
