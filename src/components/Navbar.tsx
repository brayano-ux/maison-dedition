import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TreePine, Menu, X } from 'lucide-react';
import { WHATSAPP_LINK } from '@/data/books';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Catalogue', href: '/catalogue' },
  { label: 'A propos', href: '/a-propos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
        style={{ backgroundColor: '#0F6E56' }}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <TreePine className="w-7 h-7 text-[#C8891A]" />
            <span className="font-heading text-[22px] font-bold text-white">
              Editions Baobab
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative font-body text-[15px] font-semibold text-white transition-colors hover:text-[#FCD116] ${
                  location.pathname === link.href ? 'text-[#FCD116]' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#FCD116] transition-all duration-300 ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-body text-[14px] font-bold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-[1.02]"
            style={{
              backgroundColor: '#FCD116',
              color: '#5C3317',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#C8891A';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FCD116';
              e.currentTarget.style.color = '#5C3317';
            }}
          >
            Commander maintenant
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden flex flex-col"
              style={{ backgroundColor: '#FFF8EE' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between p-6">
                <span className="font-heading text-lg font-bold" style={{ color: '#0F6E56' }}>
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2"
                  style={{ color: '#5C3317' }}
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6 px-6 mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="font-body text-lg font-semibold"
                    style={{
                      color: location.pathname === link.href ? '#0F6E56' : '#5C3317',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-base font-bold px-6 py-3 rounded-lg text-center mt-4"
                  style={{ backgroundColor: '#FCD116', color: '#5C3317' }}
                >
                  Commander maintenant
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
