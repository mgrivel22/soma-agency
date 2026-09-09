import { cn } from "@/lib/utils";
import type { ProjectTheme } from "@/lib/projects";

type Density = "desktop" | "mobile";

const themes: Record<
  ProjectTheme,
  {
    brand: string;
    accent: string;
    accentText: string;
    hero: string;
    bar: string;
    company: string;
    headline: string;
    sub: string;
    services: [string, string, string];
  }
> = {
  plumber: {
    brand: "#0b3b4a",
    accent: "#0f766e",
    accentText: "#ffffff",
    hero: "#123844",
    bar: "#082830",
    company: "Martin Plomberie",
    headline: "Dépannage et installation, intervention rapide",
    sub: "Devis clair. Numéro visible. Réponse directe.",
    services: ["Dépannage", "Salle de bain", "Chauffe-eau"],
  },
  electrician: {
    brand: "#1c2433",
    accent: "#c2410c",
    accentText: "#fff7ed",
    hero: "#222c3d",
    bar: "#121820",
    company: "Volt & Co",
    headline: "Installation, mise aux normes et dépannage",
    sub: "Intervention soignée. Devis avant travaux.",
    services: ["Dépannage", "Tableau", "Mise aux normes"],
  },
};

export function MiniSite({
  theme,
  density = "desktop",
}: {
  theme: ProjectTheme;
  density?: Density;
}) {
  const t = themes[theme];
  const compact = density === "mobile";

  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden bg-[#f6f4f0] text-[#1a1a1a] select-none",
        compact ? "text-[7px]" : "text-[9px] sm:text-[10px]",
      )}
      aria-hidden="true"
    >
      <div
        className={cn("flex items-center justify-between", compact ? "px-2 py-1.5" : "px-3 py-2")}
        style={{ background: t.bar, color: "#fff" }}
      >
        <span className="font-semibold tracking-tight">{t.company}</span>
        <span
          className={cn(
            "rounded-full font-semibold",
            compact ? "px-1.5 py-0.5" : "px-2 py-0.5",
          )}
          style={{ background: t.accent, color: t.accentText }}
        >
          Appeler
        </span>
      </div>
      <div
        className={cn("flex flex-1 flex-col", compact ? "gap-1.5 p-2" : "gap-2 p-3")}
        style={{ background: t.hero, color: "#f8fafc" }}
      >
        <p className={cn("font-semibold leading-snug", compact ? "text-[9px]" : "text-[12px] sm:text-[13px]")}>
          {t.headline}
        </p>
        <p className="max-w-[90%] text-white/75">{t.sub}</p>
        <div className="mt-1 flex gap-1">
          <span
            className={cn("rounded font-semibold", compact ? "px-1.5 py-0.5" : "px-2 py-1")}
            style={{ background: t.accent, color: t.accentText }}
          >
            Demander un devis
          </span>
          <span className={cn("rounded bg-white/10", compact ? "px-1.5 py-0.5" : "px-2 py-1")}>
            Nos services
          </span>
        </div>
      </div>
      {!compact ? (
        <div className="grid grid-cols-3 gap-1.5 bg-[#f6f4f0] p-2.5">
          {t.services.map((service) => (
            <div
              key={service}
              className="rounded-md bg-white p-1.5 shadow-sm ring-1 ring-black/5"
            >
              <div
                className="mb-1 h-8 rounded-sm"
                style={{ background: `${t.accent}22` }}
              />
              <p className="font-semibold text-[8px] text-zinc-800">{service}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-1 bg-[#f6f4f0] p-2">
          {t.services.slice(0, 2).map((service) => (
            <div
              key={service}
              className="flex items-center justify-between rounded bg-white px-1.5 py-1 ring-1 ring-black/5"
            >
              <span className="font-semibold">{service}</span>
              <span className="text-zinc-400">→</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function LaptopFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-[18px] bg-[#2a3540] p-[10px] shadow-[0_24px_50px_-28px_rgba(22,35,46,0.55)] ring-1 ring-black/20">
        <div className="relative overflow-hidden rounded-[10px] bg-anchor">
          <div className="flex items-center gap-1.5 border-b border-white/8 bg-[#1e2c38] px-3 py-1.5">
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="mx-auto h-3 w-1/2 max-w-[180px] rounded-full bg-white/10" />
          </div>
          <div className="aspect-[16/10]">{children}</div>
        </div>
      </div>
      <div className="relative mx-auto h-3 w-[28%] rounded-b-md bg-[#2a3540]">
        <div className="absolute inset-x-6 -bottom-1 h-1 rounded-full bg-anchor" />
      </div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-[148px] overflow-hidden rounded-[1.7rem] bg-anchor p-[7px] shadow-[0_20px_40px_-20px_rgba(22,35,46,0.7)] ring-1 ring-white/10",
        className,
      )}
    >
      <div className="absolute top-2 left-1/2 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-[#0e1620]" />
      <div className="aspect-[9/19] overflow-hidden rounded-[1.3rem] bg-zinc-100">
        {children}
      </div>
    </div>
  );
}

export function HeroDevices() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <LaptopFrame>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/projets/verdure-design/desktop.jpg"
          alt="Aperçu d’un site conçu par Soma Digital pour un paysagiste"
          className="h-full w-full object-cover object-top"
          fetchPriority="high"
        />
      </LaptopFrame>
      <div className="pointer-events-none absolute -right-1 -bottom-8 hidden sm:block md:-right-4 lg:-right-2 xl:-right-6">
        <PhoneFrame className="w-[118px] md:w-[136px] lg:w-[148px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projets/verdure-design/mobile.jpg"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </PhoneFrame>
      </div>
    </div>
  );
}

export function ProjectMockup({ theme }: { theme: ProjectTheme }) {
  return (
    <div className="relative overflow-hidden bg-muted">
      <LaptopFrame className="p-4 pb-8 sm:p-5">
        <MiniSite theme={theme} density="desktop" />
      </LaptopFrame>
      <div className="pointer-events-none absolute right-3 bottom-2 hidden sm:block">
        <PhoneFrame className="w-[86px] shadow-xl">
          <MiniSite theme={theme} density="mobile" />
        </PhoneFrame>
      </div>
    </div>
  );
}

export function ProjectImagePreview({
  desktop,
  mobile,
  alt,
}: {
  desktop: string;
  mobile: string;
  alt: string;
}) {
  return (
    <div className="relative overflow-hidden bg-muted">
      <LaptopFrame className="p-4 pb-8 sm:p-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={desktop}
          alt={alt}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </LaptopFrame>
      <div className="pointer-events-none absolute right-3 bottom-2 hidden sm:block">
        <PhoneFrame className="w-[86px] shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={mobile}
            alt=""
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </PhoneFrame>
      </div>
    </div>
  );
}
