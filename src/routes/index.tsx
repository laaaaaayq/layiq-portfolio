import { createFileRoute } from "@tanstack/react-router";
import movieHubCover from "@/assets/movie-hub-cover.png.asset.json";
import lyroCover from "@/assets/lyro-cover.jpeg.asset.json";
import myopCover from "@/assets/myop-cover.jpeg.asset.json";
import movieHubDashboardCover from "@/assets/movie-hub-dashboard.png.asset.json";
import { CharacterPortrait } from "@/components/CharacterPortrait";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Layiq M — UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Layiq M, an aspiring UI/UX designer creating simple, intuitive digital experiences.",
      },
      { property: "og:title", content: "Layiq M — UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Selected UI/UX projects, skills, and contact details for Layiq M.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    title: "Movie Ticket Booking App",
    type: "Mobile Experience",
    description:
      "A movie booking experience with in-app snack selection and split payment, allowing friends to manage their individual payments.",
    tags: ["UX Research", "UI Design", "Prototype"],
    cover: movieHubCover.url,
    coverAlt: "Movie Hub booking app cover showing vintage cinema props",
  },
  {
    number: "02",
    title: "LYRO - Music Streaming Platform",
    type: "Web Platform",
    description:
      "A modern music streaming website concept focused on high-fidelity audio, curated discovery, and South Indian music.",
    tags: ["UI/UX", "Web Design", "Figma"],
    cover: lyroCover.url,
    coverAlt: "LYRO music streaming platform cover showing a live concert",
  },
  {
    number: "03",
    title: "MYOP - E Commerce Website Replica",
    type: "E-commerce",
    description:
      "An e-commerce website concept covering product discovery, product selection, cart, and payment.",
    tags: ["UI Design", "UX Flow", "Figma"],
    cover: myopCover.url,
    coverAlt: "MYOP e-commerce website cover showing perfume bottles",
  },
  {
    number: "04",
    title: "MOVIE HUB — Movie & Series Dashboard",
    type: "Dashboard",
    description:
      "A modern streaming experience for discovering and watching movies and TV series, with an intuitive dashboard focused on content discovery and seamless navigation.",
    tags: ["UI/UX", "Dashboard", "Figma"],
    cover: movieHubDashboardCover.url,
    coverAlt: "MOVIE HUB dashboard showing movie and series streaming interface",
  },
];

