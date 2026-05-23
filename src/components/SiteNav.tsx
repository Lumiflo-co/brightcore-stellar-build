import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mount-on-open, unmount-after-exit so we can animate both directions.
  useEffect(() => {
    if (open) {
      if (timer.current) clearTimeout(timer.current);
      setRendered(true);
    } else if (rendered) {
      timer.current = setTimeout(() => setRendered(false), 220);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [open, rendered]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elev" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-red font-black text-primary-foreground shadow-glow">
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-wide text-foreground">
              BRIGHT CORE
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
              Construction
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:07405326484"
            className="hidden items-center gap-2 rounded-full bg-gradient-red px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] md:inline-flex"
          >
            <Phone className="h-4 w-4" /> 07405 326484
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-md glass lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`absolute inset-0 grid place-items-center transition-all duration-300 ${
                open ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
              }`}
            >
              <Menu className="h-5 w-5" />
            </span>
            <span
              className={`absolute inset-0 grid place-items-center transition-all duration-300 ${
                open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
              }`}
            >
              <X className="h-5 w-5" />
            </span>
          </button>
        </div>
      </div>
      {rendered && (
        <div
          className={`origin-top bg-background/95 backdrop-blur-xl border-t border-border shadow-elev lg:hidden ${
            open ? "menu-panel-in" : "menu-panel-out"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-5">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${60 + i * 45}ms` }}
                className="menu-item-anim rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:07405326484"
              style={{ animationDelay: `${60 + links.length * 45}ms` }}
              className="menu-item-anim mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-red px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <Phone className="h-4 w-4" /> Call 07405 326484
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
