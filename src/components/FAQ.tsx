import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'Quanto custa um sistema fotovoltaico?',
    a: 'Depende do consumo, telhado, equipamentos, padrão elétrico e escopo de instalação. O estudo inicial serve para criar uma faixa realista antes da proposta final.',
  },
  {
    q: 'Dá para financiar?',
    a: 'Sim, é comum avaliar financiamento. A melhor opção depende do valor do projeto, perfil do cliente e condições disponíveis no momento da contratação.',
  },
  {
    q: 'O sistema funciona em dias nublados?',
    a: 'Funciona, mas gera menos energia. Por isso o dimensionamento considera média de irradiação, consumo anual e margem técnica.',
  },
  {
    q: 'Preciso trocar toda a instalação elétrica?',
    a: 'Nem sempre. Quando há necessidade de adequação, isso deve aparecer antes da contratação para evitar surpresa durante a instalação.',
  },
  {
    q: 'Quem faz a homologação?',
    a: 'A Portugal Engenharia conduz a documentação técnica e acompanha o processo junto à concessionária dentro do escopo contratado.',
  },
  {
    q: 'Vocês ainda não têm cases solares?',
    a: 'A carteira fotovoltaica está em formação. Por isso o site não usa depoimentos ou números inventados. A confiança é construída por transparência técnica e atendimento próximo.',
  },
];

export default function FAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-soft" id="perguntas">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">❓ Perguntas frequentes</p>
        <h2 className="section-title">O que geralmente impede a decisão.</h2>

        <div className="grid md:grid-cols-2 gap-5 mt-9">
          {faqs.map((faq, i) => (
            <article
              key={faq.q}
              className={`card overflow-hidden transition-all duration-300 hover:shadow-md ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <button
                className="w-full text-left p-6 pb-4 flex items-start justify-between gap-3 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="text-navy font-bold text-base leading-snug">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className={`text-muted mt-0.5 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-6 text-muted text-[0.95rem] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
