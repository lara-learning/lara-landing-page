export function Contact() {
  return (
    <section className="py-[195px] bg-black px-8 md:px-16 lg:px-32">
      <div className="w-full max-w-[900px] mx-auto">
        <h1 className="text-[80px] lg:text-[100px] font-extrabold text-[#6A2FEE]">
          Kontakt
        </h1>
        <ContactComponent
          title={"So erreichst du uns"}
          label={"Website: "}
          link={"https://lara.sinnerschrader.com/"}
        />

        <ContactComponent
          title={"Jetzt Kontakt aufnehmen"}
          label={"E-Mail: "}
          link={"mailto:laraconnect@accenture.com"}
        />
      </div>
    </section>
  );
}

const ContactComponent = ({
  title,
  label,
  link,
}: {
  title: string;
  label: string;
  link: string;
}) => {
  const displayText = link.replace("mailto:", "");

  return (
    <div className="mt-[50px]">
      <p className="text-white text-[18px] md:text-[22px] lg:text-[26px]">
        {title}
      </p>
      <p className="text-[18px] md:text-[22px] lg:text-[26px]">
        <span className="text-[#6A2FEE] font-semibold">{label}</span>
        <a
          href={link}
          className="text-white font-light underline underline-offset-4 transition-colors hover:text-[#DA1C85]"
        >
          {displayText}
        </a>
      </p>
    </div>
  );
};
