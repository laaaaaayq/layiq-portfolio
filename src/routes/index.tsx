import { createFileRoute } from "@tanstack/react-router";
import movieHubCover from "@/assets/movie-hub-cover.png.asset.json";
import lyroCover from "@/assets/lyro-cover.jpeg.asset.json";
import myopCover from "@/assets/myop-cover.jpeg.asset.json";
import movieHubDashboardCover from "@/assets/movie-hub-dashboard.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Layiq M — UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Layiq M, an aspiring UI/UX designer passionate about creating simple, intuitive digital experiences.",
      },
      { property: "og:title", content: "Layiq M — UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of Layiq M, an aspiring UI/UX designer passionate about creating simple, intuitive digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const projects = [
    {
      title: "Movie Ticket Booking App",
      description:
        "A movie booking experience with in-app snack selection and split payment, allowing friends to manage their individual payments.",
      tags: ["UX Research", "UI Design", "Prototype"],
      cover: movieHubCover.url,
      coverAlt: "Movie Hub booking app cover showing vintage cinema props",
    },
    {
      title: "LYRO - Music Streaming Platform",
      description:
        "A modern music streaming website concept focused on high-fidelity audio, curated discovery, and South Indian music.",
      tags: ["UI/UX", "Web Design", "Figma"],
      cover: lyroCover.url,
      coverAlt: "LYRO music streaming platform cover showing a live concert",
    },
    {
      title: "MYOP - E Commerce Website Replica",
      description:
        "An e-commerce website concept covering product discovery, product selection, cart, and payment.",
      tags: ["UI Design", "UX Flow", "Figma"],
      cover: myopCover.url,
      coverAlt: "MYOP e-commerce website cover showing perfume bottles",
    },
    {
      title: "MOVIE HUB — Movie & Series Dashboard",
      description:
        "A modern streaming experience for discovering and watching movies and TV series, with an intuitive dashboard focused on content discovery and seamless navigation.",
      tags: ["UI/UX", "Dashboard", "Figma"],
      cover: movieHubDashboardCover.url,
      coverAlt: "MOVIE HUB dashboard showing movie and series streaming interface",
    },
  ];

  const skills = [
    {
      title: "UX Design",
      description:
        "User Research · User Personas · User Flows · Information Architecture · Card Sorting · Wireframing · Prototyping · Usability Testing",
    },
    {
      title: "UI Design",
      description:
        "Visual Design · Typography · Color & Contrast · Design Systems · Responsive Design · Interaction Design · Component Design",
    },
    {
      title: "Tools",
      description: "Figma · FigJam · Canva · Google Stitch · Gemini",
    },
    {
      title: "My Approach",
      description:
        "Understand → Explore → Design → Refine. I use research and feedback to create interfaces that are clear, useful, and easy to use.",
    },
  ];

  return (
    <div className="mx-auto w-[min(1120px,90%)]">
      <nav className="flex items-center justify-between py-7">
        <div className="text-[22px] font-extrabold tracking-tight">LAYIQ M</div>
        <div className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="ml-6 text-sm text-foreground hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <header className="flex min-h-[78vh] items-center py-20">
        <div>
          <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Aspiring UI/UX Designer
          </div>
          <h1 className="mt-5 max-w-[900px] text-[clamp(52px,9vw,108px)] font-semibold leading-[0.95] tracking-[-0.05em]">
            Designing simple, intuitive digital experiences.
          </h1>
          <p className="mt-6 max-w-[650px] text-xl text-muted-foreground">
            I’m Layiq, an aspiring UI/UX designer passionate about understanding
            users, solving design problems, and turning ideas into meaningful
            digital products.
          </p>
          <a
            href="#work"
            className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View my work ↓
          </a>
        </div>
      </header>

      <section id="about" className="border-t border-border py-24">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              01 — About
            </div>
            <h2 className="mt-3 text-[44px] font-semibold tracking-[-0.04em]">
              About Me
            </h2>
          </div>
          <div className="space-y-5 text-lg text-muted-foreground">
            <p>
              I’m an aspiring UI/UX designer with a background in Computer
              Applications and a growing passion for creating meaningful digital
              experiences.
            </p>
            <p>
              My interest in UI/UX comes from combining creativity with
              problem-solving. I enjoy understanding user needs, organizing
              information, creating intuitive user flows, and transforming ideas
              into clean and engaging interfaces.
            </p>
            <p>
              I’m currently developing my skills in user research, wireframing,
              prototyping, interaction design, and visual design through practical
              projects.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border py-24">
        <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          02 — Selected Work
        </div>
        <h2 className="mt-3 text-[44px] font-semibold tracking-[-0.04em]">
          Projects
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[22px] border border-border bg-card"
            >
              {project.cover ? (
                <div className="h-[330px] overflow-hidden bg-[#e8e8e3]">
                  <img
                    src={project.cover}
                    alt={project.coverAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex h-[330px] items-center justify-center bg-[#e8e8e3] text-xs text-[#999]">
                  ADD PROJECT MOCKUPS HERE
                </div>
              )}
              <div className="p-6">
                <h3 className="text-[25px] font-semibold tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full border border-border px-2.5 py-1.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-t border-border py-24">
        <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          03 — Skills & Tools
        </div>
        <h2 className="mt-3 text-[44px] font-semibold tracking-[-0.04em]">
          What I Do
        </h2>
        <div className="mt-10 grid gap-11 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.title}>
              <h3 className="text-lg font-semibold">{skill.title}</h3>
              <p className="mt-2 text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border py-24 pb-32 text-center">
        <div className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Contact
        </div>
        <h2 className="mt-3 text-[clamp(42px,6vw,64px)] font-semibold tracking-[-0.04em]">
          Let&apos;s Create Something Meaningful
        </h2>
        <p className="mx-auto mt-4 max-w-[650px] text-muted-foreground">
          I&apos;m always interested in learning, exploring new ideas, and
          creating better digital experiences. If you&apos;d like to discuss a
          project, collaboration, or opportunity, I&apos;d love to connect.
        </p>

        <div className="mx-auto mt-8 grid max-w-[720px] gap-4 md:grid-cols-3">
          <a
            href="tel:+918129550889"
            className="flex flex-col gap-1.5 rounded-2xl border border-border/60 p-5 text-left no-underline transition-colors hover:bg-muted"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Phone
            </span>
            <strong className="text-base font-semibold text-foreground">
              +91 81295 50889
            </strong>
          </a>
          <a
            href="mailto:layiq567@gmail.com"
            className="flex flex-col gap-1.5 rounded-2xl border border-border/60 p-5 text-left no-underline transition-colors hover:bg-muted"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Email
            </span>
            <strong className="text-base font-semibold text-foreground">
              layiq567@gmail.com
            </strong>
          </a>
          <a
            href="https://www.linkedin.com/in/layiq-m"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1.5 rounded-2xl border border-border/60 p-5 text-left no-underline transition-colors hover:bg-muted"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              LinkedIn
            </span>
            <strong className="text-base font-semibold text-foreground">
              linkedin.com/in/layiq-m
            </strong>
          </a>
        </div>
      </section>

      <footer className="flex items-center justify-between border-t border-border py-6 text-sm text-muted-foreground">
        <span>© 2026 Layiq M</span>
        <span>UI/UX Designer</span>
      </footer>
    </div>
  );
}
