import { ExternalLink, Github } from "lucide-react";
import Section, { Badge, LinkButton, Reveal, glass } from "./ui.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className={`${glass} flex flex-col p-6 transition hover:-translate-y-1 hover:border-sky-400/40`}>
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <span className="shrink-0 text-sm text-slate-400">{p.date}</span>
            </div>
            <p className="mt-3 leading-relaxed">{p.description}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-violet-400">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <LinkButton href={p.github} icon={Github} primary>GitHub</LinkButton>
              <LinkButton href={p.demo} icon={ExternalLink}>Live Demo</LinkButton>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
