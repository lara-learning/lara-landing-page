import { JSX } from "react";
import { renderToString } from "react-dom/server";
import { PageBuilder } from "./pageBuilder";

type BaseLayoutProps = { children?: JSX.Element };

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Lara Landing Page</title>
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
      <PageBuilder />
    </BaseLayout>
  );
}

export default function () {
  return "<!DOCTYPE html>" + renderToString(<Page />);
}
