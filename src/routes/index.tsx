import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <main>
        <Hero />
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

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#top" className="font-serif text-xl tracking-tight text-foreground">
          Stryer Operations
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#problem" className="hover:text-foreground transition-colors">
            The Problem
          </a>
          <a href="#framework" className="hover:text-foreground transition-colors">
            Diagnostic
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#insights" className="hover:text-foreground transition-colors">
            Insights
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-36">
        <p className="mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Jeremy Stryer · Advisory
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          Building <span className="italic text-accent">US–Mexico</span>
          <br />
          Organizations
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          I write about why cross-border teams break — and how leaders fix the operating
          systems behind ownership, communication, and execution.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#framework"
            className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Take the US–Mexico Operations Diagnostic
          </a>
          <a
            href="#insights"
            className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Read My Insights →
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-6 text-xs uppercase tracking-[0.2em] text-accent">{children}</p>
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
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>The Problem</SectionLabel>
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
          It usually isn't a talent problem.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              When US companies struggle with their Mexico teams, the first instinct is
              to blame talent or language. In practice, the deeper issue is almost
              always an unclear operating model. The people are capable. The structure
              they are working inside is not.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              These breakdowns rarely announce themselves. They surface as missed
              deadlines, quiet attrition, duplicated work, and leadership frustration
              that has no obvious cause.
            </p>
          </div>
          <ul className="space-y-6 md:col-span-2">
            {points.map((p) => (
              <li key={p.k} className="border-l border-border pl-4">
                <div className="font-serif text-lg text-foreground">{p.k}</div>
                <div className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {p.v}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const areas = [
    {
      n: "01",
      title: "Ownership",
      q: "Are people clear on who owns outcomes?",
    },
    {
      n: "02",
      title: "Communication",
      q: "Are expectations explicit or dependent on interpretation?",
    },
    {
      n: "03",
      title: "Decision-Making",
      q: "Can teams make decisions without constant escalation?",
    },
    {
      n: "04",
      title: "Operating Systems",
      q: "Are processes repeatable and scalable?",
    },
    {
      n: "05",
      title: "Cross-Border Alignment",
      q: "Are US and Mexico teams operating from shared assumptions?",
    },
  ];
  return (
    <section id="framework" className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>The Framework</SectionLabel>
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
          The US–Mexico Operations Diagnostic
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A 10-question assessment designed to identify hidden execution risks across
          five areas that determine whether a cross-border team scales — or stalls.
        </p>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {areas.map((a) => (
            <div
              key={a.n}
              className="grid grid-cols-12 gap-6 py-8 md:gap-10 md:py-10"
            >
              <div className="col-span-2 font-serif text-2xl text-accent md:text-3xl">
                {a.n}
              </div>
              <div className="col-span-10 md:col-span-4">
                <div className="font-serif text-xl text-foreground md:text-2xl">
                  {a.title}
                </div>
              </div>
              <div className="col-span-12 text-base leading-relaxed text-muted-foreground md:col-span-6 md:text-lg">
                {a.q}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Take the Diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>About</SectionLabel>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              Jeremy Stryer
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Founder, Stryer Operations
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Jeremy Stryer is the founder of Stryer Operations. He has experience as a
              COO, founder, and operator building and managing cross-border teams.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              His focus is helping US companies understand and improve the systems
              required to successfully scale operations in Mexico — the ownership,
              communication, decision-making, and process work that determines whether
              a team executes or drifts.
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
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <SectionLabel>Insights</SectionLabel>
        <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground md:text-5xl">
          Insights on US–Mexico Operations
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Jeremy writes about the hidden operational challenges behind cross-border
          teams, including ownership, communication, decision-making, and execution.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://substack.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Read on Substack →
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
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
    <section id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-background/60">
          Contact
        </p>
        <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-6xl">
          Discuss Your Situation
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/70">
          Share a short note about what you're seeing. Replies are personal and usually
          come within two business days.
        </p>

        {submitted ? (
          <div className="mt-12 border-l-2 border-accent pl-6">
            <p className="font-serif text-2xl">Thank you.</p>
            <p className="mt-2 text-background/70">
              Your note has been received. Jeremy will follow up directly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-14 grid gap-8 md:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Role" name="role" required />
            <Field label="Email" name="email" type="email" required />
            <div className="md:col-span-2">
              <Field
                label="Challenge or situation"
                name="situation"
                textarea
                required
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Send Note
              </button>
            </div>
          </form>
        )}
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
    "mt-2 w-full border-0 border-b border-background/25 bg-transparent px-0 py-2 text-base text-background placeholder:text-background/40 focus:border-accent focus:outline-none focus:ring-0";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-background/60">
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
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <div>© {new Date().getFullYear()} Stryer Operations</div>
        <div className="font-serif italic">Building US–Mexico Organizations</div>
      </div>
    </footer>
  );
}
