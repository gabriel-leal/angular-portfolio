import {
  Boxes,
  Braces,
  CloudCog,
  Code2,
  Database,
  Docker,
  Github,
  Linkedin,
  MonitorCog,
  Server
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { MouseGlow } from '@/components/MouseGlow';
import { Navbar } from '@/components/Navbar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SectionReveal } from '@/components/SectionReveal';
import { technologies } from '@/data/portfolio';

const techIcons = [Code2, Braces, Server, MonitorCog, Docker, Database, CloudCog, Boxes];

export default function HomePage() {
  return (
    <main id="home" className="relative min-h-screen overflow-x-hidden bg-background">
      <MouseGlow />
      <Navbar />

      <section className="section-container relative z-10 pt-36">
        <SectionReveal>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Portfólio profissional</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Gabriel Leal Menezes</h1>
            <h2 className="text-2xl text-foreground/80 md:text-3xl">
              Desenvolvedor Full Stack com foco em Python e React
            </h2>
            <p className="max-w-2xl text-foreground/75">
              Crio aplicações web escaláveis e modernas, unindo performance, arquitetura robusta e experiência
              de usuário refinada.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projetos" className="rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-glow">
                Ver projetos
              </a>
              <a href="#contato" className="rounded-lg border border-white/20 px-6 py-3 font-semibold">
                Contato
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section id="sobre" className="section-container relative z-10">
        <SectionReveal>
          <h2 className="text-3xl font-bold">Sobre Mim</h2>
          <p className="mt-5 max-w-4xl text-foreground/75">
            Sou desenvolvedor full stack com experiência no desenvolvimento de soluções digitais sob medida,
            atuando da modelagem backend à construção de interfaces ricas e responsivas. Tenho forte atuação com
            Python e FastAPI para APIs performáticas e seguras, além de React e Angular para frontends modernos.
            Também possuo vivência com CI/CD, Docker e bancos MySQL, garantindo entregas consistentes e
            escaláveis.
          </p>
        </SectionReveal>
      </section>

      <section id="tecnologias" className="section-container relative z-10">
        <SectionReveal>
          <h2 className="text-3xl font-bold">Tecnologias</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {technologies.map((tech, index) => {
              const Icon = techIcons[index % techIcons.length];
              return (
                <article key={tech} className="card flex items-center gap-3 p-4 transition hover:shadow-glow">
                  <Icon className="text-accent" size={22} />
                  <span className="text-sm font-medium">{tech}</span>
                </article>
              );
            })}
          </div>
        </SectionReveal>
      </section>

      <section id="projetos" className="section-container relative z-10">
        <SectionReveal>
          <h2 className="mb-8 text-3xl font-bold">Projetos</h2>
          <ProjectsSection />
        </SectionReveal>
      </section>

      <section id="contato" className="section-container relative z-10">
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl font-bold">Contato</h2>
              <p className="mt-4 text-foreground/75">
                Vamos transformar ideias em soluções digitais robustas e elegantes.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a className="flex items-center gap-2 text-foreground/80 hover:text-accent" href="https://github.com" target="_blank" rel="noreferrer">
                  <Github size={18} /> GitHub
                </a>
                <a className="flex items-center gap-2 text-foreground/80 hover:text-accent" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
