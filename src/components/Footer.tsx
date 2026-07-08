import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <>
      <footer className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 bg-[#07182d]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(47,187,177,0.2) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 w-[min(1160px,calc(100%-32px))] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr] gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">7PE Portugal Engenharia Elétrica</h3>
              <p className="text-[#c8d6e4] text-sm leading-relaxed">
                Energia solar e engenharia elétrica em Valinhos e região, com atendimento
                consultivo e projeto técnico.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Site</h4>
              <nav className="space-y-2.5">
                <a href="#solucao" className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Solução
                </a>
                <a href="#confianca" className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Confiança
                </a>
                <a href="#processo" className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                  Processo
                </a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Contato</h4>
              <nav className="space-y-2.5">
                <a
                  href="https://wa.me/5519995454370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:vendas@portugalengenharia.com.br"
                  className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  E-mail
                </a>
                <a
                  href="https://linktr.ee/Portugal_Engenharia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Redes sociais
                </a>
              </nav>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Redes</h4>
              <nav className="space-y-2.5">
                <a
                  href="https://www.instagram.com/portugal_eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61561425598667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/portugal-engenharia-el%C3%A9trica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#c8d6e4] text-sm no-underline hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#9fb0c1] text-sm">
              &copy; 2026 Portugal Engenharia Elétrica. Todos os direitos reservados.
            </p>
            <p className="text-[#9fb0c1] text-xs">
              CNPJ 53.142.037/0001-10
            </p>
          </div>
        </div>
      </footer>

      <a
        className="fixed right-5 bottom-5 z-50 w-16 h-16 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] group"
        style={{
          background: 'linear-gradient(135deg, #25d366 0%, #20ba5a 100%)',
          boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
        }}
        href="https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20energia%20solar."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
        onClick={() => trackClick('floating_whatsapp')}
      >
        <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#25d366' }} />
        <span className="relative w-full h-full flex items-center justify-center">
          <MessageCircle size={28} />
        </span>
      </a>
    </>
  );
}
