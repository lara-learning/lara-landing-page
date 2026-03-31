import { JSX } from "react";
import { renderToString } from "react-dom/server";
import Stage from "./page-fragments/stage";
import { Benefits } from "./page-fragments/benefits";
import { Overview } from "./page-fragments/overview";
import { Contact } from "./page-fragments/contact";

type BaseLayoutProps = { children?: JSX.Element[] };

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="This is an introductory landing page designed to provide a clear overview of what Lara is and how it works. It presents the core concept, main features, and overall structure of the system in a concise and accessible format."
        ></meta>
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
      <Stage />
      <main>
        <Benefits />
        <Overview />
      </main>
      <Contact />
    </BaseLayout>
  );
}

export default function () {
  return "<!DOCTYPE html>" + renderToString(<Page />);
}
