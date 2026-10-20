import { Briefcase } from "lucide-react";
import Section, { Badge, Reveal, glass } from "./ui.jsx";
import { internships } from "../data.js";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Internship Experience" title="Machine learning and data analytics">
      <div className="grid gap-6 lg:grid-cols-2">
        {internships.map((internship, index) => (
          <Reveal key={internship.company} delay={index * 0.1} className={`${glass} p-6 sm:p-8`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <Briefcase className="mt-1 shrink-0 text-violet-400" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-white">{internship.role}</h3>
                  <p className="text-sky-300">{internship.company}</p>
                </div>
              </div>
              <span className="rounded-lg bg-white/5 px-3 py-1 text-sm text-slate-300">{internship.dates}</span>
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-sky-400">
              {internship.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {internship.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
