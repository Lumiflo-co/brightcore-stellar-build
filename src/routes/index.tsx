import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, ShieldCheck, Award, Users, Sparkles, CheckCircle2,
  Hammer, ArrowRight, Star, X, Loader2, Clock,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { SiteNav } from "@/components/SiteNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

import hero from "@/assets/hero-construction.jpg";
import logo from "@/assets/logo-bright-core.png";
import imgLoft from "@/assets/project-loft.jpg";
import imgBath from "@/assets/project-bathroom.jpg";
import imgBrick from "@/assets/project-brickwork.jpg";
import imgFence from "@/assets/project-fencing.jpg";
import imgConserv from "@/assets/project-conservatory.jpg";
import imgPave from "@/assets/project-paving.jpg";
import imgKitchen from "@/assets/project-kitchen.jpg";
import imgPlaster from "@/assets/project-plastering.jpg";
import imgElec from "@/assets/project-electric.jpg";
import imgRoof from "@/assets/project-roofing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bright Core Construction | Builders in Barking, Upney & London" },
      { name: "description", content: "Bright Core Construction — trusted builders in Barking, Upney and across London. Loft conversions, extensions, roofing, bathrooms, brickwork, driveways & renovations. Free estimates. Guaranteed workmanship. Call 07405 326484." },
      { name: "keywords", content: "Bright Core Construction, builders Barking, construction Upney, construction near me, builders London, loft conversion London, kitchen extension Barking, roofing Upney, bathroom fitters London, brickwork East London, driveways Barking, builders near me, house extension London, plastering, fencing, conservatory, renovation contractors London" },
      { name: "geo.region", content: "GB-LND" },
      { name: "geo.placename", content: "Barking, London" },
      { name: "author", content: "Bright Core Construction" },
      { property: "og:title", content: "Bright Core Construction | Builders in Barking, Upney & London" },
      { property: "og:description", content: "Loft conversions, extensions, roofing, bathrooms, brickwork & driveways across Barking, Upney & London. Free estimates, guaranteed workmanship." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://brightcore.lumiflo.co.uk/" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "Bright Core Construction" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bright Core Construction | Builders in Barking, Upney & London" },
      { name: "twitter:description", content: "Loft conversions, extensions, roofing, bathrooms & more across Barking, Upney & London. Free estimates." },
    ],
    links: [
      { rel: "canonical", href: "https://brightcore.lumiflo.co.uk/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://brightcore.lumiflo.co.uk/#business",
          name: "Bright Core Construction",
          description: "Trusted London builders specialising in loft conversions, extensions, roofing, bathrooms, brickwork, driveways and full renovations. Serving Barking, Upney, Ilford, Romford, Walthamstow and surrounding London areas.",
          url: "https://brightcore.lumiflo.co.uk/",
          telephone: ["+447405326484", "+447985785177"],
          email: "corebright.construction@gmail.com",
          image: "https://brightcore.lumiflo.co.uk/favicon-512.png",
          logo: "https://brightcore.lumiflo.co.uk/favicon-512.png",
          priceRange: "££",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Barking",
            addressRegion: "London",
            addressCountry: "GB",
          },
          areaServed: [
            { "@type": "City", name: "London" },
            { "@type": "Place", name: "Barking" },
            { "@type": "Place", name: "Upney" },
            { "@type": "Place", name: "Ilford" },
            { "@type": "Place", name: "Romford" },
            { "@type": "Place", name: "Walthamstow" },
            { "@type": "Place", name: "East London" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "07:00",
              closes: "19:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Building & Renovation Services",
            itemListElement: [
              "Loft Conversions", "Kitchen Extensions", "Conservatories",
              "Brick & Block Work", "Roofing & Guttering", "Driveways & Slabs",
              "Plastering & Skimming", "Wall & Floor Tiling", "Wood Flooring",
              "Bathroom Fitting", "Carpentry", "Plumbing", "Electrical",
              "Painting & Decorating", "Fencing", "Gardening", "Patios & Sheds",
            ].map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s, areaServed: "London" },
            })),
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "4",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const serviceCategories = [
  {
    title: "Extensions & Conversions",
    items: ["Loft Conversion", "Kitchen Extensions", "Conservatory"],
  },
  {
    title: "Structure & Exterior",
    items: ["Brick & Block Work", "Roofing & Guttering", "Driveways & Slabs"],
  },
  {
    title: "Interior Finishes",
    items: ["Plastering", "Skimming", "Wall & Floor Tiling", "Wood Flooring", "Bathroom Fitting"],
  },
  {
    title: "Trades & Repairs",
    items: ["Carpentry", "Plumbing", "Electric", "Painting", "Decorating"],
  },
  {
    title: "Gardens & Outdoor",
    items: ["Fencing", "Gardening", "Garden Sheds & Patio"],
  },
];

