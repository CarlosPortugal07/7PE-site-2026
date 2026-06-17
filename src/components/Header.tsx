import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const WHATSAPP_LINK =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20avaliar%20energia%20solar%20para%20meu%20im%C3%B3vel.';

const navItems = [
  { label: 'Solução', href: '#solucao' },
  { label: 'Confiança', href: '#confianca' },
  { label: 'Processo', href: '#processo' },
  { label: 'Dúvidas', href: '#perguntas' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-20 border-b border-line transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm'
          : 'bg-white/94 backdrop-blur-lg'
      }`}
    >
      <div className="w-[min(1160px,calc(100%-32px))] mx-auto flex items-center justify-between gap-6 min-h-[76px]">
        <a href="#" className="flex items-center gap-3 no-underline min-w-0" aria-label="7PE Portugal Engenharia Elétrica">
          <span className="font-display text-navy text-xl font-bold tracking-tight">9PE</span>
          <span className="hidden sm:inline text-navy text-sm font-semibold tracking-wide">
            Portugal Engenharia
          </span>
        </a>

        <button
          className="md:hidden w-11 h-11 border border-line rounded-lg bg-white text-navy cursor-pointer flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`${
            isOpen
              ? 'absolute left-0 right-0 top-[76px] flex flex-col items-stretch gap-0 p-4 bg-white border-b border-line shadow-lg'
              : 'hidden'
          } md:flex md:relative md:top-0 md:flex-row md:items-center md:gap-6 md:p-0 md:border-0 md:shadow-none`}
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="no-underline text-muted font-bold text-[0.95rem] hover:text-mint-700 transition-colors py-3 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mt-2 md:mt-0"
            onClick={() => trackClick('cta_header_whatsapp')}
          >
            <MessageCircle size={18} />
            Falar com engenheiro
          </a>
        </nav>
      </div>
    </header>
  );
}
