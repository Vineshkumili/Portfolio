import { motion, useReducedMotion } from "framer-motion";

export const glass = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md";
export const isPlaceholder = (u) => !u || u.includes("YOUR-");

export function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20 sm:py-24" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-400">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Badge({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">{children}</span>;
}

export function LinkButton({ href, icon: Icon, children, primary = false, download = false }) {
  const base = "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400";
  const look = primary
    ? "bg-gradient-to-r from-violet-600 to-sky-500 text-white hover:opacity-90"
    : "border border-white/15 text-slate-200 hover:bg-white/10";
  if (isPlaceholder(href)) {
    return (
      <span aria-disabled="true" title="Placeholder: add this URL in src/data.js" className={`${base} ${look} cursor-not-allowed border-dashed opacity-50`}>
        {Icon && <Icon size={16} aria-hidden="true" />}{children} (add URL)
      </span>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} download={download || undefined} {...(external && { target: "_blank", rel: "noopener noreferrer" })} className={`${base} ${look}`}>
      {Icon && <Icon size={16} aria-hidden="true" />}{children}
    </a>
  );
}
