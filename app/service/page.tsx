import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Project Development",
    description: "We develop high quality projects for all technologies with full source code.",
    icon: CodeIcon,
    accent: "blue" as const,
  },
  {
    title: "Mini Projects",
    description: "Ready-made mini projects for diploma and undergraduate students.",
    icon: LightIcon,
    accent: "orange" as const,
  },
  {
    title: "Final Year Projects",
    description: "IEEE and real-time projects with full documentation and viva support.",
    icon: CapIcon,
    accent: "blue" as const,
  },
  {
    title: "Internship Training",
    description: "Industrial training with live projects by expert professionals.",
    icon: GroupIcon,
    accent: "orange" as const,
  },
  {
    title: "Project Documentation",
    description: "Synopsis, reports, PPT, and complete project documents.",
    icon: DocumentIcon,
    accent: "blue" as const,
  },
  {
    title: "Hardware & IoT Projects",
    description: "Arduino, Raspberry Pi, sensors, and embedded system projects.",
    icon: ChipIcon,
    accent: "orange" as const,
  },
];

const pricingPlans = [
  {
    title: "Mini Projects",
    price: "Rs. 2,000 - Rs. 5,000",
    icon: CapIcon,
    accent: "blue" as const,
    features: ["Diploma & UG Projects", "Multiple Technologies", "Source Code", "Report & PPT"],
  },
  {
    title: "Final Year Projects",
    price: "Rs. 5,000 - Rs. 15,000",
    icon: TrophyIcon,
    accent: "orange" as const,
    popular: true,
    features: ["IEEE / Real-time Projects", "Full Documentation", "Viva Preparation", "Plagiarism Report"],
  },
  {
    title: "Internship Training",
    price: "Rs. 3,000 - Rs. 20,000",
    icon: BriefcaseIcon,
    accent: "blue" as const,
    features: ["Live Projects", "Industry Experts", "Certificate Provided", "Flexible Duration"],
  },
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: BriefcaseIcon },
  { value: "300+", label: "Happy Students", icon: GroupIcon },
  { value: "10+", label: "Expert Mentors", icon: UserIcon },
  { value: "8+", label: "Years of Experience", icon: ClockIcon },
  { value: "100%", label: "Satisfaction", icon: ShieldIcon },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white text-[#071f49]">
      <ServiceHeader />
      <ServicesHero />
      <OfferSection />
      <PricingSection />
      <StatsSection />
      <ServiceFooter />
      <WhatsAppButton />
    </main>
  );
}

