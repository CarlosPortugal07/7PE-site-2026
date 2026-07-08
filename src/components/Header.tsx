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
    <>
      <div
        className={`fixed top-0 left-0 right-0 h-[3px] z-50 transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(90deg, #2fbbb1 0%, #f2aa2e 50%, #10233f 100%)',
        }}
      />
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-white/[0.92] backdrop-blur-2xl shadow-[0_8px_32px_rgba(16,35,63,0.08)] border-b border-line/50'
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="w-[min(1160px,calc(100%-32px))] mx-auto flex items-center justify-between gap-6 min-h-[76px]">
          <a href="#" className="flex items-center gap-3 no-underline min-w-0 group" aria-label="7PE Portugal Engenharia Elétrica">
            <span className="font-display text-navy text-xl font-bold tracking-tight group-hover:text-mint-700 transition-colors duration-300">7PE</span>
            <span className="hidden sm:inline text-navy text-sm font-semibold tracking-wide group-hover:text-mint-700 transition-colors duration-300">
              Portugal Engenharia
            </span>
          </a>

          <button
            className="md:hidden w-11 h-11 border border-line rounded-xl bg-white text-navy cursor-pointer flex items-center justify-center transition-all duration-200 hover:border-mint-300 hover:shadow-md active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav
            className={`${
              isOpen
                ? 'absolute left-0 right-0 top-[76px] flex flex-col items-stretch gap-0 p-4 bg-white/98 backdrop-blur-xl border-b border-line shadow-[0_16px_48px_rgba(16,35,63,0.12)]'
                : 'hidden'
            } md:flex md:relative md:top-0 md:flex-row md:items-center md:gap-7 md:p-0 md:border-0 md:shadow-none md:bg-transparent md:backdrop-blur-none`}
            aria-label="Menu principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative no-underline text-muted font-semibold text-[0.92rem] py-3 md:py-2 transition-colors duration-200 hover:text-mint-700 group/nav"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span className="hidden md:block absolute bottom-0 left-0 w-0 h-0.5 bg-mint-500 transition-all duration-300 group-hover/nav:w-full rounded-full" />
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mt-2 md:mt-0 shadow-lg shadow-navy/20"
              onClick={() => trackClick('cta_header_whatsapp')}
            >
              <MessageCircle size={18} />
              Falar com engenheiro
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
