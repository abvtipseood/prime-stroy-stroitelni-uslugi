import { motion } from 'motion/react';
import { Hammer, CheckCircle2, Phone } from 'lucide-react';

export default function ServiceRoof() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://i.ibb.co/HT1m50XL/image.png" 
            alt="Ремонт на покриви" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-brand-accent rounded-xl flex items-center justify-center">
              <Hammer className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Ремонт на покриви</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl">
            Цялостно изграждане и ремонт на покривни конструкции. Гарантирано качество и защита от течове.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Защо покривът е толкова важен?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Покривът е най-важният елемент от всяка сграда, който я предпазва от атмосферните влияния. Дори най-малкият теч може да доведе до сериозни структурни повреди и мухъл. Ние от PRIME STROY предлагаме професионален ремонт и изграждане на покриви, използвайки най-съвременните материали и технологии.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Какво включва услугата?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Демонтаж на стари керемиди и почистване',
                  'Изграждане на нова дървена конструкция',
                  'Полагане на хидроизолационно фолио',
                  'Наковаване на двойна скара',
                  'Полагане на нови керемиди (керамични или битумни)',
                  'Монтаж на улуци и водосточни тръби',
                  'Обшиване на комини и бордове',
                  'Отстраняване на локални течове'
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
              <h3 className="text-xl font-bold text-brand-dark mb-4">Нуждаете се от ремонт?</h3>
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
