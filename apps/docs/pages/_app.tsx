import * as React from "react";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import { ThemeProvider } from "ui";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <ThemeProvider
      fonts={{
        body: "sans-serif",
        heading: "sans-serif",
        monospace: "monospace",
      }}
    >
      <NextHead>
        <title>My App</title>
      </NextHead>
      {mounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default App;
