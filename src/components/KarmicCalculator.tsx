import React, { useState } from 'react';
import { Button } from './ui/button';
import { Compass, Calculator, AlertTriangle } from 'lucide-react';

const povertyScenarios: Record<number, { title: string; problem: string; manifestation: string; pain: string; prognosis: string }> = {
  1: {
    title: "Синдром «Я сама»",
    problem: "Гиперконтроль и Одиночество на вершине. Ты сильная, ты лидер. Но давай честно: ты устала тащить всё на себе. Твоя главная проблема — тотальное недоверие миру и мужчинам. Ты живешь в режиме «если хочешь сделать хорошо — сделай сама».",
    manifestation: "Ты можешь быть замужем, но чувствовать себя одинокой. Мужчина рядом с тобой либо слабеет и ложится на диван, либо сбегает, потому что не выдерживает конкуренции с твоими «стальными яйцами».",
    pain: "Ты превратилась в «Железную Леди». Твоя женская энергия закована в броню. Ты думаешь, что это сила, но на самом деле это страх показаться слабой.",
    prognosis: "Если не снять эту броню, ты рискуешь остаться в полной изоляции. Деньги будут даваться только тяжелым трудом, через «надорваться», а тепло и забота пройдут мимо."
  },
  2: {
    title: "Синдром «Удобной женщины»",
    problem: "Жертвенность и Обесценивание себя. Ты идеальный эмпат, ты чувствуешь других. Но где в этом ты? Твоя проблема в том, что ты стала «кормовой базой» для окружающих. Ты растворяешься в партнере, детях, коллегах, забывая о своих желаниях.",
    manifestation: "Тебе сложно сказать «нет». Ты терпишь неуважение, надеясь, что твою покорность оценят и полюбят. Но тебя не любят — тобой пользуются.",
    pain: "Хроническое чувство, что ты «не достойна» больших денег и лучшей жизни. Деньги утекают сквозь пальцы, потому что подсознательно ты считаешь, что тебе «много не надо».",
    prognosis: "Полное эмоциональное выгорание. Ты рискуешь превратиться в тень, которую никто не замечает, с букетом психосоматических болезней от подавленных обид."
  },
  3: {
    title: "Синдром «Кастрирующей Императрицы»",
    problem: "Претензии и Подавление мужского начала. Ты роскошная женщина, рожденная для изобилия. Но твоя теневая сторона — это тирания. Ты не вдохновляешь, ты требуешь. Ты смотришь на мужчин через призму «должен» и «недостаточно хорош».",
    manifestation: "Ты пилишь, критикуешь и контролируешь. Рядом с тобой мужчины теряют потенцию — и сексуальную, и финансовую. Ты можешь зарабатывать сама, но внутри нет счастья, есть только вечная гонка за статусом.",
    pain: "Глубокая неудовлетворенность. Вроде всё есть, а радости нет. Женское здоровье начинает сигналить сбоями, потому что твоя матка «сжата» от напряжения и злости.",
    prognosis: "Разрушение отношений или жизнь с «подкаблучником», которого ты сама будешь презирать. Финансовый потолок, который невозможно пробить на мужской энергии агрессии."
  },
  4: {
    title: "Синдром «Мужика в юбке»",
    problem: "Тотальный Трудоголизм и Недоверие Вселенной. Ты — опора, фундамент, скала. На тебе держится дом, работа, быт. Но давай посмотрим правде в глаза: ты забыла, что ты женщина. Ты пашешь как лошадь, считая, что деньги приходят только через пот и кровь.",
    manifestation: "Ты не умеешь расслабляться. Даже в отпуске ты контролируешь процессы. Ты просишь у мира денег «по-мужски» — через силу, и Вселенная не дает тебе легких ресурсов и подарков.",
    pain: "Дикая, свинцовая усталость. Твоё тело кричит о помощи. Ты смотришь на легких, порхающих женщин и не понимаешь: «Почему им всё, а мне — только новые обязанности?».",
    prognosis: "Организм может уложить тебя в постель принудительно, чтобы ты отдохнула. Финансовый застой: сколько бы ты ни работала, денег больше не становится."
  },
  5: {
    title: "Синдром «Вечного хаоса»",
    problem: "Нестабильность и Страх глубины. Ты яркая, свободолюбивая, но твоя жизнь похожа на американские горки. Тебя кидает из крайности в крайность. Ты хватаешься за всё и не доводишь ничего до конца.",
    manifestation: "Деньги — то густо, то пусто. Отношения — вечная драма, качели от страсти до ненависти. Ты боишься скуки, но на самом деле ты боишься встретиться с самой собой настоящей.",
    pain: "Отсутствие фундамента. У тебя нет чувства безопасности. Ты бежишь за новыми эмоциями, чтобы заглушить внутреннюю тревогу. Ты теряешь возможности из-за своей непредсказуемости.",
    prognosis: "Потеря ориентиров. Хаос поглотит твои финансы. Ты рискуешь остаться у разбитого корыта, перебрав кучу вариантов, но так и не построив ничего прочного."
  },
  6: {
    title: "Синдром «Разочарованной Принцессы»",
    problem: "Иллюзии и Идеализм. Ты стремишься к красоте и гармонии, но живешь в выдуманном мире. Ты ищешь идеального мужчину, идеальную работу, идеальные условия. Спойлер: их не существует.",
    manifestation: "Ты вечно обижена на мир за то, что он несовершенен. Ты критикуешь партнера за то, что он не принц. Ты не начинаешь свое дело, потому что «еще не все готово идеально».",
    pain: "Твой перфекционизм — это пробка в твоем денежном потоке. Ты ждешь особого случая, чтобы начать жить, а жизнь проходит мимо. Деньги не идут к тем, кто носит розовые очки.",
    prognosis: "Глубокая депрессия от столкновения с реальностью. Одиночество, потому что ни один живой человек не сможет соответствовать твоим завышенным требованиям."
  },
  7: {
    title: "Синдром «Горе от ума»",
    problem: "Замкнутость и Отказ от чувств. Ты глубокая, умная, проницательная. Но ты живешь в голове. Ты анализируешь там, где надо чувствовать. Ты построила вокруг себя стену, которую называешь «личным пространством», но на самом деле это тюрьма.",
    manifestation: "Тебе сложно подпустить к себе людей. Ты кажешься холодной и отстраненной. Ты не доверяешь интуиции, пытаясь все просчитать логически.",
    pain: "Деньги — это энергия обмена с людьми. А ты закрыта на семь замков. Денежный поток обходит тебя стороной, потому что ты не излучаешь энергию, ты её консервируешь.",
    prognosis: "Социальная изоляция и психоэмоциональные расстройства. Ты рискуешь стать «невидимкой» для Вселенной, умной, но бедной и одинокой."
  },
  8: {
    title: "Синдром «Воина Справедливости»",
    problem: "Борьба и Доказательства. Вся твоя жизнь — это поле битвы. Тебе кажется, что мир несправедлив, и ты обязана это исправить. Ты судишься, споришь, доказываешь свою правоту мужу, начальнику, родителям.",
    manifestation: "Ты живешь в напряжении. Ты притягиваешь сложные ситуации, чтобы снова вступить в бой. Ты не умеешь принимать подарки судьбы, тебе везде чудится подвох.",
    pain: "Ты тратишь колоссальную энергию на войну, а могла бы тратить её на монетизацию талантов. Деньги приходят к тебе тяжело, через конфликты и преодоление.",
    prognosis: "Потеря ресурсов. Твоя борьба начнет разрушать тебя изнутри. Ты можешь выиграть суд, но проиграть жизнь, оставшись правой, но глубоко несчастной."
  },
  9: {
    title: "Синдром «Спасателя Мира»",
    problem: "Жертвенность ради идеи и Забвение себя. Ты мудрая душа, но ты играешь в Мать Терезу. Ты жалеешь всех убогих, несчастных и «непонятых». Ты отдаешь последнюю рубашку, считая это высшей миссией.",
    manifestation: "Твой дом полон проблемных родственников или друзей, которые живут за твой счет (энергетически или финансово). Ты закрываешь глаза на свои дыры в бюджете, спасая других.",
    pain: "Пустой кошелек и пустота в душе. Ты ждешь благодарности, но получаешь лишь новые требования. Ты сливаешь свой потенциал в «черную дыру» чужих проблем.",
    prognosis: "Полное обнищание — и материальное, и духовное. Если ты не начнешь спасать СЕБЯ, у тебя не останется сил жить. Ты станешь ресурсом для паразитов."
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
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
                  <h3 className="font-serif text-xl md:text-2xl text-primary">
                    Число {result}: {povertyScenarios[result].title}
                  </h3>
                </div>
                
                <div className="space-y-5 text-foreground/90 leading-relaxed">
                  <div>
                    <p className="text-primary/90 font-medium mb-1">Твоя проблема:</p>
                    <p>{povertyScenarios[result].problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary/90 font-medium mb-1">Как это проявляется:</p>
                    <p>{povertyScenarios[result].manifestation}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary/90 font-medium mb-1">Твоя боль:</p>
                    <p>{povertyScenarios[result].pain}</p>
                  </div>
                  
                  <div>
                    <p className="text-primary/90 font-medium mb-1">Прогноз на 2026:</p>
                    <p className="text-destructive/90">{povertyScenarios[result].prognosis}</p>
                  </div>
                </div>
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