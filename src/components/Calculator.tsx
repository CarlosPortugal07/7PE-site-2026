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
    <section className="py-20" id="simulacao">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto grid md:grid-cols-[0.82fr_1.18fr] gap-7 items-stretch">
        <div
          className={`bg-navy text-white rounded-lg p-8 flex flex-col justify-between ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div>
            <p className="eyebrow text-mint-300">
              <CalcIcon size={16} /> Simulação gratuita
            </p>
            <h2
              className="font-display leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Quer saber se energia solar faz sentido para o seu imóvel?
            </h2>
            <p className="text-[#e5eef7] mb-5">
              Preencha o formulário ou chame no WhatsApp. A resposta ideal inclui uma foto
              da conta de luz e informações básicas do local.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                'Sem compromisso e sem promessa automática de economia.',
                'Retorno com próximos passos práticos.',
                'Atendimento direto por uma empresa local de engenharia.',
              ].map((text) => (
                <li key={text} className="flex gap-3 items-start text-[#e5eef7]">
                  <CheckCircle size={18} className="text-gold mt-0.5 shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={WHATSAPP_SIM}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
            onClick={() => trackClick('cta_offer_whatsapp')}
          >
            <MessageCircle size={18} />
            Preferir WhatsApp
          </a>
        </div>

        <div
          className={`bg-white border border-line rounded-lg overflow-hidden shadow-lg ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
          aria-label="Formulário de simulação"
        >
          <iframe
            src={FORM_URL}
            title="Formulário de simulação de energia solar"
            loading="lazy"
            className="w-full border-0 block"
            style={{ minHeight: '640px', height: '640px' }}
          >
            Carregando...
          </iframe>
        </div>
      </div>
    </section>
  );
}
