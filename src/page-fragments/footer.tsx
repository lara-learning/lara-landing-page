export function Footer() {
  return (
    <section className="h-[64px] mb-[64px] bg-black px-8 md:px-16 lg:px-32">
      <div className="relative flex gap-[24px] md:gap-[32px] items-center w-full max-w-[900px] mx-auto h-full">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-[#4864F1] to-[#DA1C85]" />
        {FooterLink("/impressum/", "Impressum")}
        <Seperator />
        {FooterLink("/datenschutz/", "Datenschutzerklärung")}
      </div>
    </section>
  );
}

function Seperator() {
  return <div className="w-[1px] h-[18px] md:h-[22px] bg-white"></div>;
}

function FooterLink(href: string, text: string) {
  return (
    <a
      className="text-white transition-colors hover:text-[#DA1C85] text-[18px] md:text-[20px] lg:text-[22px] font-medium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:pointer-none after:transition-all hover:after:w-full hover:after:bg-[#DA1C85]"
      href={href}
    >
      {text}
    </a>
  );
}
