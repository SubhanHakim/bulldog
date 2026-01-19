import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Represents } from './components/Represents';
import { TokenInfo } from './components/TokenInfo';
import { Footer } from './components/Footer';

function App() {

  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }, []);

  return (
    <div className="min-h-screen bg-bulldog-black text-bulldog-text selection:bg-bulldog-ember selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Represents />
        <TokenInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
