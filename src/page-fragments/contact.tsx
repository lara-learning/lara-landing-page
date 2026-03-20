export function Contact() {
  return (
    <section className="min-h-[900px] bg-black flex justify-center">
      <div className="mt-[140px] px-3 w-full max-w-xl space-y-10 text-left">
        <h1 className="text-[120px] font-extrabold text-[#6A2FEE]">Kontakt</h1>
            
        <div className="space-y-1 mt-[75px]">
          <p className="text-white text-[40px]">So erreichst du uns</p>
          <p className="text-lg text-[30px]">
            <span className="text-[#6A2FEE] font-semibold">Website: </span>
            <a href="https://lara.sinnerschrader.com/" className="text-white underline underline-offset-4 hover:text-violet-400">https://lara.sinnerschrader.com/</a>
          </p>        
        </div>

        <div className="space-y-2 pt-6 mt-[75px]">
          <p className="text-white text-[40px]">Jetzt Kontakt aufnehmen</p>
          <p className="text-lg text-[30px]">
            <span className="text-[#6A2FEE] font-semibold">E-Mail: </span>
            <a href="mailto:laraconnect@accenture.com" className="text-white underline underline-offset-4 hover:text-violet-400">laraconnect@accenture.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
