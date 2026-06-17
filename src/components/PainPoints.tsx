import { FileText, Home, Handshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const painPoints = [
  {
    icon: FileText,
    title: 'Conta alta e pouca previsibilidade',
    desc: 'Avaliamos o histórico de consumo para dimensionar o sistema sem exagerar potência nem subestimar necessidade.',
  },
  {
    icon: Home,
    title: 'Dúvida sobre telhado e instalação',
    desc: 'Antes da proposta final, analisamos espaço, orientação, sombreamento e condições elétricas do imóvel.',
  },
  {
    icon: Handshake,
    title: 'Medo de comprar errado',
    desc: 'Explicamos equipamentos, garantias, prazos e homologação em linguagem direta, para você comparar sem pressão.',
  },
];

export default function PainPoints() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-soft" id="solucao">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">
          <span className="icon-box !w-7 !h-7 !mb-0 !text-sm">⚡</span> Para quem a proposta faz sentido
        </p>
        <h2 className="section-title">
          Energia solar precisa ser uma decisão técnica e financeira.
        </h2>
        <p className="section-lead">
          O cliente que ainda não conhece a Portugal Engenharia não precisa acreditar em
          promessas genéricas. Precisa enxergar método, clareza e responsabilidade desde a
          primeira conversa.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-9">
          {painPoints.map((item, i) => (
            <article
              key={item.title}
              className={`card p-6 min-h-[210px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="icon-box">
                <item.icon size={20} />
              </span>
              <h3 className="text-navy font-bold text-lg leading-snug mb-2.5">{item.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
