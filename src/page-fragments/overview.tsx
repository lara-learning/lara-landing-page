export function Overview() {
  return (
    <section className="relative bg-black text-white px-8 md:px-16 lg:px-32 overflow-hidden">
      <div className="pt-[180px] w-full max-w-[900px] mx-auto">
        <h2 className="lg:text-7xl md:text-5xl text-3xl font-medium flex flex-row items-center">
          Schreibst
          <br />
          du schon
          <img
            src="/assets/png/lara-pink.png"
            alt="lara"
            className="lg:max-w-[360px] md:max-w-[200px] max-w-[140px] aspect-1 mx-6"
          />
          <span className="text-[#DA1C85] lg:text-[200px] md:text-[110px] text-[60px] font-bold">
            ?
          </span>
        </h2>

        <p className="w-full mt-6 font-normal text-[20px]">
          Das digitale Berichtsheft ist ein Online-Tool, in dem du die
          Kalenderwochen, Tage und Daten bereits vorgegeben und einen genauen
          Überblick über deine aktuellen, sowie vergangenen Wochen hast.
        </p>

        <img
          src="assets/png/dashboard-report.png"
          alt="Dashboard Report von Lara"
          className="w-full my-16"
        />

        <p className="w-full font-normal text-[20px]">
          Am Ende einer jeden Woche befindet sich das Feld “Berichtsheft
          abgeben”. Natürlich werden auch ganz einfach Urlaube, Krankheitstage
          und die Berufsschulzeit von lara gespeichert.
        </p>

        <ReportImages />
      </div>

      <div className="relative w-full max-w-[900px] mx-auto">
        <img
          src="/assets/png/shape-left.png"
          className="absolute top-170 -left-75 w-[850px] aspect-[8/9]"
          alt=""
          aria-hidden="true"
        />
        <img
          src="/assets/png/shape_right_2.png"
          className="absolute top-0 -right-75 w-[900px] aspect-square blur-md"
          alt=""
          aria-hidden="true"
        />

        <ContentBoxWithNumber
          number="01"
          content={
            "Du behältst jederzeit den vollen Überblick über vergangene und aktuelle Wochen."
          }
          color="#4864F1"
        />

        <ContentBoxWithNumber
          number="02"
          content={
            "Schneller und unkomplizierter PDF-Export deiner Berichte, genau dann, wenn du ihn brauchst."
          }
          color="#DA1C85"
        />

        <ContentBoxWithNumber
          number="03"
          content={"Die Nutzung ist vollständig kostenlos."}
          color="#6e0995"
        />
      </div>
    </section>
  );
}

function Image({ report }) {
  return (
    <img
      src={`/assets/png/report-${report}.png`}
      alt="Wochentag mit einem Status"
      className="w-full"
    />
  );
}

function ReportImages() {
  return (
    <div className="w-full flex flex-col gap-8 my-18">
      <Image report={1} />
      <Image report={2} />
      <Image report={3} />
    </div>
  );
}

function ContentBoxWithNumber({
  number,
  content,
  color,
}: {
  number: string;
  content: string;
  color: string;
}) {
  return (
    <div className="relative pt-[325px]">
      <p
        className={`absolute leading-none top-[152px] md:top-[140px] lg:top-[128px] right-[-30px] lg:right-[-45px] text-[400px] md:text-[450px] lg:text-[500px] font-bold text-[${color}]`}
      >
        {number}
      </p>
      <ContentBox content={content} />
    </div>
  );
}

function ContentBox({ content }: { content: string }) {
  return (
    <div className="w-[480px] lg:w-[580px] h-[230px] lg:h-[280px] bg-white/70 backdrop-blur-sm rounded-md px-10 py-12 text-center flex items-center justify-center">
      <p className="text-3xl lg:text-4xl font-normal leading-tight text-black">
        {content}
      </p>
    </div>
  );
}
