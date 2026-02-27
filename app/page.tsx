//import { ContactForm } from '@/components/ContactForm';
import { MouseGlow } from '@/components/MouseGlow';
import { Navbar } from '@/components/Navbar';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { SectionReveal } from '@/components/SectionReveal';
import { technologies } from '@/data/portfolio';
import { FaDocker, FaGithub, FaLinkedin, FaPython, FaReact, FaAngular, FaWhatsapp } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiGithubactions } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { SiTsnode } from "react-icons/si";
import Image from "next/image";

const techIcons = [FaPython, SiFastapi, SiTsnode, FaReact, RiNextjsFill, FaAngular, FaDocker, GrMysql, SiPostgresql, SiGithubactions, BiLogoTypescript, RiTailwindCssFill];

function calculateAge(birthDate: string): number {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 || 
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

function calculateCollegeSemester(startDate: string): number {
  const today = new Date();
  const start = new Date(startDate);

  let months = (today.getFullYear() - start.getFullYear()) * 12;
  months += today.getMonth() - start.getMonth();

  return Math.floor(months / 6) + 1;
}

export default function HomePage() {
  return (
    <main id="home" className="relative min-h-screen overflow-x-hidden bg-background">
      <MouseGlow />
      <Navbar />

      <section className="section-container relative z-10 pt-36">
        <SectionReveal>
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-col items-center md:items-start gap-6">
              <Image
                src="/images/gabriel.png"
                alt="Gabriel Leal Menezes"
                width={160}
                height={160}
                className="rounded-full object-cover border-4 border-accent shadow-glow transition duration-300 hover:scale-105"
              />
              <h1 className="text-4xl font-bold leading-tight md:text-6xl text-center md:text-left">
                Gabriel Leal Menezes
              </h1>
            </div>
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
              <a href="https://menezesdigital.com.br/assets/pdf/Curr%C3%ADculo%20Gabriel%20Leal%20Menezes.pdf" className="rounded-lg border-2 border-accent px-6 py-3 font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-300" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section id="sobre" className="section-container relative z-10">
        <SectionReveal>
          <h2 className="text-3xl font-bold">Sobre Mim</h2>
          {calculateCollegeSemester("2023-02-01") < 8 && (
            <p className="mt-5 max-w-4xl text-foreground/75">
              Sou <strong>Gabriel Leal Menezes</strong>, estudante de{" "}
              <strong>
                Sistemas de Informação na UNIFRAN (
                {calculateCollegeSemester("2023-02-01")}º semestre)
              </strong>
              , com foco em desenvolvimento Full Stack utilizando Python com
              FastAPI no backend e React/Angular no frontend. Tenho{" "}
              {calculateAge("2004-09-08")} anos e sou apaixonado por tecnologia,
              buscando constantemente aprimorar minhas habilidades através de
              projetos práticos, APIs robustas e interfaces modernas.
            </p>
          ) || (
            <p className="mt-5 max-w-4xl text-foreground/75">
              Sou <strong>Gabriel Leal Menezes</strong>, formado em{" "}
              <strong>
                Sistemas de Informação na UNIFRAN (8 semestres) - 2026
              </strong>
              , com foco em desenvolvimento Full Stack utilizando Python com
              FastAPI no backend e React/Angular no frontend. Tenho{" "}
              {calculateAge("2004-09-08")} anos e sou apaixonado por tecnologia,
              buscando constantemente aprimorar minhas habilidades através de
              projetos práticos, APIs robustas e interfaces modernas.
            </p>
          )}
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

      <section id="experiences" className="section-container relative z-10">
        <SectionReveal>
          <h2 className="mb-8 text-3xl font-bold">
          <SectionReveal>Experiências</SectionReveal>
          </h2>
          <ExperiencesSection />
        </SectionReveal>
      </section>

      <section id="projetos" className="section-container relative z-10">
        <SectionReveal>
          <h2 className="mb-8 text-3xl font-bold">
          <SectionReveal>Projetos</SectionReveal>
          </h2>
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
                <a className="flex items-center gap-2 text-foreground/80 hover:text-accent" href="https://github.com/gabriel-leal" target="_blank" rel="noreferrer">
                  <FaGithub size={18} /> GitHub
                </a>
                <a className="flex items-center gap-2 text-foreground/80 hover:text-accent" href="https://www.linkedin.com/in/gabriellealmenezes/" target="_blank" rel="noreferrer">
                  <FaLinkedin size={18} /> LinkedIn
                </a>
                <a className="flex items-center gap-2 text-foreground/80 hover:text-accent" href="https://wa.me/5516992137076" target="_blank" rel="noreferrer">
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
              </div>
            </div>
            {/* <ContactForm /> */}
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
