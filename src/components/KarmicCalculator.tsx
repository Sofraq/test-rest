import React, { useState } from 'react';
import { Button } from './ui/button';
import { Compass, Calculator, AlertTriangle } from 'lucide-react';

const povertyScenarios: Record<number, { title: string; growthZone: string; description: string; manifestation: string; barrier: string; risks: string }> = {
  1: {
    title: "Архетип «Абсолютный Лидер»",
    growthZone: "Доверие и делегирование.",
    description: "Ты сильная личность, прирожденный руководитель. Твоя особенность — привычка рассчитывать только на себя. Ты живешь по принципу «хочешь сделать хорошо — сделай сама». Это приводит к изоляции даже в отношениях.",
    manifestation: "Ты можешь быть в браке, но чувствовать внутреннее одиночество. Партнеру рядом с тобой сложно проявить инициативу, так как ты бессознательно подавляешь его своим авторитетом и контролем.",
    barrier: "Ты выстроила вокруг себя «психологическую броню». Тебе кажется, что это защита, но на деле это страх проявить уязвимость.",
    risks: "Если не научиться делегировать и доверять, есть риск эмоционального отчуждения. Достижения будут даваться через сверх-усилия, а сфера личных отношений останется в дефиците."
  },
  2: {
    title: "Архетип «Спасатель»",
    growthZone: "Личные границы и самоценность.",
    description: "У тебя высокий уровень эмпатии, ты тонко чувствуешь людей. Но часто ты ставишь чужие интересы выше своих, забывая о собственных потребностях. Ты растворяешься в партнере и близких.",
    manifestation: "Тебе сложно отказать или сказать «нет». Окружающие могут привыкать к твоей безотказности и перестают ценить твой вклад, воспринимая заботу как должное.",
    barrier: "Подсознательное убеждение «я недостойна большего». Это блокирует твой финансовый рост, так как ты боишься заявлять о своих правах и желаниях.",
    risks: "Высокая вероятность эмоционального выгорания. Подавленные желания могут привести к апатии и чувству, что жизнь проходит мимо."
  },
  3: {
    title: "Архетип «Контролирующий Наставник»",
    growthZone: "Гибкость и принятие.",
    description: "Ты роскошная женщина, созданная для статуса и изобилия. Но твоя теневая сторона — чрезмерная требовательность. Ты смотришь на мир и мужчин через призму «должен» и «недостаточно хорош».",
    manifestation: "Критика и тотальный контроль убивают инициативу в твоем окружении. Мужчины рядом с тобой перестают стремиться к достижениям, так как чувствуют постоянное давление и недовольство.",
    barrier: "Глубокая внутренняя неудовлетворенность. Внешне всё может быть идеально, но внутри — напряжение. Это состояние блокирует твою женственность и легкость.",
    risks: "Кризис в отношениях из-за борьбы за власть. Финансовый потолок, который сложно пробить, используя только жесткие методы давления."
  },
  4: {
    title: "Архетип «Хранитель Стабильности»",
    growthZone: "Баланс «Работа — Отдых».",
    description: "Ты — опора и фундамент. На тебе держится многое. Но ты склонна брать на себя чрезмерную ответственность, путая стойкость с отказом от собственных чувств. Ты считаешь, что результат возможен только через тяжелый труд.",
    manifestation: "Ты не умеешь расслабляться, даже в отпуске мысли о делах. Ты используешь «мужские» стратегии достижения целей — через силу воли, игнорируя интуицию и легкость.",
    barrier: "Хроническая усталость. Твой ресурс не бесконечен. Наблюдая за другими, ты не понимаешь, почему им всё дается легче, чем тебе.",
    risks: "Организм может потребовать принудительного отдыха. Финансовая стагнация: работать больше уже физически невозможно, а доход не растет."
  },
  5: {
    title: "Архетип «Искатель Свободы»",
    growthZone: "Фокус и Дисциплина.",
    description: "Ты яркая и креативная натура, но твоя жизнь часто нестабильна. Тебя бросает из крайности в крайность, ты увлекаешься идеями, но быстро остываешь, не доводя начатое до результата.",
    manifestation: "Финансовые качели — то густо, то пусто. В отношениях — драма и смена эмоций. Ты избегаешь рутины, но вместе с ней избегаешь и глубины.",
    barrier: "Отсутствие внутренней опоры. Погоня за новыми впечатлениями часто является способом убежать от тревоги и встречи с собой.",
    risks: "Потеря ориентиров и расфокусировка. Хаотичные действия могут привести к непредсказуемым тратам и упущенным возможностям."
  },
  6: {
    title: "Архетип «Эстет-Перфекционист»",
    growthZone: "Принятие несовершенства мира.",
    description: "Ты стремишься к гармонии и красоте во всем. Твой стандарт — идеал. Ты ищешь идеального партнера, идеальную работу и условия. Но ожидание «подходящего момента» часто заставляет тебя ставить жизнь на паузу.",
    manifestation: "Тебе сложно начать действовать, пока не готово «всё на 100%». Это приводит к прокрастинации. В отношениях ты можешь фокусироваться на недостатках партнера, упуская глубину чувств.",
    barrier: "Гипертрофированный перфекционизм. Он работает как пробка в делах: ты не запускаешь проекты и не открываешься людям, боясь ошибки или разочарования.",
    risks: "Столкновение с реальностью может вызвать сильный стресс. Есть риск остаться наблюдателем чужого успеха, пока ты ждешь «идеального шанса», который может так и не наступить."
  },
  7: {
    title: "Архетип «Интеллектуал-Аналитик»",
    growthZone: "Доверие и Эмоциональная открытость.",
    description: "Ты глубокая и проницательная личность. Твоя суперсила — интеллект. Но ты склонна «жить в голове», анализируя там, где нужно чувствовать. Ты выстраиваешь дистанцию с миром, считая это безопасностью, но это ограничивает твои возможности.",
    manifestation: "Окружающим ты можешь казаться холодной или отстраненной. Ты пытаешься просчитать жизнь логически, игнорируя интуицию и спонтанность, что мешает выстраивать теплые связи.",
    barrier: "Замкнутость. Деньги и возможности приходят через коммуникацию с людьми. Излишняя закрытость блокирует этот обмен, создавая эффект «стеклянного купола» вокруг тебя.",
    risks: "Социальная дистанция может перерасти в изоляцию. Без навыка выстраивать доверительные отношения есть риск упустить важные партнерства и поддержку."
  },
  8: {
    title: "Архетип «Борец за Справедливость»",
    growthZone: "Гибкость и Управление энергией.",
    description: "Ты человек действия и принципов. Тебе важно, чтобы всё было «правильно» и честно. Но часто твое стремление к справедливости превращается в бесконечную борьбу с ветряными мельницами — с руководством, родными или системой.",
    manifestation: "Ты живешь в высоком напряжении. Тебе кажется, что мир бросает тебе вызов. Ты тратишь ресурсы на доказательство своей правоты, вместо того чтобы монетизировать свои таланты.",
    barrier: "Конфликтность как способ взаимодействия. Ты видишь подвох там, где его нет. Это отталкивает удачу, которая любит легкость, а не напряжение.",
    risks: "Эмоциональное истощение. Борьба за правду может забрать все силы, необходимые для финансового роста. Есть риск выиграть спор, но проиграть в качестве жизни."
  },
  9: {
    title: "Архетип «Альтруист-Наставник»",
    growthZone: "Баланс «Давать — Брать».",
    description: "Ты мудрая душа, готовая помочь каждому. Но часто твоя помощь превращается в жертвенность. Ты заботишься о других в ущерб себе, считая это благородной миссией, но забываешь восполнять собственный ресурс.",
    manifestation: "Ты притягиваешь людей, которые пользуются твоей добротой. Твой бюджет и время уходят на решение чужих проблем, в то время как твои собственные цели откладываются «на потом».",
    barrier: "Отсутствие здорового эгоизма. Ты отдаешь больше, чем получаешь. Это нарушает закон энергообмена, приводя к чувству опустошенности и финансовым дырам.",
    risks: "Ресурсное выгорание. Если не научиться говорить «нет» и не поставить себя на первое место, сил на реализацию собственных планов просто не останется."
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
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="font-serif text-xl md:text-2xl text-primary">
                    Число {result}: {povertyScenarios[result].title}
                  </h3>
                </div>
                
                <div className="space-y-5 text-foreground/90 leading-relaxed">
                  <div>
                    <p className="text-primary/90 font-medium mb-1">Твоя зона роста:</p>
                    <p>{povertyScenarios[result].growthZone}</p>
                  </div>

                  <div>
                    <p>{povertyScenarios[result].description}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary/90 font-medium mb-1">• Как это проявляется:</p>
                    <p className="blur-[6px] select-none">{povertyScenarios[result].manifestation}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary/90 font-medium mb-1">• Твой барьер:</p>
                    <p className="blur-[6px] select-none">{povertyScenarios[result].barrier}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary/90 font-medium mb-1">• Риски 2026 года:</p>
                    <p className="text-destructive/90 blur-[6px] select-none">{povertyScenarios[result].risks}</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 px-2">
                <a 
                  href="https://auth.robokassa.ru/merchant/Invoice/IglCqDSfHEy8P65ZzYnTpA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="goldPulse" 
                    size="lg" 
                    className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 whitespace-normal h-auto py-3 mb-4"
                  >
                    ПОЛУЧИТЬ РАЗБОР
                  </Button>
                </a>
                <p className="text-primary/80 italic">
                  Хочешь узнать, как разблокировать свой денежный канал в 2026?
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KarmicCalculator;