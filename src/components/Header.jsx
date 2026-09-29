const smartFeatures = [
  {
    title: "Script To Video",
    image: "/smartfeature1.jpg",
    text: "Turn your written script into a fully edited video. AI picks visuals, pacing, and transitions for you.",
  },
  {
    title: "Clips To Video",
    image: "/smartfeature2.jpg",
    text: "Turn long videos into social media clips. AI picks the best moments, quick.",
  },
  {
    title: "Long Video To Shorts",
    image: "/smartfeature3.jpg",
    text: "Turn long videos into short-form content. AI finds the highlights and cuts them fast.",
  },
];

const Header = () => {
  return (
    <header className="w-full pt-20 px-4 md:px-8 pb-16">
      <div className="relative z-10">
        {/* DESKTOP HEADER */}
        <div className="hidden md:flex flex-col justify-center items-center">
          <h2 className="text-white text-5xl text-center w-full md:max-w-xl lg:max-w-3xl">
            Make Video With AI
          </h2>

          <p className="text-gray-400 text-lg text-center mt-4 max-w-md md:max-w-lg">
            AI powered editor for <span className="text-white">everyone</span>.
            Think bigger, edit faster.
          </p>

          {/* Image container */}
          <div className="mt-12 w-full max-w-sm lg:max-w-md flex justify-center">
            <img
              src="/smartphone.jpg"
              alt="Smartphone layout showcasing AI video editor"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex flex-col justify-center items-center md:hidden">
          <h2 className="text-white text-2xl text-center w-full">
            Make A Video With <br /> Smart Features
          </h2>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 w-full px-4 mt-5 scrollbar-hide">
            {smartFeatures.map((feature) => (
              <div
                key={feature.title}
                className="snap-center shrink-0 w-[85%] h-72 rounded-xl border border-white/20 bg-white/5 overflow-hidden relative flex flex-col justify-end group"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative z-10 p-4">
                  <p className="text-white text-base font-semibold text-center">
                    {feature.title}
                  </p>
                  <p className="text-white/80 text-xs text-center mt-1.5 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
