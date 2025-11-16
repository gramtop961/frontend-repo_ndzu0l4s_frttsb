import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="text-white font-extrabold tracking-tight text-lg">
            Storyboard Limited
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <Hero />

      <div id="services"><Services /></div>
      <div id="about"><About /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />
    </div>
  );
}

export default App
