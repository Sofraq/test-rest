import React, { useEffect } from 'react';
import { Lock, CheckCircle2 } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';

const SuccessAccess = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-cosmic" />
      <StarField />
      <FloatingParticles />
      <div className="grain-overlay" />

      {/* Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        <div className="w-full max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow">
              <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12 text-background" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl text-gold-glow mb-4 sm:mb-6 animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            ОПЛАТА ПРИНЯТА. ДОСТУП ОТКРЫТ.
          </h1>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-10 animate-fade-in-up leading-relaxed px-2" style={{ animationDelay: '0.2s' }}>
            Ты сделала первый шаг. Но файл «Ключ Перехода» — это энергетически сильный материал. Мы не храним его в открытом доступе в интернете.
          </p>

          {/* Description Card */}
          <div className="golden-frame p-6 sm:p-8 md:p-10 bg-gradient-to-br from-gold-dark/20 via-primary/10 to-gold/20 backdrop-blur-sm mb-8 sm:mb-10 animate-fade-in-up border border-gold/30 mx-2" style={{ animationDelay: '0.3s' }}>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-serif italic bg-gradient-to-r from-gold via-primary to-gold bg-clip-text text-transparent">
              Твой экземпляр гайда уже загружен в Закрытый Канал "Архив 2026". Там же ты найдешь много других полезных практик по активации защиты и усилению ауры
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up px-2" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://clck.ru/3Qt7qR"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                variant="goldPulse" 
                size="xl" 
                className="w-full sm:w-auto sm:min-w-[280px] text-sm sm:text-base"
              >
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">ПЕРЕЙТИ В ЗАКРЫТЫЙ КАНАЛ И СКАЧАТЬ</span>
              </Button>
            </a>
          </div>

          {/* Footer note */}
          <p className="text-center text-primary/50 mt-8 sm:mt-10 text-xs sm:text-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Ссылка откроется в Telegram
          </p>
        </div>
      </main>
    </div>
  );
};

export default SuccessAccess;
