import { MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WHATSAPP_CTA =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20descobrir%20se%20meu%20im%C3%B3vel%20tem%20um%20bom%20projeto%20solar.';

export default function CTAStrip() {
  const { ref, isInView } = useInView();

  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <section className="bg-gold py-9" ref={ref}>
      <div
        className={`w-[min(1160px,calc(100%-32px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div>
          <h2
            className="text-[#241605] font-bold leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.3rem)' }}
          >
            Vamos descobrir se seu imóvel tem um bom projeto solar?
          </h2>
          <p className="mt-2 text-[#493009]">
            Envie sua conta de luz e receba uma primeira análise da Portugal Engenharia
            Elétrica.
          </p>
        </div>
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark shrink-0"
          onClick={() => trackClick('cta_strip_whatsapp')}
        >
          <MessageCircle size={18} />
          Começar análise
        </a>
      </div>
    </section>
  );
}
