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
    <section className="py-20">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div
          className={`rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-line ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <img
            src="https://images.pexels.com/photos/983742/pexels-photo-983742.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Painéis solares instalados sobre telhado"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className={isInView ? 'animate-slide-right' : 'opacity-0'}>
          <p className="eyebrow">👷 Atendimento liderado por engenharia</p>
          <h2 className="section-title">
            Você fala com quem entende o sistema, não só com quem vende.
          </h2>
          <p className="section-lead">
            Como a empresa está iniciando sua carteira de sistemas fotovoltaicos, a
            confiança precisa vir de fundamentos reais: formação técnica, processo,
            transparência e responsabilidade no dimensionamento.
          </p>
          <ul className="mt-7 space-y-4">
            {checks.map((text) => (
              <li key={text} className="flex gap-3 items-start text-ink">
                <CheckCircle2 size={20} className="text-mint-700 mt-1 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
