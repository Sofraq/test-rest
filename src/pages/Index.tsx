import React, { useEffect, useState } from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import StarField from '@/components/StarField';
import HeroSection from '@/components/HeroSection';
import KarmicCalculator from '@/components/KarmicCalculator';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cosmic relative overflow-x-hidden grain-overlay">
      {/* Background layers */}
      <StarField />
      <FloatingParticles />
      
      {/* Gradient overlays */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, hsl(270 50% 15% / 0.5) 0%, transparent 50%)',
        }}
      />
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, hsl(43 74% 49% / 0.05) 0%, transparent 40%)',
        }}
      />

      {/* Content */}
      <main className="relative z-10">
        <HeroSection />
        
        <div className="relative">
          {/* Decorative divider */}
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>

        <KarmicCalculator />
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        </div>

        <FinalCTA />

        {/* Footer */}
        <footer className="py-10 text-center border-t border-primary/10">
          <p className="text-muted-foreground text-sm">
            © 2024 Ключ Перехода. Все права защищены.
          </p>
          <p className="text-primary/50 text-xs mt-2 font-serif italic">
            «Сила в знании, знание в числах»
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
