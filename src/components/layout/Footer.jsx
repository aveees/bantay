export default function Footer() {
  return (
    <footer className="border-t border-amber-400/10 bg-black/40 px-4 py-8 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="font-['Cinzel_Decorative'] text-xl text-amber-100">
            BANTAY
          </p>
          <p className="mt-1 text-sm text-stone-400">
            A 2D top-down survival horror inspired by Philippine folklore.
          </p>
        </div>
        <div className="text-sm text-stone-400">© 2026 BANTAY. All rights reserved.</div>
      </div>
    </footer>
  );
}