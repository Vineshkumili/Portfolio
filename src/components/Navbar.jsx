import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data.js";

const links = [["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["experience", "Experience"], ["certifications", "Certifications"], ["contact", "Contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#top" className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-lg font-bold text-transparent">{profile.name}</a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="text-sm text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400">{label}</a></li>
          ))}
        </ul>
        <button className="rounded-lg p-2 text-slate-200 hover:bg-white/10 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 px-5 pb-4 pt-2 md:hidden">
          {links.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10">{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
