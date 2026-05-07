import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Accueil', id: 'hero' },
  { label: 'À propos', id: 'about' },
  { label: 'Activités', id: 'activities' },
  { label: 'Membres', id: 'members' },
  { label: 'Événements', id: 'events' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="AJK Logo"
            className="h-12 w-12 rounded-full object-cover border-2 border-accent"
          />
          <div className="text-left">
            <p className="text-primary-foreground font-bold text-sm leading-tight">Association des Jeunes</p>
            <p className="text-accent font-extrabold text-base leading-tight">AL KENDI</p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors rounded-lg hover:bg-white/10"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setIsOpen(false); }}
                className="block w-full text-left px-6 py-3 text-primary-foreground/90 hover:text-accent hover:bg-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <img src="/images/logo.jpeg" alt="AJK" className="h-16 w-16 rounded-full mx-auto mb-4 border-2 border-accent" />
        <p className="text-accent font-bold text-lg mb-1">Association des Jeunes Al Kendi</p>
        <p className="text-primary-foreground/60 text-sm mb-4">Investir dans la jeunesse, c'est investir dans l'avenir.</p>
        <div className="border-t border-white/10 pt-4">
          <p className="text-primary-foreground/40 text-xs">© 2026 AJK — Association des Jeunes Al Kendi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
