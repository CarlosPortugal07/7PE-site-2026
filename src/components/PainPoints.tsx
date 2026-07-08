import { FileText, Home, Handshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const painPoints = [
  {
    icon: FileText,
    title: 'Economia mensal garantida',
    desc: 'Calculamos o retorno real do seu investimento com base no consumo historico. Voce sabe quanto vai economizar antes de assinar qualquer contrato.',
    gradient: 'from-mint-500/10 to-mint-600/5',
  },
  {
    icon: Home,
    title: 'Projeto tecnico, nao improvisacao',
    desc: 'Analisamos telhado, orientacao solar, sombreamento e rede eletrica. Cada detalhe importa para garantir a performance do sistema.',
    gradient: 'from-gold-500/10 to-gold-600/5',
  },
  {
    icon: Handshake,
    title: 'Decisao segura e transparente',
    desc: 'Voce recebe proposta clara sobre equipamentos, garantias, cronograma e homologacao. Nada de surpresas depois da venda.',
    gradient: 'from-navy-500/10 to-navy-600/5',
  },
];

export default function PainPoints() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="solucao">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(47,187,177,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto relative z-10">
        <p className="eyebrow">
          <span className="icon-box !w-7 !h-7 !mb-0 !text-sm animate-pulse">⚡</span> Para quem a proposta faz sentido
        </p>
        <h2 className="section-title">
          Energia solar não é gasto. É investimento!
        </h2>
        <p className="section-lead">
          Todo bom investidor busca seguranca e rentabilidade. Nao vendemos "placas no telhado" —
          entregamos um projeto que gera economia real, previsibilidade mensal e valorizacao do seu patrimônio.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-11">
          {painPoints.map((item, i) => (
            <article
              key={item.title}
              className={`group relative p-7 min-h-[220px] rounded-2xl transition-all duration-500 ease-out ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                boxShadow: '0 4px 24px rgba(16,35,63,0.06), 0 1px 2px rgba(16,35,63,0.04)',
              }}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
              />
              <div className="relative z-10">
                <span
                  className="icon-box transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    boxShadow: '0 0 0 0 rgba(47,187,177,0)',
                  }}
                >
                  <item.icon size={20} />
                </span>
                <h3 className="text-navy font-bold text-lg leading-snug mb-3 mt-4">{item.title}</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">{item.desc}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, #2fbbb1 0%, #f2aa2e 100%)',
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
