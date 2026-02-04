import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import InstagramFeed from "./components/InstagramFeed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-black bg-white selection:bg-stone-200">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
