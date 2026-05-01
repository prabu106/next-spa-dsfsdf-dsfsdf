import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import Navbar from "../components/Navbar";
import PaymentButton from "./PaymentButton";

const tabs = [
  "Project Overview",
  "Features",
  "Technologies Used",
  "Demo",
  "Documents",
  "Reviews (12)",
];

const stats = [
  { label: "Level", value: "Final Year", icon: StudentIcon },
  { label: "Technology", value: "Arduino, IoT", icon: NetworkIcon },
  { label: "Duration", value: "2 - 3 Months", icon: ClockIcon },
  { label: "Downloads", value: "245+", icon: DownloadIcon },
];

const features = [
  "Control appliances remotely using mobile app",
  "Voice control support (Google Assistant)",
  "Real-time status monitoring",
  "Automatic operation based on sensors",
  "Energy consumption monitoring",
  "Secure and easy to use",
  "Cost-effective solution",
  "Scalable and customizable",
];

const technologies = [
  { name: "Arduino", icon: InfinityIcon },
  { name: "ESP8266", icon: SignalIcon },
  { name: "IoT", icon: BracesIcon },
  { name: "Blynk App", icon: AppIcon },
  { name: "Sensors", icon: SensorIcon },
  { name: "Relay Module", icon: ModuleIcon },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    alt: "Arduino circuit board wiring",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    alt: "Smart living room interior",
  },
  {
    src: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
    alt: "Smart home phone control",
  },
  {
    src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=900&q=80",
    alt: "Relay module hardware",
  },
  { src: "/project-1.png", alt: "Modern smart home exterior" },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Automation dashboard",
  },
];

const documents = [
  { title: "Project Report", type: "PDF File", color: "bg-[#ff3737]", label: "PDF" },
  { title: "Source Code", type: "ZIP File", color: "bg-[#5d4beb]", label: "</>" },
  { title: "Circuit Diagram", type: "JPG File", color: "bg-[#25bd72]", label: "IMG" },
  { title: "Presentation", type: "PPT File", color: "bg-[#ff5a2a]", label: "PPT" },
];

const ratingRows = [
  { stars: 5, count: 10, width: "w-[86%]" },
  { stars: 4, count: 2, width: "w-[22%]" },
  { stars: 3, count: 0, width: "w-[2%]" },
  { stars: 2, count: 0, width: "w-[2%]" },
  { stars: 1, count: 0, width: "w-[2%]" },
];

const inclusions = [
  "Complete Project Report",
  "Source Code (Fully Working)",
  "Circuit Diagram",
  "Presentation Slides",
  "Installation Guide",
  "1 Month Free Support",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Resources", href: "/service" },
  { label: "Contact Us", href: "/contact" },
];

