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
            <li className="flex gap-3">
              <LaraIcon />
              <span>
                Es entsteht ein viel{" "}
                <span className="text-[#6A2FEE] font-semibold">
                  leichterer Austausch
                </span>{" "}
                zwischen Azubi und Ausbilder.
              </span>
            </li>

            <li className="flex gap-3">
              <LaraIcon />
              <span>
                Betrieb, Ausbilder und auch Azubi,{" "}
                <span className="text-[#6A2FEE] font-semibold">sparen</span> mit
                dem Tool{" "}
                <span className="text-[#6A2FEE] font-semibold">
                  Zeit, Arbeit und Nerven.
                </span>
              </span>
            </li>
          </ul>

          <h3 className="mt-25 text-4xl font-normal">Vorraussetzungen:</h3>

          <ul className="mt-6 space-y-4 text-sm leading-relaxed">
            <li className="flex gap-3">
              <LaraIcon />
              <span>
                Deinen Ausbildungsbetrieb bzw. die Ausbilder:innen über das Tool{" "}
                <span className="text-[#6A2FEE] font-semibold">
                  informieren
                </span>
              </span>
            </li>

            <li className="flex gap-3">
              <LaraIcon />
              <span>
                Eine verantwortliche Person oder ein Team benennen, welches die{" "}
                <span className="text-[#6A2FEE] font-semibold">
                  Implementierung koordiniert
                </span>
              </span>
            </li>

            <li className="flex gap-3">
              <LaraIcon />
              <span>
                Ein gültiger{" "}
                <span className="text-[#6A2FEE] font-semibold">Microsoft</span>{" "}
                Log In
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function LaraIcon() {
  return (
    <img
      src="/assets/svg/bullet-point.svg"
      alt="lara-logo"
      className="w-[18px] aspect-1 text-black"
    />
  );
}
