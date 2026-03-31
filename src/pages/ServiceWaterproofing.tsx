import { motion } from 'motion/react';
import { Droplets, CheckCircle2, Phone } from 'lucide-react';

export default function ServiceWaterproofing() {
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
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Хидроизолация</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">
            Надеждна защита срещу влага и течове. Професионално полагане на хидроизолационни системи за покриви, основи и тераси.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Защитете сградата от водата</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Водата е един от най-големите врагове на всяка конструкция. Липсата на качествена хидроизолация води до проникване на влага, разрушаване на материалите, поява на мухъл и влошаване на микроклимата в помещенията. Ние предлагаме съвременни решения за хидроизолация, които гарантират 100% водонепропускливост и дълъг експлоатационен живот.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Къде прилагаме хидроизолация?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Плоски и скатни покриви',
                  'Тераси и балкони',
                  'Основи на сгради и сутерени',
                  'Басейни и резервоари',
                  'Бани и мокри помещения',
                  'Полагане на битумни мембрани (рулонна)',
                  'Нанасяне на течна хидроизолация (мазана)',
                  'Инжектиране на пукнатини'
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
              <h3 className="text-xl font-bold text-brand-dark mb-4">Имате проблем с теч?</h3>
              <p className="text-slate-600 mb-6">
                Не отлагайте ремонта! Свържете се с нас за бърз оглед и ефективно отстраняване на проблема.
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
