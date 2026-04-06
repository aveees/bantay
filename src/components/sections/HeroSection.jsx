import { useState, useEffect } from "react";

const slides = [
  "/videos/vid1.mp4",
  "/videos/vid2.mp4",
  "/videos/vid3.mp4",
  "/videos/vid4.mp4",
  "/videos/vid5.mp4",
  "/videos/vid6.mp4",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        key={slides[current]}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={slides[current]} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-red-900/20" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1
            className="
              font-['Cinzel_Decorative'] font-bold
              text-6xl md:text-8xl
              bg-linear-to-b from-[#fae25c] via-[#a77907] to-[#5a3b00]
              bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(255,180,0,0.4)]
              text-stroke-red
            "
          >
            BANTAY
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-stone-300 md:text-xl">
            From the darkest forests to the quietest plains, creatures once feared in our folktales return.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/aveees/bantay/releases/download/v1.0.0/BANTAY.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-linear-to-b from-[#fa5c5c] via-[#a70707] to-[#5a0000] px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(255,0,0,0.4)] transition hover:bg-red-500"
            >
              Download APK
            </a>

            <a
              href="#teaser"
              className="rounded-full border border-white/30 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Watch Teaser
            </a>
          </div>

          <p className="mt-3 text-sm text-stone-400">
            Available on Android devices only
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 w-full animate-bounce text-center text-white/60">
        ↓ Scroll
      </div>
    </section>
  );
}