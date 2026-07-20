import { MessageCircle, Sun, CheckCircle, ShieldCheck, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParallaxLayer } from './motion/Parallax';
import { Reveal } from './motion/Reveal';
import { useAsyncAction, LoadingLabel } from '../hooks/useAsyncAction';
import { useToast } from './feedback/Toast';

const WHATSAPP_SIM =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20uma%20simula%C3%A7%C3%A3o%20de%20energia%20solar%20com%20a%20Portugal%20Engenharia.';
const WHATSAPP_CONTA =
  'https://wa.me/5519995454370?text=Ol%C3%A1%2C%20quero%20enviar%20minha%20conta%20de%20luz%20para%20um%20estudo%20solar.';

const trustItems = [
  { icon: ShieldCheck, title: 'CNPJ ativo', desc: '53.142.037/0001-10' },
  { icon: CheckCircle, title: 'Marca registrada', desc: 'Registro no INPI.' },
  { icon: HardHat, title: 'Engenharia própria', desc: 'Projeto, análise e homologação.' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { loading, run } = useAsyncAction({ duration: 1600 });
  const toast = useToast();

  const trackClick = (event: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, { event_category: 'engagement' });
    }
  };

  const handleSimulate = async (e: React.MouseEvent) => {
    e.preventDefault();
    trackClick('cta_hero_form');
    try {
      await run();
      toast.success('Indo para a simulação', 'Role até o formulário para enviar sua conta de luz.');
      document.getElementById('simulacao')?.scrollIntoView({ behavior: 'smooth' });
    } catch {
      toast.error('Algo deu errado', 'Tente novamente em instantes.');
    }
  };

  return (
    <section
      className="min-h-[calc(100vh-76px)] text-white grid items-center py-14 md:py-0 relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        <ParallaxLayer offset={50} className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(16,35,63,0.98) 0%, rgba(16,35,63,0.92) 50%, rgba(16,35,63,0.75) 100%), url("https://images.pexels.com/photos/356480/pexels-photo-356480.jpeg?auto=compress&cs=tinysrgb&w=1600") center/cover no-repeat',
            }}
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-900/40" />
        <ParallaxLayer offset={30} className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full opacity-20">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(47,187,177,0.4) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={-20} className="absolute bottom-40 left-10 w-[300px] h-[300px] rounded-full opacity-15">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(242,170,46,0.3) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </ParallaxLayer>
      </div>

      <div className="relative z-10 w-[min(1160px,calc(100%-32px))] mx-auto grid md:grid-cols-[1.05fr_0.65fr] gap-10 items-center">
        <div className="hero-copy max-w-[760px]">
          <motion.p
            className="eyebrow text-mint-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Sun size={16} className="animate-pulse" /> Energia solar em Valinhos e região
          </motion.p>
          <motion.h1
            id="hero-title"
            className="font-display leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            Sistema fotovoltaico com projeto elétrico de verdade.
          </motion.h1>
          <motion.p
            className="max-w-[690px] text-[clamp(1.04rem,2vw,1.35rem)] text-[#e9f1f8] mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
          >
            Antes de vender placas, avaliamos seu consumo, padrão de entrada, telhado,
            sombreamento e viabilidade financeira. Você recebe uma proposta clara para
            decidir com segurança.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            <a
              href="#simulacao"
              className="btn btn-primary shadow-2xl shadow-gold/30 hover:shadow-gold/50 disabled:opacity-70 disabled:cursor-wait"
              onClick={handleSimulate}
            >
              <LoadingLabel loading={loading} idle="Simular meu sistema" />
            </a>
            <a
              href={WHATSAPP_SIM}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light backdrop-blur-sm bg-white/90 border-white/30 hover:bg-white hover:border-white/50"
              onClick={() => trackClick('cta_hero_whatsapp')}
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[780px]">
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                className="min-h-[88px] p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.1 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <item.icon size={18} className="text-mint mb-1.5" />
                <strong className="block text-sm text-white">{item.title}</strong>
                <span className="block mt-1 text-[0.88rem] text-[#d6e5ef]">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal direction="up" delay={0.3}>
          <aside
            className="lead-panel rounded-2xl p-7 shadow-2xl backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
              boxShadow: '0 32px 64px rgba(16,35,63,0.2), 0 16px 32px rgba(16,35,63,0.1)',
            }}
            aria-label="Resumo da proposta"
          >
            <h2 className="text-xl leading-snug mb-3 text-navy font-bold">
              Receba um estudo inicial gratuito
            </h2>
            <p className="text-muted mb-6">
              Envie sua conta de luz e dados do imóvel. Retornamos com uma estimativa
              objetiva e os próximos passos.
            </p>
            <ul className="space-y-3.5 mb-6">
              {[
                'Estimativa de geração e economia com base no seu consumo.',
                'Indicação de potência, equipamentos e área necessária.',
                'Conversa transparente sobre investimento e financiamento.',
              ].map((text) => (
                <li key={text} className="flex gap-3 items-start font-semibold text-navy">
                  <CheckCircle size={18} className="text-mint-700 mt-0.5 shrink-0" />
                  <span className="text-[0.95rem]">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_CONTA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full shadow-lg shadow-gold/25"
              onClick={() => trackClick('cta_panel_whatsapp')}
            >
              <MessageCircle size={18} />
              Enviar conta de luz
            </a>
            <p className="text-[0.85rem] text-muted mt-4 leading-relaxed">
              Atendimento em Valinhos, Vinhedo, Campinas, Louveira, Itatiba e região.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
