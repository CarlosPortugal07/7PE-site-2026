import { MessageCircle, Mail, MapPin, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contacts = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '(19) 99545-4370',
    href: 'https://wa.me/5519995454370',
    event: 'contact_whatsapp',
    accent: 'mint',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'vendas@portugalengenharia.com.br',
    href: 'mailto:vendas@portugalengenharia.com.br',
    accent: 'gold',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Rua Lourenço Ferrari, 614\nValinhos/SP - CEP 13273-071',
    accent: 'navy',
  },
  {
    icon: Building2,
    title: 'Empresa',
    content: 'Carlos Eduardo Silva Portugal Ltda\nCNPJ 53.142.037/0001-10',
    accent: 'mint',
  },
];

export default function Contact() {
  const { ref, isInView } = useInView();

  const trackClick = (event?: string) => {
    if (event && typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  return (
    <section className="py-24" id="contato">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">📇 Contato</p>
        <h2 className="section-title">Portugal Engenharia Elétrica</h2>
        <p className="section-lead">
          Empresa local em Valinhos, com atendimento para energia solar e soluções de
          engenharia elétrica.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
          {contacts.map((item, i) => (
            <article
              key={item.title}
              className={`group relative p-7 min-h-[170px] rounded-2xl transition-all duration-500 ease-out ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.12}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                boxShadow: '0 4px 24px rgba(16,35,63,0.06)',
                perspective: '1000px',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: item.accent === 'mint'
                    ? 'linear-gradient(135deg, rgba(47,187,177,0.1) 0%, rgba(47,187,177,0.05) 100%)'
                    : item.accent === 'gold'
                    ? 'linear-gradient(135deg, rgba(242,170,46,0.1) 0%, rgba(242,170,46,0.05) 100%)'
                    : 'linear-gradient(135deg, rgba(16,35,63,0.08) 0%, rgba(16,35,63,0.04) 100%)',
                }}
              />
              <div className="relative z-10">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: item.accent === 'mint'
                      ? 'linear-gradient(135deg, rgba(47,187,177,0.15) 0%, rgba(47,187,177,0.08) 100%)'
                      : item.accent === 'gold'
                      ? 'linear-gradient(135deg, rgba(242,170,46,0.15) 0%, rgba(242,170,46,0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(16,35,63,0.1) 0%, rgba(16,35,63,0.05) 100%)',
                  }}
                >
                  <item.icon
                    size={20}
                    className={
                      item.accent === 'mint'
                        ? 'text-mint-700'
                        : item.accent === 'gold'
                        ? 'text-gold-700'
                        : 'text-navy-700'
                    }
                  />
                </span>
                <h3 className="text-navy font-bold text-base mb-2">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mint-700 font-extrabold no-underline break-words transition-colors duration-300 hover:text-mint-600"
                    onClick={() => trackClick(item.event)}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted text-sm whitespace-pre-line leading-relaxed">{item.content}</p>
                )}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: item.accent === 'mint'
                    ? 'linear-gradient(90deg, #2fbbb1 0%, #4fcfc7 100%)'
                    : item.accent === 'gold'
                    ? 'linear-gradient(90deg, #f2aa2e 0%, #fac049 100%)'
                    : 'linear-gradient(90deg, #10233f 0%, #375082 100%)',
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
