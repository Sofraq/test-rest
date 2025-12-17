import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageCircle, CheckCircle2, Gift } from 'lucide-react';
import FloatingParticles from '@/components/FloatingParticles';
import StarField from '@/components/StarField';

const SuccessAccess = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);
  const handleGetMaterial = () => {
    // Placeholder for material access
    console.log('Get material clicked');
  };

  const handleContactManager = () => {
    window.open('https://t.me/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 bg-gradient-cosmic" />
      <StarField />
      <FloatingParticles />
      <div className="grain-overlay" />

      {/* Content */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-24 h-24 mx-auto bg-gradient-gold rounded-full flex items-center justify-center shadow-gold-glow">
              <CheckCircle2 className="w-12 h-12 text-background" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl text-gold-glow mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Поздравляем!
          </h1>
          
          <p className="text-xl text-foreground/90 mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Оплата прошла успешно
          </p>
          
          <p className="text-foreground/70 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Ваш КЛЮЧ ПЕРЕХОДА 2026 готов к получению
          </p>

          {/* Main Card */}
          <div className="golden-frame p-8 md:p-10 bg-card/50 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-primary" />
              <h2 className="font-serif text-2xl text-gold-glow">
                Ваш доступ активирован
              </h2>
            </div>

            <p className="text-foreground/80 mb-8">
              Нажмите кнопку ниже, чтобы получить материалы курса. 
              Если у вас возникли вопросы — наш менеджер готов помочь.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="goldPulse" 
                size="xl" 
                className="min-w-[220px]"
                onClick={handleGetMaterial}
              >
                <Sparkles className="w-5 h-5" />
                Получить материал
              </Button>
              
              <Button 
                variant="goldOutline" 
                size="xl" 
                className="min-w-[220px]"
                onClick={handleContactManager}
              >
                <MessageCircle className="w-5 h-5" />
                Написать в Telegram
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-primary/60 mt-8 italic font-serif animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            «Ваша трансформация начинается прямо сейчас»
          </p>
        </div>
      </main>
    </div>
  );
};

export default SuccessAccess;
