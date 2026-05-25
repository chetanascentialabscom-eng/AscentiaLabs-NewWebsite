import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine, RiCloseLine, RiMenuLine } from 'react-icons/ri';
import Logo from '../shared/Logo';
import Button from '../shared/Button';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'How it works', href: '#' },
  { label: 'Resources', href: '#', hasIcon: true },
  { label: 'Company', href: '#', hasIcon: true },
];

const NavLink = ({ label, href, hasIcon }) => (
  <a
    href={href}
    className="flex items-center gap-0.5 text-sm text-slate-400 hover:text-[#ffb400] transition-colors duration-200 font-medium"
  >
    {label}
    {hasIcon && <RiAddLine className="w-3.5 h-3.5 opacity-60" />}
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#071226]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent border-b border-white/5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-sm">Log in</Button>
            <Button variant="primary" className="text-sm">Sign up</Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <RiCloseLine className="w-5 h-5" /> : <RiMenuLine className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#08172d]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-[#ffb400] transition-colors py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-3 border-t border-white/10">
                <Button variant="outline" className="w-full justify-center">Log in</Button>
                <Button variant="primary" className="w-full justify-center">Sign up</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
