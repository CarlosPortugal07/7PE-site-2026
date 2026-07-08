import { useInView } from '../hooks/useInView';

const services = [
  {
    tag: 'Fotovoltaico',
    title: 'Projeto solar residencial',
    desc: 'Dimensionamento, proposta técnica, instalação e homologação para casas e pequenos imóveis.',
    accent: 'mint',
  },
  {
    tag: 'Comercial',
    title: 'Energia solar para empresas',
    desc: 'Estudo para reduzir custo fixo de energia com análise de consumo, demanda e viabilidade.',
    accent: 'gold',
  },
  {
    tag: 'Elétrica',
    title: 'Adequações elétricas',
    desc: 'Correções necessárias para receber o sistema com mais segurança e aderência às normas.',
    accent: 'navy',
  },
  {
    tag: 'Regularização',
    title: 'Homologação',
    desc: 'Documentação e acompanhamento junto à concessionária para conexão do sistema à rede.',
    accent: 'mint',
  },
];

const accentColors: Record<string, { bg: string; text: string; border: string }> = {
  mint: { bg: 'bg-mint-50', text: 'text-mint-700', border: 'border-mint-200' },
  gold: { bg: 'bg-gold-50', text: 'text-gold-700', border: 'border-gold-200' },
  navy: { bg: 'bg-navy-50', text: 'text-navy-700', border: 'border-navy-200' },
};

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-soft">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">🔧 O que entregamos</p>
        <h2 className="section-title">Do estudo inicial à ativação do sistema.</h2>
        <p className="section-lead">
          Da analise inicial ate a conexao com a rede, conduzimos cada etapa com
          responsabilidade tecnica e transparencia contratual — sem terceirizar decisoes
          criticas para o cliente.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-11">
          {services.map((svc, i) => (
            <article
              key={svc.title}
              className={`group relative p-7 min-h-[260px] rounded-2xl transition-all duration-500 ease-out ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.12}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                boxShadow: '0 4px 24px rgba(16,35,63,0.06)',
              }}
            >
              <span
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-extrabold mb-5 transition-transform duration-300 group-hover:scale-105 ${accentColors[svc.accent].bg} ${accentColors[svc.accent].text}`}
                style={{
                  boxShadow: `0 4px 12px rgba(16,35,63,0.08)`,
                }}
              >
                {svc.tag}
              </span>
              <h3 className="text-navy font-bold text-lg leading-snug mb-3">{svc.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{svc.desc}</p>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: '0 16px 48px rgba(16,35,63,0.12), 0 4px 12px rgba(16,35,63,0.08)',
                }}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                  svc.accent === 'mint' ? 'bg-gradient-to-r from-mint-400 to-mint-600' :
                  svc.accent === 'gold' ? 'bg-gradient-to-r from-gold-400 to-gold-600' :
                  'bg-gradient-to-r from-navy-400 to-navy-600'
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
