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
    <section className="relative py-11 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #f2aa2e 0%, #fac049 50%, #f2aa2e 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div
        className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div
        className={`relative z-10 w-[min(1160px,calc(100%-32px))] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 ${
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
          <p className="mt-3 text-[#493009] text-lg">
            Envie sua conta de luz e receba uma primeira análise da Portugal Engenharia
            Elétrica.
          </p>
        </div>
        <a
          href={WHATSAPP_CTA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark shrink-0 shadow-xl shadow-navy/30 transition-transform duration-300 hover:scale-105"
          onClick={() => trackClick('cta_strip_whatsapp')}
        >
          <MessageCircle size={18} />
          Começar análise
        </a>
      </div>
    </section>
  );
}
