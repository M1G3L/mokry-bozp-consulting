/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Shield, 
  Users, 
  FileText, 
  CheckCircle, 
  FireExtinguisher, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  HardHat,
  Stethoscope,
  Tractor,
  Building,
  ArrowRight,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O mně', href: '#o-mne' },
    { name: 'Služby', href: '#sluzby' },
    { name: 'Spolupráce', href: '#spoluprace' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Mgr. František Cepárek
            </span>
            <span className={`text-[10px] uppercase tracking-wider ${isScrolled ? 'text-primary font-semibold' : 'text-white/80'}`}>
              Expert na BOZP
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-secondary ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontakt"
            className="bg-secondary text-white px-5 py-2.5 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            Konzultace
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-secondary text-white px-5 py-3 rounded-lg font-bold text-center"
              >
                Nezávazná konzultace
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 block ${light ? 'text-white/60' : 'text-primary'}`}
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className={`h-1 w-20 mx-auto mt-6 rounded-full ${light ? 'bg-white/20' : 'bg-secondary'}`}
    />
  </div>
);

export default function App() {
  const services = [
    {
      title: 'Prevence rizik (BOZP)',
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      features: ['Kompletní zajištění BOZP', 'Identifikace a hodnocení rizik', 'Návrhy opatření'],
      delay: 0
    },
    {
      title: 'Školení zaměstnanců',
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      features: ['Vstupní a periodická školení', 'Školení vedoucích pracovníků', 'Školení na míru'],
      delay: 0.1
    },
    {
      title: 'Dokumentace BOZP',
      icon: <FileText className="w-8 h-8 text-primary" />,
      features: ['Kompletní dokumentace', 'Aktualizace', 'Interní směrnice'],
      delay: 0.2
    },
    {
      title: 'Kontroly a audity',
      icon: <ClipboardList className="w-8 h-8 text-primary" />,
      features: ['Pravidelné kontroly', 'Příprava na inspekci práce', 'BOZP audity'],
      delay: 0.3
    },
    {
      title: 'Požární ochrana',
      icon: <FireExtinguisher className="w-8 h-8 text-primary" />,
      features: ['Dokumentace PO', 'Školení zaměstnanců'],
      delay: 0.4
    }
  ];

  const processSteps = [
    { number: '01', title: 'Kontakt a úvodní konzultace', text: 'Prvním krokem je pochopení vašich potřeb a specifika vašeho podnikání.' },
    { number: '02', title: 'Analýza současného stavu', text: 'Provedu důkladný audit vaší stávající dokumentace a pracoviště.' },
    { number: '03', title: 'Návrh řešení', text: 'Navrhnu efektivní opatření, která budou splňovat legislativu a chránit vaše lidi.' },
    { number: '04', title: 'Implementace a spolupráce', text: 'Uvedeme řešení do praxe a zajistíme dlouhodobý dohled nad bezpečností.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
          <img 
            src="./images/hero_bg.png" 
            alt="Safety background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                Odborně způsobilá osoba dle zák. 309/2006 Sb.
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                BOZP bez starostí <br />
                <span className="text-white/80">pro vaši firmu</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                Komplexní služby v oblasti bezpečnosti a prevence rizik – profesionálně, spolehlivě a na míru vašim potřebám.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">Dlouholetá praxe</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">Zkušenosti z mnoha oborů</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">Individuální přístup</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#kontakt" 
                  className="px-8 py-4 bg-secondary rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-orange-500/30"
                >
                  Nezávazná konzultace
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/20 blur-3xl rounded-full z-10"
        />
      </section>

      {/* --- O MNĚ --- */}
      <section id="o-mne" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="./images/frantisek_ceparek.png" 
                  alt="Mgr. František Cepárek" 
                  className="w-full h-full object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative blocks */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-2xl -z-0" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-2xl -z-0" />
              
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 border border-secondary/20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certifikace</p>
                    <p className="font-bold text-gray-900">OZO v prevenci rizik</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <SectionHeading subtitle="Moje filozofie">O mně</SectionHeading>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600 leading-relaxed text-lg"
              >
                <p>
                  Jmenuji se <span className="font-bold text-gray-900">Mgr. František Cepárek</span> a působím jako odborník v oblasti bezpečnosti a ochrany zdraví při práci.
                </p>
                <p className="bg-primary/5 p-4 border-l-4 border-primary rounded-r-lg italic">
                  Jsem odborně způsobilá osoba v prevenci rizik dle zákona č. 309/2006 Sb.
                </p>
                <p>
                  Během své praxe jsem získal zkušenosti napříč obory – od administrativy a státní správy, přes strojírenství a výrobu až po zdravotnictví a zemědělství. Tyto zkušenosti mi umožňují vidět souvislosti a rizika tam, kde je ostatní přehlížejí.
                </p>
                <p>
                  Ke každému klientovi přistupuji <span className="text-primary font-semibold">individuálně</span> a hledám efektivní řešení odpovídající konkrétním potřebám společnosti. Mým cílem není jen splnit zákonné povinnosti, ale vytvořit skutečně bezpečné prostředí.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-gray-700">Státní správa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-gray-700">Administrativa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-gray-700">Zdravotnictví</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tractor className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-gray-700">Zemědělství</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium text-gray-700">Strojírenství</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="sluzby" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Co pro vás zajistím">Služby a odbornost</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-xl w-fit">
                  <div>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-gray-600 text-sm">
                      <ChevronRight className="w-4 h-4 text-secondary mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROČ VYBRAT MNĚ --- */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <span className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 block">Důvěra a kvalita</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Proč spolupracovat právě se mnou?</h2>
              
              <div className="space-y-8">
                {[
                  { title: 'Dlouholetá praxe a zkušenosti', desc: 'Znalost specifik různých oborů mi umožňuje rychle se orientovat ve vašem prostředí.' },
                  { title: 'Osobní a férový přístup', desc: 'Nejsem jen "kontrolor", ale váš partner v bezpečnosti. Jednám na rovinu a efektivně.' },
                  { title: 'Spolehlivost a důslednost', desc: 'Na moje výstupy se můžete 100% spolehnout. Termíny jsou pro mě závazné.' },
                  { title: 'Řešení na míru', desc: 'Neexistují univerzální šablony. Každá firma potřebuje jiný přístup k bezpečnosti.' },
                  { title: 'Aktuální znalost legislativy', desc: 'Průběžně sleduji veškeré legislativní změny, aby vaše BOZP bylo vždy v pořádku.' }
                ].map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <CheckCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                    <p className="text-4xl font-bold text-secondary mb-2">10+</p>
                    <p className="text-sm text-white/70 uppercase tracking-widest">Let praxe</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                    <p className="text-4xl font-bold text-secondary mb-2">100+</p>
                    <p className="text-sm text-white/70 uppercase tracking-widest">Projektů</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-white font-bold p-8 rounded-2xl text-primary flex flex-col items-center justify-center text-center shadow-2xl">
                    <Shield className="w-12 h-12 mb-4 text-secondary" />
                    <p className="text-lg">Bezpečnost bez kompromisů</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
                    <p className="text-4xl font-bold text-secondary mb-2">5</p>
                    <p className="text-sm text-white/70 uppercase tracking-widest">Oborů expertízy</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-1/2" />
      </section>

      {/* --- HOW IT WORKS --- */}
      <section id="spoluprace" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Cesta k bezpečnosti">Jak probíhá spolupráce</SectionHeading>

          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 hidden lg:block -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-primary flex items-center justify-center mb-8 relative group-hover:bg-primary transition-all duration-300 shadow-xl group-hover:shadow-primary/20">
                    <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors">{step.number}</span>
                    {/* Animated pulse */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10 group-hover:bg-primary/40" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
                  <p className="text-gray-500 leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer id="kontakt" className="bg-gray-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Pojďme to probrat" light>Kontakt</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {/* Telefon */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4 hover:border-secondary/50 transition-colors"
            >
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Telefon</h5>
                <a href="tel:+420123456789" className="text-xl font-bold hover:text-secondary transition-colors block">
                  +420 123 456 789
                </a>
              </div>
            </motion.div>

            {/* E-mail */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4 hover:border-secondary/50 transition-colors"
            >
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-secondary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">E-mail</h5>
                <a href="mailto:info@bozp-ceparek.cz" className="text-xl font-bold hover:text-secondary transition-colors block">
                  info@bozp-ceparek.cz
                </a>
              </div>
            </motion.div>

            {/* Osobní údaje */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center space-y-4 hover:border-secondary/50 transition-colors md:col-span-1"
            >
              <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-secondary">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">OZO v prevenci rizik</h5>
                <p className="font-bold text-base leading-snug">Mgr. František Cepárek</p>
                <p className="text-white/40 text-xs mt-1">IČ: 12345678 (placeholder)</p>
              </div>
            </motion.div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="font-bold">BOZP CEPAREK</span>
            </div>
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Mgr. František Cepárek. Všechna práva vyhrazena. 
              <span className="mx-2">|</span> 
              Design & vývoj 2026
            </p>
            <div className="flex gap-4">
               {/* Placeholders for social links if needed */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

