import { Benefits } from "./page-fragments/benefits";
import { Contact } from "./page-fragments/contact";
import { Overview } from "./page-fragments/overview";
import Stage from "./page-fragments/stage";

export function PageBuilder() {
  return (
    <>
      <Stage />
      <Benefits />
      <Overview />
      <Contact />
    </>
  );
}
