import SectionTitle from "../ui/SectionTitle";
import { container, sectionPadding } from "../../styles/theme";
export default function TeaserSection() {
    return (
        <section id="teaser" className={sectionPadding}>
            <div className={container}>
                <SectionTitle
                    eyebrow="Official Teaser"
                    title="Watch the Darkness Unfold"
                    desc=" Enter the world of BANTAY, a 2D top-down survival horror inspired by Philippine folklore. Watch the
                    warning rise, the village fall into fear, and the guardians step into the dark."
                />

                <div className="group relative overflow-hidden rounded-4xl border border-red-900/40 bg-black/70 shadow-[0_0_0_1px_rgba(120,0,0,0.25),0_0_35px_rgba(120,0,0,0.18)] transition duration-300 hover:border-red-500/70 hover:shadow-[0_0_0_1px_rgba(255,0,0,0.3),0_0_50px_rgba(255,0,0,0.25)]">

                    {/* glow background */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,0,0.12),transparent_65%)]" />

                    {/* video */}
                    <div className="relative aspect-video w-full">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/mnBwRSG2ib0"
                            title="BANTAY Teaser"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}