export default function ViewProjectPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-[#142852]">
      <Header />
      <section className="w-full pb-7">
        <HeroCard />
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid items-start gap-6 bg-white lg:grid-cols-[1fr_330px]">
            <article className="min-w-0 px-5 py-5 lg:px-6 lg:py-6">
              <TabBar />
              <ProjectOverview />
              <KeyFeatures />
              <Technologies />
              <ProjectImages />
              <ProjectDocuments />
              <Reviews />
            </article>
            <aside className="space-y-7 border-t border-[#dce4f1] px-5 py-5 lg:border-l lg:border-t-0 lg:px-5 lg:py-8">
              <PriceCard />
              <CustomizationCard />
              <ShareCard />
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-[linear-gradient(180deg,#174c99_0%,#0e3f87_100%)] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <CubeLogo className="h-9 w-9" />
          </div>
          <div className="text-xl font-bold tracking-tight sm:text-2xl">
            <span className="text-white">Student </span>
            <span className="text-[#f6a028]">Project Centre</span>
          </div>
        </Link>

        <div className="flex items-center gap-6 lg:gap-8">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

function HeroCard() {
  return (
    <section className="relative overflow-hidden border-b border-[#dce4f1] bg-white shadow-[0_20px_50px_rgba(21,51,101,0.10)]">
      <div className="absolute inset-0">
        <Image
          src="/project-1.png"
          alt="Smart home exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.96)_34%,rgba(255,255,255,0.32)_72%,rgba(255,255,255,0.05)_100%)]" />
      </div>
      <div className="relative grid min-h-[320px] gap-8 px-6 py-8 lg:grid-cols-[1fr_290px] lg:px-8 lg:py-9">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold leading-tight text-[#08266c] sm:text-4xl">
            Smart Home Automation System
          </h1>
          <div className="mt-5 flex flex-wrap gap-3">
            {["IoT", "Arduino", "Automation", "Sensor Based"].map((tag, index) => (
              <span
                key={tag}
                className={`rounded-md px-4 py-2 text-xs font-semibold ${index === 0 ? "bg-[#075ed9] text-white" : "bg-[#eaf2ff] text-[#075ed9]"}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#334261]">
            A smart home automation system that allows users to control home appliances
            automatically using IoT and a mobile application.
          </p>
          <div className="mt-10 grid gap-4 rounded-lg border border-[#dce4f1] bg-white/92 p-4 shadow-[0_14px_34px_rgba(12,42,90,0.10)] sm:grid-cols-2 lg:max-w-2xl lg:grid-cols-4">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <PhoneMockup />
      </div>
    </section>
  );
}

function StatItem({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-9 w-9 text-[#075ed9]" />
      <div>
        <p className="text-xs text-[#6e7b94]">{label}</p>
        <p className="mt-1 text-sm font-bold text-[#09245e]">{value}</p>
      </div>
    </div>
  );
}

function PhoneMockup() {
  const controls = [
    ["Light", "Off", BulbIcon],
    ["Fan", "Off", FanIcon],
    ["TV", "Off", MonitorIcon],
    ["AC", "Off", AirIcon],
    ["Curtain", "Off", CurtainIcon],
    ["Door", "Off", LockIcon],
  ];

  return (
    <div className="hidden justify-self-end lg:block">
      <div className="relative h-[360px] w-[190px] rounded-[34px] border-[7px] border-[#071325] bg-[#091424] p-4 shadow-[0_18px_50px_rgba(4,18,45,0.45)]">
        <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="mt-5 flex items-center justify-between text-[9px] font-bold text-white">
          <span>9:01</span>
          <span>++</span>
        </div>
        <h2 className="mt-4 text-center text-xs font-bold text-white">Smart Home</h2>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {controls.map(([name, state, Icon]) => (
            <div key={name as string} className="rounded-lg bg-white/9 p-3 text-center text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <Icon className="mx-auto h-7 w-7" />
              <p className="mt-2 text-[10px] font-semibold">{name as string}</p>
              <p className="text-[8px] text-white/55">{state as string}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-5 right-5 flex justify-between text-[8px] text-white/80">
          <span>Demo</span>
          <span>Control</span>
          <span>Report</span>
        </div>
      </div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="mb-8 overflow-x-auto rounded-lg border border-[#dce4f1] bg-white">
      <div className="flex min-w-max">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`border-r border-[#dce4f1] px-5 py-4 text-sm font-semibold ${index === 0 ? "bg-[#075ed9] text-white" : "text-[#09245e] hover:bg-[#f5f9ff]"}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectOverview() {
  return (
    <section>
      <SectionTitle title="Project Overview" />
      <p className="mt-4 max-w-4xl text-sm leading-7 text-[#24344f]">
        The Smart Home Automation System is designed to make homes smarter and more
        efficient. It allows users to control and monitor home appliances like lights,
        fans, AC, doors, and more using a mobile app or voice commands. The system is
        built using Arduino, IoT modules, and sensors.
      </p>
    </section>
  );
}

function KeyFeatures() {
  return (
    <section className="mt-8">
      <SectionTitle title="Key Features" />
      <div className="mt-4 grid gap-x-10 gap-y-3 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-[#24344f]">
            <CheckCircleIcon className="h-4 w-4 shrink-0 text-[#27a36d]" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  return (
    <section className="mt-8">
      <SectionTitle title="Technologies Used" />
      <div className="mt-4 flex flex-wrap gap-4">
        {technologies.map(({ name, icon: Icon }) => (
          <div key={name} className="flex items-center gap-3 rounded-lg border border-[#dce4f1] bg-white px-4 py-3 text-sm font-semibold text-[#09245e] shadow-[0_8px_18px_rgba(20,51,101,0.06)]">
            <Icon className="h-5 w-5 text-[#075ed9]" />
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectImages() {
  return (
    <section className="mt-8">
      <SectionTitle title="Project Images" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {gallery.map((image) => (
          <div key={image.alt} className="relative aspect-[16/9] overflow-hidden rounded-md border border-[#cfd9e9] bg-[#edf3fb]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectDocuments() {
  return (
    <section className="mt-8">
      <SectionTitle title="Project Documents" />
      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {documents.map((doc) => (
          <div key={doc.title} className="flex items-center justify-between rounded-lg border border-[#dce4f1] bg-white px-4 py-4 shadow-[0_8px_18px_rgba(20,51,101,0.05)]">
            <div className="flex items-center gap-3">
              <span className={`grid h-9 w-9 place-items-center rounded-md text-[10px] font-bold text-white ${doc.color}`}>
                {doc.label}
              </span>
              <div>
                <p className="text-sm font-semibold text-[#09245e]">{doc.title}</p>
                <p className="text-xs text-[#66748d]">{doc.type}</p>
              </div>
            </div>
            <DownloadIcon className="h-5 w-5 text-[#075ed9]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="mt-8 border-t border-[#dce4f1] pt-7">
      <SectionTitle title="Reviews & Ratings" />
      <div className="mt-5 grid gap-6 lg:grid-cols-[180px_1fr_1.35fr]">
        <div>
          <p className="text-5xl font-bold text-[#09245e]">4.8</p>
          <p className="mt-2 text-xl text-[#ffa000]">★★★★★</p>
          <p className="mt-2 text-xs text-[#30405e]">Based on 12 reviews</p>
        </div>
        <div className="space-y-2">
          {ratingRows.map((row) => (
            <div key={row.stars} className="grid grid-cols-[18px_1fr_20px] items-center gap-2 text-xs text-[#31415d]">
              <span>{row.stars}</span>
              <div className="h-2 rounded-full bg-[#e7edf6]">
                <div className={`h-2 rounded-full bg-[#ffa000] ${row.width}`} />
              </div>
              <span>{row.count}</span>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <ReviewItem name="Rahul Kumar" date="20 May 2024" text="Great project! Well explained and working perfectly." />
          <ReviewItem name="Sneha Patel" date="18 May 2024" text="Very useful for final year project. Got good support from team." />
        </div>
      </div>
      <div className="mt-7 text-center">
        <button className="w-full max-w-sm rounded-md border border-[#9cb2d2] bg-white px-6 py-3 text-sm font-bold text-[#09245e]">
          View All Reviews
        </button>
      </div>
    </section>
  );
}

function ReviewItem({ name, date, text }: { name: string; date: string; text: string }) {
  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#dce8f8] text-xs font-bold text-[#075ed9]">
            {name.charAt(0)}
          </span>
          <p className="text-sm font-bold text-[#09245e]">{name}</p>
          <span className="rounded-full bg-[#dff5e9] px-2 py-1 text-[10px] font-bold text-[#1d925f]">
            Verified Buyer
          </span>
        </div>
        <p className="mt-2 text-xs leading-6 text-[#33415d]">{text}</p>
      </div>
      <div className="text-left sm:text-right">
        <p className="text-lg leading-none text-[#ffa000]">★★★★★</p>
        <p className="mt-2 text-xs text-[#8a96aa]">{date}</p>
      </div>
    </div>
  );
}

function PriceCard() {
  return (
    <div className="rounded-lg border border-[#dce4f1] bg-white p-6 shadow-[0_12px_28px_rgba(20,51,101,0.08)]">
      <h2 className="text-xl font-bold text-[#09245e]">Project Price</h2>
      <p className="mt-4 text-4xl font-bold text-[#ff8a00]">₹4,999</p>
      <p className="mt-3 text-sm text-[#50607c]">(One-time payment)</p>
      <div className="mt-6 space-y-4">
        {inclusions.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-[#24344f]">
            <CheckCircleIcon className="h-4 w-4 shrink-0 text-[#27a36d]" />
            {item}
          </div>
        ))}
      </div>
      <PaymentButton />

      
    </div>
  );
}

function CustomizationCard() {
  return (
    <div className="rounded-lg border border-[#dce4f1] bg-white p-6 shadow-[0_12px_28px_rgba(20,51,101,0.06)]">
      <h2 className="text-xl font-bold text-[#09245e]">Need Customization?</h2>
      <p className="mt-4 text-sm leading-7 text-[#31415d]">
        We can customize this project as per your requirements.
      </p>
      <button className="mt-6 w-full rounded-md border border-[#8fa7ca] bg-white px-5 py-3 text-sm font-bold text-[#09245e]">
        Request Custom Project
      </button>
    </div>
  );
}

function ShareCard() {
  return (
    <div className="rounded-lg border border-[#dce4f1] bg-white p-6 shadow-[0_12px_28px_rgba(20,51,101,0.06)]">
      <h2 className="text-xl font-bold text-[#09245e]">Share Project</h2>
      <div className="mt-5 flex flex-wrap gap-4">
        <SocialIcon label="f" className="bg-[#1257b8]" />
        <SocialIcon label="t" className="bg-[#1da1f2]" />
        <SocialIcon label="w" className="bg-[#18b75b]" />
        <SocialIcon label="in" className="bg-[#1575af]" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#073471_0%,#062b62_100%)] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <CubeLogo className="h-9 w-9" />
              <div className="text-lg font-bold">
                <span>Student </span>
                <span className="text-[#ff9d13]">Project Centre</span>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/88">
              Empowering students with innovative projects, resources and expert guidance
              to build a better future.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon label="f" className="bg-white/15" />
              <SocialIcon label="t" className="bg-white/15" />
              <SocialIcon label="ig" className="bg-white/15" />
              <SocialIcon label="in" className="bg-white/15" />
            </div>
          </div>
          <FooterColumn title="Quick Links" items={quickLinks.map((link) => link.label)} />
          <FooterColumn title="Categories" items={["Java Projects", "Python Projects", "IoT Projects", "AI & ML Projects", "Web Development"]} />
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-5 space-y-4 text-sm leading-6 text-white/90">
              <p>+91 12345 67890</p>
              <p>info@studentprojectcentre.com</p>
              <p>123, Innovation Street, Tech City, India - 600001</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-6 text-xs text-white/78 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Student Project Centre. All rights reserved.</p>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="mt-5 space-y-3 text-sm text-white/90">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-xl font-bold text-[#09245e]">{title}</h2>;
}

function SocialIcon({ label, className }: { label: string; className: string }) {
  return (
    <span className={`grid h-9 w-9 place-items-center rounded-md text-sm font-bold uppercase text-white ${className}`}>
      {label}
    </span>
  );
}

function CubeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path d="M32 5 53 16.5 32 28 11 16.5 32 5Z" fill="#F7B13A" />
      <path d="M11 16.5 32 28v23L11 39.5v-23Z" fill="#8FB2E6" />
      <path d="M53 16.5 32 28v23l21-11.5v-23Z" fill="#F08A1C" />
      <path d="M32 28 22.5 22.8v22.9l9.5 5.3V28Z" fill="#C8DCF6" />
      <path d="M32 28 41.5 22.8v22.9L32 51V28Z" fill="#FFD38B" />
      <path d="M32 5 53 16.5 32 28 11 16.5 32 5Zm0 0v23m-21-11.5 21 11.5 21-11.5" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 20 20" fill="none" className={className}><circle cx="10" cy="10" r="8" fill="currentColor" /><path d="m6.5 10 2.2 2.2 4.8-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function StudentIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><path d="M16 4 4 10l12 6 12-6-12-6Z" stroke="currentColor" strokeWidth="2" /><path d="M9 14v6c0 2.8 3.1 5 7 5s7-2.2 7-5v-6" stroke="currentColor" strokeWidth="2" /><path d="M7 24h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function NetworkIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" /><circle cx="7" cy="10" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="25" cy="10" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="7" cy="23" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="25" cy="23" r="4" stroke="currentColor" strokeWidth="2" /><path d="m10.5 12 3 2m8-2-3 2m-8.5 9 4-4m8.5 4-4-4" stroke="currentColor" strokeWidth="2" /></svg>;
}

function ClockIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" /><path d="M16 9v8l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function DownloadIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><path d="M16 4v15m0 0 6-6m-6 6-6-6M6 22v4h20v-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function BulbIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><path d="M11 14a5 5 0 1 1 10 0c0 2-1 3.2-2.2 4.5-.8.9-1.3 1.7-1.3 3h-3c0-1.3-.5-2.1-1.3-3C12 17.2 11 16 11 14Z" stroke="currentColor" strokeWidth="2" /><path d="M14 25h4M15 28h2M16 2v4M5 14H2m28 0h-3M7.5 5.5l2.1 2.1m14.9-2.1-2.1 2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function FanIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth="2" /><path d="M16 13c-2-6 1-9 4-8 3 1 2 7-1 9M18.5 17.5c6 2 7 6 4.8 8.2-2.2 2.2-7-1.8-6.9-5.2M13.5 17.5c-6 2-8-1-7-4 1-3 7-2 9 1" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
}

function MonitorIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><rect x="6" y="8" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="2" /><path d="M12 25h8m-4-4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function AirIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><rect x="5" y="8" width="22" height="8" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M9 20h14M11 24h10M10 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function CurtainIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><path d="M7 6h18v20H7V6Z" stroke="currentColor" strokeWidth="2" /><path d="M16 6v20M10 9c2 4 2 9 0 14m12-14c-2 4-2 9 0 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function LockIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 32 32" fill="none" className={className}><rect x="8" y="14" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M12 14v-4a4 4 0 0 1 8 0v4" stroke="currentColor" strokeWidth="2" /><path d="M16 19v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function InfinityIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><path d="M8 8c-3 0-5 2-5 4s2 4 5 4c2.5 0 5.5-8 8-8 3 0 5 2 5 4s-2 4-5 4c-2.5 0-5.5-8-8-8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function SignalIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><path d="M12 18h.01M8.5 14.5a5 5 0 0 1 7 0M5 11a10 10 0 0 1 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function BracesIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><path d="M8 5c-2 0-3 1-3 3v1c0 1-.7 2-2 2 1.3 0 2 1 2 2v3c0 2 1 3 3 3M16 5c2 0 3 1 3 3v1c0 1 .7 2 2 2-1.3 0-2 1-2 2v3c0 2-1 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function AppIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><rect x="5" y="4" width="14" height="16" rx="2" fill="currentColor" /><path d="M9 9h6M9 13h4" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function SensorIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><path d="M7 4v8a5 5 0 0 0 10 0V4M10 4v7a2 2 0 0 0 4 0V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function ModuleIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M8 9h8M8 13h4m-7-8V2m5 3V2m5 3V2m5 3V2M5 19v3m5-3v3m5-3v3m5-3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

function ShieldIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" className={className}><path d="M12 3 5 6v5c0 4.5 2.8 8.4 7 10 4.2-1.6 7-5.5 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
