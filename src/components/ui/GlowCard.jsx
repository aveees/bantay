import { cardBase } from "../../styles/theme";

export default function GlowCard({ image, title, desc }) {
  return (
    <div className={cardBase}>
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-['Cinzel_Decorative'] text-2xl text-amber-100">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-stone-300">{desc}</p>
      </div>
    </div>
  );
}