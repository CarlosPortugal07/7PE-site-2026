import { Calculator, MessageCircle, Sun, CheckCircle, ShieldCheck, HardHat } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WHATSAPP_SIM =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20uma%20simula%C3%A7%C3%A3o%20de%20energia%20solar%20com%20a%20Portugal%20Engenharia.';
const WHATSAPP_CONTA =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20enviar%20minha%20conta%20de%20luz%20para%20um%20estudo%20solar.';

export default function Hero() {
  const { ref, isInView } = useInView();

  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <section
      className="min-h-[calc(100vh-76px)] text-white grid items-center py-14 md:py-0 relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(16,35,63,0.97) 0%, rgba(16,35,63,0.88) 44%, rgba(16,35,63,0.42) 100%), url("https://images.pexels.com/photos/356480/pexels-photo-356480.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 w-[min(1160px,calc(100%-32px))] mx-auto grid md:grid-cols-[1.05fr_0.65fr] gap-10 items-center">
        <div className={`hero-copy max-w-[760px] ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="eyebrow text-mint-300">
            <Sun size={16} /> Energia solar em Valinhos e região
          </p>
          <h1
            id="hero-title"
            className="font-display leading-[1] mb-5"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            Sistema fotovoltaico com projeto elétrico de verdade.
          </h1>
          <p className="max-w-[690px] text-[clamp(1.04rem,2vw,1.35rem)] text-[#e9f1f8] mb-7">
            Antes de vender placas, avaliamos seu consumo, padrão de entrada, telhado,
            sombreamento e viabilidade financeira. Você recebe uma proposta clara para
            decidir com segurança.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <a
              href="#simulacao"
              className="btn btn-primary"
              onClick={() => trackClick('cta_hero_form')}
            >
              <Calculator size={18} />
              Simular meu sistema
            </a>
            <a
              href={WHATSAPP_SIM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
              onClick={() => trackClick('cta_hero_whatsapp')}
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[780px]">
            {[
              { icon: ShieldCheck, title: 'CNPJ ativo', desc: '53.142.037/0001-10' },
              {
                icon: CheckCircle,
                title: 'Marca registrada',
                desc: 'Registro no INPI.',
              },
              {
                icon: HardHat,
                title: 'Engenharia própria',
                desc: 'Projeto, análise e homologação.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="min-h-[88px] p-4 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/30"
              >
                <item.icon size={18} className="text-mint mb-1.5" />
                <strong className="block text-sm text-white">{item.title}</strong>
                <span className="block mt-1 text-[0.88rem] text-[#d6e5ef]">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <aside
          className={`lead-panel bg-white/[0.96] text-ink rounded-lg p-6 shadow-lg ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
          aria-label="Resumo da proposta"
        >
          <h2 className="text-xl leading-snug mb-2 text-navy font-bold">
            Receba um estudo inicial gratuito
          </h2>
          <p className="text-muted mb-5">
            Envie sua conta de luz e dados do imóvel. Retornamos com uma estimativa
            objetiva e os próximos passos.
          </p>
          <ul className="space-y-3 mb-5">
            {[
              'Estimativa de geração e economia com base no seu consumo.',
              'Indicação de potência, equipamentos e área necessária.',
              'Conversa transparente sobre investimento e financiamento.',
            ].map((text) => (
              <li key={text} className="flex gap-3 items-start font-bold text-navy">
                <CheckCircle size={18} className="text-mint-700 mt-0.5 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_CONTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
            onClick={() => trackClick('cta_panel_whatsapp')}
          >
            <MessageCircle size={18} />
            Enviar conta de luz
          </a>
          <p className="text-[0.86rem] text-muted mt-3">
            Atendimento em Valinhos, Vinhedo, Campinas, Louveira, Itatiba e região.
          </p>
        </aside>
      </div>
    </section>
  );
}
