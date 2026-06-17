import { MessageCircle, Mail, MapPin, Building2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contacts = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '(19) 99545-4370',
    href: 'https://wa.me/5519995454370',
    event: 'contact_whatsapp',
  },
  {
    icon: Mail,
    title: 'E-mail',
    content: 'vendas@portugalengenharia.com.br',
    href: 'mailto:vendas@portugalengenharia.com.br',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Rua Lourenço Ferrari, 614\nValinhos/SP - CEP 13273-071',
  },
  {
    icon: Building2,
    title: 'Empresa',
    content: 'Carlos Eduardo Silva Portugal Ltda\nCNPJ 53.142.037/0001-10',
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
    <section className="py-20" id="contato">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">📇 Contato</p>
        <h2 className="section-title">Portugal Engenharia Elétrica</h2>
        <p className="section-lead">
          Empresa local em Valinhos, com atendimento para energia solar e soluções de
          engenharia elétrica.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
          {contacts.map((item, i) => (
            <article
              key={item.title}
              className={`card p-6 min-h-[150px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <item.icon size={22} className="text-mint-700 mb-3" />
              <h3 className="text-navy font-bold text-base mb-2">{item.title}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint-700 font-extrabold no-underline break-words"
                  onClick={() => trackClick(item.event)}
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-muted text-sm whitespace-pre-line">{item.content}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
