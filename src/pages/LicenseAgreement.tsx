import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import StarField from '@/components/StarField';

const LicenseAgreement = () => {
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

        <h1 className="font-serif text-2xl md:text-3xl text-primary mb-2">
          ДОКУМЕНТ 2: ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ
        </h1>
        <h2 className="font-serif text-lg text-primary/80 mb-8">
          ЛИЦЕНЗИОННОЕ СОГЛАШЕНИЕ С КОНЕЧНЫМ ПОЛЬЗОВАТЕЛЕМ (EULA)
        </h2>

        <div className="space-y-6 text-muted-foreground/80" style={{ fontSize: '14px', lineHeight: '1.8' }}>
          <section>
            <h3 className="text-primary/80 font-medium mb-2">1. ПРЕДМЕТ СОГЛАШЕНИЯ</h3>
            <p className="mb-2">
              1.1. Лицензиар (Исполнитель) предоставляет Лицензиату (Заказчику) право использования Результатов интеллектуальной деятельности (далее — «Контент»): авторских текстов, гидов, инструкций, аудиовизуальных произведений, размещенных на сайте [Ссылка].
            </p>
            <p>
              1.2. Лицензия является простой (неисключительной), ограниченной и не подлежит передаче третьим лицам.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">2. РАЗРЕШЕННОЕ ИСПОЛЬЗОВАНИЕ</h3>
            <p className="mb-2">
              2.1. Лицензиат имеет право скачивать, хранить и просматривать/прослушивать Контент исключительно в личных некоммерческих целях.
            </p>
            <p>
              2.2. Лицензиат имеет право использовать методики, описанные в Контенте, для личного саморазвития.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">3. ЗАПРЕЩЕННЫЕ ДЕЙСТВИЯ</h3>
            <p className="mb-2">3.1. Лицензиату ЗАПРЕЩАЕТСЯ:</p>
            <ul className="list-none space-y-1 ml-4">
              <li>— Копировать Контент с целью распространения.</li>
              <li>— Публиковать Контент в сети Интернет (в открытых и закрытых чатах, на форумах, в социальных сетях).</li>
              <li>— Перепродавать Контент или предоставлять к нему доступ третьим лицам за плату или бесплатно.</li>
              <li>— Вносить изменения в структуру файлов, удалять знаки охраны авторского права.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">4. ОТВЕТСТВЕННОСТЬ</h3>
            <p>
              4.1. В случае нарушения условий использования Контента, Лицензиат обязан выплатить Лицензиару штраф в размере 50000 рублей за каждый факт нарушения, а также возместить убытки.
            </p>
          </section>

          <section>
            <h3 className="text-primary/80 font-medium mb-2">5. ОТСУТСТВИЕ ГАРАНТИЙ</h3>
            <p>
              5.1. Контент предоставляется по принципу «как есть» (as is). Лицензиар не гарантирует, что Контент будет отвечать требованиям Лицензиата или что использование Контента принесет конкретный результат.
            </p>
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

export default LicenseAgreement;