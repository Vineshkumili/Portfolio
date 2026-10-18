import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Section, { LinkButton, Reveal, glass, isPlaceholder } from "./ui.jsx";
import { profile as p } from "../data.js";

export default function Contact() {
  const rows = [
    [Mail, "Email", p.email, `mailto:${p.email}`],
    [Phone, "Phone", p.phone, `tel:${p.phone.replace(/\s/g, "")}`],
    [MapPin, "Location", p.location, null],
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's connect">
      <Reveal className={`${glass} p-6 sm:p-8`}>
        <p className="max-w-xl">I'm open to AI/ML internships, Data Science roles and software development opportunities. The quickest way to reach me is by email.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {rows.map(([Icon, label, value, href]) => (
            <li key={label} className="flex items-start gap-3">
              <Icon size={18} className="mt-1 shrink-0 text-sky-400" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
                {href ? <a href={href} className="break-all text-white hover:text-sky-300">{value}</a> : <p className="text-white">{value}</p>}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href={`mailto:${p.email}?subject=Opportunity for Kumili Vinesh`} icon={Mail} primary>Email Me</LinkButton>
          <LinkButton href={p.linkedin} icon={Linkedin}>LinkedIn</LinkButton>
          <LinkButton href={p.github} icon={Github}>GitHub</LinkButton>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  const social = [[p.linkedin, Linkedin, "LinkedIn"], [p.github, Github, "GitHub"], [`mailto:${p.email}`, Mail, "Email"]];
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} {p.name} · AI &amp; Data Science Student</p>
        <ul className="flex gap-4">
          {social.map(([href, Icon, label]) => (
            <li key={label}>
              {isPlaceholder(href)
                ? <span title="Add this URL in src/data.js" className="cursor-not-allowed opacity-40"><Icon size={18} aria-label={`${label} (link not set)`} /></span>
                : <a href={href} aria-label={label} {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })} className="hover:text-white"><Icon size={18} /></a>}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