const gallery = [
  { src: imgLoft, label: "Loft Conversion Framing" },
  { src: imgBath, label: "Luxury Bathroom Fit" },
  { src: imgBrick, label: "Brickwork & Garden Steps" },
  { src: imgConserv, label: "Glass Conservatory" },
  { src: imgKitchen, label: "Kitchen Extension" },
  { src: imgFence, label: "Railings & Fencing" },
  { src: imgPave, label: "Sandstone Paving" },
  { src: imgRoof, label: "Roofing & Guttering" },
  { src: imgPlaster, label: "Plastering & Skimming" },
  { src: imgElec, label: "Electrical Installations" },
];

const reasons = [
  { icon: CheckCircle2, t: "Free Estimates", d: "No-obligation quotes, fully itemised so you know exactly what you're paying for." },
  { icon: ShieldCheck, t: "Guaranteed Workmanship", d: "Every project backed by our written workmanship guarantee." },
  { icon: Award, t: "High Quality Finish", d: "Premium materials and meticulous attention to detail on every job." },
  { icon: Users, t: "Experienced Team", d: "Skilled tradespeople with years of London residential experience." },
  { icon: Hammer, t: "All Building Work", d: "From a single room to a full extension — one team, one point of contact." },
  { icon: Sparkles, t: "Clean & Respectful", d: "We protect your home, clean up daily and treat your space like our own." },
  { icon: Clock, t: "On Time, On Budget", d: "Transparent timelines and pricing — no surprises along the way." },
  { icon: Star, t: "Competitive Pricing", d: "Honest, fair quotes that reflect the true value of the work." },
];

const testimonials = [
  { name: "Ahmed R.", area: "Ilford", text: "Bright Core handled our loft conversion start to finish. Zahid and the team were professional, tidy, and the finish is outstanding. Couldn't recommend more." },
  { name: "Sarah M.", area: "Walthamstow", text: "We had our kitchen extended and a new bathroom fitted. They turned up on time every day, kept everything clean and the quality is brilliant." },
  { name: "Daniel K.", area: "Romford", text: "Got three quotes — Bright Core wasn't the cheapest but their attention to detail was clearly on another level. So glad we went with them." },
  { name: "Fatima A.", area: "East London", text: "Driveway, fencing and a new front porch. Genuinely lovely lads, fair price and the work has totally transformed the front of the house." },
];

function HomePage() {
  useReveal();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    }
  }, []);
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" richColors />
      <SiteNav />
      <Hero />
      <TrustBand />
      <Services />
      <About />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="flex min-h-[100svh] flex-col overflow-hidden lg:flex-row">
      {/* Left: navy panel */}
      <div className="bg-navy flex flex-col justify-center px-6 pt-28 pb-16 sm:px-10 lg:w-[58%] lg:px-16 lg:pt-0 lg:pb-0 xl:px-24">
        <div className="animate-fade-up">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-orange/90">
            Barking · Ilford · East London
          </span>

          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Built<br />
            Properly.<br />
            <span className="text-orange">Built to<br />Last.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Loft conversions, extensions, roofing, bathrooms &amp; driveways
            across East London. Free estimates, guaranteed workmanship.
          </p>

          {/* Star rating */}
          <div className="mt-5 flex items-center gap-2.5">
            <div className="flex text-orange" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-white/80">
              5.0 · Trusted by East London homeowners
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get Free Estimate
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:07405326484"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              07405 326484
            </a>
          </div>
        </div>
      </div>

      {/* Right: hero image */}
      <div className="relative h-64 overflow-hidden lg:h-auto lg:flex-1">
        <img
          src={hero}
          alt="Bright Core Construction team at work"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Orange accent strip on left edge */}
        <div className="absolute inset-y-0 left-0 z-10 w-1.5 bg-orange" />
      </div>
    </section>
  );
}

