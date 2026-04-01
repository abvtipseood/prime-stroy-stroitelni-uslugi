import { motion } from 'motion/react';
import { PaintRoller, CheckCircle2, Phone } from 'lucide-react';

export default function ServiceInterior() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://i.ibb.co/chR8XHX6/image.png" 
            alt="Вътрешни ремонти" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-brand-accent rounded-xl flex items-center justify-center">
              <PaintRoller className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Вътрешни ремонти</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">
            Освежаване или цялостен ремонт на вашия апартамент, къща или офис. Превръщаме идеите ви в реалност.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Комплексни решения за интериора</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Независимо дали става въпрос за козметично освежаване с нова боя или за основен ремонт "до ключ", нашият екип от специалисти ще се погрижи за всеки детайл. От къртенето и извозването на отпадъците, до фините довършителни работи – ние координираме целия процес, за да ви спестим време и нерви.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Нашите услуги включват:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Къртене, чистене и извозване',
                  'Монтаж на гипсокартон (окачени тавани, преградни стени)',
                  'Фина и груба шпакловка',
                  'Боядисване с латекс и декоративни мазилки',
                  'Полагане на фаянс, теракот и гранитогрес',
                  'Монтаж на ламиниран паркет',
                  'ВиК и Ел. инсталации',
                  'Ремонт на бани'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 sticky top-32">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Планирате ремонт?</h3>
              <p className="text-slate-600 mb-6">
                Свържете се с нас за безплатен оглед и консултация. Ще изготвим индивидуална оферта съобразена с вашите нужди.
              </p>
              <a 
                href="tel:+359896441959" 
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-5 h-5" />
                0896 441 959
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
