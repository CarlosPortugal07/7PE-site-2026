import { useInView } from '../hooks/useInView';

const services = [
  {
    tag: 'Fotovoltaico',
    title: 'Projeto solar residencial',
    desc: 'Dimensionamento, proposta técnica, instalação e homologação para casas e pequenos imóveis.',
  },
  {
    tag: 'Comercial',
    title: 'Energia solar para empresas',
    desc: 'Estudo para reduzir custo fixo de energia com análise de consumo, demanda e viabilidade.',
  },
  {
    tag: 'Elétrica',
    title: 'Adequações elétricas',
    desc: 'Correções necessárias para receber o sistema com mais segurança e aderência às normas.',
  },
  {
    tag: 'Regularização',
    title: 'Homologação',
    desc: 'Documentação e acompanhamento junto à concessionária para conexão do sistema à rede.',
  },
];

export default function Services() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-soft">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">🔧 O que entregamos</p>
        <h2 className="section-title">Do estudo inicial à ativação do sistema.</h2>
        <p className="section-lead">
          A página vende energia solar, mas também posiciona a Portugal Engenharia para
          serviços elétricos complementares que aumentam confiança e ticket médio.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
          {services.map((svc, i) => (
            <article
              key={svc.title}
              className={`card p-6 min-h-[250px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-mint/30 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-gold-50 text-gold-700 text-xs font-extrabold mb-4">
                {svc.tag}
              </span>
              <h3 className="text-navy font-bold text-lg leading-snug mb-2.5">{svc.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{svc.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
