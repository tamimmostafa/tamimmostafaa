import { createFileRoute } from "@tanstack/react-router";
import { Typewriter } from "@/components/Typewriter";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kade Hossain — Cybersecurity Student" },
      {
        name: "description",
        content:
          "Cybersecurity student focused on ethical hacking, CTFs, and learning how systems break. Projects, certifications, and writeups.",
      },
      { property: "og:title", content: "Kade Hossain — Cybersecurity Student" },
      {
        property: "og:description",
        content: "Cybersecurity student · Ethical hacker · CTF player",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

const skills = [
  "Network Security",
  "Penetration Testing",
  "Python",
  "Linux",
  "OSINT",
  "Cryptography",
  "Web Exploitation",
  "Malware Analysis",
];

const projects = [
  {
    name: "subhound",
    desc: "A small async tool for subdomain discovery — combines passive sources with permutation bruteforce.",
    tags: ["Python", "Recon"],
  },
  {
    name: "CVE-2024 writeup",
    desc: "Reproduction and explanation of an authenticated RCE in a self-hosted dashboard, with the patched diff.",
    tags: ["CVE", "Writeup"],
  },
  {
    name: "shellcrypt",
    desc: "Educational payload encoder I built to learn how AV/EDR signatures work in a controlled lab.",
    tags: ["Python", "Lab"],
  },
  {
    name: "ctf-toolkit",
    desc: "My personal scripts for CTFs — hash detection, JWT helpers, padding-oracle, steg utilities.",
    tags: ["CTF", "CLI"],
  },
];

const certs = [
  { name: "CompTIA Security+", year: "2025" },
  { name: "eJPT", year: "2025" },
  { name: "CEH (in progress)", year: "2026" },
  { name: "TryHackMe — Top 1%", year: "Ongoing" },
];

const ctfs = [
  { platform: "HackTheBox", rank: "Pro Hacker", solved: 142 },
  { platform: "TryHackMe", rank: "Top 1%", solved: 218 },
  { platform: "PicoCTF 2024", rank: "#312 / 18k", solved: 47 },
  { platform: "CTFtime (team)", rank: "Local Top 10", solved: 31 },
];

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 text-sm">
        <a href="#top" className="font-mono text-foreground">
          kade<span className="text-primary">.</span>
        </a>
        <nav className="hidden gap-7 text-muted-foreground sm:flex">
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["CTF", "#ctf"],
            ["Contact", "#contact"],
          ].map(([n, h]) => (
            <a key={n} href={h} className="link-underline hover:text-foreground">
              {n}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
      — {children}
    </div>
  );
}

function Index() {
  useReveal();

  return (
    <div id="top" className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="reveal">
            <p className="font-mono text-sm text-primary">Hi, I'm Kade —</p>
            <h1 className="mt-5 font-mono text-4xl font-semibold leading-tight md:text-6xl">
              a cybersecurity student
              <br />
              who likes to{" "}
              <Typewriter
                words={["break things", "read code", "play CTFs", "learn slowly"]}
                className="text-primary"
              />
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              I'm in my final year studying offensive security. Most days I'm
              either knee-deep in a HackTheBox machine, writing small Python
              tools, or trying to explain a CVE to myself in plain English.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
              <a href="#work" className="link-underline text-foreground">
                See what I'm working on →
              </a>
              <a href="#contact" className="link-underline text-muted-foreground hover:text-foreground">
                Or just say hi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionLabel>About</SectionLabel>
          <div className="reveal grid grid-cols-1 gap-10 md:grid-cols-5">
            <div className="md:col-span-3 space-y-5 leading-relaxed text-foreground">
              <p>
                I got into security because I wanted to understand how things
                actually work — not the polished surface, but the messy parts
                underneath. Four years in, that curiosity hasn't worn off.
              </p>
              <p className="text-muted-foreground">
                Outside of class I run a small homelab, contribute writeups,
                and play CTFs solo and with my university team. I'm slowly
                moving toward red team work, but mostly I'm just here to learn.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-md border border-border bg-card p-5 font-mono text-sm">
                <div className="text-muted-foreground">whoami</div>
                <div className="mt-1 text-foreground">
                  kade — student, tinkerer
                </div>
                <div className="mt-4 text-muted-foreground">status</div>
                <div className="mt-1 text-primary">
                  learning, always<span className="cursor-blink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionLabel>What I work with</SectionLabel>
          <div className="reveal flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border px-4 py-1.5 font-mono text-sm text-foreground/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionLabel>Selected work</SectionLabel>
          <div className="divide-y divide-border">
            {projects.map((p) => (
              <a
                key={p.name}
                href="#"
                className="reveal group block py-6 transition"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-mono text-lg text-foreground group-hover:text-primary">
                    {p.name}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                    GitHub ↗
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 font-mono text-[11px] text-muted-foreground">
                  {p.tags.map((t) => (
                    <span key={t}>· {t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CERTS + CTF */}
      <section id="ctf" className="border-b border-border">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
          <div className="reveal">
            <SectionLabel>Certifications</SectionLabel>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li
                  key={c.name}
                  className="flex items-baseline justify-between border-b border-border pb-3 font-mono text-sm"
                >
                  <span className="text-foreground">{c.name}</span>
                  <span className="text-muted-foreground">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <SectionLabel>CTF</SectionLabel>
            <ul className="space-y-3">
              {ctfs.map((c) => (
                <li
                  key={c.platform}
                  className="border-b border-border pb-3 font-mono text-sm"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-foreground">{c.platform}</span>
                    <span className="text-primary">{c.solved} solved</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {c.rank}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="reveal">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-mono text-2xl text-foreground md:text-3xl">
              Want to chat about security, school, or a project?
            </h2>
            <p className="mt-3 text-muted-foreground">
              I'm always up for a good conversation. The fastest way to reach me:
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 font-mono text-sm sm:grid-cols-3">
              {[
                ["Email", "kade@protonmail.com", "mailto:kade@protonmail.com"],
                ["GitHub", "@kade-sec", "https://github.com"],
                ["LinkedIn", "in/kade-sec", "https://linkedin.com"],
              ].map(([label, value, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group rounded-md border border-border p-4 transition hover:border-primary"
                >
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="mt-1 text-foreground group-hover:text-primary">
                    {value} <span className="opacity-60">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <div>© {new Date().getFullYear()} Kade Hossain</div>
          <div>Made with care, coffee, and a few too many tabs.</div>
        </div>
      </footer>
    </div>
  );
}
