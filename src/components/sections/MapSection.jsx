import SectionTitle from "../ui/SectionTitle";
import GlowCard from "../ui/GlowCard";
import { mapCards } from "../../data/maps";
import { container, sectionPadding } from "../../styles/theme";

export default function MapsSection() {
  return (
    <section id="maps" className={sectionPadding}>
      <div className={container}>
        <SectionTitle
          eyebrow="Locations"
          title="Maps of Fear"
          desc="Travel across haunted environments inspired by Philippine landscapes, where each region carries its own monsters, rituals, and nightmares."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mapCards.map((item) => (
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