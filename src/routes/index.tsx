import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Hero />
      <main>
        <Thesis />
        <Problem />
        <Framework />
        <About />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <header className="flex items-center justify-between py-8">
          <a href="#top" className="text-sm tracking-[0.18em] uppercase text-navy-foreground/90">
            Stryer Operations
          </a>
          <nav className="hidden gap-10 text-xs uppercase tracking-[0.18em] text-navy-foreground/60 md:flex">
            <a href="#framework" className="hover:text-navy-foreground transition-colors">Diagnostic</a>
            <a href="#about" className="hover:text-navy-foreground transition-colors">About</a>
            <a href="#insights" className="hover:text-navy-foreground transition-colors">Writing</a>
            <a href="#contact" className="hover:text-navy-foreground transition-colors">Contact</a>
          </nav>
        </header>

        <div className="pt-24 pb-32 md:pt-40 md:pb-56">
          <p className="text-xs uppercase tracking-[0.24em] text-navy-foreground/50">
            Jeremy Stryer · Executive Advisory
          </p>
          <h1 className="mt-10 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Building US–Mexico
            <br />
            <span className="text-navy-foreground/70">organizations that execute.</span>
          </h1>
          <div className="mt-16 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-7 text-lg leading-relaxed text-navy-foreground/75 md:text-xl">
              Advisory to US executives operating teams and professional services
              organizations in Mexico. The focus is the operating system behind
              the team — ownership, communication, decision-making, and execution —
              not recruiting, outsourcing, or staffing.
            </p>
            <div className="md:col-span-5 md:pl-10 md:border-l md:border-navy-foreground/15">
              <p className="text-xs uppercase tracking-[0.2em] text-navy-foreground/50">
                For
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
                CEOs, COOs, and functional leaders responsible for cross-border
                operations, professional services delivery, or a growing team in
                Mexico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Thesis
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl leading-snug text-foreground md:text-4xl">
              Most US–Mexico operating problems are not talent problems, culture
              problems, or language problems. They are structural: the operating
              model was never designed for a distributed, cross-border team.
            </p>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The result is quiet friction — missed handoffs, escalating
              decisions, duplicated work, and leaders who cannot explain why a
              capable team is not executing. This is the work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-10 md:grid-cols-12">
      <div className="md:col-span-4">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
      </div>
      <div className="md:col-span-8">
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Problem() {
  const points = [
    {
      k: "Ownership",
      v: "It is unclear who owns which outcomes across the border.",
    },
    {
      k: "Decision-Making",
      v: "Small decisions escalate. Larger ones stall waiting for US leadership.",
    },
    {
      k: "Communication",
      v: "Expectations are implied rather than made explicit, leaving room for interpretation.",
    },
    {
      k: "Processes",
      v: "Critical workflows live in people's heads instead of documented systems.",
    },
    {
      k: "Assumptions",
      v: "US leadership and Mexico teams operate from different mental models of how the work should run.",
    },
  ];
  return (
    <section id="problem" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="The Problem"
          title="Where cross-border teams quietly break."
          description="These breakdowns rarely announce themselves. They surface as missed deadlines, quiet attrition, duplicated work, and leadership frustration that has no obvious cause."
        />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {points.map((p) => (
            <div key={p.k} className="bg-background p-8 md:p-10">
              <div className="flex items-baseline gap-4">
                <span className="text-xs tabular-nums text-muted-foreground">
                  0{points.indexOf(p) + 1}
                </span>
                <div className="font-serif text-xl text-foreground md:text-2xl">
                  {p.k}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {p.v}
              </p>
            </div>
          ))}
          <div className="hidden bg-background p-8 md:block md:p-10" />
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const areas = [
    { n: "01", title: "Ownership", q: "Are people clear on who owns outcomes?" },
    { n: "02", title: "Communication", q: "Are expectations explicit or dependent on interpretation?" },
    { n: "03", title: "Decision-Making", q: "Can teams make decisions without constant escalation?" },
    { n: "04", title: "Operating Systems", q: "Are processes repeatable and scalable?" },
    { n: "05", title: "Cross-Border Alignment", q: "Are US and Mexico teams working from shared assumptions?" },
  ];
  return (
    <section id="framework" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="The Framework"
          title="The US–Mexico Operations Diagnostic."
          description="A structured assessment across five areas that determine whether a cross-border team scales — or stalls. Used as the starting point for every engagement."
        />

        <div className="mt-16 border-t border-border">
          {areas.map((a) => (
            <div
              key={a.n}
              className="grid grid-cols-12 gap-6 border-b border-border py-8 md:gap-10 md:py-10"
            >
              <div className="col-span-2 text-xs tabular-nums tracking-widest text-muted-foreground md:col-span-1">
                {a.n}
              </div>
              <div className="col-span-10 font-serif text-xl text-foreground md:col-span-4 md:text-2xl">
                {a.title}
              </div>
              <div className="col-span-12 text-base leading-relaxed text-muted-foreground md:col-span-7 md:text-lg">
                {a.q}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Request the diagnostic
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading eyebrow="About" title="Jeremy Stryer." />
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground">
              Founder, Stryer Operations
            </p>
          </div>
          <div className="md:col-span-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Jeremy Stryer has spent his career as a COO, founder, and operator
              building and managing teams across the US–Mexico border.
            </p>
            <p>
              His focus is helping US companies understand and improve the
              systems required to successfully scale operations in Mexico — the
              ownership, communication, decision-making, and process work that
              determines whether a team executes or drifts.
            </p>
            <p>
              He writes and advises for executives who prefer clarity over
              methodology, and structure over slogans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section id="insights" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on US–Mexico operations."
          description="Essays on the operating systems behind cross-border teams — how ownership, communication, and decision-making determine whether a team executes."
        />
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://substack.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            Read on Substack →
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm uppercase tracking-[0.18em] text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-foreground transition-colors sm:ml-8"
          >
            Follow on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <section id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.24em] text-navy-foreground/50">
              Contact
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
              Discuss your situation.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/70 md:text-lg">
              A short note about what you are seeing is enough. Replies are
              personal and typically come within two business days.
            </p>

            {submitted ? (
              <div className="mt-12 border-l border-navy-foreground/30 pl-6">
                <p className="font-serif text-2xl">Thank you.</p>
                <p className="mt-2 text-navy-foreground/70">
                  Your note has been received. Jeremy will follow up directly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-14 grid gap-10 md:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Role" name="role" required />
                <Field label="Email" name="email" type="email" required />
                <div className="md:col-span-2">
                  <Field label="Challenge or situation" name="situation" textarea required />
                </div>
                <div className="md:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="text-sm uppercase tracking-[0.18em] text-navy-foreground border-b border-navy-foreground pb-1 hover:opacity-70 transition-opacity"
                  >
                    Send Note →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const base =
    "mt-3 w-full border-0 border-b border-navy-foreground/25 bg-transparent px-0 py-2 text-base text-navy-foreground placeholder:text-navy-foreground/40 focus:border-navy-foreground focus:outline-none focus:ring-0";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-navy-foreground/50">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={base} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <div>© {new Date().getFullYear()} Stryer Operations</div>
        <div>Building US–Mexico Organizations</div>
      </div>
    </footer>
  );
}
