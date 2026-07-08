import { CheckCircle, Calculator as CalcIcon, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WHATSAPP_SIM =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20simular%20energia%20solar.';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfX8lSxuIDL552jsnEnaThOvDtQbiKl_mzKAEraSnB5QgxaSQ/viewform?embedded=true';

export default function Calculator() {
  const { ref, isInView } = useInView();

  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <section className="py-24" id="simulacao">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto grid md:grid-cols-[0.82fr_1.18fr] gap-8 items-stretch">
        <div
          className={`relative overflow-hidden rounded-2xl p-9 flex flex-col justify-between ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, #10233f 0%, #183456 100%)',
            boxShadow: '0 32px 64px rgba(16,35,63,0.25)',
          }}
        >
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(47,187,177,0.4) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[200px] h-[200px] opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(242,170,46,0.3) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <div className="relative z-10">
            <p className="eyebrow text-mint-300">
              <CalcIcon size={16} className="animate-pulse" /> Simulação gratuita
            </p>
            <h2
              className="font-display leading-tight mb-5 text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Quer saber se energia solar faz sentido para o seu imóvel?
            </h2>
            <p className="text-[#e5eef7] mb-6 leading-relaxed text-lg">
              Preencha o formulário ou chame no WhatsApp. A resposta ideal inclui uma foto
              da conta de luz e informações básicas do local.
            </p>
            <ul className="space-y-4 mb-6">
              {[
                'Sem compromisso e sem promessa automática de economia.',
                'Retorno com próximos passos práticos.',
                'Atendimento direto por uma empresa local de engenharia.',
              ].map((text) => (
                <li key={text} className="flex gap-3 items-start text-[#e5eef7]">
                  <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  <span className="text-[0.98rem]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={WHATSAPP_SIM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full shadow-xl shadow-gold/20 relative z-10"
            onClick={() => trackClick('cta_offer_whatsapp')}
          >
            <MessageCircle size={18} />
            Preferir WhatsApp
          </a>
        </div>

        <div
          className={`relative rounded-2xl overflow-hidden ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{
            animationDelay: '0.15s',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
            boxShadow: '0 24px 48px rgba(16,35,63,0.12), 0 8px 16px rgba(16,35,63,0.08)',
            border: '1px solid rgba(16,35,63,0.06)',
          }}
          aria-label="Formulário de simulação"
        >
          <iframe
            src={FORM_URL}
            title="Formulário de simulação de energia solar"
            loading="lazy"
            className="w-full border-0 block relative z-10"
            style={{ minHeight: '640px', height: '640px' }}
          >
            Carregando...
          </iframe>
        </div>
      </div>
    </section>
  );
}