function ServiceHeader() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[linear-gradient(180deg,#174c99_0%,#0e3f87_100%)] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <CubeLogo />
          </div>
          <div className="text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-white">Sparrow </span>
            <span className="text-[#f6a028]">Info Tech</span>
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#002a72]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_7%_22%,rgba(255,255,255,0.18)_1px,transparent_2px)] bg-[length:18px_18px] opacity-40" />
      <div className="absolute -left-8 top-24 h-28 w-28 rotate-45 border border-[#ff8a00]/40" />
      <div className="absolute right-0 bottom-0 h-48 w-48 rounded-tl-full border-l-[18px] border-t-[18px] border-[#ff8a00]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-0">
        <div className="py-8 lg:py-14">
          <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
            Our <span className="text-[#ff8a00]">Services</span>
          </h1>
          <p className="mt-5 max-w-xl text-xl font-medium leading-9 text-white">
            We provide end-to-end support for student projects from idea to successful implementation.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="#services"
              className="inline-flex items-center gap-3 rounded-md bg-[#ff8600] px-6 py-3 text-base font-bold text-white shadow-[0_14px_26px_rgba(255,134,0,0.3)]"
            >
              Explore Services
              <ArrowIcon className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border border-white bg-white/5 px-6 py-3 text-base font-bold text-white"
            >
              Contact Us
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[300px] overflow-hidden lg:min-h-[365px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-36 bg-gradient-to-r from-[#002a72] to-transparent lg:block" />
          <Image
            src="/hero.png"
            alt="Students working on a robotics project"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="services" className="px-5 py-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="What We Offer" />
        <div className="mt-6 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  accent,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  accent: "blue" | "orange";
}) {
  const circleClass =
    accent === "orange"
      ? "bg-[linear-gradient(180deg,#ff9300_0%,#f36f00_100%)]"
      : "bg-[linear-gradient(180deg,#073987_0%,#002b6f_100%)]";

  return (
    <article className="flex h-full flex-col rounded-lg border border-[#e3e8f0] bg-white px-5 py-5 text-center shadow-[0_8px_20px_rgba(4,29,75,0.08)]">
      <div className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-white ${circleClass}`}>
        <Icon className="h-9 w-9" />
      </div>
      <h3 className="mt-5 min-h-10 text-[15px] font-bold leading-5 text-[#002b72]">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-[#1d2638]">{description}</p>
      <Link
        href="/contact"
        className="mx-auto mt-4 inline-flex w-fit rounded px-6 py-2 text-sm font-bold text-white bg-[linear-gradient(180deg,#075fc6_0%,#003c92_100%)]"
      >
        View Details
      </Link>
    </article>
  );
}

function PricingSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#eaf4ff_0%,#f5f9ff_100%)] px-5 py-5 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Our Pricing Plans" />
        <div className="mt-6 grid items-stretch gap-6 lg:grid-cols-[1fr_1fr_1fr_0.96fr]">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
          <HelpCard />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  icon: Icon,
  accent,
  features,
  popular,
}: {
  title: string;
  price: string;
  icon: ComponentType<{ className?: string }>;
  accent: "blue" | "orange";
  features: string[];
  popular?: boolean;
}) {
  const headerClass =
    accent === "orange"
      ? "bg-[linear-gradient(180deg,#ff9100_0%,#f37400_100%)]"
      : "bg-[linear-gradient(180deg,#073987_0%,#002b6f_100%)]";
  const checkClass = accent === "orange" ? "text-[#ff8500]" : "text-[#003983]";

  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(4,29,75,0.12)]">
      {popular && (
        <div className="absolute right-[-42px] top-5 z-10 rotate-45 bg-[#ff5a00] px-10 py-1 text-xs font-bold uppercase text-white">
          Popular
        </div>
      )}
      <div className={`flex min-h-20 items-center gap-4 px-8 py-4 text-white ${headerClass}`}>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#00357d]">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold leading-snug">{title}</h3>
      </div>
      <div className="flex flex-1 flex-col px-8 py-5">
        <p className="min-h-8 whitespace-nowrap text-[22px] font-bold leading-8 text-[#002b72]">{price}</p>
        <ul className="mt-4 flex-1 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-[#1e293b]">
              <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${checkClass}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className={`mt-6 inline-flex w-fit rounded px-8 py-2.5 text-sm font-bold text-white ${accent === "orange" ? "bg-[#ff8500]" : "bg-[#0059bf]"
            }`}
        >
          Enquire Now
        </Link>
      </div>
    </article>
  );
}

function HelpCard() {
  return (
    <aside className="rounded-lg bg-[linear-gradient(180deg,#002d73_0%,#001d50_100%)] p-8 text-white shadow-[0_8px_24px_rgba(4,29,75,0.16)]">
      <h3 className="text-3xl font-bold leading-tight">
        Need Help With <span className="block text-[#ff8a00]">Your Project?</span>
      </h3>
      <p className="mt-5 text-base leading-7 text-white">
        Talk to our experts and get the best solution for your project.
      </p>
      <div className="mt-6 space-y-4">
        <Link
          href="https://wa.me/919884867302"
          className="flex items-center justify-center gap-3 rounded-md bg-[#ff8500] px-5 py-3 text-sm font-bold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat on WhatsApp
        </Link>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-3 rounded-md border border-white px-5 py-3 text-sm font-bold text-white"
        >
          <CalendarIcon className="h-5 w-5" />
          Book a Free Demo
        </Link>
      </div>
    </aside>
  );
}

function StatsSection() {
  return (
    <section className="bg-[#f5f9ff] px-5 pb-5 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-lg bg-white px-6 py-5 shadow-[0_8px_24px_rgba(4,29,75,0.1)] sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} bordered={index < stats.length - 1} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  icon: Icon,
  bordered,
}: {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  bordered: boolean;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${bordered ? "lg:border-r lg:border-[#cfd7e3]" : ""}`}>
      <Icon className="h-9 w-9 shrink-0 text-[#1765cf]" />
      <div>
        <p className="text-2xl font-bold leading-none text-[#002b72]">{value}</p>
        <p className="mt-1 text-sm text-[#1e293b]">{label}</p>
      </div>
    </div>
  );
}

export function CallToActionSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10 lg:pb-12">
      <div className="grid items-center gap-8 rounded-lg bg-[#dfe8f7] px-8 py-8 shadow-[0_12px_26px_rgba(27,51,101,0.08)] lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-[#183f83] sm:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-[#3d4a65]">
            Join students who are building practical projects with focused guidance and support.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-md bg-[linear-gradient(180deg,#1d57aa_0%,#134587_100%)] px-7 py-3.5 text-lg font-bold text-white shadow-[0_10px_24px_rgba(19,69,135,0.22)]"
          >
            Get Started Now
          </Link>
        </div>
        <div className="relative h-64 overflow-hidden rounded-lg">
          <Image
            src="/project.png"
            alt="Students collaborating on a project"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceFooter() {
  return (
    <footer className="bg-[linear-gradient(180deg,#103a78_0%,#0d326a_100%)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="grid gap-8 border-b border-white/20 pb-8 sm:grid-cols-2 xl:grid-cols-4">
          <div className="xl:border-r xl:border-white/20 xl:pr-8">
            <div className="flex items-center gap-3">
              <CubeLogo />
              <div className="text-xl font-bold">
                <span className="text-white">X </span>
                <span className="text-[#f5a025]">X X</span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-base leading-7 text-white/88 sm:text-lg sm:leading-8">
              Empowering students to innovate, create, and lead through hands-on
              learning and real-world projects.
            </p>
          </div>

          <div className="xl:border-r xl:border-white/20 xl:px-8">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <div className="mt-4 space-y-3 text-base text-white/92 sm:text-lg">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-[#ffd189]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="xl:border-r xl:border-white/20 xl:px-8">
            <h3 className="text-2xl font-bold">Contact Info</h3>
            <div className="mt-4 space-y-4 text-base text-white/92 sm:text-lg">
              <div className="flex items-start gap-3">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>+91 9884867302</span>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>prabu.106@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <PinIcon className="mt-1 h-5 w-5 shrink-0" />
                <span>123, Innovation Lab, Tech Park, Bengaluru - 560100, Karnataka, India</span>
              </div>
            </div>
          </div>

          <div className="xl:px-8">
            <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
            <div className="mt-3 h-1 w-16 rounded-full bg-[#f5a025]" />
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Stay updated with our latest projects, workshops, and news.
            </p>
            <div className="mt-6 flex flex-col overflow-hidden rounded-md bg-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-4 py-3 text-base text-[#243250] outline-none placeholder:text-[#7d8aa8]"
              />
              <button className="w-full bg-[linear-gradient(180deg,#f7a12a_0%,#ef8217_100%)] px-5 py-3 text-base font-bold text-white sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="pt-5 text-center text-lg text-white/90">
          &copy; 2026 Sparrow Info Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919884867302"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#19c766] text-white shadow-[0_12px_24px_rgba(25,199,102,0.35)]"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </Link>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#003074]">{title}</h2>
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-[#ff8a00]" />
    </div>
  );
}

function CubeLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-12 w-12 shrink-0">
      <path d="M32 5 53 16.5 32 28 11 16.5 32 5Z" fill="#F7B13A" />
      <path d="M11 16.5 32 28v23L11 39.5v-23Z" fill="#8FB2E6" />
      <path d="M53 16.5 32 28v23l21-11.5v-23Z" fill="#F08A1C" />
      <path d="M32 28 22.5 22.8v22.9l9.5 5.3V28Z" fill="#C8DCF6" />
      <path d="M32 28 41.5 22.8v22.9L32 51V28Z" fill="#FFD38B" />
      <path
        d="M32 5 53 16.5 32 28 11 16.5 32 5Zm0 0v23m-21-11.5 21 11.5 21-11.5"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBase({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      {children}
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13 5l-2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function LightIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M9 18h6M10 22h4M8.4 14.6a6 6 0 1 1 7.2 0c-.9.7-1.1 1.4-1.1 2.4h-5c0-1-.2-1.7-1.1-2.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 2v2M4.9 4.9l1.4 1.4M2 12h2M19.1 4.9l-1.4 1.4M20 12h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function CapIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m3 8 9-4 9 4-9 4-9-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 10v5c2.8 2 7.2 2 10 0v-5M21 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function GroupIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 15c3 0 5 2.1 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M6 3h8l4 4v14H6V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 3v5h4M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function ChipIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="10" width="4" height="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3M12 13v4M9 21h6M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M9 7V5h6v2M4 8h16v11H4V8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 13h16M10 13v2h4v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" fill="currentColor" />
    </IconBase>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 3 20 6v6c0 4.7-3.3 7.7-8 9-4.7-1.3-8-4.3-8-9V6l8-3Z" fill="currentColor" />
      <path d="m8.5 12 2.3 2.3 4.7-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="m10 8 4 4-4 4" stroke="#003074" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M5.2 19 6.3 15.7A7.5 7.5 0 1 1 9 18.3L5.2 19Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.4 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.7 1.3 1.7 2.2 3 2.8l.5-.6c.2-.2.4-.3.7-.2l1.4.7c.3.1.4.3.4.6v.4c0 .5-.4.9-.9 1-3.7-.1-7.1-3.3-7.6-6.9Z" fill="currentColor" />
    </IconBase>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M5 5h14v15H5V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 3v4M16 3v4M5 10h14M9 14h2M13 14h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </IconBase>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M7 4h3l1.5 4-2 1.7a15 15 0 0 0 4.8 4.8L16 12l4 1.5v3c0 1.1-.9 2-2 2C10.3 18.5 5.5 13.7 5.5 8c0-1.1.9-2 2-2Z" fill="currentColor" />
    </IconBase>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" />
      <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </IconBase>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
    </IconBase>
  );
}
