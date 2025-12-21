import React from 'react';
import { User, Flame, Eye } from 'lucide-react';
import rafaelPhoto from '@/assets/rafael-photo.jpg';

const RafaelBio = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="golden-frame p-8 md:p-12 bg-card/50 backdrop-blur-sm">
          {/* Title */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <User className="w-7 h-7 text-primary" />
            <h2 className="font-serif text-2xl md:text-3xl text-gold-glow text-center">
              Обо мне
            </h2>
            <User className="w-7 h-7 text-primary" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-xl overflow-hidden border-2 border-primary/30 shadow-xl">
                <img 
                  src={rafaelPhoto} 
                  alt="Рафаэль" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                <span className="text-primary font-semibold">Меня зовут Рафаэль.</span> Я не тот практик, который будет говорить вам про «поток» и «женские энергии», пока ваша жизнь рушится. Я практик, работающий с жесткими структурами судьбы — <span className="text-primary">Матрицей и Нумерологией</span>.
              </p>

              <p>
                Я знаю цену ошибкам. Несколько лет назад я проигнорировал знаки своей собственной Матрицы и заплатил за это высокую цену — потерял миллионы, бизнес и почву под ногами. Я прошел через личный ад, туман и полное обнуление, чтобы найти работающие алгоритмы выхода из кризиса.
              </p>

              <p className="flex items-start gap-2">
                <Flame className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>
                  <strong>Сегодня я использую этот опыт, чтобы вы не повторили моих ошибок.</strong>
                </span>
              </p>

              <p>
                Мы стоим на пороге 2026 года — года <span className="text-primary font-medium">Огненной Лошади</span> и кармической жатвы Сатурна. Это время не прощает слабости и невежества. Моя задача — дать вам четкую инструкцию по вашей Дате Рождения: где подстелить соломку, а где — сделать квантовый скачок в деньгах и отношениях.
              </p>

              <p className="flex items-start gap-2 text-primary/90 italic font-serif">
                <Eye className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Я вижу то, что скрыто от других. И я готов открыть это вам.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RafaelBio;
