import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Why Us', href: '#why' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

const versions = [
  { label: 'V1 — Showcase', href: '/', desc: 'Frozen version for sharing' },
  { label: 'V2 — Working Copy', href: '/v2', desc: 'Active edit target' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [versionsOpen, setVersionsOpen] = useState(false);
  const versionsRef = useRef(null);

  // Close versions dropdown on outside click
  useEffect(() => {
    if (!versionsOpen) return;
    const onClick = (e) => {
      if (versionsRef.current && !versionsRef.current.contains(e.target)) {
        setVersionsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [versionsOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      <nav
        className={`mx-auto px-4 md:px-6 max-w-[84rem] flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] py-3 px-4 md:px-6'
            : 'py-4 px-4 md:px-6'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden">
            <div className="absolute inset-0 ring-gradient animate-spin-slow" />
            <div className="absolute inset-[2px] rounded-[10px] bg-ink-950 grid place-items-center">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
          </div>
          <span className="font-display font-bold text-white tracking-tight text-lg">
            RCM<span className="text-gradient-cv">Automation</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                {l.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-2/3 transition-all duration-300" />
              </a>
            </li>
          ))}
          {/* Versions dropdown */}
          <li
            className="relative"
            ref={versionsRef}
            onMouseEnter={() => setVersionsOpen(true)}
            onMouseLeave={() => setVersionsOpen(false)}
          >
            <button
              onClick={() => setVersionsOpen((v) => !v)}
              className="relative flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors group"
            >
              Versions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${versionsOpen ? 'rotate-180' : ''}`} />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-violet-400 group-hover:w-2/3 transition-all duration-300" />
            </button>
            <AnimatePresence>
              {versionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full pt-2 w-[320px]"
                >
                  <div className="bg-ink-900 border border-white/10 rounded-2xl p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.7)]">
                  {versions.map((v) => {
                    const isActive = typeof window !== 'undefined' &&
                      (v.href === '/' ? window.location.pathname === '/' : window.location.pathname.startsWith(v.href));
                    return (
                      <a
                        key={v.href}
                        href={v.href}
                        className={`block px-3.5 py-2.5 rounded-xl transition-colors ${
                          isActive ? 'bg-cyan-400/10 text-white' : 'text-slate-200 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-medium">{v.label}</span>
                          {isActive && (
                            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300">current</span>
                          )}
                        </div>
                        <div className="text-[11.5px] text-slate-500 mt-0.5">{v.desc}</div>
                      </a>
                    );
                  })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            Book Free Consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-xl glass"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden container-prose mt-3"
          >
            <div className="glass-strong rounded-2xl p-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="px-4 pt-3 pb-1 text-[10.5px] font-mono uppercase tracking-[0.16em] text-slate-500">
                Versions
              </div>
              {versions.map((v) => (
                <a
                  key={v.href}
                  href={v.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-slate-200 hover:bg-white/5"
                >
                  <div className="text-sm font-medium">{v.label}</div>
                  <div className="text-[11px] text-slate-500">{v.desc}</div>
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full mt-2"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
