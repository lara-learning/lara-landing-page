export default function () {
  return (
    <section className="relative z-0 min-h-[900px] overflow-hidden bg-black">
      <div className="absolute -z-2 pointer-events-none bottom-[20%] left-[25%] w-[550px] h-[550px] bg-[#da67cf] rounded-full blur-[160px] opacity-100 mix-blend-screen"></div>
      <div className="absolute -z-2 pointer-events-none bottom-[20%] right-[15%] w-[550px] h-[550px] bg-[#DA1C85] rounded-full blur-[160px] opacity-100 mix-blend-screen"></div>

      <Glow1 />
      <Glow1 />

      <Glow2 />
      <Glow2 />

      <Glow3 />
      <Glow3 />

      <div className="mx-16 md:mx-32 lg:mx-64 flex items-center flex-col">
        <img
          className="w-[60px] aspect-1 mt-[140px]"
          src="/assets/svg/logo.svg"
          alt="lara-logo"
          fetchPriority="high"
        />
        <h1 className="text-white text-6xl lg:text-8xl font-bold text-center mt-4">
          Willkommen bei lara!
        </h1>
        <p className="text-white text-l lg:text-xl text-center mt-6">
          Lara ist ein digitales Berichtsheft, welches von Azubis für Azubis
          entwickelt wurde. Mit Lara hast Du die Möglichkeit, dein Berichtsheft
          ganz einfach und ohne Probleme digital zu führen.
        </p>
        <img
          className="w-[756px]"
          src="/assets/png/laptop-and-phone.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

function Glow1() {
  return (
    <div className="absolute -z-1 pointer-events-none top-[-55px] left-[-80px] w-[450px] 2xl:w-[calc(450px+(100%-1546px)*0.35)] h-[450px] bg-[#6A2FEE] rounded-full blur-[135px] opacity-100 mix-blend-screen"></div>
  );
}

function Glow2() {
  return (
    <div className="absolute -z-1 pointer-events-none bottom-[-100px] left-[10%] w-[550px] 2xl:w-[calc(550px+(100%-1546px)*0.35)] h-[550px] bg-[#e589e8] rounded-full blur-[160px] opacity-100 mix-blend-screen"></div>
  );
}

function Glow3() {
  return (
    <div className="absolute -z-1 pointer-events-none top-[30%] right-[-100px] w-[450px] 2xl:w-[calc(450px+(100%-1546px)*0.35)] h-[450px] bg-[#DA1C85] rounded-full blur-[140px] opacity-100 mix-blend-screen"></div>
  );
}
