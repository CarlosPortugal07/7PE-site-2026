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
    <section className="py-24 bg-soft relative" id="processo">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">✅ Processo comercial</p>
        <h2 className="section-title">
          Um caminho simples para decidir sem pressa errada.
        </h2>
        <p className="section-lead">
          Cada etapa existe para diminuir incerteza antes do investimento.
        </p>

        <div className="relative mt-11">
          <div className="hidden lg:block absolute top-[52px] left-[calc(48px+1.5rem)] right-[calc(48px+1.5rem)] h-0.5 bg-line" />
          <div
            className="hidden lg:block absolute top-[52px] left-[calc(48px+1.5rem)] h-0.5 bg-gradient-to-r from-mint-400 to-gold transition-all duration-1000 ease-out"
            style={{
              width: isInView ? 'calc(100% - 96px - 3rem)' : '0%',
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className={`group relative p-7 min-h-[240px] rounded-2xl transition-all duration-500 ease-out ${
                  isInView ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                  boxShadow: '0 4px 24px rgba(16,35,63,0.06)',
                }}
              >
                <div className="relative z-10">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full font-extrabold text-sm mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #10233f 0%, #183456 100%)',
                      color: 'white',
                      boxShadow: '0 8px 24px rgba(16,35,63,0.2)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-navy font-bold text-lg leading-snug mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-[0.95rem] leading-relaxed">{step.desc}</p>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: i === 0 ? '#2fbbb1' : i === 1 ? '#3dc5bb' : i === 2 ? '#e8b84d' : '#f2aa2e',
                  }}
                />

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: '0 16px 48px rgba(16,35,63,0.12)',
                  }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
