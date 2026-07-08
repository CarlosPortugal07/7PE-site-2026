import { CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const checks = [
  'Projeto pensado para o consumo atual e possíveis mudanças futuras, como ar-condicionado, carro elétrico ou ampliação do imóvel.',
  'Compatibilização com padrão de entrada, disjuntores, proteção, aterramento e exigências da concessionária.',
  'Proposta com premissas visíveis: consumo usado, potência estimada, equipamentos sugeridos e escopo incluso.',
];

export default function Engineering() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 relative">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
        <div
          className={`relative group ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(47,187,177,0.15) 0%, rgba(242,170,46,0.15) 100%)',
              filter: 'blur(24px)',
            }}
          />
          <div
            className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-line transition-transform duration-500 group-hover:scale-[1.02]`}
            style={{
              boxShadow: '0 24px 48px rgba(16,35,63,0.15), 0 8px 16px rgba(16,35,63,0.1)',
            }}
          >
            <img
              src="https://images.pexels.com/photos/983742/pexels-photo-983742.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Painéis solares instalados sobre telhado"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
          </div>
        </div>

        <div className={isInView ? 'animate-slide-right' : 'opacity-0'}>
          <p className="eyebrow">👷 Atendimento liderado por engenharia</p>
          <h2 className="section-title">
            Você fala com quem entende o sistema, não só com quem vende.
          </h2>
          <p className="section-lead">
            A cada projeto, aplicamos rigor tecnico: analise de consumo, estudo de
            sombreamento, compatibilidade com a rede e dimensionamento responsavel.
            Assumimos o processo de ponta a ponta — do primeiro estudo ate a homologacao
            na concessionaria.
          </p>
          <ul className="mt-8 space-y-5">
            {checks.map((text, i) => (
              <li
                key={text}
                className="flex gap-4 items-start text-ink group/item"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <span className="w-6 h-6 rounded-full bg-mint-50 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover/item:bg-mint-100 group-hover/item:scale-110">
                  <CheckCircle2 size={14} className="text-mint-700" />
                </span>
                <span className="text-[0.98rem] leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
