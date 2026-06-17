import { useInView } from '../hooks/useInView';

const steps = [
  {
    title: 'Conta de luz e objetivo',
    desc: 'Você envia a conta, endereço aproximado e o motivo da busca: economia, previsibilidade ou valorização do imóvel.',
  },
  {
    title: 'Pré-estudo',
    desc: 'Estimamos geração, potência, espaço necessário e faixa de investimento para confirmar se vale avançar.',
  },
  {
    title: 'Visita técnica',
    desc: 'Quando necessário, validamos telhado, padrão de entrada, infraestrutura e possíveis adequações.',
  },
  {
    title: 'Proposta e implantação',
    desc: 'Com escopo definido, seguimos para contrato, equipamentos, instalação, homologação e ativação.',
  },
];

export default function Process() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-soft" id="processo">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">✅ Processo comercial</p>
        <h2 className="section-title">
          Um caminho simples para decidir sem pressa errada.
        </h2>
        <p className="section-lead">
          Cada etapa existe para diminuir incerteza antes do investimento.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className={`card relative p-6 min-h-[230px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-navy text-white font-extrabold text-sm mb-5">
                {i + 1}
              </span>
              <h3 className="text-navy font-bold text-lg leading-snug mb-2.5">
                {step.title}
              </h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute -right-3 top-14 text-line text-2xl font-light">
                  →
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
