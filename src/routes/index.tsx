import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, ShieldCheck, Award, Users, Sparkles,
  CheckCircle2, Hammer, ArrowRight, Star, X, Loader2, Clock,
  ChevronDown, ChevronUp,
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

/* ── FAQ data — powers both the UI and FAQPage schema ── */
const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes — all of our estimates are completely free with no obligation. We visit your property, assess the project in person, and provide a clear written quote with no hidden costs.",
  },
  {
    q: "What areas in East London do you cover?",
    a: "We cover all of East London including Barking, Ilford, Romford, Walthamstow, Stratford, Hackney, Dagenham and surrounding areas. We also take on larger projects across Greater London.",
  },
  {
    q: "Are your builders qualified and insured?",
    a: "Yes. Our team has 15+ years of hands-on experience in residential building and renovation. We carry full public liability insurance on every project for your complete peace of mind.",
  },
  {
    q: "How long does a loft conversion typically take?",
    a: "Most loft conversions take between 6–10 weeks depending on size and specification. We'll give you a detailed project timeline before work begins so there are no surprises.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Absolutely. Every project we complete is backed by our written workmanship guarantee. If anything isn't right after we finish, we'll come back and fix it — at no cost to you.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bright Core Construction | Expert Builders in East London" },
      {
        name: "description",
        content:
          "Bright Core Construction — expert builders in East London. Loft conversions, extensions, roofing, bathrooms, brickwork & driveways across Barking, Ilford, Romford & London. Free estimates. Guaranteed workmanship. Call 07405 326484.",
      },
      {
        name: "keywords",
        content:
          "builders East London, Bright Core Construction, loft conversion East London, kitchen extension Barking, roofing East London, bathroom fitters London, brickwork East London, driveways Barking, house extension London, builders near me, plastering East London, fencing, conservatory, renovation contractors London, Ilford builders, Romford builders, Walthamstow builders",
      },
      { name: "geo.region", content: "GB-LND" },
      { name: "geo.placename", content: "Barking, East London" },
      { name: "author", content: "Bright Core Construction" },
      { property: "og:title", content: "Bright Core Construction | Expert Builders in East London" },
      {
        property: "og:description",
        content:
          "Loft conversions, extensions, roofing, bathrooms, brickwork & driveways across East London. Free estimates, guaranteed workmanship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://brightcore.lumiflo.co.uk/" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:site_name", content: "Bright Core Construction" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Bright Core Construction | Expert Builders in East London",
      },
      {
        name: "twitter:description",
        content:
          "Loft conversions, extensions, roofing, bathrooms & more across East London. Free estimates.",
      },
    ],
    links: [{ rel: "canonical", href: "https://brightcore.lumiflo.co.uk/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://brightcore.lumiflo.co.uk/#business",
          name: "Bright Core Construction",
          description:
            "Expert East London builders specialising in loft conversions, extensions, roofing, bathrooms, brickwork, driveways and full renovations. Serving Barking, Ilford, Romford, Walthamstow and all surrounding London areas.",
          url: "https://brightcore.lumiflo.co.uk/",
          telephone: ["+447405326484", "+447985785177"],
          email: "corebright.construction@gmail.com",
          image: "https://brightcore.lumiflo.co.uk/favicon-512.png",
          logo: "https://brightcore.lumiflo.co.uk/favicon-512.png",
          priceRange: "££",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Barking",
            addressLocality: "Barking",
            addressRegion: "East London",
            postalCode: "IG11",
            addressCountry: "GB",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "51.5362",
            longitude: "0.0798",
          },
          areaServed: [
            { "@type": "City", name: "London" },
            { "@type": "Place", name: "Barking" },
            { "@type": "Place", name: "Ilford" },
            { "@type": "Place", name: "Romford" },
            { "@type": "Place", name: "Walthamstow" },
            { "@type": "Place", name: "Stratford" },
            { "@type": "Place", name: "Hackney" },
            { "@type": "Place", name: "Dagenham" },
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
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+447405326484",
              contactType: "customer service",
              areaServed: "GB",
              availableLanguage: "English",
              contactOption: "TollFree",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Building & Renovation Services",
            itemListElement: [
              "Loft Conversions",
              "Kitchen Extensions",
              "Conservatories",
              "Brick & Block Work",
              "Roofing & Guttering",
              "Driveways & Slabs",
              "Plastering & Skimming",
              "Wall & Floor Tiling",
              "Wood Flooring",
              "Bathroom Fitting",
              "Carpentry",
              "Plumbing",
              "Electrical",
              "Painting & Decorating",
              "Fencing",
              "Gardening",
              "Patios & Sheds",
            ].map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s, areaServed: "East London" },
            })),
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "4",
            bestRating: "5",
            worstRating: "1",
          },
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Ahmed R." },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody:
                "Bright Core handled our loft conversion start to finish. Professional, tidy, and the finish is outstanding.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Sarah M." },
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              reviewBody:
                "Kitchen extension and new bathroom. Turned up on time every day, kept everything clean and the quality is brilliant.",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ── Static data ────────────────────────────────────────── */
