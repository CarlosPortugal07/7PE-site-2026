import { FileText, Home, Handshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const painPoints = [
  {
    icon: FileText,
    title: 'Economia mensal garantida',
    desc: 'Calculamos o retorno real do seu investimento com base no consumo historico. Voce sabe quanto vai economizar antes de assinar qualquer contrato.',
  },
  {
    icon: Home,
    title: 'Projeto tecnico, nao improvisacao',
    desc: 'Analisamos telhado, orientacao solar, sombreamento e rede eletrica. Cada detalhe importa para garantir a performance do sistema.',
  },
  {
    icon: Handshake,
    title: 'Decisao segura e transparente',
    desc: 'Voce recebe proposta clara sobre equipamentos, garantias, cronograma e homologacao. Nada de surpresas depois da venda.',
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
          Energia solar nao e gasto. E investimento.
        </h2>
        <p className="section-lead">
          Todo bom investidor busca seguranca e rentabilidade. Nao vendemos "placas no telhado" —
          entregamos um projeto que gera economia real, previsibilidade mensal e valorizacao do seu patrimônio.
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
