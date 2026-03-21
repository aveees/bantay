import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import AnimatedSprite from "../ui/AnimatedSprite";
import { enemyCards } from "../../data/enemies";
import { container, sectionPadding } from "../../styles/theme";

export default function EnemiesSection() {
  const [current, setCurrent] = useState(0);

  const prevEnemy = () => {
    setCurrent((prev) => (prev === 0 ? enemyCards.length - 1 : prev - 1));
  };

  const nextEnemy = () => {
    setCurrent((prev) => (prev === enemyCards.length - 1 ? 0 : prev + 1));
  };

  const activeEnemy = enemyCards[current];

  return (
    <section
      id="enemies"
      className={`${sectionPadding} relative overflow-hidden bg-[#070404]`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.10),transparent_35%)]" />

      <div className={`${container} relative z-10`}>
        <SectionTitle
          eyebrow="Nightmare Creatures"
          title="Enemies from Legend"
          desc="The stories told in whispers are no longer stories. Each enemy embodies a different kind of fear waiting to hunt the unprepared."
        />

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-red-900/30 bg-black/45 shadow-[0_0_35px_rgba(90,0,0,0.16)]">
          <div className="grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left side: animated enemy */}
            <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border-b border-red-900/20 bg-[linear-gradient(to_bottom,rgba(40,0,0,0.25),rgba(0,0,0,0.15))] p-8 lg:min-h-[500px] lg:border-b-0 lg:border-r">
              <div
                className={`absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${activeEnemy.accent}`}
              />
              <div className="absolute bottom-12 h-12 w-40 rounded-full bg-red-950/40 blur-xl" />

              <AnimatedSprite
                frames={activeEnemy.frames}
                alt={activeEnemy.name}
                interval={180}
                className={`relative z-10 w-auto object-contain pixelated transition duration-300 ${activeEnemy.spriteSize}`}
              />
            </div>

            {/* Right side: info */}
            <div className="flex flex-col justify-between p-6 md:p-8 lg:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
                  {activeEnemy.type}
                </p>

                <h3 className="mt-3 font-['Cinzel_Decorative'] text-4xl text-red-100 md:text-5xl">
                  {activeEnemy.name}
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-stone-300 md:text-base">
                  {activeEnemy.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeEnemy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-red-800/30 bg-red-950/20 px-3 py-1 text-xs text-stone-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <div className="mt-8 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={prevEnemy}
                    className="inline-flex items-center gap-2 rounded-full border border-red-800/30 bg-black/40 px-4 py-2 text-sm text-stone-200 transition hover:border-red-500/50 hover:bg-black/60"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={nextEnemy}
                    className="inline-flex items-center gap-2 rounded-full border border-red-800/30 bg-black/40 px-4 py-2 text-sm text-stone-200 transition hover:border-red-500/50 hover:bg-black/60"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Dots */}
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {enemyCards.map((enemy, index) => (
                    <button
                      key={enemy.name}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Show ${enemy.name}`}
                      className={`h-2.5 rounded-full transition ${
                        current === index
                          ? "w-8 bg-red-500 shadow-[0_0_12px_rgba(255,0,0,0.4)]"
                          : "w-2.5 bg-stone-600 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Mini name list */}
                <div className="flex flex-wrap justify-center gap-2 pt-1">
                  {enemyCards.map((enemy, index) => (
                    <button
                      key={enemy.name}
                      type="button"
                      onClick={() => setCurrent(index)}
                      className={`rounded-full px-3 py-1 text-xs transition ${
                        current === index
                          ? "bg-red-700/20 text-red-100"
                          : "text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      {enemy.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}