const serviceCategories = [
  {
    icon: "🏠",
    title: "Extensions & Conversions",
    items: ["Loft Conversion", "Kitchen Extensions", "Conservatory"],
  },
  {
    icon: "🧱",
    title: "Structure & Exterior",
    items: ["Brick & Block Work", "Roofing & Guttering", "Driveways & Slabs"],
  },
  {
    icon: "🪟",
    title: "Interior Finishes",
    items: ["Plastering", "Skimming", "Wall & Floor Tiling", "Wood Flooring", "Bathroom Fitting"],
  },
  {
    icon: "🔧",
    title: "Trades & Repairs",
    items: ["Carpentry", "Plumbing", "Electric", "Painting", "Decorating"],
  },
  {
    icon: "🌿",
    title: "Gardens & Outdoor",
    items: ["Fencing", "Gardening", "Garden Sheds & Patio"],
  },
];

const gallery = [
  { src: imgLoft, label: "Loft Conversion Framing", alt: "Loft conversion timber frame structure in East London" },
  { src: imgBath, label: "Luxury Bathroom Fit", alt: "Luxury bathroom installation with modern tiles" },
  { src: imgBrick, label: "Brickwork & Garden Steps", alt: "Professional brickwork and garden steps East London" },
  { src: imgConserv, label: "Glass Conservatory", alt: "New glass conservatory extension completed in East London" },
  { src: imgKitchen, label: "Kitchen Extension", alt: "Kitchen extension build in progress East London" },
  { src: imgFence, label: "Railings & Fencing", alt: "Metal railings and fencing installation" },
  { src: imgPave, label: "Sandstone Paving", alt: "Sandstone patio paving and landscaping East London" },
  { src: imgRoof, label: "Roofing & Guttering", alt: "Roof repair and new guttering installation" },
  { src: imgPlaster, label: "Plastering & Skimming", alt: "Professional plastering and skimming finish" },
  { src: imgElec, label: "Electrical Installations", alt: "Certified electrical installation and rewiring" },
];

const reasons = [
  { icon: CheckCircle2, t: "Free Estimates", d: "No-obligation quotes, fully itemised so you know exactly what you're paying for." },
  { icon: ShieldCheck, t: "Guaranteed Workmanship", d: "Every project backed by our written workmanship guarantee." },
  { icon: Award, t: "High Quality Finish", d: "Premium materials and meticulous attention to detail on every job." },
  { icon: Users, t: "Experienced Team", d: "Skilled tradespeople with years of East London residential experience." },
  { icon: Hammer, t: "All Building Work", d: "From a single room to a full extension — one team, one point of contact." },
  { icon: Sparkles, t: "Clean & Respectful", d: "We protect your home, clean up daily and treat your space with respect." },
  { icon: Clock, t: "On Time, On Budget", d: "Transparent timelines and pricing — no surprises along the way." },
  { icon: Star, t: "Competitive Pricing", d: "Honest, fair quotes that reflect the true value of the work." },
];

const testimonials = [
  { name: "Ahmed R.", area: "Ilford", text: "Bright Core handled our loft conversion start to finish. Zahid and the team were professional, tidy, and the finish is outstanding. Couldn't recommend more." },
  { name: "Sarah M.", area: "Walthamstow", text: "We had our kitchen extended and a new bathroom fitted. They turned up on time every day, kept everything clean and the quality is brilliant." },
  { name: "Daniel K.", area: "Romford", text: "Got three quotes — Bright Core wasn't the cheapest but their attention to detail was clearly on another level. So glad we went with them." },
  { name: "Fatima A.", area: "East London", text: "Driveway, fencing and a new front porch. Genuinely lovely lads, fair price and the work has totally transformed the front of the house." },
];

