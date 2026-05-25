import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo-bright-core.png";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        scrolled
          ? "bg-white border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <a href="#top" aria-label="Bright Core Construction — Home">
          <img
            src={logo}
            alt="Bright Core Construction"
            width={220}
            height={60}
            className={`h-9 w-auto transition-all duration-300 sm:h-10 ${scrolled ? "brightness-0" : ""}`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground hover:text-orange"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:07405326484"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-navy" : "text-white/90"
            }`}
          >
            <Phone className="h-4 w-4" />
            07405 326484
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-md transition-colors lg:hidden ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute inset-0 grid place-items-center transition-all duration-300 ${
              open ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
            }`}
          >
            <Menu className="h-6 w-6" />
          </span>
          <span
            className={`absolute inset-0 grid place-items-center transition-all duration-300 ${
              open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
            }`}
          >
            <X className="h-6 w-6" />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {rendered && (
        <div
          className={`border-t border-border bg-white shadow-lg lg:hidden ${
            open ? "menu-panel-in" : "menu-panel-out"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${50 + i * 40}ms` }}
                className="menu-item-anim rounded-md px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-orange"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a
                href="tel:07405326484"
                style={{ animationDelay: `${50 + links.length * 40}ms` }}
                className="menu-item-anim flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-navy"
              >
                <Phone className="h-4 w-4" />
                Call 07405 326484
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${50 + (links.length + 1) * 40}ms` }}
                className="menu-item-anim flex items-center justify-center rounded-md bg-orange px-4 py-3 text-sm font-semibold text-white"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
