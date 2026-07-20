import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Counter } from './motion/Counter';
import { Reveal, Stagger, StaggerItem } from './motion/Reveal';

const testimonials = [
  {
    name: 'Ricardo Almeida',
    role: 'Residencial — Valinhos/SP',
    system: '5,4 kWp',
    quote:
      'A equipe veio ao imóvel, mediu o telhado e explicou cada item da proposta. Recebi o estudo antes de qualquer compromisso. Sistema instalado e homologado sem surpresas.',
    rating: 5,
    photo:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Fernanda Costa',
    role: 'Comercial — Campinas/SP',
    system: '12,6 kWp',
    quote:
      'Procuramos engenharia de verdade, não instalador. O projeto considerou a demanda da loja e a expansão futura. A economia na conta veio conforme o estudo previa.',
    rating: 5,
    photo:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Marcelo Oliveira',
    role: 'Residencial — Vinhedo/SP',
    system: '8,1 kWp',
    quote:
      'O que me conquistou foi a transparência. O escopo por escrito deixava claro o que estava incluso e o que dependia de adequação. Sem promessa inflada de economia.',
    rating: 5,
    photo:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const stats = [
  { value: 120, suffix: '+', label: 'Projetos entregues' },
  { value: 850, suffix: ' kWp', label: 'Potência instalada' },
  { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
  { value: 7, suffix: ' anos', label: 'De atuação' },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="cases">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(242,170,46,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'translate(30%, -30%)',
        }}
      />

      <div className="w-[min(1160px,calc(100%-32px))] mx-auto relative z-10">
        <Reveal>
          <p className="eyebrow">💬 Casos reais</p>
          <h2 className="section-title">Quem instalou com engenharia recomenda.</h2>
          <p className="section-lead">
            Projetos conduzidos com diagnóstico, escopo claro e acompanhamento
            técnico até a ativação.
          </p>
        </Reveal>

        {/* Stats */}
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="group relative p-6 rounded-2xl text-center transition-all duration-500 hover:-translate-y-1"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-90"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                  boxShadow: '0 4px 24px rgba(16,35,63,0.06)',
                  border: '1px solid rgba(16,35,63,0.06)',
                }}
              />
              <div className="relative z-10">
                <span className="block font-display text-navy font-extrabold leading-none text-[clamp(1.8rem,4vw,2.6rem)]">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="block mt-3 text-muted text-sm font-semibold">
                  {stat.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Testimonial carousel */}
        <Reveal className="mt-12" direction="up" delay={0.1}>
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #10233f 0%, #183456 100%)',
              }}
            />
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(47,187,177,0.4) 0%, transparent 70%)',
                filter: 'blur(60px)',
              }}
            />

            <div className="relative z-10 p-8 md:p-12">
              <Quote size={48} className="text-mint-400/40 mb-6" />

              <div className="relative min-h-[220px] md:min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    <img
                      src={active.photo}
                      alt={active.name}
                      loading="lazy"
                      className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-mint-400/40"
                    />
                    <div className="flex-1">
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: active.rating }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-gold fill-gold"
                          />
                        ))}
                      </div>
                      <p className="text-[#e9f1f8] text-lg leading-relaxed mb-5 font-medium">
                        “{active.quote}”
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <div>
                          <p className="text-white font-bold">{active.name}</p>
                          <p className="text-mint-300 text-sm">{active.role}</p>
                        </div>
                        <span className="ml-auto inline-flex items-center px-3 py-1.5 rounded-full text-xs font-extrabold bg-mint-400/15 text-mint-300 border border-mint-400/20">
                          {active.system}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Depoimento ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === index
                          ? 'w-8 bg-mint-400'
                          : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="w-10 h-10 rounded-xl border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:bg-white/10 hover:border-mint-400/40 active:scale-95 cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próximo"
                    className="w-10 h-10 rounded-xl border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:bg-white/10 hover:border-mint-400/40 active:scale-95 cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
