import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <>
      <footer className="py-11 bg-[#07182d] text-white">
        <div className="w-[min(1160px,calc(100%-32px))] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr] gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">7PE Portugal Engenharia Elétrica</h3>
              <p className="text-[#c8d6e4] text-sm leading-relaxed">
                Energia solar e engenharia elétrica em Valinhos e região, com atendimento
                consultivo e projeto técnico.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Site</h4>
              <a href="#solucao" className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1">
                Solução
              </a>
              <a href="#confianca" className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1">
                Confiança
              </a>
              <a href="#processo" className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1">
                Processo
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <a
                href="https://wa.me/5519995454370"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1"
              >
                WhatsApp
              </a>
              <a
                href="mailto:vendas@portugalengenharia.com.br"
                className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1"
              >
                E-mail
              </a>
              <a
                href="https://linktr.ee/Portugal_Engenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1"
              >
                Redes sociais
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-3">Redes</h4>
              <a
                href="https://www.instagram.com/portugal_eng"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561425598667"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/portugal-engenharia-el%C3%A9trica"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors my-1"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-9 pt-5 border-t border-white/10 text-[#9fb0c1] text-sm">
            &copy; 2026 Portugal Engenharia Elétrica. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a
        className="fixed right-4 bottom-4 z-30 w-14 h-14 inline-flex items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg animate-pulse-soft"
        href="https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20energia%20solar."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        onClick={() => trackClick('floating_whatsapp')}
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
}
