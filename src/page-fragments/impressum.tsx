export function Impressum() {
  return (
    <section className="bg-black text-white px-8 md:px-16 lg:px-32 pt-10 lg:pt-18 pb-10 lg:pb-18">
      <div className="w-full max-w-6xl mx-auto mt-20 lg:mt-20">
        <header>
          <div className="flex items-center gap-3">
            <span className="text-[#DA1C85] text-8xl lg:text-9xl font-bold leading-none lowercase">
              lara
            </span>
            <img
              src="/assets/svg/logo.svg"
              alt=""
              aria-hidden="true"
              className="w-20 lg:w-24"
            />
          </div>

          <h1 className="mt-10 text-5xl lg:text-7xl font-bold leading-tight text-white">
            Impressum
          </h1>

          <div className="relative mt-8 w-full h-4 bg-gradient-to-r from-[#DA1C85] to-[#3D1B88]"></div>
        </header>
        <h2 className="mt-25 text-4xl lg:text-6xl font-bold leading-tight text-white">
          Impressum
        </h2>

        <p className="mt-8 text-xl font-bold text-white">
          Angaben gemäß §5 DDG
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-16">
        <section className="mt-8 pb-16 lg:pb-20">
          <h2 className="mt-25 mb-10 text-4xl lg:text-6xl font-bold leading-tight text-white">
            Lara
          </h2>
          <p className="text-white text-sm leading-relaxed">
            [Vor- und Nachname oder Firmenname]
          </p>
          <p className="text-white text-sm leading-relaxed">
            [Straße und Hausnummer]
          </p>
          <p className="text-white text-sm leading-relaxed">[PLZ und Ort]</p>
          <p className="mt-8 text-xl font-bold text-white">Kontakt</p>
          <p className="text-white text-sm leading-relaxed">
            Telefon: [Telefonnummer]
          </p>
          <p className="text-white text-sm leading-relaxed">
            E-Mail: [E-Mail-Adresse]
          </p>
          <p className="mt-10 text-white text-sm leading-relaxed">
            Vertreten durch [Vor- und Nachname] (nur nötig bei Unternehmen /
            juristischen Personen)
          </p>
          <p className="mt-10 text-white text-sm leading-relaxed">
            Umsatzsteuer-ID Umsatzsteuer-Identifikationsnummer gemäß §27 a
            Umsatzsteuergesetz: [USt-IdNr.] (nur falls vorhanden)
          </p>
          <p className="mt-10 text-white text-sm leading-relaxed">
            Verantwortlich für den Inhalt nach §18 Abs. 2 MStV [Vor- und
            Nachname] [Adresse - kann identisch mit oben sein]
          </p>
        </section>

        <footer className="mt-20 w-full flex justify-end">
          <div className="inline-flex flex-col items-start text-left">
            <div className="mt-0">
              <h3 className="text-[#4864F1] text-[1.75rem] lg:text-3xl font-bold">
                Website
              </h3>
              <a
                href="https://lara.sinnerschrader.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-white text-xl lg:text-3xl hover:text-[#DA1C85] transition-colors"
              >
                https://lara.sinnerschrader.com/
              </a>
            </div>

            <div className="mt-12">
              <h3 className="text-[#4864F1] text-[1.75rem] lg:text-3xl font-bold">
                E-Mail
              </h3>
              <a
                href="mailto:laraconnect@accenture.com"
                className="mt-4 block text-white text-xl lg:text-3xl hover:text-[#DA1C85] transition-colors"
              >
                laraconnect@accenture.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
