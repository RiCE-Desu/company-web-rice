import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import ProjectsSection from './components/projects';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;
