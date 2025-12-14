import React from 'react';
import FloatingParticles from '@/components/FloatingParticles';
import StarField from '@/components/StarField';
import HeroSection from '@/components/HeroSection';
import KarmicCalculator from '@/components/KarmicCalculator';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic relative overflow-x-hidden grain-overlay">
      {/* Background layers */}
      <StarField />
      <FloatingParticles />
      
      {/* Ambient blur orbs for atmosphere */}
      <div className="ambient-orb ambient-orb-gold w-[600px] h-[600px] -top-40 -left-40 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="ambient-orb ambient-orb-purple w-[500px] h-[500px] top-1/3 -right-40 animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="ambient-orb ambient-orb-gold w-[400px] h-[400px] bottom-1/4 left-1/4 animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="ambient-orb ambient-orb-purple w-[350px] h-[350px] bottom-20 right-1/3 animate-pulse" style={{ animationDuration: '9s' }} />
      
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
        
        <ScrollReveal delay={100}>
          <div className="relative">
            {/* Decorative divider */}
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <KarmicCalculator />
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <FinalCTA />
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={100} direction="none">
          <footer className="py-10 text-center border-t border-primary/10">
            <p className="text-muted-foreground text-sm">
              © 2024 Ключ Перехода. Все права защищены.
            </p>
            <button 
              className="text-primary/50 text-xs mt-3 hover:text-primary/80 transition-colors underline underline-offset-2"
              onClick={() => console.log('Open license agreement')}
            >
              Лицензионное соглашение
            </button>
            <p className="text-primary/50 text-xs mt-2 font-serif italic">
              «Сила в знании, знание в числах»
            </p>
          </footer>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default Index;
