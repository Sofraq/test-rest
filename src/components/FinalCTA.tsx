import React from 'react';
import { Button } from './ui/button';
import { Shield, Clock, Gift, Sparkles, CheckCircle2 } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 border border-primary/40 rounded-lg p-4 mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Осталось времени
            </span>
            <Clock className="w-5 h-5 text-primary animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="bg-card/80 rounded px-3 py-2 border border-primary/30">
              <span className="font-serif text-2xl md:text-3xl text-gold-glow">00</span>
              <span className="text-xs text-muted-foreground block">дней</span>
            </div>
            <span className="text-primary text-2xl">:</span>
            <div className="bg-card/80 rounded px-3 py-2 border border-primary/30">
              <span className="font-serif text-2xl md:text-3xl text-gold-glow">23</span>
              <span className="text-xs text-muted-foreground block">часа</span>
            </div>
            <span className="text-primary text-2xl">:</span>
            <div className="bg-card/80 rounded px-3 py-2 border border-primary/30">
              <span className="font-serif text-2xl md:text-3xl text-gold-glow">59</span>
              <span className="text-xs text-muted-foreground block">минут</span>
            </div>
          </div>
        </div>

        {/* Main CTA Card */}
        <div className="golden-frame p-8 md:p-12 bg-card/50 backdrop-blur-sm text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gold-glow mb-4">
            КЛЮЧ ПЕРЕХОДА 2026
          </h2>
          
          <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
            Полная система трансформации: ритуалы очищения, программирование года, персональный код изобилия
          </p>

          {/* What's Included */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/90">Диагностика кармического кода</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/90">7 ритуалов очищения</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/90">12 дней силы — гайд</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/90">Код изобилия персонально</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/90">Ритуал кошелька</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground/90">Бонус: Медитация изобилия</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-muted-foreground line-through text-xl">4 990 ₽</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                -60%
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl md:text-6xl text-gold-glow font-bold">
                1 990
              </span>
              <span className="text-primary text-2xl">₽</span>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Только до 31 декабря
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="goldPulse" 
            size="xl" 
            className="w-full sm:w-auto min-w-[280px] mb-8"
          >
            <Sparkles className="w-5 h-5" />
            ПОЛУЧИТЬ РИТУАЛ
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Безопасная оплата</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm">Мгновенный доступ</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Доступ навсегда</span>
            </div>
          </div>
        </div>

        {/* Final Urgency */}
        <p className="text-center text-primary/70 mt-8 italic font-serif text-lg">
          «2026 год не будет ждать. Огненная Лошадь уже седлает — успей запрыгнуть»
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
