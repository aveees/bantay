import { useMemo, useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import GlowCard from "../ui/GlowCard";
import { islandGroups } from "../../data/maps";
import { container, sectionPadding } from "../../styles/theme";

export default function MapsSection() {
  const [activeIsland, setActiveIsland] = useState("luzon");

  const selectedIsland = useMemo(
    () => islandGroups.find((group) => group.id === activeIsland),
    [activeIsland]
  );

  return (
    <section id="maps" className={`${sectionPadding} relative overflow-hidden`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.10),transparent_30%)]" />

      <div className={`${container} relative z-10`}>
        <SectionTitle
          eyebrow="Locations"
          title="Maps of Fear"
          desc="Choose an island first, then explore the haunted places hidden within it. Each region carries its own legends, atmosphere, and danger."
        />

        <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {islandGroups.map((island) => {
            const isActive = activeIsland === island.id;

            return (
              <button
                key={island.id}
                type="button"
                onClick={() => setActiveIsland(island.id)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-300 md:px-6 ${
                  isActive
                    ? "border border-red-400/60 bg-red-700/20 text-red-100 shadow-[0_0_20px_rgba(255,0,0,0.22)]"
                    : "border border-red-900/30 bg-black/40 text-stone-300 hover:border-red-500/40 hover:bg-black/55 hover:text-red-100"
                }`}
              >
                {island.name}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-[1.75rem] border border-red-900/30 bg-black/40 p-5 text-center shadow-[0_0_25px_rgba(90,0,0,0.12)] md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
            Selected Island
          </p>
          <h3 className="mt-2 font-['Cinzel_Decorative'] text-3xl text-red-100 md:text-4xl">
            {selectedIsland?.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-stone-300 md:text-base">
            {selectedIsland?.subtitle}
          </p>
        </div>

        <div
          key={activeIsland}
          className="grid gap-6 transition-all duration-500 md:grid-cols-2"
        >
          {selectedIsland?.maps.map((item) => (
            <div key={item.name} className="animate-[fadeIn_.45s_ease]">
              <GlowCard image={item.image} title={item.name} desc={item.desc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}