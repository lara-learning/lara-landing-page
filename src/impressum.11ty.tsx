import { JSX } from "react";
import { renderToString } from "react-dom/server";
import { Impressum } from "./page-fragments/impressum";

type BaseLayoutProps = { children?: JSX.Element | JSX.Element[] };

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Impressum"></meta>
        <title>Lara - Impressum</title>
        <link rel="stylesheet" href={`/assets/style.css`} />
      </head>

      <body>
        {children}
        <script type="module" src={`/assets/script.js`}></script>
      </body>
    </html>
  );
}

export function Page() {
  return (
    <BaseLayout>
      <Impressum />
    </BaseLayout>
  );
}

export default function () {
  return "<!DOCTYPE html>" + renderToString(<Page />);
}
