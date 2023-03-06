import "@fontsource/overpass/400.css";
import "@fontsource/overpass/600.css";
import "@fontsource/overpass-mono/400.css";
import "@fontsource/overpass-mono/600.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./";

const fonts = {
  heading: '"Overpass", sans-serif',
  body: '"Overpass", sans-serif',
  monospace: '"Overpass Mono", monospace',
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider fonts={fonts}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
