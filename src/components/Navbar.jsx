import React, { useState, useEffect } from 'react';

const homeLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato', cta: true },
];

const novuscfcLinks = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '#hero', label: 'Início' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#contato', label: 'Contato', cta: true },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [links, setLinks] = useState(homeLinks);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setLocation(window.location.pathname);
  }, []);

  useEffect(() => {
    setLinks(location.includes('/novus-cfc') ? novuscfcLinks : homeLinks);
  }, [location]);

  const handleLinkClick = () => setIsMenuOpen(false);

  const navbarClass =
    "fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[92vw] max-w-7xl rounded-full " +
    "bg-primary/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.25)] " +
    "transition-all duration-500";

  return (
    <nav className={navbarClass} id="navbar">
      <div className="px-6">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/imgs/logoNovusTechSemFundo.png"
                height="44"
                width="44"
                alt="Logo NovusTech"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
            </div>
            <span className="text-[17px] font-semibold tracking-wide text-white hidden sm:block">
              NovusTech
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.cta
                    ? "relative px-6 py-2.5 rounded-full font-semibold text-sm " +
                      "bg-white text-black shadow-lg shadow-black/30 " +
                      "hover:scale-[1.04] hover:shadow-xl hover:shadow-black/40 " +
                      "transition-all duration-300"
                    : "relative text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
                }
              >
                {link.label}
                {!link.cta && (
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white rounded-full transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full 
                       bg-white/10 border border-white/20 text-white 
                       hover:bg-white/20 transition-all duration-300"
          >
            <span className="material-symbols-outlined text-xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[9998] transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`relative mt-28 mx-6 rounded-3xl bg-primary/90 border border-white/20 
                      backdrop-blur-2xl shadow-2xl transition-all duration-500 ${
                        isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
        >
          <div className="flex flex-col divide-y divide-white/10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={
                  link.cta
                    ? "m-4 mt-6 text-center py-3 rounded-full bg-white text-black font-semibold shadow-lg"
                    : "px-6 py-4 text-white/80 hover:text-white transition-colors text-sm font-medium"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
