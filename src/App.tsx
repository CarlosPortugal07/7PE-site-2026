import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Engineering from './components/Engineering';
import Services from './components/Services';
import Proof from './components/Proof';
import Brands from './components/Brands';
import Process from './components/Process';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import CTAStrip from './components/CTAStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <PainPoints />
        <Engineering />
        <Services />
        <Proof />
        <Brands />
        <Process />
        <Calculator />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
