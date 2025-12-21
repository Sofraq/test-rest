import React from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';
import rafaelPhoto from '@/assets/rafael-photo.jpg';

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Rafael Photo */}
      <div className="relative w-full max-w-md mx-auto mb-8 sm:mb-12">
        <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
          <img 
            src={rafaelPhoto} 
            alt="Рафаэль - практик нумерологии" 
            className="w-full h-auto object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep/60 via-transparent to-transparent" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
          boxShadow: '0 0 60px hsl(43 74% 49% / 0.3), inset 0 0 30px hsl(43 74% 49% / 0.1)',
        }} />
      </div>

      {/* Text content */}
      <div>
        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 text-gold-glow tracking-wide leading-tight">
          КЛЮЧ ПЕРЕХОДА 2026
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-foreground/90 text-center max-w-3xl mx-auto mb-8 leading-relaxed font-light">
          2025 год тебя вымотал? Ты чувствуешь, что ходишь по кругу: долги, быт, одиночество? 
          <span className="text-primary font-medium"> 2026 — год Огненной Лошади.</span> Она либо вынесет тебя на вершину, либо затопчет.
        </p>

        {/* Urgency text */}
        <p className="text-sm sm:text-base md:text-lg text-primary/80 text-center max-w-2xl mx-auto mb-10 italic">
          Сделай это до боя курантов, или оставайся в своём болоте ещё на 12 лет
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            variant="goldPulse" 
            size="xl" 
            onClick={scrollToCalculator}
            className="group"
          >
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
            УЗНАТЬ СВОЙ КОД
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
