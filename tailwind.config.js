export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sunset-hero":
          "linear-gradient(180deg, #4d5fd1 0%, #6b3fa0 20%, #8b3a9e 40%, #c04b9e 55%, #e0668f 65%, #2a1230 85%, #0a0510 100%)",
        "sunset-panel":
          "linear-gradient(180deg, #8b3fd4 0%, #b83fd0 25%, #d94fb8 50%, #e8618f 70%, #1a0a20 100%)",
        "sun-glow":
          "radial-gradient(circle at 50% 45%, #ffb3c1 0%, #ff6b9d 20%, #c0398f 40%, transparent 70%)",
        "cta-purple":
          "linear-gradient(135deg, #7c5cff 0%, #a855f7 50%, #d946ef 100%)",
      },
    },
  },
};
