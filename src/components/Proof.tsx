import { useInView } from '../hooks/useInView';

const proofs = [
  {
    title: 'Marca registrada no INPI',
    desc: 'O registro reforça que a Portugal Engenharia está construindo uma presença de longo prazo, com identidade própria e compromisso público com a marca.',
  },
  {
    title: 'Diagnóstico antes da proposta',
    desc: 'A oferta só fica séria depois de entender consumo, local de instalação, padrão elétrico e objetivo do cliente.',
  },
  {
    title: 'Escopo por escrito',
    desc: 'O cliente sabe o que está incluso, quais garantias dependem do fabricante e o que pode alterar prazo ou custo.',
  },
];

export default function Proof() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-navy text-white" id="confianca">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow text-mint-300">🛡️ Credenciais reais</p>
        <h2 className="section-title !text-white">
          Confiança construída com marca, método e responsabilidade técnica.
        </h2>
        <p className="section-lead !text-[#dce8f1]">
          Quando ainda não há instalações solares para mostrar, a credibilidade precisa vir
          do que é verificável: empresa formal, marca registrada no INPI, processo claro e
          decisões técnicas documentadas.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-9">
          {proofs.map((item, i) => (
            <article
              key={item.title}
              className={`p-6 rounded-lg bg-white/[0.08] border border-white/20 min-h-[200px] transition-all duration-300 hover:bg-white/[0.12] hover:border-white/30 ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <h3 className="text-white font-bold text-lg leading-snug mb-2.5">
                {item.title}
              </h3>
              <p className="text-[#dce8f1] text-[0.95rem] leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
