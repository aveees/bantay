import SectionTitle from "../ui/SectionTitle";
import GlowCard from "../ui/GlowCard";
import { characterCards } from "../../data/characters";
import { container, sectionPadding } from "../../styles/theme";

export default function CharactersSection() {
  return (
    <section id="characters" className={sectionPadding}>
      <div className={container}>
        <SectionTitle
          eyebrow="Guardians"
          title="Choose Your Path"
          desc="Every guardian fights differently. Heal the land, wield forbidden power, or meet the darkness with steel."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {characterCards.map((item) => (
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