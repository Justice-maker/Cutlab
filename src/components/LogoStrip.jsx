const logos = [
  { name: "Mode", image: "/mode.jpg" },
  { name: "LegalZoom", image: "/legalzoom.jpg" },
  { name: "Autodesk", image: "/autodesk.jpg" },
  { name: "Descript", image: "/descript.jpg" },
];

const LogoStrip = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {logos.map((logo) => (
          <img
            key={logo.name}
            src={logo.image}
            alt={logo.name}
            className="h-10 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;
