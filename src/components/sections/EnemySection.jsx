import SectionTitle from "../ui/SectionTitle";
import GlowCard from "../ui/GlowCard";
import { enemyCards } from "../../data/enemies";
import { container, sectionPadding } from "../../styles/theme";

export default function EnemiesSection() {
  return (
    <section id="enemies" className={sectionPadding}>
      <div className={container}>
        <SectionTitle
          eyebrow="Nightmare Creatures"
          title="Enemies from Legend"
          desc="The stories told in whispers are no longer stories. Each enemy embodies a different kind of fear waiting to hunt the unprepared."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {enemyCards.map((item) => (
            <GlowCard
              key={item.name}
              image={item.image}
              title={item.name}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}