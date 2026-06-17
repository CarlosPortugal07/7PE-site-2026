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
    <section className="py-20">
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
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-8 ${
            isInView ? 'animate-fade-in' : 'opacity-0'
          }`}
          aria-label="Exemplos de marcas do setor fotovoltaico"
        >
          {brands.map((b) => (
            <div
              key={b.name}
              className="min-h-[72px] flex items-center justify-center p-3 rounded-lg bg-white border border-line transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <img
                src={b.img}
                alt={b.name}
                className="max-h-[42px] w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
