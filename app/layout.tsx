import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gabriel Leal Menezes',
  description: 'Desenvolvedor Full Stack com foco em Python e React.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
