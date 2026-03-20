export default function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-500/80">
        {eyebrow}
      </p>
      <h2 className="font-['Cinzel_Decorative'] text-3xl text-amber-700 md:text-5xl text-stroke-red">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-sm leading-7 text-stone-300 md:text-base">
          {desc}
        </p>
      )}
    </div>
  );
}