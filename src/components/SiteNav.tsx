import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo-bright-core.png";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
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

  useEffect(() => {
    if (open) {
      if (timer.current) clearTimeout(timer.current);
      setRendered(true);
    } else if (rendered) {
      timer.current = setTimeout(() => setRendered(false), 220);
    }
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [open, rendered]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elev" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        {/* Logo — enlarged so it's clearly readable */}
        <a href="#top" className="flex items-center" aria-label="Bright Core Construction — Home">
          <img
            src={logo}
            alt="Bright Core Construction"
            width={280}
            height={80}
            className="h-14 w-auto sm:h-16 lg:h-[4.5rem]"
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
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

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:07405326484"
            className="flex items-center gap-1.5 text-sm font-bold text-gold transition-colors hover:text-foreground"
            aria-label="Call Bright Core Construction on 07405 326484"
          >
            <Phone className="h-4 w-4" />
            07405 326484
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-red px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-md glass lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`absolute inset-0 grid place-items-center transition-all duration-300 ${
            open ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
          }`}>
            <Menu className="h-5 w-5" />
          </span>
          <span className={`absolute inset-0 grid place-items-center transition-all duration-300 ${
            open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
          }`}>
            <X className="h-5 w-5" />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {rendered && (
        <div className={`origin-top bg-background/95 backdrop-blur-xl border-t border-border shadow-elev lg:hidden ${
          open ? "menu-panel-in" : "menu-panel-out"
        }`}>
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
              className="menu-item-anim mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-3 text-sm font-bold text-gold"
            >
              <Phone className="h-4 w-4" /> Call 07405 326484
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${60 + (links.length + 1) * 45}ms` }}
              className="menu-item-anim inline-flex items-center justify-center gap-2 rounded-full bg-gradient-red px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
