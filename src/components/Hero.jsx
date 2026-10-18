import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../data.js";
import { LinkButton } from "./ui.jsx";

const layers = [3, 5, 5, 2];
const pts = layers.flatMap((n, l) => Array.from({ length: n }, (_, i) => ({ l, i, x: 40 + l * 90, y: (220 / (n + 1)) * (i + 1) })));

function NeuralViz() {
  const reduce = useReducedMotion();
  const lines = pts.flatMap((a) => pts.filter((b) => b.l === a.l + 1).map((b) => [a, b]));
  return (
    <svg viewBox="0 0 350 220" role="img" aria-label="Illustration of a neural network" className="w-full max-w-md">
      <defs>
        <linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#8b5cf6" /><stop offset="1" stopColor="#38bdf8" /></linearGradient>
      </defs>
      {lines.map(([a, b], k) => <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#g)" strokeOpacity="0.25" />)}
      {pts.map((p, k) => (
        <motion.circle key={k} cx={p.x} cy={p.y} r="7" fill="url(#g)"
          animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: (k % 7) * 0.3 }} />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-16 sm:pt-24 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">Hello, I'm</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-6xl">
          <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">{profile.name}</span>
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-200">{profile.headline}</p>
        <p className="mt-4 max-w-xl leading-relaxed">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href="#projects" icon={ArrowRight} primary>View My Projects</LinkButton>
          <LinkButton href={profile.resume} icon={Download} download>Download Resume</LinkButton>
          <LinkButton href="#contact" icon={Mail}>Contact Me</LinkButton>
        </div>
      </motion.div>
      <div className="flex justify-center"><NeuralViz /></div>
    </section>
  );
}
