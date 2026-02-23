'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setStatus('Preencha todos os campos para enviar sua mensagem.');
      return;
    }

    setStatus('Mensagem enviada com sucesso! Em breve entrarei em contato.');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6">
      <input
        name="name"
        placeholder="Seu nome"
        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 outline-none transition focus:border-accent"
      />
      <input
        type="email"
        name="email"
        placeholder="Seu e-mail"
        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 outline-none transition focus:border-accent"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Sua mensagem"
        className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 outline-none transition focus:border-accent"
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-4 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Enviar mensagem
      </button>
      {status ? <p className="text-sm text-foreground/80">{status}</p> : null}
    </form>
  );
}
