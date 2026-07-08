import { useInView } from '../hooks/useInView';

const proofs = [
  {
    title: 'Marca registrada no INPI',
    desc: 'O registro reforça que a Portugal Engenharia está construindo uma presença de longo prazo, com identidade própria e compromisso público com a marca.',
    icon: '🛡️',
  },
  {
    title: 'Diagnóstico antes da proposta',
    desc: 'A oferta só fica séria depois de entender consumo, local de instalação, padrão elétrico e objetivo do cliente.',
    icon: '🔍',
  },
  {
    title: 'Escopo por escrito',
    desc: 'O cliente sabe o que está incluso, quais garantias dependem do fabricante e o que pode alterar prazo ou custo.',
    icon: '📝',
  },
];

export default function Proof() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 relative overflow-hidden" id="confianca">
      <div className="absolute inset-0 bg-navy" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(47,187,177,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(242,170,46,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto relative z-10">
        <p className="eyebrow text-mint-300">🛡️ Credenciais reais</p>
        <h2 className="section-title !text-white">
          Confiança construída com marca, método e responsabilidade técnica.
        </h2>
        <p className="section-lead !text-[#dce8f1]">
          Cada projeto é conduzido com a mesma responsabilidade: empresa formal com CNPJ
          ativo, marca registrada no INPI, escopo definido antes da assinatura e
          acompanhamento técnico até a ativação do sistema.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-11">
          {proofs.map((item, i) => (
            <article
              key={item.title}
              className={`group relative p-7 rounded-2xl min-h-[210px] backdrop-blur-sm transition-all duration-500 ease-out ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.15}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(47,187,177,0.1) 0%, rgba(242,170,46,0.05) 100%)',
                }}
              />
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-white font-bold text-lg leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-[#dce8f1] text-[0.95rem] leading-relaxed">{item.desc}</p>
              </div>
              <div
                className="absolute inset-x-0 top-0 h-px rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(47,187,177,0.5) 50%, transparent 100%)',
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
