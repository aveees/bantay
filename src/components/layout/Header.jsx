import { Download } from "lucide-react";
import bantay from '../../assets/imgs/bantay.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-400/10 bg-black/45 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p
            className="
              font-['Cinzel_Decorative'] font-bold
              text-4xl 
              bg-linear-to-b from-[#fae25c] via-[#a77907] to-[#5a3b00]
              bg-clip-text text-transparent
              drop-shadow-[0_0_20px_rgba(255,180,0,0.4)]
              text-stroke-red
            "
          >
            BANTAY
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
            2D Survival Horror
          </p>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-stone-300 lg:flex">
          <a href="#about" className="transition hover:text-red-600">About</a>
          <a href="#maps" className="transition hover:text-red-600">Maps</a>
          <a href="#characters" className="transition hover:text-red-600">Characters</a>
          <a href="#enemies" className="transition hover:text-red-600">Enemies</a>
          <a href="#teaser" className="transition hover:text-red-600">Teaser</a>
          <a href="#developers" className="transition hover:text-red-600">Developers</a>
        </nav>

        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full border border-red-300/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-100 shadow-[0_0_20px_rgba(255,145,0,0.14)] transition hover:border-red-200/60 hover:bg-red-400/20 hover:shadow-[0_0_30px_rgba(255,145,0,0.28)]"
        >
          <Download className="h-4 w-4" />
          Download APK
        </a>
      </div>
    </header>
  );
}