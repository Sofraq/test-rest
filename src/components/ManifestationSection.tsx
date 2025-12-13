import React from 'react';
import { Wallet, Calendar, KeyRound, Wand2 } from 'lucide-react';

const ManifestationSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Wand2 className="w-8 h-8 text-primary animate-pulse" />
          <h2 className="font-serif text-3xl md:text-4xl text-gold-glow text-center">
            Программирование 2026
          </h2>
          <Wand2 className="w-8 h-8 text-primary animate-pulse" />
        </div>

        <div className="golden-frame p-6 md:p-10 bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 - Wallet Ritual */}
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shadow-gold">
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-primary">Ритуал Кошелька</h3>
              </div>
              
              <p className="text-foreground/90 mb-4 leading-relaxed">
                В новогоднюю ночь положи в кошелёк особые предметы силы, которые притянут деньги весь год:
              </p>
              
              <ul className="space-y-2 text-foreground/80 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Корицу — для быстрых денег
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Лавровый лист — для удачи
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Купюру с твоим числом судьбы
                </li>
              </ul>

              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-primary text-sm italic">
                  Полный ритуал с заговором — внутри курса
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block golden-divider mx-auto" />

            {/* Column 2 - 12 Days of Power */}
            <div className="text-center md:text-left md:border-l md:border-r border-primary/20 md:px-8">
              <div className="flex flex-col items-center md:items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shadow-gold">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-primary">12 Дней Силы</h3>
              </div>
              
              <p className="text-foreground/90 mb-4 leading-relaxed">
                С 1 по 12 января каждый день программирует один месяц твоего года:
              </p>
              
              <div className="space-y-2 text-foreground/80 text-sm">
                <div className="flex justify-between border-b border-primary/10 pb-1">
                  <span>1 января</span>
                  <span className="text-primary">→ Январь</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-1">
                  <span>2 января</span>
                  <span className="text-primary">→ Февраль</span>
                </div>
                <div className="flex justify-between border-b border-primary/10 pb-1">
                  <span>3 января</span>
                  <span className="text-primary">→ Март</span>
                </div>
                <div className="text-center text-primary/60">...</div>
              </div>

              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-primary text-sm italic">
                  Ритуалы для каждого дня — в курсе
                </p>
              </div>
            </div>

            {/* Column 3 - Abundance Code */}
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shadow-gold">
                  <KeyRound className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-primary">Код Изобилия</h3>
              </div>
              
              <p className="text-foreground/90 mb-4 leading-relaxed">
                Твоя личная числовая формула активации денежного потока на основе даты рождения.
              </p>
              
              <div className="space-y-3">
                <div className="bg-secondary/30 rounded-lg p-3 border border-primary/20">
                  <p className="text-sm text-foreground/80">
                    ✦ Персональные денежные числа
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 border border-primary/20">
                  <p className="text-sm text-foreground/80">
                    ✦ Дни силы для финансовых решений
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-3 border border-primary/20">
                  <p className="text-sm text-foreground/80">
                    ✦ Код для пин-кода карты
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-primary text-sm italic">
                  Рассчитаю лично — в курсе
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestationSection;
