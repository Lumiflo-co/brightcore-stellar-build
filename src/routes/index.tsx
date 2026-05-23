import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone, Mail, MapPin, ShieldCheck, Award, Users, Sparkles, CheckCircle2,
  Hammer, Home, Paintbrush, Wrench, Layers, Zap, Trees, Bath, Building2,
  Construction, Ruler, Drill, Brush, DoorOpen, Fence, Flower2, ArrowRight,
  Star, Quote, X, Loader2, Clock,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { SiteNav } from "@/components/SiteNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useReveal } from "@/hooks/use-reveal";

import hero from "@/assets/hero-construction.jpg";
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
      { title: "Bright Core Construction — Loft Conversions, Extensions & Building Services London" },
      { name: "description", content: "Trusted London builders. Loft conversions, extensions, roofing, bathrooms, brickwork, driveways & full renovations. Free estimates. Guaranteed work." },
      { property: "og:title", content: "Bright Core Construction — London Builders" },
      { property: "og:description", content: "Premium building & renovation services across London. Free estimates. Guaranteed workmanship." },
      { property: "og:type", content: "website" },
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
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Bright Core Construction team building a home extension"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.01 25 / 0.55), oklch(0.10 0.01 25 / 0.85))" }} />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> London's Trusted Builders
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Reliable <span className="text-gold">Construction</span><br />
            Services You Can <span className="text-gold">Trust</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Loft conversions, extensions, roofing, bathrooms, brickwork, driveways
            and complete building solutions across London — delivered to a premium
            standard, every time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-red px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Get Your Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:07405326484"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-gold backdrop-blur transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href="tel:07405326484" className="flex items-center gap-2 font-semibold text-foreground hover:text-gold">
              <Phone className="h-4 w-4 text-gold" /> 07405 326484
            </a>
            <a href="tel:07985785177" className="flex items-center gap-2 font-semibold text-foreground hover:text-gold">
              <Phone className="h-4 w-4 text-gold" /> 07985 785177
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-red opacity-20 blur-3xl" />
            <div className="glass relative rounded-3xl p-6 shadow-elev">
              <div className="grid grid-cols-2 gap-3">
                {[imgKitchen, imgBath, imgConserv, imgBrick].map((s, i) => (
                  <img
                    key={i}
                    src={s}
                    alt=""
                    loading="lazy"
                    width={400}
                    height={400}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-background/60 p-4">
                <div>
                  <div className="text-2xl font-extrabold text-gold">100%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Workmanship Guarantee</div>
                </div>
                <div className="h-10 w-px bg-border" />
                <div>
                  <div className="text-2xl font-extrabold text-gold">Free</div>
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

function TrustBar() {
  const items = [
    { icon: CheckCircle2, t: "Free Estimates" },
    { icon: ShieldCheck, t: "Guaranteed Work" },
    { icon: Users, t: "Experienced Team" },
    { icon: Award, t: "High Quality Finish" },
  ];
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-8 sm:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, t }) => (
          <div key={t} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-red text-primary-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="What We Do"
          title={<>Complete <span className="text-gold">Building Services</span></>}
          subtitle="One trusted team for every job around your home — from small repairs to full renovations."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="reveal rounded-2xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-card"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-gold">{cat.title}</h3>
              <ul className="mt-4 grid gap-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="reveal relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-red opacity-15 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-4">
            <img src={imgConserv} alt="Conservatory" width={500} height={600} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover shadow-elev" />
            <img src={imgBrick} alt="Brickwork" width={500} height={500} loading="lazy" className="mt-12 aspect-square w-full rounded-2xl object-cover shadow-elev" />
          </div>
        </div>
        <div className="reveal">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">About Bright Core</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Built On <span className="text-gold">Quality</span> & <span className="text-gold">Trust</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Bright Core Construction provides reliable, high-quality building and
            renovation services with attention to detail and customer satisfaction
            at the heart of every project. From loft conversions and extensions to
            roofing, bathrooms and landscaping, we deliver professional workmanship
            with guaranteed results.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { n: "15+", t: "Years On The Tools" },
              { n: "500+", t: "Projects Delivered" },
              { n: "100%", t: "Guaranteed Work" },
              { n: "Free", t: "Estimates Always" },
            ].map((s) => (
              <div key={s.t} className="rounded-xl border border-border bg-card p-5">
                <div className="font-display text-3xl font-extrabold text-gold">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.t}</div>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Professional workmanship", "Residential building specialists", "Free, honest estimates", "Fully guaranteed work"].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-gold" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

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
          title={<>A Showcase Of <span className="text-gold">Our Work</span></>}
          subtitle="A selection of completed work across London — extensions, lofts, bathrooms, brickwork and landscaping."
        />
        <div className="reveal mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border focus:outline-none focus:ring-2 focus:ring-gold ${
                i % 5 === 0 ? "row-span-2 md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.label}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ aspectRatio: i % 5 === 0 ? "1/1" : "1/1" }}
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
        >
          <button
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].label} className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-elev" />
            <figcaption className="mt-4 text-center font-display text-sm font-bold uppercase tracking-wider text-gold">
              {gallery[active].label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, oklch(0.25 0.10 25 / 0.45), transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why Bright Core"
          title={<>Why Homeowners <span className="text-gold">Choose Us</span></>}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div
              key={r.t}
              className="reveal group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-glow"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wider text-foreground">{r.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
              className="reveal relative rounded-2xl border border-border bg-card p-7 shadow-elev"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-gold/20" />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-red font-bold text-primary-foreground">
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
    // Open the user's email client so the message is delivered to the business inbox.
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
        style={{ background: "radial-gradient(80% 60% at 100% 0%, oklch(0.30 0.14 25 / 0.45), transparent 70%)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="reveal">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Free Estimate</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl">
            Get Your <span className="text-gold">Free Estimate</span> Today
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Tell us about your project. We usually respond within a few hours during
            working hours — no obligation, no pressure.
          </p>

          <div className="mt-8 space-y-3">
            <a href="tel:07405326484" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-red text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Zahid</span>
                <span className="block font-display text-lg font-bold text-foreground">07405 326484</span>
              </span>
            </a>
            <a href="tel:07985785177" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-red text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Asif</span>
                <span className="block font-display text-lg font-bold text-foreground">07985 785177</span>
              </span>
            </a>
            <a
              href="https://wa.me/447405326484"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl text-white" style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}>
                <MessageCircleIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</span>
                <span className="block font-display text-lg font-bold text-foreground">Chat Now</span>
              </span>
            </a>
            <a href="mailto:corebright.construction@gmail.com" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/50">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-gold-foreground"><Mail className="h-5 w-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="block font-display text-sm font-bold text-foreground sm:text-base">corebright.construction@gmail.com</span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-gold"><MapPin className="h-5 w-5" /></span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Service Area</span>
                <span className="block font-display text-lg font-bold text-foreground">London & Surrounding Areas</span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal glass rounded-3xl p-6 shadow-elev sm:p-8"
        >
          <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight text-foreground">Request A Quote</h3>
          <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field label="Full Name *" name="name" placeholder="Your name" />
            <Field label="Phone Number *" name="phone" type="tel" placeholder="07…" />
            <div className="sm:col-span-2">
              <Field label="Email *" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Service Needed *</label>
              <select
                name="service"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
              >
                <option value="" disabled>Select a service</option>
                {services.map((s) => <option key={s.name}>{s.name}</option>)}
                <option>Other / Multiple</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a bit about your project, postcode and ideal timeline…"
                className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-red px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Request Free Quote <ArrowRight className="h-4 w-4" /></>}
          </button>

          {done && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <div className="text-foreground">
                Thanks — we've prepared your enquiry. If your email app didn't open, please
                call <a className="font-bold text-gold" href="tel:07405326484">07405 326484</a>.
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={label.includes("*")}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function MessageCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-4.7A8.5 8.5 0 1 1 20 11.5z" stroke="currentColor" strokeWidth="0" />
    </svg>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-red font-black text-primary-foreground shadow-glow">B</span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-wide text-foreground">BRIGHT CORE</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Construction</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            For all your building work undertaken with guarantee.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="tel:07405326484" className="hover:text-foreground">Zahid — 07405 326484</a></li>
            <li><a href="tel:07985785177" className="hover:text-foreground">Asif — 07985 785177</a></li>
            <li><a href="mailto:corebright.construction@gmail.com" className="hover:text-foreground break-all">corebright.construction@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Top Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Loft Conversions</li>
            <li>Kitchen Extensions</li>
            <li>Roofing & Guttering</li>
            <li>Bathroom Fitting</li>
            <li>Brick & Block Work</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold">Get a Free Quote</h4>
          <p className="mt-4 text-sm text-muted-foreground">Honest pricing, guaranteed workmanship, fast turnaround.</p>
          <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-red px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-glow">
            Request Estimate <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Bright Core Construction. All rights reserved.</span>
          <span>Serving London & surrounding areas</span>
        </div>
      </div>
    </footer>
  );
}
