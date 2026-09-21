import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import movieHubCover from "@/assets/movie-hub-cover.jpg";
import lyroCover from "@/assets/lyro-cover.jpg";
import myopCover from "@/assets/myop-cover.jpg";
import movieHubDashboardCover from "@/assets/movie-hub-dashboard.png";
import layiqCharacter from "@/assets/layiq-hero.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CursorGlow } from "@/components/CursorGlow";

function MobileMenuIcon({ isOpen }: { isOpen: boolean }) {
  return isOpen ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Layiq M — UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Layiq M, a UI/UX designer creating simple, intuitive digital experiences.",
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
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const journeyItems = [
  {
    period: "2020",
    title: "Higher Secondary Examination (HSE)",
    organization: "General Education",
    badge: "Education",
  },
  {
    period: "2020 – 2023",
    title: "Bachelor of Computer Application (BCA)",
    organization: "University of Calicut",
    badge: "Degree",
  },
  {
    period: "June 2023 – December 2023",
    title: "Python - Django Internship",
    organization: "Softroniics · Calicut, Kerala",
    badge: "Internship",
  },
  {
    period: "March 2025 – April 2026",
    title: "Cashier",
    organization: "Dubai Customs (under Transguard Group)",
    badge: "Experience",
  },
  {
    period: "June 2026 – Present",
    title: "UI/UX Designer Intern",
    organization: "Zoople Technologies",
    badge: "Present",
    isCurrent: true,
  },
];

const projects = [
  {
    number: "01",
    title: "MOVIE HUB - Movie Ticket Booking App",
    type: "Mobile Experience",
    description:
      "A movie booking experience with in-app snack selection and split payment, allowing friends to manage their individual payments.",
    tags: ["UX Research", "UI Design", "Prototype"],
    cover: movieHubCover,
    coverAlt: "Movie Hub booking app cover showing vintage cinema props",
    url: "https://www.behance.net/gallery/256022671/MOVIE-HUB-Movie-Ticket-Booking-App",
  },
  {
    number: "02",
    title: "LYRO - Music Streaming Platform",
    type: "Web Platform",
    description:
      "A modern music streaming website concept focused on high-fidelity audio, curated discovery, and South Indian music.",
    tags: ["UI/UX", "Web Design", "Figma"],
    cover: lyroCover,
    coverAlt: "LYRO music streaming platform cover showing a live concert",
    url: "https://www.behance.net/gallery/256021393/LYRO-Music-Streaming-Website",
  },
  {
    number: "03",
    title: "MYOP - E Commerce Website Replica",
    type: "E-commerce",
    description:
      "An e-commerce website concept covering product discovery, product selection, cart, and payment.",
    tags: ["UI Design", "UX Flow", "Figma"],
    cover: myopCover,
    coverAlt: "MYOP e-commerce website cover showing perfume bottles",
    url: "https://www.behance.net/gallery/253939589/MYOP-Website-Design",
  },
  {
    number: "04",
    title: "MOVIE HUB — Movie & Series Dashboard",
    type: "Dashboard",
    description:
      "A modern streaming experience for discovering and watching movies and TV series, with an intuitive dashboard focused on content discovery and seamless navigation.",
    tags: ["UI/UX", "Dashboard", "Figma"],
    cover: movieHubDashboardCover,
    coverAlt: "MOVIE HUB dashboard showing movie and series streaming interface",
    url: "https://www.behance.net/gallery/256033873/MOVIE-HUB-Movie-Series-Dashboard",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClose = () => setMobileMenuOpen(false);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleClose, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CursorGlow />
      <nav className={`sticky top-3 sm:top-4 z-50 mx-auto flex w-[min(92%,920px)] flex-col border border-border bg-nav/95 px-4 py-2.5 sm:px-6 sm:py-3 shadow-nav backdrop-blur-md transition-all duration-300 ${mobileMenuOpen ? "rounded-2xl" : "rounded-full"}`}>
        <div className="flex w-full items-center justify-between">
          <a href="#top" className="text-base sm:text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent" aria-label="Layiq M, back to top">
            Layiq M
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 sm:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-accent hover:text-accent sm:hidden"
            >
              <MobileMenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 flex flex-col space-y-1 border-t border-border/80 pt-3 sm:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div id="top" className="relative z-10 mx-auto w-[min(92%,920px)]">
        <header className="grid min-h-[auto] sm:min-h-[560px] md:min-h-[640px] scroll-mt-24 items-center gap-8 sm:gap-10 py-10 sm:py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
          <div className="reveal space-y-4 sm:space-y-6 md:space-y-7">
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs font-medium uppercase tracking-wider text-accent">
              <span className="h-2 w-2 rounded-full bg-accent shadow-status" />
              UI/UX Designer
            </div>
            <h1 className="max-w-[680px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] sm:leading-[0.95] tracking-tight">
              Designing digital experiences that feel <span className="text-accent">effortless.</span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              I’m Layiq, a UI/UX designer passionate about understanding users, solving design problems, and turning ideas into meaningful digital products.
            </p>
            <a href="#work" className="inline-flex items-center gap-2.5 sm:gap-3 border-b border-accent pb-1.5 sm:pb-2 text-sm sm:text-base font-semibold text-foreground transition-colors hover:text-accent">
              Explore selected work <ArrowIcon />
            </a>
          </div>

          <div className="reveal relative mx-auto flex w-full max-w-[190px] sm:max-w-[260px] md:max-w-[320px] items-center justify-center">
            <img src={layiqCharacter} alt="Portrait of Layiq M" className="relative z-10 w-full aspect-square rounded-full object-cover drop-shadow-character" />
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border border-y border-border py-2 sm:py-6">
          <div className="py-3 sm:py-0 sm:pr-6 md:pr-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">Focus</p>
            <p className="mt-1 text-sm sm:text-base font-medium">Useful, intuitive interfaces</p>
          </div>
          <div className="py-3 sm:py-0 sm:px-6 md:px-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">Selected work</p>
            <p className="mt-1 text-sm sm:text-base font-medium">04 product concepts</p>
          </div>
          <div className="py-3 sm:py-0 sm:pl-6 md:pl-8">
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground">Process</p>
            <p className="mt-1 text-sm sm:text-base font-medium">Research to refinement</p>
          </div>
        </section>

        <section id="about" className="grid scroll-mt-24 sm:scroll-mt-28 gap-6 sm:gap-10 py-14 sm:py-20 md:py-28 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="section-label">01 / About</p>
            <h2 className="mt-2.5 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">Thoughtful design starts with understanding.</h2>
          </div>
          <div className="space-y-3.5 sm:space-y-5 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>I’m a UI/UX designer with a background in Computer Applications and a growing passion for creating meaningful digital experiences.</p>
            <p>My interest in UI/UX comes from combining creativity with problem-solving. I enjoy understanding user needs, organizing information, creating intuitive user flows, and transforming ideas into clean and engaging interfaces.</p>
            <p>I’m currently developing my skills in user research, wireframing, prototyping, interaction design, and visual design through practical projects.</p>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 sm:scroll-mt-28 border-t border-border py-14 sm:py-20 md:py-28">
          <div className="mb-6 sm:mb-10 flex items-end justify-between gap-4 border-b border-border pb-4 sm:pb-5">
            <div>
              <p className="section-label">02 / Selected work</p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">Projects</h2>
            </div>
            <span className="text-xs text-muted-foreground">04 projects</span>
          </div>

          <div className="grid gap-6 sm:gap-8 md:gap-x-6 md:gap-y-12 grid-cols-1 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card">
                  <img src={project.cover} alt={project.coverAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-project-caption/95 px-3.5 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-sm">
                    <span className="text-[11px] sm:text-xs font-medium text-muted-foreground">{project.number} / {project.type}</span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on Behance`}
                      className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-[#59cdc6] hover:text-[#59cdc6] group-hover:border-[#59cdc6] group-hover:text-[#59cdc6]"
                    >
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
                <h3 className="mt-3.5 sm:mt-5 text-base sm:text-lg md:text-xl font-semibold break-words">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[#59cdc6]"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-muted/60 px-2 py-0.5 text-[11px] sm:text-xs font-medium text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 sm:scroll-mt-28 border-t border-border py-14 sm:py-20 md:py-28">
          <div className="grid gap-6 sm:gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">03 / Skills & tools</p>
              <h2 className="mt-2.5 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">What I bring to the process.</h2>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {skills.map((skill) => (
                <div key={skill.title} className="grid gap-2 sm:gap-3 py-4 sm:py-6 grid-cols-1 sm:grid-cols-[40px_140px_1fr] md:grid-cols-[48px_160px_1fr]">
                  <div className="flex items-center gap-2.5 sm:block">
                    <span className="text-xs font-semibold text-accent">{skill.number}</span>
                    <h3 className="font-semibold text-foreground sm:hidden">{skill.title}</h3>
                  </div>
                  <h3 className="hidden sm:block font-semibold text-foreground">{skill.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 sm:scroll-mt-28 border-t border-border py-14 sm:py-20 md:py-28">
          <div className="grid gap-6 sm:gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">04 / Journey</p>
              <h2 className="mt-2.5 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">My Roadmap</h2>
              <p className="mt-2.5 sm:mt-4 max-w-sm text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground">
                Key milestones across education, professional experience, and my journey into UI/UX design.
              </p>
            </div>

            <div className="relative ml-2 sm:ml-4 space-y-7 sm:space-y-10 border-l border-border pl-5 sm:pl-8">
              {journeyItems.map((item) => (
                <div key={item.title + item.period} className="group relative cursor-pointer">
                  {/* Timeline node */}
                  <div
                    className={`absolute -left-[29px] sm:-left-[41px] top-1 z-10 h-4 w-4 sm:h-[18px] sm:w-[18px] rounded-full border-2 border-background transition-all duration-300 group-hover:scale-125 ${
                      item.isCurrent
                        ? "bg-[#59cdc6] border-[#59cdc6] shadow-[0_0_18px_#59cdc6] ring-4 ring-[#59cdc6]/30"
                        : "bg-slate-300 dark:bg-[#323E4E] group-hover:!bg-[#59cdc6] dark:group-hover:!bg-[#59cdc6] group-hover:!border-[#59cdc6] group-hover:shadow-[0_0_20px_#59cdc6] group-hover:ring-4 group-hover:ring-[#59cdc6]/40"
                    }`}
                  />

                  {/* Period & Tag */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#59cdc6]">
                      {item.period}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium ${
                        item.isCurrent
                          ? "border border-[#59cdc6]/30 bg-[#59cdc6]/15 text-[#59cdc6]"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="mt-1.5 sm:mt-2 text-base sm:text-lg md:text-xl font-semibold text-foreground transition-colors group-hover:text-[#59cdc6]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
                    {item.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 sm:scroll-mt-28 border-t border-border py-14 sm:py-20 md:py-28">
          <p className="section-label">05 / Contact</p>
          <div className="mt-6 sm:mt-8 grid gap-8 sm:gap-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Let’s create something meaningful.
              </h2>
              <p className="mt-3 sm:mt-5 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground">
                I’m always interested in learning, exploring new ideas, and creating better digital experiences. If you’d like to discuss a project, collaboration, or opportunity, I’d love to connect.
              </p>
            </div>
            <div className="space-y-2.5 sm:space-y-4 text-xs sm:text-sm">
              <a href="mailto:layiq567@gmail.com" className="contact-link"><span>Email</span><strong>layiq567@gmail.com</strong></a>
              <a href="tel:+918129550889" className="contact-link"><span>Phone</span><strong>+91 81295 50889</strong></a>
              <a href="https://www.linkedin.com/in/layiq-m" target="_blank" rel="noopener noreferrer" className="contact-link"><span>LinkedIn</span><strong>linkedin.com/in/layiq-m</strong></a>
            </div>
          </div>
        </section>

        <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left py-6 sm:py-8 text-xs text-muted-foreground border-t border-border">
          <span>© 2026 Layiq M</span>
          <span>UI/UX Designer · Designing with clarity and care</span>
        </footer>
      </div>
    </main>
  );
}