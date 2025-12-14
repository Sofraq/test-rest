import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax calculations
  const imageY = scrollY * 0.4;
  const textY = scrollY * 0.2;
  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = 1 + scrollY * 0.0003;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Sacred Geometry Image with Parallax */}
      <div 
        className="relative w-full max-w-3xl mx-auto mb-12 aspect-video"
        style={{
          transform: `translateY(${imageY}px) scale(${scale})`,
          opacity: opacity,
        }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div 
            className="w-full h-full bg-gradient-to-br from-cosmic-purple via-cosmic-deep to-cosmic-midnight"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, hsl(43 74% 49% / 0.1) 0%, transparent 50%),
                linear-gradient(135deg, hsl(270 50% 15%) 0%, hsl(260 80% 5%) 100%)
              `,
            }}
          >
            {/* Sacred Geometry Pattern - Metatron's Cube */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full"
              style={{ 
                filter: 'drop-shadow(0 0 20px hsl(43 74% 49% / 0.5))',
                transform: `rotate(${scrollY * 0.02}deg)`,
              }}
            >
              {/* Central hexagon */}
              <g transform="translate(200, 150)" stroke="hsl(43 74% 49%)" strokeWidth="1" fill="none" opacity="0.8">
                {/* Outer circles */}
                <circle r="80" opacity="0.3" />
                <circle r="60" opacity="0.4" />
                <circle r="40" opacity="0.5" />
                
                {/* Hexagon */}
                <polygon 
                  points="0,-70 60.6,-35 60.6,35 0,70 -60.6,35 -60.6,-35" 
                  strokeWidth="1.5"
                />
                
                {/* Inner star */}
                <polygon 
                  points="0,-40 10.4,-12.4 40,-12.4 16.8,6.4 25.6,36 0,18.4 -25.6,36 -16.8,6.4 -40,-12.4 -10.4,-12.4" 
                  fill="hsl(43 74% 49% / 0.2)"
                  strokeWidth="1"
                />
                
                {/* Central symbol */}
                <circle r="15" fill="hsl(43 74% 49% / 0.3)" strokeWidth="2" />
                <circle r="8" fill="hsl(43 74% 49% / 0.5)" />
                
                {/* Connecting lines */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <line
                    key={i}
                    x1="0"
                    y1="0"
                    x2={Math.cos((angle * Math.PI) / 180) * 70}
                    y2={Math.sin((angle * Math.PI) / 180) * 70}
                    opacity="0.4"
                  />
                ))}
              </g>
              
              {/* Hands silhouette */}
              <g transform="translate(200, 150)" fill="none" stroke="hsl(43 74% 49% / 0.6)" strokeWidth="0.5">
                {/* Left hand outline */}
                <path d="M-120,80 Q-100,60 -80,70 Q-60,80 -40,60" opacity="0.4" />
                {/* Right hand outline */}
                <path d="M120,80 Q100,60 80,70 Q60,80 40,60" opacity="0.4" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl" style={{
          boxShadow: '0 0 60px hsl(43 74% 49% / 0.2), inset 0 0 60px hsl(43 74% 49% / 0.1)',
        }} />
      </div>

      {/* Text content with parallax */}
      <div 
        style={{
          transform: `translateY(${textY}px)`,
          opacity: opacity,
        }}
      >
        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 text-gold-glow tracking-wide">
          КЛЮЧ ПЕРЕХОДА 2026
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground/90 text-center max-w-3xl mx-auto mb-8 leading-relaxed font-light">
          2025 год тебя вымотал? Ты чувствуешь, что ходишь по кругу: долги, быт, одиночество? 
          <span className="text-primary font-medium"> 2026 — год Огненной Лошади.</span> Она либо вынесет тебя на вершину, либо затопчет.
        </p>

        {/* Urgency text */}
        <p className="text-base md:text-lg text-primary/80 text-center max-w-2xl mx-auto mb-10 italic">
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
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 0.5 - scrollY / 300) }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
