import React from 'react';
import { Flame, Droplets, ScrollText, Sparkles } from 'lucide-react';

const RitualCleansing = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Flame className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="font-serif text-3xl md:text-4xl text-gold-glow text-center">
            Сжигаем Прошлое
          </h2>
          <Flame className="w-8 h-8 text-primary animate-pulse" />
        </div>

        <div className="golden-frame p-6 md:p-10 bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-0">
            {/* Left Column - Salt Ritual */}
            <div className="md:pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-primary">Солевая Выкатка</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">1</span>
                  <p className="text-foreground/90">Возьми крупную морскую соль — 3 горсти</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">2</span>
                  <p className="text-foreground/90">В полночь 31 декабря зажги белую свечу</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">3</span>
                  <p className="text-foreground/90">Катай соль между ладонями 9 минут по часовой стрелке</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">4</span>
                  <p className="text-foreground/90">Представляй, как вся боль и неудачи года уходят в соль</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">5</span>
                  <p className="text-foreground/90">Смой соль проточной водой — отпусти прошлое</p>
                </div>
              </div>

              <div className="bg-secondary/30 border-l-2 border-primary rounded-r-lg p-4">
                <p className="text-primary italic font-serif text-lg">
                  «Соль земная, вода живая — заберите боль мою, освободите душу мою для нового пути»
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block golden-divider" />

            {/* Right Column - Burning Letter */}
            <div className="md:pl-8 md:border-l border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                  <ScrollText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-primary">Письмо-Сжигание</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">1</span>
                  <p className="text-foreground/90">Напиши на бумаге всё, что тебя мучает: обиды, страхи, имена людей, которые причинили боль</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">2</span>
                  <p className="text-foreground/90">Напиши всё, что хочешь оставить в 2025 году навсегда</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">3</span>
                  <p className="text-foreground/90">За 5 минут до полуночи сожги письмо полностью</p>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-sm font-medium text-primary">4</span>
                  <p className="text-foreground/90">Пепел развей по ветру или смой водой</p>
                </div>
              </div>

              <div className="bg-secondary/30 border border-primary/30 rounded-lg p-4 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80 text-sm">
                  <strong className="text-primary">Важно:</strong> Делай ритуал именно в новогоднюю ночь — энергия перехода усиливает очищение в 100 раз
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualCleansing;
