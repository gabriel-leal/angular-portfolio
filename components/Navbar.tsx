import { ThemeToggle } from './ThemeToggle';


const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#tecnologias', label: 'Tecnologias' },
  { href: '#experiences', label: 'Experiências' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' }
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide text-accent">
          Menezes Digital
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-foreground/80 transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
