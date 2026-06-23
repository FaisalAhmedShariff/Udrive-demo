"use client";

import {
  siAudi,
  siAmg,
  siBentley,
  siBmw,
  siFerrari,
  siLamborghini,
  siMclaren,
  siPorsche,
  siRollsroyce,
} from "simple-icons";

import { brandLogos } from "@/data/mockVehicles";

const ICON_MAP = {
  ferrari: siFerrari,
  lamborghini: siLamborghini,
  rollsroyce: siRollsroyce,
  porsche: siPorsche,
  bentley: siBentley,
  amg: siAmg,
  audi: siAudi,
  mclaren: siMclaren,
  bmw: siBmw,
};

function BrandMark({ brand }) {
  if (brand.slug === "wordmark") {
    return (
      <span
        className="inline-flex items-center justify-center px-3 py-1.5 border border-white/15 rounded-sm text-[10px] font-bold tracking-[0.35em] text-white/70 uppercase whitespace-nowrap"
        aria-label={brand.name}
      >
        {brand.wordmark}
      </span>
    );
  }

  const icon = ICON_MAP[brand.slug];
  if (!icon) return null;

  return (
    <svg
      role="img"
      aria-label={brand.name}
      viewBox="0 0 24 24"
      className="h-7 w-auto max-w-[120px] fill-current text-white/35 hover:text-white/90 transition-colors duration-300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{brand.name}</title>
      <path d={icon.path} />
    </svg>
  );
}

export default function BrandLogoStrip() {
  const track = [...brandLogos, ...brandLogos];

  return (
    <section className="relative py-12 bg-[#0B0B0C] border-y border-white/[0.04] overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-infinite-scroll">
        {[0, 1].map((set) => (
          <div
            key={set}
            className="flex items-center gap-14 sm:gap-20 px-8 shrink-0"
            aria-hidden={set === 1 ? true : undefined}
          >
            {track.slice(0, brandLogos.length).map((brand) => (
              <div key={`${set}-${brand.name}`} className="shrink-0 flex items-center justify-center min-w-[80px]">
                <BrandMark brand={brand} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
