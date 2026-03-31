import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Hammer, Mail, MapPin, ChevronDown, ArrowUp } from 'lucide-react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to hash on load or location change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Начало', href: '/#home' },
    { name: 'Предимства', href: '/#trust' },
    { name: 'Процес', href: '/#process' },
    { name: 'Галерия', href: '/#gallery' },
    { name: 'Контакти', href: '/#contact' },
  ];

  const servicesLinks = [
    { name: 'Ремонт на покриви', href: '/services/roofs' },
    { name: 'Топлоизолация', href: '/services/insulation' },
    { name: 'Вътрешни ремонти', href: '/services/interior' },
    { name: 'Хидроизолация', href: '/services/waterproofing' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' ? 'bg-white shadow-md py-3' : 'bg-brand-dark/90 backdrop-blur-sm py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Hammer className={`w-8 h-8 ${isScrolled || location.pathname !== '/' ? 'text-brand-accent' : 'text-brand-accent'}`} />
            <span className={`text-xl font-bold uppercase tracking-tight ${isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'}`}>
              PRIME <span className="text-brand-accent">STROY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/#home"
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Начало
            </Link>
            <Link 
              to="/#trust"
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Предимства
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium hover:text-brand-accent transition-colors ${
                  isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                Услуги <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-4 w-56 z-50">
                  <div className="bg-white rounded-md shadow-xl border border-slate-100 py-2">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-accent transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/#process"
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Процес
            </Link>
            <Link 
              to="/#gallery"
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Галерия
            </Link>
            <Link 
              to="/#contact"
              className={`text-sm font-medium hover:text-brand-accent transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              Контакти
            </Link>

            <a 
              href="tel:+359896441959" 
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white px-5 py-2.5 rounded-md font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              0896 441 959
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className={isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'} /> : <Menu className={isScrolled || location.pathname !== '/' ? 'text-brand-dark' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
            <Link 
              to="/#home"
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Начало
            </Link>
            <Link 
              to="/#trust"
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Предимства
            </Link>
            
            <div className="py-2 border-b border-slate-100">
              <div className="text-slate-800 font-medium mb-2">Услуги</div>
              <div className="flex flex-col pl-4 gap-2 border-l-2 border-brand-accent/30">
                {servicesLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-slate-600 text-sm py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/#process"
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Процес
            </Link>
            <Link 
              to="/#gallery"
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Галерия
            </Link>
            <Link 
              to="/#contact"
              className="text-slate-800 font-medium py-2 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакти
            </Link>

            <a 
              href="tel:+359896441959" 
              className="flex items-center justify-center gap-2 bg-brand-accent text-white px-5 py-3 rounded-md font-semibold mt-4"
            >
              <Phone className="w-5 h-5" />
              0896 441 959
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-slate-300 py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Hammer className="w-6 h-6 text-brand-accent" />
                <span className="text-xl font-bold uppercase tracking-tight text-white">
                  PRIME <span className="text-brand-accent">STROY</span>
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-xs">
                Професионални строителни услуги и ремонти. Качество, на което можете да разчитате.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Услуги</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/services/roofs" className="hover:text-brand-accent transition-colors">Ремонт на покриви</Link></li>
                <li><Link to="/services/insulation" className="hover:text-brand-accent transition-colors">Топлоизолация</Link></li>
                <li><Link to="/services/interior" className="hover:text-brand-accent transition-colors">Вътрешни ремонти</Link></li>
                <li><Link to="/services/waterproofing" className="hover:text-brand-accent transition-colors">Хидроизолация</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Контакти</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-accent" /> 0896 441 959</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-accent" /> office@primestroy.bg</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-accent" /> София и региона</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} PRIME STROY. Всички права запазени.</p>
            <p>Качество, на което можете да разчитате.</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button (Mobile) */}
      <a 
        href="tel:+359896441959"
        className="md:hidden fixed bottom-6 right-6 bg-brand-accent text-white p-4 rounded-full shadow-2xl z-40 animate-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
