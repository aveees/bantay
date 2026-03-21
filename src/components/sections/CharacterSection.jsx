import SectionTitle from "../ui/SectionTitle";
import AnimatedSprite from "../ui/AnimatedSprite";
import { characterCards } from "../../data/characters";
import { container, sectionPadding } from "../../styles/theme";

export default function CharactersSection() {
  return (
    <section
      id="characters"
      className={`${sectionPadding} relative overflow-hidden bg-[#080404]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.12),transparent_35%)]" />

      <div className={`${container} relative z-10`}>
        <SectionTitle
          eyebrow="Guardians"
          title="Choose Your Path"
          desc="Every guardian fights differently. Heal the land, wield forbidden power, or meet the darkness with steel."
        />

        <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
          {characterCards.map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-4xl border border-red-900/30 bg-black/45 p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(120,0,0,0.22)] md:p-8"
            >
              <div
                className={`absolute inset-x-0 top-0 h-40 bg-linear-to-b ${item.accent}`}
              />

              <div className="relative flex h-full flex-col items-center text-center">
                {/* Sprite stage */}
                <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/5 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]">
                  <div className="absolute bottom-6 h-10 w-32 rounded-full bg-red-950/40 blur-xl" />

                  <AnimatedSprite
                    frames={item.frames}
                    alt={item.name}
                    interval={180}
                    className={`relative z-10 w-auto object-contain pixelated transition duration-300 group-hover:scale-110 ${item.spriteSize || "h-[140px] md:h-[160px]"
                      }`}
                  />
                </div>

                {/* Info */}
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
                  {item.role}
                </p>

                <h3 className="mt-2 font-['Cinzel_Decorative'] text-3xl text-red-100">
                  {item.name}
                </h3>

                <p className="mt-4 min-h-[84px] text-sm leading-7 text-stone-300">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-red-800/30 bg-red-950/20 px-3 py-1 text-xs text-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}