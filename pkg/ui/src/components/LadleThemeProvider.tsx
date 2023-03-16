import "@fontsource/overpass/400.css";
import "@fontsource/overpass/600.css";
import "@fontsource/overpass-mono/400.css";
import "@fontsource/overpass-mono/600.css";
import { ThemeProvider } from "../";

const fonts = {
  heading: '"Overpass", sans-serif',
  body: '"Overpass", sans-serif',
  monospace: '"Overpass Mono", monospace',
};

export default function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider fonts={fonts}>{children}</ThemeProvider>;
}
