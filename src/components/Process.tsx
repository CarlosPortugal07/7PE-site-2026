import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, HardHat, ClipboardCheck } from 'lucide-react';
import { Reveal } from './motion/Reveal';

const steps = [
  {
    icon: FileText,
    title: 'Conta de luz e objetivo',
    short: 'Briefing',
    desc: 'Você envia a conta, endereço aproximado e o motivo da busca: economia, previsibilidade ou valorização do imóvel.',
    detail:
      'Sem esse passo não há proposta séria. É aqui que entendemos se o perfil de consumo comporta fotovoltaico e qual o objetivo financeiro por trás da decisão.',
  },
  {
    icon: Search,
    title: 'Pré-estudo',
    short: 'Análise',
    desc: 'Estimamos geração, potência, espaço necessário e faixa de investimento para confirmar se vale avançar.',
    detail:
      'Usamos dados de irradiação local, histórico de consumo e padrão de entrada para gerar uma faixa realista — sem promessa inflada de economia.',
  },
  {
    icon: HardHat,
    title: 'Visita técnica',
    short: 'Validação',
    desc: 'Quando necessário, validamos telhado, padrão de entrada, infraestrutura e possíveis adequações.',
    detail:
      'Nem todo imóvel precisa de visita, mas quando o pré-estudo aponta dúvidas estruturais, subimos no telhado para medir de verdade antes de fechar escopo.',
  },
  {
    icon: ClipboardCheck,
    title: 'Proposta e implantação',
    short: 'Execução',
    desc: 'Com escopo definido, seguimos para contrato, equipamentos, instalação, homologação e ativação.',
    detail:
      'O contrato deixa claro o que está incluso, prazos e garantias. Acompanhamos a homologação na concessionária e a ativação do sistema até o monitoramento funcionar.',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="processo">
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(47,187,177,0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(-30%, -30%)',
        }}
      />

      <div className="w-[min(1160px,calc(100%-32px))] mx-auto relative z-10">
        <Reveal>
          <p className="eyebrow">✅ Processo comercial</p>
          <h2 className="section-title">
            Um caminho simples para decidir sem pressa errada.
          </h2>
          <p className="section-lead">
            Cada etapa existe para diminuir incerteza antes do investimento. Clique em um passo para ver o detalhe.
          </p>
        </Reveal>

        {/* Interactive timeline (desktop) */}
        <div className="hidden lg:block mt-14">
          <div className="relative">
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-line" />
            <motion.div
              className="absolute top-7 left-0 h-0.5 bg-gradient-to-r from-mint-400 to-gold"
              initial={{ width: '0%' }}
              animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease }}
            />

            <div className="relative grid grid-cols-4 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === active;
                return (
                  <button
                    key={step.title}
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center text-center cursor-pointer"
                    aria-label={`Ver etapa ${i + 1}: ${step.title}`}
                  >
                    <motion.span
                      className="relative w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors duration-300"
                      animate={{
                        scale: isActive ? 1.12 : 1,
                        backgroundColor: isActive ? '#10233f' : '#ffffff',
                        color: isActive ? '#ffffff' : '#5e6a7d',
                        boxShadow: isActive
                          ? '0 12px 32px rgba(16,35,63,0.25)'
                          : '0 4px 16px rgba(16,35,63,0.08)',
                      }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <Icon size={22} />
                      {isActive && (
                        <motion.span
                          className="absolute inset-0 rounded-full border-2 border-mint-400"
                          initial={{ scale: 1, opacity: 0.7 }}
                          animate={{ scale: 1.4, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease }}
                        />
                      )}
                    </motion.span>
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wide mb-1 transition-colors duration-300 ${
                        isActive ? 'text-mint-700' : 'text-muted'
                      }`}
                    >
                      {step.short}
                    </span>
                    <span
                      className={`text-sm font-bold leading-snug transition-colors duration-300 ${
                        isActive ? 'text-navy' : 'text-muted'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="mt-10 min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease }}
                className="p-7 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 100%)',
                  boxShadow: '0 12px 40px rgba(16,35,63,0.08)',
                  border: '1px solid rgba(16,35,63,0.06)',
                }}
              >
                <h3 className="text-navy font-bold text-lg mb-2">
                  {steps[active].title}
                </h3>
                <p className="text-muted leading-relaxed">{steps[active].detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="lg:hidden grid gap-5 mt-11">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 0.1}>
                <article
                  className="group relative p-6 rounded-2xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    boxShadow: '0 4px 24px rgba(16,35,63,0.06)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{
                        background: 'linear-gradient(135deg, #10233f 0%, #183456 100%)',
                        boxShadow: '0 8px 24px rgba(16,35,63,0.2)',
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wide text-mint-700">
                        {step.short}
                      </span>
                      <h3 className="text-navy font-bold text-lg leading-snug mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted text-[0.95rem] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
