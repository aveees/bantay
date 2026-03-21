import { Code2, Palette, Layers3 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { container, sectionPadding } from "../../styles/theme";

const developers = [
  {
    name: "Jeallan Abby Sulit",
    role: "Project Leader • UI/UX Designer",
    desc: "Leads the overall vision of BANTAY and designs the interface, layout, and visual presentation of the game and website.",
    icon: Palette,
  },
  {
    name: "Fransua John Villesis",
    role: "Game Programmer",
    desc: "Develops the gameplay systems, mechanics, and technical implementation that bring the world of BANTAY to life.",
    icon: Code2,
  },
  {
    name: "Mike Edniel Mondano",
    role: "Environment Designer",
    desc: "Creates the game’s maps, atmosphere, and environmental visuals inspired by Philippine folklore and haunted locations.",
    icon: Layers3,
  },
];

export default function DevelopersSection() {
  return (
    <section
      id="developers"
      className={`${sectionPadding} relative overflow-hidden bg-[#070404]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.10),transparent_40%)]" />

      <div className={container}>
        <SectionTitle
          eyebrow="The Team"
          title="Meet the Developers"
          desc="Behind BANTAY is a team committed to bringing Philippine folklore into a dark and immersive survival horror experience."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {developers.map((dev, index) => {
            const Icon = dev.icon;

            return (
              <div
                key={dev.name}
                className="group relative overflow-hidden rounded-4xl border border-red-900/30 bg-black/45 p-6 shadow-[0_0_25px_rgba(90,0,0,0.14)] transition duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(120,0,0,0.24)] md:p-8"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-900/20 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-red-900 via-red-500 to-transparent opacity-70 transition group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-800/40 bg-red-950/30 text-red-300">
                    <Icon className="h-7 w-7" />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-red-400/80">
                    Developer {index + 1}
                  </p>

                  <h3 className="mt-2 font-['Cinzel_Decorative'] text-2xl text-red-100">
                    {dev.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-stone-200">
                    {dev.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-stone-300">
                    {dev.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}