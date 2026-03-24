export function Benefits() {
  return (
    <section className="my-[140px] bg-white text-black px-8 md:px-16 lg:px-32">
      <div className="mx-auto w-full max-w-[900px] mx-auto">
        <div className="w-full">
          <h2 className="text-4xl font-normal mb-15">
            Deine Benefits
            <br />
            <div className="flex flex-row">
              <span>mit</span>
              <img
                src="/assets/png/lara-purple.png"
                alt="lara"
                className="w-[160px] aspect-1 mx-4 mt-3"
              />
            </div>
          </h2>

          <ul className="mt-8 space-y-4 text-sm leading-relaxed">
            <BenefitItem
              span={
                <>
                  Es entsteht ein viel
                  <Highlight text=" leichterer Austausch " />
                  zwischen Azubi und Ausbilder.
                </>
              }
            />

            <BenefitItem
              span={
                <>
                  Betrieb, Ausbilder und auch Azubi,
                  <Highlight text=" sparen " /> mit dem Tool
                  <Highlight text=" Zeit, Arbeit und Nerven." />
                </>
              }
            />
          </ul>

          <h3 className="mt-25 text-4xl font-normal">Vorraussetzungen:</h3>

          <ul className="mt-6 space-y-4 text-sm leading-relaxed">
            <BenefitItem
              span={
                <>
                  Deinen Ausbildungsbetrieb bzw. die Ausbilder:innen über das
                  Tool <Highlight text=" informieren" />
                </>
              }
            />

            <BenefitItem
              span={
                <>
                  Eine verantwortliche Person oder ein Team benennen, welches
                  die
                  <Highlight text=" Implementierung koordiniert" />
                </>
              }
            />

            <BenefitItem
              span={
                <>
                  Ein gültiger
                  <Highlight text=" Microsoft " />
                  Log In
                </>
              }
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

const BenefitItem = ({ span }) => {
  return (
    <li className="flex gap-3">
      <LaraIcon />
      <span>{span}</span>
    </li>
  );
};

const Highlight = ({ text }) => {
  return <span className="text-[#6A2FEE] font-semibold">{text}</span>;
};

function LaraIcon() {
  return (
    <img
      src="/assets/svg/bullet-point.svg"
      alt="lara-logo"
      className="w-[18px] aspect-1 text-black"
    />
  );
}
