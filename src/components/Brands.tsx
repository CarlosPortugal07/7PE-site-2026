import { useInView } from '../hooks/useInView';

const brands = [
  { name: 'WEG', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/ZAPlLdhPXqvpSGHb.png' },
  { name: 'Solis', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/xzDbPNxHffopETtt.png' },
  { name: 'Sungrow', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/ikcShDrDCJZIVvSx.png' },
  { name: 'JA Solar', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/BiBZSPpIzbvHrUqY.png' },
  { name: 'Jinko Solar', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/FJTVPKpcPeyqLYRu.png' },
  { name: 'Enphase', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/WutfnlNbHLQOmIMr.png' },
  { name: 'Hoymiles', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/iEFqTAxQOYnyHNfn.png' },
  { name: 'Huawei', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/OBFHnVRKjATWbYGd.png' },
  { name: 'Canadian Solar', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/wRapZNMHGMGZOtjt.png' },
  { name: 'Steck', img: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663360139791/BzeehHSqcwsPhRjW.png' },
];

export default function Brands() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24">
      <div ref={ref} className="w-[min(1160px,calc(100%-32px))] mx-auto">
        <p className="eyebrow">🏭 Equipamentos conhecidos no mercado</p>
        <h2 className="section-title">
          Trabalhamos com soluções de fabricantes consolidados.
        </h2>
        <p className="section-lead">
          A seleção final depende do projeto, disponibilidade e melhor relação entre
          garantia, assistência, desempenho e investimento.
        </p>

        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mt-11 ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
          aria-label="Exemplos de marcas do setor fotovoltaico"
        >
          {brands.map((b, i) => (
            <article
              key={b.name}
              className={`group relative min-h-[80px] flex items-center justify-center p-4 rounded-xl transition-all duration-500 ease-out ${
                isInView ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${i * 0.06}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                boxShadow: '0 2px 12px rgba(16,35,63,0.04)',
                border: '1px solid rgba(16,35,63,0.06)',
              }}
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(47,187,177,0.08) 0%, rgba(242,170,46,0.05) 100%)',
                }}
              />
              <img
                src={b.img}
                alt={b.name}
                className="relative z-10 max-h-[44px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: '0 12px 32px rgba(16,35,63,0.1), 0 4px 8px rgba(16,35,63,0.06)',
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
