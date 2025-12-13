import React from 'react';

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 6,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 6px hsl(43 74% 49% / 0.6)',
          }}
        />
      ))}
      
      {/* Larger glowing orbs */}
      <div 
        className="absolute w-64 h-64 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(43 74% 49% / 0.3) 0%, transparent 70%)',
          top: '10%',
          right: '10%',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(270 50% 30% / 0.4) 0%, transparent 70%)',
          bottom: '20%',
          left: '-10%',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};

export default FloatingParticles;
