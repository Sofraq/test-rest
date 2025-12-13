import React, { useState } from 'react';
import { Button } from './ui/button';
import { Compass, Calculator, AlertTriangle } from 'lucide-react';

const povertyScenarios: Record<number, { title: string; text: string }> = {
  1: {
    title: "Одиночка-Гордячка",
    text: "Ты слишком независима. Твоя гордыня отталкивает деньги и мужчин. Пока не научишься принимать — будешь одна. Твоя энергия «я сама всё могу» закрывает канал изобилия."
  },
  2: {
    title: "Жертвенная Спасительница",
    text: "Ты растворяешься в других. Отдаёшь всё, а получаешь крохи. Твоя жертвенность — твоя ловушка. Ты так привыкла быть нужной другим, что забыла: ты тоже заслуживаешь получать."
  },
  3: {
    title: "Рассеянная Мечтательница",
    text: "Ты распыляешься. Начинаешь 100 дел, не заканчиваешь ни одного. Хаос в голове = хаос в кошельке. Твоя энергия утекает в пустоту нереализованных идей."
  },
  4: {
    title: "Усталая Воительница",
    text: "Ты тащишь всё на себе, как мужик. Твоя мужская энергия блокирует приход сильного партнёра и денег. Вселенная не может дать тебе поддержку, потому что ты не просишь."
  },
  5: {
    title: "Вечная Беглянка",
    text: "Ты боишься стабильности. Бежишь от всего серьёзного. Деньги любят постоянство, а ты — нет. Каждый раз, когда появляется возможность — ты находишь причину уйти."
  },
  6: {
    title: "Забывшая Себя",
    text: "Ты живёшь ради других. Дети, муж, родители — все, кроме тебя. А деньги идут к тем, кто себя ценит. Твой внутренний ребёнок плачет от недостатка внимания."
  },
  7: {
    title: "Заточённая в Голове",
    text: "Ты слишком в голове. Анализируешь вместо того, чтобы действовать. Пока думаешь — другие зарабатывают. Твой страх ошибиться парализует денежный поток."
  },
  8: {
    title: "Презирающая Малое",
    text: "Ты гонишься за большим, презирая малое. Деньги обижаются, когда их не ценят. Ты отвергаешь маленькие возможности, не понимая, что именно они открывают большие двери."
  },
  9: {
    title: "Пленница Прошлого",
    text: "Ты застряла в прошлом. Обиды и боль 10-летней давности блокируют твой денежный канал. Ты несёшь груз, который давно пора сжечь и отпустить."
  },
};

const KarmicCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateDestinyNumber = (date: string): number => {
    const digits = date.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((acc, digit) => acc + digit, 0);
    
    while (sum > 9) {
      sum = sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
    }
    
    return sum || 9;
  };

  const handleCalculate = () => {
    if (!birthDate) return;
    
    setIsCalculating(true);
    setResult(null);
    
    setTimeout(() => {
      const destinyNumber = calculateDestinyNumber(birthDate);
      setResult(destinyNumber);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section id="calculator" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="golden-frame p-8 md:p-12 bg-card/50 backdrop-blur-sm">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <Compass className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="font-serif text-3xl md:text-4xl text-gold-glow text-center">
              Твой Кармический Код
            </h2>
            <Compass className="w-8 h-8 text-primary animate-pulse" />
          </div>

          {/* Input Section */}
          <div className="max-w-md mx-auto mb-8">
            <label className="block text-sm text-muted-foreground mb-2 text-center uppercase tracking-wider">
              Введи дату рождения
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full bg-secondary/50 border border-primary/30 rounded-lg px-4 py-3 text-foreground text-center text-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              style={{ colorScheme: 'dark' }}
            />
          </div>

          {/* Calculate Button */}
          <div className="text-center mb-10">
            <Button 
              variant="gold" 
              size="lg" 
              onClick={handleCalculate}
              disabled={!birthDate || isCalculating}
              className="min-w-[200px]"
            >
              {isCalculating ? (
                <>
                  <div className="w-5 h-5 border-2 border-cosmic-deep border-t-transparent rounded-full animate-spin" />
                  Считаю...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" />
                  Рассчитать
                </>
              )}
            </Button>
          </div>

          {/* Results */}
          {result !== null && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <p className="text-muted-foreground uppercase tracking-wider text-sm mb-2">
                  Число Судьбы
                </p>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-primary bg-primary/10 shadow-gold">
                  <span className="font-serif text-5xl text-gold-glow font-bold">
                    {result}
                  </span>
                </div>
              </div>

              <div className="bg-secondary/30 border border-primary/20 rounded-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="font-serif text-xl md:text-2xl text-primary">
                    Твой Сценарий Бедности: {povertyScenarios[result].title}
                  </h3>
                </div>
                <p className="text-foreground/90 leading-relaxed text-lg">
                  {povertyScenarios[result].text}
                </p>
              </div>

              <div className="text-center mt-8">
                <p className="text-primary/80 italic mb-4">
                  Хочешь узнать, как разблокировать свой денежный канал в 2026?
                </p>
                <Button variant="goldOutline" size="lg">
                  ПОЛУЧИТЬ РИТУАЛ РАЗБЛОКИРОВКИ
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KarmicCalculator;
