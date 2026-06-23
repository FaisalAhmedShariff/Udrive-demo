import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-sm border border-accent/40 bg-accent/10">
        <span className="font-serif text-sm font-black text-accent tracking-tighter">U</span>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-base font-black uppercase tracking-[0.18em] text-white group-hover:text-accent transition-colors">
          U Drive
        </span>
        <span className="text-[8px] uppercase tracking-[0.35em] text-gray-500 mt-0.5">
          Dubai
        </span>
      </span>
    </Link>
  );
}