const skills = [
  {
    number: "01",
    title: "UX Design",
    description:
      "User Research · User Personas · User Flows · Information Architecture · Card Sorting · Wireframing · Prototyping · Usability Testing",
  },
  {
    number: "02",
    title: "UI Design",
    description:
      "Visual Design · Typography · Color & Contrast · Design Systems · Responsive Design · Interaction Design · Component Design",
  },
  {
    number: "03",
    title: "Tools",
    description: "Figma · FigJam · Canva · Google Stitch · Gemini · ChatGPT",
  },
  {
    number: "04",
    title: "My Approach",
    description:
      "Understand → Explore → Design → Refine. I use research and feedback to create interfaces that are clear, useful, and easy to use.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <nav className="sticky top-4 z-50 mx-auto flex w-[min(92%,920px)] items-center justify-between rounded-full border border-border bg-nav/90 px-4 py-2.5 shadow-nav backdrop-blur-md">
        <a href="#top" className="text-sm font-semibold text-foreground" aria-label="Layiq M, back to top">
          Layiq M
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      <div id="top" className="mx-auto w-[min(92%,920px)]">
        <header className="grid min-h-[680px] scroll-mt-24 items-center gap-10 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
          <div className="reveal space-y-7">
            <div className="flex items-center gap-3 text-xs font-medium uppercase text-accent">
              <span className="h-2 w-2 rounded-full bg-accent shadow-status" />
              Aspiring UI/UX Designer
            </div>
            <h1 className="max-w-[680px] text-5xl font-bold leading-[0.94] sm:text-6xl md:text-7xl">
              Designing digital experiences that feel <span className="text-accent">effortless.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              I’m Layiq, an aspiring UI/UX designer passionate about understanding users, solving design problems, and turning ideas into meaningful digital products.
            </p>
            <a href="#work" className="inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">
              Explore selected work <ArrowIcon />
            </a>
          </div>

          <div className="reveal relative mx-auto flex w-full max-w-[320px] items-end justify-center self-end md:self-center">
            <div className="absolute inset-x-3 bottom-3 h-2/3 rounded-full border border-accent/25 bg-accent-soft" />
            <div className="character-grid absolute inset-x-0 bottom-3 h-2/3 rounded-full opacity-50" />
            <CharacterPortrait />
            <span className="absolute -right-2 bottom-8 z-20 bg-background px-3 py-1 text-xs text-muted-foreground">Designing with intent</span>
          </div>
        </header>

        <section className="grid border-y border-border py-7 sm:grid-cols-3">
          <div className="py-3 sm:py-0">
            <p className="text-xs uppercase text-muted-foreground">Focus</p>
            <p className="mt-1 font-medium">Useful, intuitive interfaces</p>
          </div>
          <div className="border-y border-border py-3 sm:border-x sm:border-y-0 sm:px-7 sm:py-0">
            <p className="text-xs uppercase text-muted-foreground">Selected work</p>
            <p className="mt-1 font-medium">04 product concepts</p>
          </div>
          <div className="py-3 sm:pl-7 sm:py-0">
            <p className="text-xs uppercase text-muted-foreground">Process</p>
            <p className="mt-1 font-medium">Research to refinement</p>
          </div>
        </section>

        <section id="about" className="grid scroll-mt-28 gap-10 py-28 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">01 / About</p>
            <h2 className="mt-4 text-4xl font-semibold">Thoughtful design starts with understanding.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>I’m an aspiring UI/UX designer with a background in Computer Applications and a growing passion for creating meaningful digital experiences.</p>
            <p>My interest in UI/UX comes from combining creativity with problem-solving. I enjoy understanding user needs, organizing information, creating intuitive user flows, and transforming ideas into clean and engaging interfaces.</p>
            <p>I’m currently developing my skills in user research, wireframing, prototyping, interaction design, and visual design through practical projects.</p>
          </div>
        </section>

        <section id="work" className="scroll-mt-28 border-t border-border py-28">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
            <div>
              <p className="section-label">02 / Selected work</p>
              <h2 className="mt-3 text-4xl font-semibold">Projects</h2>
            </div>
            <span className="text-xs text-muted-foreground">04 projects</span>
          </div>

          <div className="grid gap-x-5 gap-y-12 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-card">
                  <img src={project.cover} alt={project.coverAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-project-caption/95 px-5 py-3.5 backdrop-blur-sm">
                    <span className="text-xs text-muted-foreground">{project.number} / {project.type}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-accent group-hover:text-accent"><ArrowIcon /></span>
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tags.map((tag) => <span key={tag} className="text-xs text-accent">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 border-t border-border py-28">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">03 / Skills & tools</p>
              <h2 className="mt-4 text-4xl font-semibold">What I bring to the process.</h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {skills.map((skill) => (
                <div key={skill.title} className="grid gap-3 py-6 sm:grid-cols-[48px_150px_1fr]">
                  <span className="text-xs text-accent">{skill.number}</span>
                  <h3 className="font-semibold">{skill.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 border-t border-border py-28">
          <p className="section-label">04 / Contact</p>
          <div className="mt-8 grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <h2 className="text-5xl font-semibold sm:text-6xl">Let’s create something meaningful.</h2>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">I’m always interested in learning, exploring new ideas, and creating better digital experiences. If you’d like to discuss a project, collaboration, or opportunity, I’d love to connect.</p>
            </div>
            <div className="space-y-4 text-sm">
              <a href="mailto:layiq567@gmail.com" className="contact-link"><span>Email</span><strong>layiq567@gmail.com</strong></a>
              <a href="tel:+918129550889" className="contact-link"><span>Phone</span><strong>+91 81295 50889</strong></a>
              <a href="https://www.linkedin.com/in/layiq-m" target="_blank" rel="noopener noreferrer" className="contact-link"><span>LinkedIn</span><strong>linkedin.com/in/layiq-m</strong></a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-border py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Layiq M</span>
          <span>UI/UX Designer · Designing with clarity and care</span>
        </footer>
      </div>
    </main>
  );
}