/* ── Page root ──────────────────────────────────────────── */
function HomePage() {
  useReveal();
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
      if (window.location.hash)
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Toaster theme="dark" position="top-center" richColors />
      <SiteNav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Gallery />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:min-h-screen lg:pt-36 lg:pb-24"
      aria-label="Bright Core Construction — Expert Builders in East London"
    >
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Bright Core Construction team building a home extension in East London"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Strong dark overlay matching leaflet dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.08 0.012 22 / 0.65), oklch(0.08 0.010 22 / 0.90))",
          }}
        />
        {/* Subtle red glow top-left */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(50% 40% at 10% 10%, oklch(0.40 0.18 25 / 0.55), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-8">
        {/* Left: headline + CTAs */}
        <div className="animate-fade-up">
          {/* Free estimate badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-foreground shadow-glow">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Free Estimate — No Obligation
          </span>

          {/* H1 in Bebas Neue — construction-grade typography */}
          <h1 className="mt-5 font-bebas text-6xl uppercase leading-[0.92] tracking-wide text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
            Expert Builders<br />
            <span className="text-gold">East London</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Loft conversions, extensions, roofing, bathrooms, brickwork &amp; driveways
            across East London — delivered to a premium standard with guaranteed workmanship.
          </p>

          {/* Stars + social proof */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
              <span className="ml-1 text-sm font-semibold text-foreground">5.0</span>
            </div>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm font-medium text-muted-foreground">15+ Years Experience</span>
            <span className="text-sm text-muted-foreground">·</span>
            <span className="text-sm font-medium text-muted-foreground">500+ Projects Completed</span>
          </div>

          {/* Primary CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-red px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Get Your Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:07405326484"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-background/20 px-6 py-4 text-sm font-bold uppercase tracking-wider text-gold backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground sm:w-auto"
            >
              <Phone className="h-4 w-4" /> Call Us Now
            </a>
          </div>

          {/* Phone numbers */}
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a
              href="tel:07405326484"
              className="flex items-center gap-2 font-bold text-foreground hover:text-gold transition-colors"
              aria-label="Call Zahid on 07405 326484"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span className="text-muted-foreground text-xs mr-0.5">Zahid:</span> 07405 326484
            </a>
            <a
              href="tel:07985785177"
              className="flex items-center gap-2 font-bold text-foreground hover:text-gold transition-colors"
              aria-label="Call Asif on 07985 785177"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span className="text-muted-foreground text-xs mr-0.5">Asif:</span> 07985 785177
            </a>
          </div>
        </div>

        {/* Right: project preview grid */}
        <div className="hidden animate-fade-up lg:block" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-red opacity-20 blur-3xl" />
            <div className="glass relative rounded-3xl p-6 shadow-elev">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: imgKitchen, alt: "Kitchen extension project East London" },
                  { src: imgBath, alt: "Bathroom renovation East London" },
                  { src: imgConserv, alt: "Conservatory construction East London" },
                  { src: imgBrick, alt: "Brickwork project East London" },
                ].map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={400}
                    height={400}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-background/60 p-4">
                <div>
                  <div className="font-display text-2xl font-extrabold uppercase text-gold">100%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Workmanship Guarantee</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="font-display text-2xl font-extrabold uppercase text-gold">Free</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">No-Obligation Quotes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Trust Bar ──────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: CheckCircle2, t: "Free Estimates" },
    { icon: ShieldCheck, t: "Guaranteed Work" },
    { icon: Users, t: "15+ Years Experience" },
    { icon: Award, t: "500+ Projects Done" },
  ];
  return (
    <section className="border-y border-border bg-card/40" aria-label="Key trust signals">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-7 sm:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, t }) => (
          <div key={t} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-red text-primary-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Reusable section header ────────────────────────────── */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`reveal ${align === "left" ? "max-w-2xl" : "mx-auto max-w-2xl text-center"}`}>
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide text-foreground sm:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ── Services ───────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title={<>Complete <span className="text-gold">Building Services</span></>}
          subtitle="One trusted team for every job around your home — from small repairs to full renovations across East London."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <article
              key={cat.title}
              className="reveal-zoom rounded-2xl border border-border bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl" role="img" aria-hidden="true">{cat.icon}</span>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gold">
                  {cat.title}
                </h3>
              </div>
              <ul className="mt-4 grid gap-2" aria-label={`${cat.title} services`}>
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
          >
            Get a Free Quote for Any Service <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── About ──────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="reveal-left relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-red opacity-15 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={imgConserv}
              alt="Glass conservatory extension completed by Bright Core Construction in East London"
              width={500}
              height={600}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elev"
            />
            <img
              src={imgBrick}
              alt="Professional brickwork and garden steps by Bright Core Construction"
              width={500}
              height={500}
              loading="lazy"
              className="mt-12 aspect-square w-full rounded-2xl object-cover shadow-elev"
            />
          </div>
        </div>
        <div className="reveal-right">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">About Bright Core</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">
            Built On <span className="text-gold">Quality</span> &amp; <span className="text-gold">Trust</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Bright Core Construction is an East London building company providing
            reliable, high-quality building and renovation services with attention to
            detail and customer satisfaction at the heart of every project. From loft
            conversions and extensions to roofing, bathrooms and landscaping — we
            deliver professional workmanship with guaranteed results.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { n: "15+", t: "Years On The Tools" },
              { n: "500+", t: "Projects Delivered" },
              { n: "100%", t: "Guaranteed Work" },
              { n: "Free", t: "Estimates Always" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-extrabold uppercase text-gold">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.t}</div>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Our commitments">
            {[
              "Professional workmanship",
              "Residential building specialists",
              "Free, honest estimates",
              "Fully guaranteed work",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
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
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Recent Projects"
          title={<>Our Work Across <span className="text-gold">East London</span></>}
          subtitle="A selection of completed projects — extensions, loft conversions, bathrooms, brickwork and landscaping."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal-blur group relative overflow-hidden rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-gold ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2 row-span-2" : ""
              }`}
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              aria-label={`View project: ${g.label}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">View Project</div>
                <div className="mt-1 font-display text-sm font-bold uppercase text-foreground">{g.label}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing project: ${gallery[active].label}`}
        >
          <button
            aria-label="Close image"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[active].src}
              alt={gallery[active].alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-elev"
            />
            <figcaption className="mt-4 text-center font-display text-sm font-bold uppercase tracking-wider text-gold">
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
    <section id="why" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.25 0.10 25 / 0.45), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why Bright Core"
          title={<>Why East London Homeowners <span className="text-gold">Choose Us</span></>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <article
              key={r.t}
              className="reveal-blur group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <r.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wider text-foreground">
                {r.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </article>
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
      title: "Call or Message Us",
      desc: "Get in touch by phone, WhatsApp or our form. We'll discuss your project — no obligation, no pressure.",
    },
    {
      n: "02",
      title: "Free Site Visit & Quote",
      desc: "We visit your property, assess the job in person, and provide a clear written quote with no hidden costs.",
    },
    {
      n: "03",
      title: "We Build",
      desc: "Your project starts on schedule. We update you throughout, keep the site clean, and finish to a guaranteed standard.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title={<>Simple <span className="text-gold">3-Step Process</span></>}
          subtitle="Getting your building project started with Bright Core Construction is straightforward."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal-zoom relative rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-bebas text-8xl leading-none text-gold/20 select-none">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-gold/30 sm:block" aria-hidden="true" />
              )}
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
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title={<>What Our <span className="text-gold">Customers Say</span></>}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`${i % 2 === 0 ? "reveal-left" : "reveal-right"} relative rounded-2xl border border-border bg-card p-6 shadow-elev sm:p-7`}
              style={{ transitionDelay: `${i * 60}ms` }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div
                className="absolute right-6 top-5 font-bebas text-8xl leading-none text-gold/15 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <div className="flex gap-1 text-gold" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote
                className="mt-4 text-base leading-relaxed text-foreground"
                itemProp="reviewBody"
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className="grid h-11 w-11 place-items-center rounded-full bg-gradient-red font-display text-sm font-bold text-primary-foreground"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground" itemProp="author">{t.name}</div>
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

/* ── FAQ ────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(50% 40% at 50% 100%, oklch(0.25 0.10 25 / 0.40), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Common Questions"
          title={<>Frequently Asked <span className="text-gold">Questions</span></>}
          subtitle="Answers to the questions we get asked most often by East London homeowners."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal border-b border-border last:border-0"
              style={{ transitionDelay: `${i * 50}ms` }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={open === i}
              >
                <h3
                  className="font-display text-base font-bold uppercase tracking-wide text-foreground sm:text-lg"
                  itemProp="name"
                >
                  {faq.q}
                </h3>
                {open === i ? (
                  <ChevronUp className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                ) : (
                  <ChevronDown className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                )}
              </button>
              {open === i && (
                <div
                  className="pb-5 text-sm leading-relaxed text-muted-foreground"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p itemProp="text">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Got another question?{" "}
            <a href="tel:07405326484" className="font-bold text-gold hover:underline">
              Call us on 07405 326484
            </a>
            {" "}or{" "}
            <a href="#contact" className="font-bold text-gold hover:underline">
              send us a message
            </a>
            .
          </p>
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
    <section id="contact" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 100% 0%, oklch(0.28 0.13 25 / 0.45), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        {/* Left: contact details */}
        <div className="reveal-left">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Free Estimate</span>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-wide sm:text-5xl">
            Get Your <span className="text-gold">Free Estimate</span> Today
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Tell us about your project. We usually respond within a few hours during
            working hours — no obligation, no pressure.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="tel:07405326484"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
              aria-label="Call Zahid on 07405 326484"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-red text-primary-foreground">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Zahid</span>
                <span className="block font-display text-xl font-bold uppercase text-foreground">07405 326484</span>
              </span>
            </a>
            <a
              href="tel:07985785177"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
              aria-label="Call Asif on 07985 785177"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-red text-primary-foreground">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Asif</span>
                <span className="block font-display text-xl font-bold uppercase text-foreground">07985 785177</span>
              </span>
            </a>
            <a
              href="https://wa.me/447405326484?text=Hi%20Bright%20Core%20Construction%2C%20I%27d%20like%20a%20free%20estimate."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
              aria-label="Chat on WhatsApp"
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
                style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
              >
                <WhatsAppIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</span>
                <span className="block font-display text-xl font-bold uppercase text-foreground">Chat Now</span>
              </span>
            </a>
            <a
              href="mailto:corebright.construction@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
              aria-label="Email Bright Core Construction"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="block font-display text-sm font-bold uppercase text-foreground sm:text-base break-all">
                  corebright.construction@gmail.com
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-gold">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Service Area</span>
                <span className="block font-display text-lg font-bold uppercase text-foreground">
                  East London &amp; Surrounding Areas
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right: quote form */}
        <form
          onSubmit={onSubmit}
          className="reveal-right glass rounded-3xl p-6 shadow-elev sm:p-8"
          aria-label="Request a free building quote"
          noValidate
        >
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
            Request A Quote
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full Name *" name="name" placeholder="Your name" />
            <Field label="Phone Number *" name="phone" type="tel" placeholder="07…" />
            <div className="sm:col-span-2">
              <Field label="Email Address *" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="service-select"
                className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Service Needed *
              </label>
              <select
                id="service-select"
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
              >
                <option value="" disabled>Select a service</option>
                {serviceCategories.flatMap((c) => c.items).map((n) => (
                  <option key={n}>{n}</option>
                ))}
                <option>Other / Multiple</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message-field"
                className="block text-xs font-bold uppercase tracking-wider text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message-field"
                name="message"
                rows={4}
                placeholder="Tell us about your project, your postcode and ideal start date…"
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-red px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
            ) : (
              <>Request Free Quote <ArrowRight className="h-4 w-4" /></>
            )}
          </button>

          {done && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm" role="status">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <div className="text-foreground">
                Thanks — your enquiry is prepared. If your email app didn&apos;t open, please
                call{" "}
                <a className="font-bold text-gold" href="tel:07405326484">07405 326484</a>.
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ── Field ──────────────────────────────────────────────── */
function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={label.includes("*")}
        placeholder={placeholder}
        autoComplete={type === "tel" ? "tel" : type === "email" ? "email" : name === "name" ? "name" : "off"}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

/* ── WhatsApp icon ──────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-4.7A8.5 8.5 0 1 1 20 11.5z" />
    </svg>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logo}
            alt="Bright Core Construction — Expert Builders East London"
            width={280}
            height={80}
            className="h-14 w-auto"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            For all your building work undertaken with guarantee.
          </p>
          <address className="mt-3 not-italic text-xs text-muted-foreground">
            Barking, East London · <a href="tel:07405326484" className="hover:text-foreground">07405 326484</a>
          </address>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="tel:07405326484" className="hover:text-foreground transition-colors">Zahid — 07405 326484</a></li>
            <li><a href="tel:07985785177" className="hover:text-foreground transition-colors">Asif — 07985 785177</a></li>
            <li>
              <a href="mailto:corebright.construction@gmail.com" className="hover:text-foreground transition-colors break-all">
                corebright.construction@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Top Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Loft Conversions</li>
            <li>Kitchen Extensions</li>
            <li>Roofing &amp; Guttering</li>
            <li>Bathroom Fitting</li>
            <li>Brick &amp; Block Work</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Service Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Barking &amp; Ilford</li>
            <li>Romford &amp; Dagenham</li>
            <li>Walthamstow &amp; Stratford</li>
            <li>Hackney &amp; East London</li>
            <li>All Greater London</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Bright Core Construction. All rights reserved.</span>
          <span>Expert Builders Serving East London &amp; Surrounding Areas</span>
        </div>
      </div>
    </footer>
  );
}
