import { Briefcase } from "lucide-react";
import Section, { Badge, Reveal, glass } from "./ui.jsx";
import { internship as w } from "../data.js";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Internship Experience" title="Hands-on ML and MLOps">
      <Reveal className={`${glass} p-6 sm:p-8`}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-4">
            <Briefcase className="mt-1 shrink-0 text-violet-400" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold text-white">{w.role}</h3>
              <p className="text-sky-300">{w.company}</p>
            </div>
          </div>
          <span className="rounded-lg bg-white/5 px-3 py-1 text-sm text-slate-300">{w.dates}</span>
        </div>
        <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-sky-400">{w.points.map((p) => <li key={p}>{p}</li>)}</ul>
        <div className="mt-6 flex flex-wrap gap-2">{w.tools.map((t) => <Badge key={t}>{t}</Badge>)}</div>
      </Reveal>
    </Section>
  );
}
