import { Brain, Cloud, Code2, Database, Globe, Wrench } from "lucide-react";
import Section, { Badge, Reveal, glass } from "./ui.jsx";
import { skills } from "../data.js";

const icons = { Brain, Cloud, Code2, Database, Globe, Wrench };

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="Tools and technologies I work with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ group, icon, items }, i) => {
          const Icon = icons[icon];
          return (
            <Reveal key={group} delay={i * 0.05} className={`${glass} p-5 transition hover:-translate-y-1 hover:border-violet-400/40`}>
              <h3 className="flex items-center gap-2 font-semibold text-white"><Icon size={18} className="text-sky-400" aria-hidden="true" />{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{items.map((s) => <Badge key={s}>{s}</Badge>)}</div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