/* ── Trust Band ─────────────────────────────────────────── */
function TrustBand() {
  const items = ["Free Estimates", "Guaranteed Workmanship", "15+ Years Experience", "500+ Projects Delivered", "East London Based"];
  return (
    <div className="bg-navy border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 lg:px-8">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2 text-sm font-medium text-white/80">
            {i > 0 && <span className="hidden text-white/30 sm:inline">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Services ───────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          {/* Sticky left */}
          <div className="reveal-left lg:sticky lg:top-32 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">What We Do</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Everything your home needs.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From a single room renovation to a full extension — we handle every trade in-house with one trusted team and one point of contact.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Service list */}
          <div className="reveal-right divide-y divide-border">
            {serviceCategories.map((cat, i) => (
              <div key={cat.title} className="py-7 first:pt-0 last:pb-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-bold text-orange">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy">{cat.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 pl-9">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-border bg-surface px-3 py-1 text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── About / Stats ──────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Photo grid */}
          <div className="reveal-left grid grid-cols-2 gap-3">
            {[imgConserv, imgBrick, imgLoft, imgKitchen].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>

          {/* Content */}
          <div className="reveal-right">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">About Bright Core</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Built on quality &amp; trust
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Bright Core Construction provides reliable, high-quality building and renovation services
              with attention to detail and customer satisfaction at the heart of every project. From loft
              conversions and extensions to roofing, bathrooms and landscaping — we deliver professional
              workmanship with guaranteed results.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { n: "15+", t: "Years on the tools" },
                { n: "500+", t: "Projects delivered" },
                { n: "100%", t: "Guaranteed work" },
                { n: "Free", t: "Estimates always" },
              ].map((s) => (
                <div key={s.t} className="rounded-lg border border-white/15 p-5">
                  <div className="font-display text-4xl font-bold text-orange">{s.n}</div>
                  <div className="mt-1 text-sm text-white/55">{s.t}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Gallery ────────────────────────────────────────────── */
function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="reveal mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Our Work</span>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Recent Projects</h2>
          </div>
          <p className="text-sm text-muted-foreground sm:text-right">
            Extensions, lofts, bathrooms, brickwork &amp; landscaping<br className="hidden sm:block" /> across East London
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="reveal-zoom group relative mb-3 block w-full overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-navy/0 p-3 transition-colors duration-300 group-hover:bg-navy/55">
                <span className="translate-y-2 text-left text-xs font-bold uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src}
              alt={gallery[active].label}
              className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm font-bold uppercase tracking-wider text-white/80">
              {gallery[active].label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

/* ── Why Us ─────────────────────────────────────────────── */
function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Why Bright Core</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Why homeowners choose us
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.t}
              className="reveal-zoom"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <span className="font-display text-3xl font-bold text-orange/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-navy">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ────────────────────────────────────────────── */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Contact Us",
      desc: "Call, message or fill in our form. We'll discuss your project with no obligation and no pressure.",
    },
    {
      n: "02",
      title: "Free Site Visit & Quote",
      desc: "We come to you, assess the job in person, and provide a clear written quote — no hidden costs.",
    },
    {
      n: "03",
      title: "We Get to Work",
      desc: "Your project starts on schedule. We keep you updated throughout and clean up daily.",
    },
  ];

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">How It Works</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">
            Simple, straightforward process
          </h2>
        </div>

        <div className="grid gap-px bg-border sm:grid-cols-3 overflow-hidden rounded-xl">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal-zoom bg-background p-8 lg:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-6xl font-bold text-orange/20">{s.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ───────────────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Client Stories</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-navy sm:text-5xl">What our customers say</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} rounded-xl border border-border bg-card p-7`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Large decorative quote */}
              <div className="font-display text-7xl font-bold leading-none text-orange/15 select-none">&ldquo;</div>

              <div className="mt-1 flex gap-0.5" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-orange text-orange" />
                ))}
              </div>

              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.area}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact ────────────────────────────────────────────── */
function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const email = String(f.get("email") || "").trim();
    const service = String(f.get("service") || "").trim();
    const message = String(f.get("message") || "").trim();

    if (!name || !phone || !email || !service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const subject = encodeURIComponent(`New Quote Request — ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService Needed: ${service}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:corebright.construction@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast.success("Thanks! Your email client has opened with your quote request.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left: contact info */}
          <div className="reveal-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange">Get in Touch</span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s talk about your project
            </h2>
            <p className="mt-4 text-base text-white/60">
              Free estimates, fast response. We usually get back within a few hours during working hours.
            </p>

            {/* Large phone numbers */}
            <div className="mt-10 space-y-6">
              <a href="tel:07405326484" className="group block">
                <span className="text-xs uppercase tracking-widest text-white/40">Zahid</span>
                <div className="mt-1 font-display text-4xl font-bold text-white transition-colors group-hover:text-orange sm:text-5xl">
                  07405 326484
                </div>
              </a>
              <a href="tel:07985785177" className="group block">
                <span className="text-xs uppercase tracking-widest text-white/40">Asif</span>
                <div className="mt-1 font-display text-4xl font-bold text-white transition-colors group-hover:text-orange sm:text-5xl">
                  07985 785177
                </div>
              </a>
            </div>

            {/* Secondary contacts */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/447405326484?text=Hi%20Bright%20Core%20Construction%2C%20I%27d%20like%20a%20free%20estimate."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a
                href="mailto:corebright.construction@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                corebright.construction@gmail.com
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-white/50">
              <MapPin className="h-4 w-4 shrink-0" />
              Serving Barking, Ilford, Romford, Walthamstow &amp; across London
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="reveal-right rounded-xl bg-white p-7 shadow-lg sm:p-8"
          >
            <h3 className="font-display text-2xl font-bold text-navy">Request a Free Quote</h3>
            <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *" name="name" placeholder="Your name" />
              <Field label="Phone Number *" name="phone" type="tel" placeholder="07…" />
              <div className="sm:col-span-2">
                <Field label="Email *" name="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Service Needed *
                </label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-navy"
                >
                  <option value="" disabled>Select a service</option>
                  {serviceCategories.flatMap((c) => c.items).map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                  <option>Other / Multiple</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about your project, postcode and ideal timeline…"
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-navy"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-6 py-4 font-display text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
              ) : (
                <>Request Free Quote <ArrowRight className="h-4 w-4" /></>
              )}
            </button>

            {done && (
              <div className="mt-5 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span>
                  Thanks — your enquiry is prepared. If your email app didn&apos;t open, please call{" "}
                  <a className="font-bold underline" href="tel:07405326484">07405 326484</a>.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Field ──────────────────────────────────────────────── */
function Field({ label, name, type = "text", placeholder }: {
  label: string; name: string; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={label.includes("*")}
        placeholder={placeholder}
        className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-navy"
      />
    </div>
  );
}

/* ── WhatsApp Icon ──────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-4.7A8.5 8.5 0 1 1 20 11.5z" />
    </svg>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logo}
            alt="Bright Core Construction"
            width={220}
            height={64}
            className="h-10 w-auto"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-white/50">
            For all your building work undertaken with guarantee.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-orange">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/55">
            <li><a href="tel:07405326484" className="hover:text-white transition-colors">Zahid — 07405 326484</a></li>
            <li><a href="tel:07985785177" className="hover:text-white transition-colors">Asif — 07985 785177</a></li>
            <li>
              <a href="mailto:corebright.construction@gmail.com" className="hover:text-white transition-colors break-all">
                corebright.construction@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-orange">Top Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/55">
            <li>Loft Conversions</li>
            <li>Kitchen Extensions</li>
            <li>Roofing & Guttering</li>
            <li>Bathroom Fitting</li>
            <li>Brick & Block Work</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-orange">Free Estimate</h4>
          <p className="mt-4 text-sm text-white/55">Honest pricing, guaranteed workmanship, fast turnaround.</p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-orange px-5 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90"
          >
            Request Estimate <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-white/35 sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Bright Core Construction. All rights reserved.</span>
          <span>Serving Barking, East London &amp; surrounding areas</span>
        </div>
      </div>
    </footer>
  );
}
