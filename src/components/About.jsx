import { GraduationCap } from "lucide-react";
import Section, { Badge, Reveal, glass } from "./ui.jsx";
import { education as edu } from "../data.js";

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Building intelligent, deployable software">
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal className="space-y-4 leading-relaxed">
          <p>I'm a B.Tech student in Artificial Intelligence and Data Science with a strong foundation in Data Structures, Machine Learning, Deep Learning and problem-solving.</p>
          <p>I enjoy turning models into working products: from a Random Forest health-monitoring tool with a Gradio interface to a full-stack college assistance platform with an AI chatbot, built on Node.js and MongoDB.</p>
          <p>During my Machine Learning internship I worked on model development, deployment and MLOps using MLflow, Docker and cloud infrastructure.</p>
        </Reveal>
        <Reveal delay={0.1} className={`${glass} p-6`}>
          <div className="flex items-start gap-4">
            <GraduationCap className="mt-1 shrink-0 text-violet-400" aria-hidden="true" />
            <div>
              <h3 className="font-semibold text-white">{edu.degree}</h3>
              <p>{edu.school}</p>
              <p className="text-sm text-slate-400">{edu.years}</p>
              <p className="mt-2 inline-block rounded-lg bg-gradient-to-r from-violet-600/30 to-sky-500/30 px-3 py-1 text-sm font-semibold text-white">CGPA: {edu.cgpa}</p>
            </div>
          </div>
          <p className="mb-2 mt-5 text-sm font-medium text-slate-400">Relevant coursework</p>
          <div className="flex flex-wrap gap-2">{edu.coursework.map((c) => <Badge key={c}>{c}</Badge>)}</div>
        </Reveal>
      </div>
    </Section>
  );
}
