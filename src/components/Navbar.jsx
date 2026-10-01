import React, { useEffect, useState } from "react";

const links = [
  { href: "/autoescolas", label: "Autoescolas" },
  { href: "/instrutores-autonomos", label: "Instrutores autônomos" },
  { href: "/minhas-aulas", label: "Minhas aulas" },
  { href: "/guias", label: "Guias" },
];

const whatsapp =
  "https://wa.me/5517997437646?text=" +
  encodeURIComponent("Olá! Quero conhecer o Novus CFC e agendar uma demonstração.");

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z";

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={WA_PATH} />
    </svg>
  );
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcd00]";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => setPath(window.location.pathname.replace(/\/$/, "")), []);

  useEffect(() => {
    const targets = links.filter((link) => link.href.startsWith("#")).map((link) => document.querySelector(link.href)).filter(Boolean);
    if (!targets.length || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
          else setActive((current) => (current === `#${entry.target.id}` ? "" : current));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isCurrent = (link) => (link.href.startsWith("#") ? active === link.href : path === link.href || path.startsWith(link.href + "/"));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          aria-label="Navegação principal"
          className={`mx-auto flex h-14 max-w-[1100px] items-center justify-between rounded-full border pl-4 pr-2 transition-all duration-300 sm:h-16 sm:pl-5 ${
            scrolled
              ? "border-[#17121a]/15 bg-white/95 shadow-[0_10px_40px_-12px_rgba(43,10,37,0.3)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="/" onClick={closeMenu} className={`flex items-center gap-2.5 ${focusRing}`}>
            <img src="/imgs/logoNovusTech.png" width="40" height="40" alt="" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold tracking-tight text-[#6f0a59]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>NovusTech</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link) ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-[#17121a]/5 hover:text-[#6f0a59] ${
                  isCurrent(link) ? "bg-[#6f0a59]/10 text-[#6f0a59]" : "text-[#625b64]"
                } ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 rounded-full bg-[#0f9d4a] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_-6px_rgba(22,163,74,0.75)] transition-all hover:-translate-y-0.5 hover:bg-[#0c8a40] sm:inline-flex ${focusRing}`}
            >
              <WhatsAppIcon />
              Agendar demonstração
            </a>
            <button
              type="button"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[#17121a]/10 bg-white/70 text-lg text-[#17121a] transition-colors hover:text-[#6f0a59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcd00] lg:hidden"
            >
              <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-[#faf8f6]/95 px-5 pt-[96px] backdrop-blur-xl transition-opacity duration-200 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1100px]" onClick={(event) => event.stopPropagation()}>
          <div className="border-t border-[#17121a]/10">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#17121a]/10 py-5 text-xl font-semibold tracking-tight text-[#17121a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffcd00]"
              >
                <span>{link.label}</span>
                <span className="text-xs font-medium tracking-widest text-[#8f8894]">0{index + 1}</span>
              </a>
            ))}
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-center gap-3 rounded-full bg-[#0f9d4a] px-6 py-4 font-bold text-white shadow-[0_10px_28px_-8px_rgba(22,163,74,0.8)]"
          >
            <WhatsAppIcon size={20} />
            Agendar demonstração
          </a>
        </div>
      </div>
    </>
  );
}
