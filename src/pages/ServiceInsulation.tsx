import { motion } from 'motion/react';
import { ThermometerSun, CheckCircle2, Phone } from 'lucide-react';

export default function ServiceInsulation() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
            <span className="font-medium text-lg">Място за снимка</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-brand-accent rounded-xl flex items-center justify-center">
              <ThermometerSun className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Топлоизолация и саниране</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">
            Намалете сметките за отопление и повишете комфорта в дома си с качествена външна и вътрешна топлоизолация.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Енергийна ефективност за вашия дом</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Добре изолираната сграда задържа топлината през зимата и прохладата през лятото. Това не само намалява драстично разходите за климатизация, но и предотвратява образуването на конденз и мухъл по стените. Използваме висококачествени системи от водещи производители (EPS, XPS, каменна вата), за да гарантираме дълготраен резултат.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Етапи на работа:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Подготовка и грундиране на основата',
                  'Лепене на топлоизолационни плоскости',
                  'Дюбелиране за максимална здравина',
                  'Полагане на стъклофибърна мрежа',
                  'Шпакловане с лепилно-шпакловъчна смес',
                  'Грундиране преди мазилка',
                  'Нанасяне на декоративна мазилка',
                  'Обръщане на прозорци и врати'
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
              <h3 className="text-xl font-bold text-brand-dark mb-4">Искате по-топъл дом?</h3>
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
