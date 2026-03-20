export function Overview() {
  return (
    <section className="min-h-[5000px] overflow-hidden bg-black text-white">
      <div className="mt-[280px] mx-auto max-w-4xl px-6">
        <h2 className="lg:text-7xl  md:text-5xl text-3xl font-medium flex flex-row items-center">
          Schreibst 
          <br/>
          du schon 
          <img src="/assets/png/lara-pink.png" alt="lara" className="lg:max-w-[360px] md:max-w-[200px] max-w-[140px] aspect-1 mx-6"/>
          <span className="text-[#DA1C85] lg:text-[200px] md:text-[110px] text-[60px] font-medium">?</span>
        </h2>

        <p className="mt-6 font-normal text-[20px] max-w-[750px]">Das digitale Berichtsheft ist ein Online-Tool, in dem du die Kalenderwochen, Tage und Daten bereits vorgegeben und einen genauen Überblick über deine aktuellen, sowie vergangenen Wochen hast.</p>

        <img src="assets/png/dashboard-report.png" alt="Dashboard Report von Lara" className="my-16 -ml-4 w-[800px]"/>

        <p className="font-normal text-[20px] max-w-[750px]">Am Ende einer jeden Woche befindet sich das Feld “Berichtsheft abgeben”. Natürlich werden auch ganz einfach Urlaube, Krankheitstage und die Berufsschulzeit von lara gespeichert.</p>
      
        <ReportImages/>
      </div>


      <div className="relative mt-[140px]">
        <div className="relative">
          <img src="/assets/png/shape-right.png" className="relative -right-15 z-10"/>
          <img src="/assets/png/shape-left.png" className="absolute top-350 -left-130 z-0"/>
        </div>

        <div className="absolute inset-140 z-20 pointer-events-none select-none flex flex-col items-end gap-140">
          <span className="text-[500px] leading-none font-bold text-[#4864F1]">01</span>
          <span className="text-[500px] leading-none font-bold text-[#DA1C85]">02</span>
          <span className="text-[500px] leading-none font-bold text-[#5B057C]">03</span>
        </div>

        <div className="absolute top-[730px] left-[470px] z-30 flex flex-col items-center gap-190">
          <ContentBox content={"Du behältst jederzeit den vollen Überblick über vergangene und aktuelle Wochen."}/>
          <ContentBox content={"Schneller und unkomplizierter PDF-Export deiner Berichte, genau dann, wenn du ihn brauchst."}/>
          <ContentBox content={"Die Nutzung ist vollständig kostenlos."}/>
        </div>
      </div>
    </section>
  );
}


function Image({report}) {
  return (
    <img 
      src={`/assets/png/report-${report}.png`} 
      alt="Wochentag mit einem Status" 
      className="w-[770px]"
    />
  ); 
}

function ReportImages() {
  return (
    <div className="flex flex-col gap-8 my-18">
      <Image report={1}/>
      <Image report={2}/>
      <Image report={3}/>
    </div>
  );
}

function ContentBox({content}) {
  return(
    <div className="w-[580px] h-[280px] bg-white/70 backdrop-blur-sm rounded-md px-10 py-12 text-center flex items-center justify-center">
      <p className="text-4xl font-normal leading-tight text-black">
        {content}
      </p>  
    </div>
  );
}
