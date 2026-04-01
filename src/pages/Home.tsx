import { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  CheckCircle2, 
  Hammer, 
  ThermometerSun, 
  PaintRoller, 
  Droplets,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Mail,
  Clock
} from 'lucide-react';

export default function Home() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth * 0.85; // Scroll by roughly one image width
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop" 
            alt="Строителни работници" 
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/30">
              СТРОИТЕЛНИ УСЛУГИ – КАЧЕСТВО И КОРЕКТНОСТ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Качествени строителни услуги за вашия дом
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              Работим бързо, коректно и на достъпни цени. Доверете се на професионалисти с дългогодишен опит.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors text-center shadow-lg shadow-brand-accent/30"
              >
                Заяви безплатен оглед
              </a>
              <a 
                href="tel:+359896441959" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Обади се сега
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "Дългогодишен опит",
              "Коректност и спазени срокове",
              "Качествени материали",
              "Добри цени",
              "Гаранция за работата"
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-800">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Нашите Услуги</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Предлагаме пълен спектър от строителни и ремонтни дейности, изпълнени с безкомпромисно качество.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-slate-200">
                <img 
                  src="https://i.ibb.co/HT1m50XL/image.png" 
                  alt="Ремонт на покриви" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-accent shadow-lg">
                  <Hammer className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Ремонт и изграждане на покриви</h3>
                <ul className="space-y-2 mb-8 flex-grow">
                  {['Демонтаж на стари керемиди', 'Изграждане на нова конструкция', 'Полагане на керемиди', 'Улуци и водосточни тръби', 'Хидроизолация', 'Отстраняване на течове'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/roofs" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors">
                  Научи повече <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-slate-200">
                <img 
                  src="https://i.ibb.co/qF90Zhj9/image.png" 
                  alt="Топлоизолация" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-accent shadow-lg">
                  <ThermometerSun className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Топлоизолация и саниране</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {['Външна топлоизолация (EPS, XPS, вата)', 'Лепене и дюбелиране', 'Армираща мрежа и шпакловка', 'Декоративни мазилки', 'Изолация на тавани'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-rose-50 text-rose-800 p-3 rounded-md text-sm font-medium mb-6 border border-rose-100">
                  Намалява разходите за отопление и повишава комфорта
                </div>
                <Link to="/services/insulation" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors">
                  Научи повече <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-slate-200">
                <img 
                  src="https://i.ibb.co/chR8XHX6/image.png" 
                  alt="Вътрешни ремонти" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-accent shadow-lg">
                  <PaintRoller className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Вътрешни ремонти</h3>
                <ul className="space-y-2 mb-8 flex-grow">
                  {['Гипсокартон', 'Шпакловка', 'Боядисване', 'Полагане на плочки', 'Основни ремонти до ключ'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/interior" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors">
                  Научи повече <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="h-48 overflow-hidden relative bg-slate-200">
                <img 
                  src="https://i.ibb.co/wZ64kKw8/image.png" 
                  alt="Хидроизолация" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-brand-accent shadow-lg">
                  <Droplets className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Хидроизолация</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {['Покриви, тераси, основи', 'Битумни мембрани', 'Течна хидроизолация', 'Бани и мокри помещения', 'Отстраняване на течове'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 text-blue-800 p-3 rounded-md text-sm font-medium mb-6 border border-blue-100">
                  Предпазва от влага, мухъл и скъпоструващи щети
                </div>
                <Link to="/services/waterproofing" className="inline-flex items-center gap-2 text-brand-accent font-semibold hover:text-brand-accent-hover transition-colors">
                  Научи повече <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как работим?</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-slate-300 text-lg">
              Прозрачен и ясен процес от първото обаждане до предаването на готовия обект.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>

            {[
              { step: '01', title: 'Свързвате се с нас', desc: 'Обадете се или изпратете запитване онлайн.' },
              { step: '02', title: 'Оглед на обекта', desc: 'Наш специалист ще ви посети за безплатен оглед.' },
              { step: '03', title: 'Оферта', desc: 'Получавате ясна и точна ценова оферта без скрити такси.' },
              { step: '04', title: 'Изпълнение', desc: 'Качествено изпълнение в предварително уговорения срок.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-dark border-4 border-brand-accent flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg shadow-brand-accent/20">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Галерия</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">
              Разгледайте част от нашите успешно завършени проекти.
            </p>
          </div>

          <div 
            ref={galleryRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {[
              'https://i.ibb.co/5X0vKLDL/image.png',
              'https://i.ibb.co/mZkvb2z/image.png',
              'https://i.ibb.co/pvR1cr3K/image.png',
              'https://i.ibb.co/GvsX2kjG/image.png',
              'https://i.ibb.co/zhzqcsrH/image.png',
              'https://i.ibb.co/nsj9fWP9/image.png'
            ].map((imgUrl, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-[85vw] sm:w-auto shrink-0 snap-center aspect-square overflow-hidden rounded-lg group relative cursor-pointer bg-slate-200 flex items-center justify-center"
              >
                <img 
                  src={imgUrl} 
                  alt={`Галерия снимка ${i + 1}`} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium border border-white px-4 py-2 rounded-md">Виж повече</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Gallery Controls */}
          <div className="flex justify-center gap-4 mt-2 sm:hidden">
            <button 
              onClick={() => scrollGallery('left')} 
              className="p-3 rounded-full bg-slate-100 text-brand-dark hover:bg-brand-accent hover:text-white transition-colors shadow-sm"
              aria-label="Предишна снимка"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scrollGallery('right')} 
              className="p-3 rounded-full bg-slate-100 text-brand-dark hover:bg-brand-accent hover:text-white transition-colors shadow-sm"
              aria-label="Следваща снимка"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-20 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Готови ли сте да обновите своя дом?</h2>
          <p className="text-xl text-white/90 mb-10">Свържете се с нас за безплатен оглед и професионална консултация.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+359896441959" 
              className="bg-brand-dark hover:bg-slate-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Обади се сега
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-slate-50 text-brand-dark px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center shadow-xl"
            >
              Изпрати запитване
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Свържете се с нас</h2>
              <div className="w-16 h-1 bg-brand-accent mb-8"></div>
              <p className="text-slate-600 text-lg mb-10">
                Имате въпроси или искате да заявите оглед? Попълнете формата или се свържете с нас директно.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-accent shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-lg">Телефон</h4>
                    <a href="tel:+359896441959" className="text-slate-600 hover:text-brand-accent transition-colors">0896 441 959</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-lg">Имейл</h4>
                    <a href="mailto:office@primestroy.bg" className="text-slate-600 hover:text-brand-accent transition-colors">office@primestroy.bg</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-accent shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-lg">Работно време</h4>
                    <p className="text-slate-600">Понеделник - Събота: 08:00 - 18:00 ч.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-lg">Район на обслужване</h4>
                    <p className="text-slate-600">София и региона</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Изпратете запитване</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Име и Фамилия</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="Вашето име" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Телефон за връзка</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all" placeholder="0896 441 959" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Какво ви е необходимо?</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-all resize-none" placeholder="Опишете накратко от каква услуга имате нужда..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 rounded-md transition-colors shadow-md">
                  Изпрати запитване
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
