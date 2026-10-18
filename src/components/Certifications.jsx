import { Award } from "lucide-react";
import Section, { LinkButton, Reveal, glass } from "./ui.jsx";
import { certifications } from "../data.js";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning">
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05} className={`${glass} flex flex-col p-5 transition hover:-translate-y-1 hover:border-violet-400/40`}>
            <Award className="text-sky-400" aria-hidden="true" />
            <h3 className="mt-3 font-semibold text-white">{c.title}</h3>
            <p className="text-sm text-slate-400">{c.issuer}</p>
            <div className="pt-4"><LinkButton href={c.url}>View certificate</LinkButton></div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
