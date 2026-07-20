import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Engineering from './components/Engineering';
import Services from './components/Services';
import Proof from './components/Proof';
import Brands from './components/Brands';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import CTAStrip from './components/CTAStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ToastProvider } from './components/feedback/Toast';

export default function App() {
  return (
    <ToastProvider>
      <Header />
      <main id="conteudo">
        <Hero />
        <PainPoints />
        <Engineering />
        <Services />
        <Proof />
        <Brands />
        <Process />
        <Testimonials />
        <Calculator />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  );
}
