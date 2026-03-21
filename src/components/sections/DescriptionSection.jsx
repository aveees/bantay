import { useEffect, useRef, useState } from "react";
import { Crosshair, Gamepad2, Map, ShieldAlert } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { container, sectionPadding } from "../../styles/theme";

function RevealBlock({ children, delay = "0ms" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`transition-all duration-1000 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

const highlights = [
  {
    icon: Gamepad2,
    label: "Genre",
    title: "2D Top-Down Survival Horror",
    desc: "BANTAY is a folklore-driven survival horror game where players explore cursed environments, evade or confront terrifying creatures, and uncover the truth behind a land consumed by fear.",
  },
  {
    icon: Crosshair,
    label: "Core Objective",
    title: "Survive, Protect, and Resist the Darkness",
    desc: "Your mission is to endure the horrors of the night, defend the village from supernatural threats, and choose how to fight back through strategy, role abilities, and courage.",
  },
  {
    icon: ShieldAlert,
    label: "Gameplay Focus",
    title: "Combat, Exploration, and Role-Based Play",
    desc: "Choose between Albularyo, Mangkukulam, and Mandirigma, each with different strengths. Search haunted areas, face enemies inspired by Philippine folklore, and use your abilities wisely to survive.",
  },
  {
    icon: Map,
    label: "Player Goal",
    title: "Uncover the Source of the Curse",
    desc: "Beyond survival, players must investigate maps inspired by Luzon, Visayas, and Mindanao, reveal the cause of the spreading darkness, and become the Bantay the land needs.",
  },
];

export default function DescriptionSection() {
  return (
    <section
      id="about"
      className={`${sectionPadding} relative overflow-hidden bg-[#090505]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,0,0,0.12),transparent_35%)]" />

      <div className={container}>
        <SectionTitle
          eyebrow="Game Overview"
          title="What is BANTAY?"
          desc="A survival horror experience inspired by Philippine folklore, where every map, monster, and decision pulls you deeper into a cursed world."
        />

        <div className="grid items-stretch gap-8 xl:grid-cols-2 xl:gap-10">
          {/* LEFT SIDE */}
          <RevealBlock>
            <div className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-4xl border border-red-900/30 bg-black/50 p-6 shadow-[0_0_30px_rgba(90,0,0,0.18)] md:p-8">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-900/20 blur-3xl" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-400/80">
                    Gameplay Premise
                  </p>

                  <h3 className="mt-4 font-['Cinzel_Decorative'] text-3xl text-red-100 md:text-4xl">
                    Become the Guardian of the Night
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-stone-300 md:text-base">
                    In <span className="font-semibold text-red-200">BANTAY</span>,
                    players step into a world where old warnings were true and
                    folklore creatures now roam freely. As the darkness spreads,
                    you must choose a role, survive each encounter, and protect
                    the people before fear devours the land.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  <div className="rounded-2xl border border-red-900/25 bg-white/[0.02] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      Experience
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-200">
                      Tense exploration, role-based combat, and survival-driven gameplay.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-900/25 bg-white/[0.02] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      Setting
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-200">
                      Cursed villages, haunted forests, and folklore-inspired regions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-900/25 bg-white/[0.02] p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                      Theme
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-200">
                      Fear, legend, survival, and the unseen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealBlock>

          {/* RIGHT SIDE */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <RevealBlock key={item.title} delay={`${index * 120}ms`}>
                  <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-red-900/30 bg-black/40 p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-black/55 hover:shadow-[0_0_35px_rgba(120,0,0,0.22)] md:p-6">
                    <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-red-900 via-red-500 to-transparent opacity-70 transition group-hover:opacity-100" />

                    <div className="flex flex-col gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-red-800/40 bg-red-950/30 text-red-300">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
                          {item.label}
                        </p>
                        <h3 className="mt-2 font-['Cinzel_Decorative'] text-2xl text-red-100">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-stone-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}