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
    q: 'E depois da instalacao, fico por minha conta?',
    a: 'Nao. Acompanhamos a ativacao do sistema, orientamos sobre o monitoramento e ficamos disponiveis para esclarecer qualquer duvida tecnica no pos-obra. O relacionamento nao termina com a entrega.',
  },
];

export default function FAQ() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-soft" id="perguntas">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">❓ Perguntas frequentes</p>
        <h2 className="section-title">O que geralmente impede a decisão.</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-11">
          {faqs.map((faq, i) => (
            <article
              key={faq.q}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                boxShadow: '0 4px 24px rgba(16,35,63,0.06)',
              }}
            >
              <button
                className="w-full text-left p-7 flex items-start justify-between gap-4 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <h3 className="text-navy font-bold text-base leading-snug flex-1">{faq.q}</h3>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-mint-100 text-mint-700 rotate-180'
                      : 'bg-soft text-muted'
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-7 pb-7 text-muted text-[0.95rem] leading-relaxed border-t border-line/50 pt-4 mt-0">
                  {faq.a}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
                  openIndex === i ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'linear-gradient(90deg, #2fbbb1 0%, #f2aa2e 100%)',
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: '0 16px 48px rgba(16,35,63,0.1)',
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
