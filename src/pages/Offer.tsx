import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StarField from '@/components/StarField';

const Offer = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-cosmic relative overflow-x-hidden grain-overlay">
      <StarField />
      
      <div className="ambient-orb ambient-orb-purple w-[400px] h-[400px] -top-20 -right-20 animate-pulse" style={{ animationDuration: '10s' }} />
      
      <main className="relative z-10 container mx-auto px-4 py-12 max-w-3xl">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors mb-8"
          style={{ fontSize: '12px' }}
        >
          <ArrowLeft className="w-3 h-3" />
          Вернуться на главную
        </Link>

        <h1 className="font-serif text-2xl md:text-3xl text-primary mb-8">
          ДОКУМЕНТ 1: ПУБЛИЧНАЯ ОФЕРТА
        </h1>

        <h2 className="font-serif text-lg text-primary/90 mb-6 text-center">
          ПУБЛИЧНАЯ ОФЕРТА<br />на заключение договора оказания информационных услуг
        </h2>

        <div className="space-y-6 text-muted-foreground/80" style={{ fontSize: '14px', lineHeight: '1.8' }}>
          <section>
            <h3 className="text-primary/80 font-medium mb-2">1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
            <p className="mb-2">
              1.1. Настоящий документ является официальным предложением (публичной офертой) [Твое ФИО или Название ИП], именуемого в дальнейшем «Исполнитель», и содержит все существенные условия предоставления информационных и консультационных услуг любому физическому лицу, именуемому в дальнейшем «Заказчик».
            </p>
            <p>
              1.2. Акцептом настоящей Оферты является совершение Заказчиком действий по оплате услуг Исполнителя на сайте [Ссылка на твой сайт].
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">2. ПРЕДМЕТ ДОГОВОРА</h3>
            <p className="mb-2">
              2.1. Исполнитель обязуется предоставить Заказчику информационные услуги в виде предоставления доступа к цифровым материалам (текстовые файлы, аудиозаписи, видеоуроки) и/или проведения персональных консультаций по анализу личностных характеристик (нумерологический расчет), а Заказчик обязуется принять и оплатить эти услуги.
            </p>
            <p>
              2.2. Услуги Исполнителя носят исключительно информационно-консультационный и культурно-просветительский характер. Услуги не являются медицинской, психологической или психотерапевтической помощью и не могут заменять собой обращение к профильным специалистам.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">3. ПОРЯДОК ОКАЗАНИЯ УСЛУГ</h3>
            <p className="mb-2">
              3.1. Доступ к цифровым материалам (гайдам, инструкциям, аудио-практикам) предоставляется Заказчику в электронном виде (путем отправки на электронную почту или в мессенджер) после 100% оплаты.
            </p>
            <p>
              3.2. Услуга считается оказанной надлежащим образом в момент отправки Исполнителем ссылки на скачивание материалов или доступа к закрытому каналу.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">4. СТОИМОСТЬ И ПОРЯДОК РАСЧЕТОВ</h3>
            <p className="mb-2">
              4.1. Стоимость услуг указана на сайте Исполнителя.
            </p>
            <p>
              4.2. Оплата производится в безналичном порядке через платежные системы, подключенные к сайту.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">5. ПРАВА НА ИНТЕЛЛЕКТУАЛЬНУЮ СОБСТВЕННОСТЬ</h3>
            <p className="mb-2">
              5.1. Все материалы, предоставляемые Заказчику (тексты, методики, аудиозаписи), являются результатом интеллектуальной деятельности Исполнителя и защищены законодательством об авторском праве.
            </p>
            <p>
              5.2. Использование материалов регулируется Лицензионным соглашением, размещенным на сайте.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">6. ОТВЕТСТВЕННОСТЬ СТОРОН И ОТКАЗ ОТ ГАРАНТИЙ</h3>
            <p className="mb-2">
              6.1. Исполнитель не несет ответственности за несоответствие предоставленных услуг ожиданиям Заказчика и/или за его субъективную оценку.
            </p>
            <p className="mb-2">
              6.2. Исполнитель не гарантирует достижения Заказчиком каких-либо конкретных результатов (финансовых, личных и иных) после изучения материалов, так как результативность зависит от личных качеств и действий Заказчика.
            </p>
            <p className="mb-2">
              6.3. Любые рекомендации, содержащиеся в материалах (включая рекомендации по организации быта, досуга, самоанализа), применяются Заказчиком на свой страх и риск.
            </p>
            <p>
              6.4. Особое условие: Материалы могут содержать авторский взгляд на нумерологические и философские концепции. Заказчик осознает, что данные концепции являются формой досуга и самопознания, а не точной наукой.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">7. РЕКВИЗИТЫ ИСПОЛНИТЕЛЯ</h3>
            <p className="mb-1">Соломанов Мурад Арсенович</p>
            <p className="mb-1">ИНН: 050026988235</p>
            <p>Email: muradsolomanov8@gmail.com</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground/40" style={{ fontSize: '10px' }}>
            © 2024 Ключ Перехода. Все права защищены.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Offer;