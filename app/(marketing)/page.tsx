import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  HardHat,
  FileBadge,
  MapPinned,
  CircleCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";
import { Icon } from "@/components/icon";
import {
  company,
  services,
  industries,
  cities,
  stats,
  certifications,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[min(92vh,52rem)] overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero-square.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-pfp-plate object-cover object-[center_28%] opacity-40"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/90 to-secondary/50"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-linear-to-t from-secondary via-transparent to-secondary/50"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto flex min-h-[min(92vh,52rem)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 md:justify-center md:pb-24 md:pt-24">
          <div className="relative py-6 pl-6">
            <CornerMarks className="text-accent/70" />
            <p className="animate-pfp-stamp font-display text-xs uppercase tracking-[0.24em] text-accent">
              Precision Fire Protection · Western Canada · Est.{" "}
              {company.founded}
            </p>
            <p className="animate-pfp-stamp mt-3 font-display text-5xl font-bold uppercase tracking-[0.08em] text-secondary-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              PFP<span className="text-primary">Canada</span>
            </p>
            <h1 className="animate-pfp-stamp-delay mt-4 max-w-3xl text-balance font-display text-2xl font-semibold uppercase leading-[1.1] tracking-[0.04em] text-secondary-foreground/90 sm:text-3xl md:text-4xl lg:text-5xl">
              Fire protection you can trust.
            </h1>
            <p className="animate-pfp-stamp-delay-2 mt-5 max-w-xl text-pretty text-lg leading-relaxed text-secondary-foreground/80 md:text-xl">
              Certified inspection, testing, and installation — keeping
              commercial and industrial buildings safe and code-compliant across
              Western Canada.
            </p>
          </div>

          <div className="animate-pfp-stamp-delay-2 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Free Quote
                <Icon icon={ArrowRight} size={16} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border border-secondary-foreground/25 bg-secondary-foreground/5 shadow-none hover:bg-secondary-foreground/10"
            >
              <a href={company.phoneHref}>
                <Icon icon={Phone} size={16} />
                {company.phone}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
            >
              <Link href="/careers">
                <Icon icon={Users} size={16} />
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* STATS — monospace values read as calibrated data, not marketing counters */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`border-border px-5 py-9 sm:px-6 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t sm:border-t-0" : ""} sm:border-l sm:first:border-l-0`}
            >
              <p className="font-mono text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 border-t border-dotted border-border pt-2 font-display text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMOTION DOSSIER PLATE — LIFE-SAFETY COMPLIANCE INDEX */}
      <section className="relative border-y border-border bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative border border-border bg-card p-6 md:p-10 shadow-xs">
            <CornerMarks className="text-accent/80" inset />

            {/* Header Block */}
            <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-center">
              <div>
                <span className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                  Official Document Plate · AHJ Compliance Index
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold uppercase tracking-[0.04em] text-foreground sm:text-3xl">
                  Life-Safety System Compliance Index
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Integrated code standards, inspection schedules, and emergency
                  protocols for Western Canada facilities.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <span className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  2026 AHJ Audit Verified
                </span>
              </div>
            </div>

            {/* Content Split: Image Plate + Technical Standards breakdown */}
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Technical Document Presentation Plate (Crisp, No Blending Glitch) */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden border border-border bg-white p-3 sm:p-5 shadow-sm rounded-[2px]">
                  <div
                    className="dossier-grid absolute inset-0 opacity-15 pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-center justify-center bg-white p-2">
                    <Image
                      src="/promotion.webp"
                      alt="PFP Canada Life-Safety System Compliance Index & Technical Service Documentation"
                      width={1000}
                      height={600}
                      priority
                      quality={95}
                      style={{ objectFit: "contain" }}
                      className="h-auto max-h-130 w-full rounded-[1px] shadow-xs"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-dashed border-border pt-2.5 text-[11px] font-display uppercase tracking-[0.14em] text-muted-foreground">
                    <span>Plate Reference: PFP-DOC-2026</span>
                    <span className="hidden sm:inline">
                      Certified Technical Specification
                    </span>
                    <span>CAN/ULC &amp; NFPA Approved</span>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Trust Compliance Specifications */}
              <div className="lg:col-span-5 space-y-4">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Compliance Directives
                </p>
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground">
                  Audit-Ready Life Safety Management
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our comprehensive compliance framework guarantees your
                  building passes municipal fire marshal and insurance
                  inspections without friction.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      label: "CAN/ULC-S536 & S537 Certified",
                      desc: "Annual fire alarm inspection, testing, and new system verification.",
                    },
                    {
                      label: "NFPA 10 & 25 Standards",
                      desc: "Quarterly sprinkler flow testing and portable extinguisher maintenance.",
                    },
                    {
                      label: "24-Hour Digital Report SLA",
                      desc: "Audit reports uploaded to your customer portal within 24 hours of site work.",
                    },
                    {
                      label: "24/7 Emergency Dispatch",
                      desc: "Dedicated line for urgent system deficiencies and false alarm resets.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 border border-border bg-background p-3.5 rounded-[1px]"
                    >
                      <span className="font-mono text-xs font-bold text-primary mt-0.5">
                        0{idx + 1}
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-foreground">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-dotted border-border pt-4 font-display text-xs uppercase tracking-[0.14em] text-muted-foreground">
              <span>Precision Fire Protection Canada Ltd.</span>
              <span className="text-primary font-semibold">
                100% AHJ Code Audit Guarantee
              </span>
              <span>Western Canada Service Network</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-muted/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <TrustItem
            icon={HardHat}
            title="Certified Technicians"
            desc="CFAA, ASTTBC & Red Seal qualified"
          />
          <TrustItem
            icon={FileBadge}
            title="Digital Compliance Records"
            desc="Inspection reports & tags online"
          />
          <TrustItem
            icon={ShieldCheck}
            title="Single-Source Partner"
            desc="Every life-safety system, one team"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          stamp="Service index"
          title="Complete fire protection, start to finish"
          description="From design and installation to code-mandated inspection and testing, we cover every life-safety system in your building."
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View all services
              <Icon icon={ArrowRight} size={16} />
            </Link>
          </Button>
        </div>
      </section>

      {/* INDUSTRIES — same hairline-seam system as services, not a bordered list */}
      <section className="border-y border-border bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            stamp="Occupancy files"
            title="Purpose-built protection for your sector"
            description="Every occupancy carries unique code requirements. We tailor programs to the risks of your industry."
          />
          <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2">
            {industries.map((industry, i) => (
              <li key={industry.slug} className="bg-card">
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full items-center gap-4 px-4 py-5 transition-colors hover:bg-muted/70 md:px-6"
                >
                  <span className="font-mono text-xs text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-11 shrink-0 items-center justify-center border border-border bg-secondary text-secondary-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon icon={industry.icon} size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-foreground group-hover:text-primary">
                      {industry.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {industry.short}
                    </p>
                  </div>
                  <Icon
                    icon={ArrowRight}
                    size={16}
                    className="shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY US + CERTIFICATIONS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              stamp="Why this partner"
              title="The compliance partner Western Canada relies on"
            />
            <ul className="mt-8 grid gap-px bg-border">
              {[
                {
                  title: "One partner for every system",
                  desc: "Consolidate alarms, sprinklers, extinguishers, lighting, and suppression under a single managed program.",
                },
                {
                  title: "Never miss a code deadline",
                  desc: "Automated scheduling and reminders keep every inspection on time and every AHJ satisfied.",
                },
                {
                  title: "Transparent digital reporting",
                  desc: "Access inspection reports, tags, and deficiency quotes anytime through your customer portal.",
                },
                {
                  title: "Local technicians, fast response",
                  desc: "Branches across four provinces mean shorter travel times and 24/7 emergency availability.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4 bg-card px-4 py-5">
                  <Icon
                    icon={CircleCheck}
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <div>
                    <h3 className="font-display text-base font-semibold uppercase tracking-[0.04em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* signature repeated: same precision corner marks, no external image */}
          <aside className="relative border border-secondary-foreground/15 bg-secondary p-8 text-secondary-foreground md:p-10">
            <CornerMarks className="text-accent/70" inset />
            <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
              Stamped credentials
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em]">
              Certifications &amp; Accreditations
            </h3>
            <p className="mt-2 text-secondary-foreground/70">
              Our work meets the highest national and provincial standards.
            </p>
            <ul className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px overflow-hidden border border-secondary-foreground/15 bg-secondary-foreground/15">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-2.5 bg-secondary px-3 py-3 text-sm"
                >
                  <Icon
                    icon={ShieldCheck}
                    size={16}
                    className="shrink-0 text-primary"
                  />
                  {cert}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* CLIENT TRUST & CASE VERIFICATION */}
      <section className="border-t border-border bg-card py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            stamp="Verified audit records"
            title="Trusted by Western Canada's premier facilities"
            description="See how leading commercial, healthcare, and industrial building operators achieve 100% AHJ compliance with PFP Canada."
          />
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-3">
            {[
              {
                quote:
                  "Zero audit deficiencies in 5 consecutive years across our 12 healthcare facilities. PFP Canada handles our automated scheduling flawlessly.",
                author: "Director of Facilities",
                org: "Alberta Health Services Network",
                stat: "12 Care Centers",
              },
              {
                quote:
                  "When our parkade deluge line tripped during a winter freeze, their 24/7 emergency dispatch had technicians on site within 35 minutes.",
                author: "Senior Operations Manager",
                org: "Calgary Commercial High-Rise",
                stat: "< 45 Min Emergency SLA",
              },
              {
                quote:
                  "Consolidated 45 multi-tenant properties onto a single digital portal. Insurance renewals and fire marshal reviews take minutes now.",
                author: "VP Property Management",
                org: "Pacific Northwest Real Estate Group",
                stat: "45 Properties",
              },
            ].map((proof, i) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-background p-6 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="font-mono text-xs font-semibold text-primary">
                      {proof.stat}
                    </span>
                    <span className="font-display text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                      Verified Client
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground italic">
                    "{proof.quote}"
                  </p>
                </div>
                <div className="mt-6 border-t border-dotted border-border pt-4">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-foreground">
                    {proof.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{proof.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="border-t border-border bg-muted/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            stamp="Coverage map"
            title="Serving cities across Western Canada"
            description="From Vancouver Island to Manitoba, our branches keep buildings protected across four provinces."
          />
          <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px overflow-hidden border border-border bg-border">
            {cities.map((city) => (
              <li key={city.slug} className="bg-card">
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="group relative flex items-center gap-3 px-4 py-4 transition-colors hover:bg-muted/70"
                >
                  <span className="absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-primary transition-transform duration-200 group-hover:scale-y-100" />
                  <Icon
                    icon={MapPinned}
                    size={16}
                    className="shrink-0 text-primary"
                  />
                  <span className="font-display text-sm font-medium uppercase tracking-[0.08em] text-foreground group-hover:text-primary">
                    {city.name}, {city.provinceCode}
                  </span>
                  <Icon
                    icon={ArrowRight}
                    size={14}
                    className="ml-auto shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline">
              <Link href="/service-areas">
                See all service areas
                <Icon icon={ArrowRight} size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-5 md:px-6">
      <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-background text-primary">
        <Icon icon={icon} size={18} />
      </span>
      <div>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
          {title}
        </p>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

/**
 * Precision reticle corner marks — the page's one signature device.
 * Renders with plain borders (no image file, no SVG asset), so it can
 * never fail to load. Ties directly to "Precision Fire Protection."
 */
function CornerMarks({
  className = "",
  inset = false,
}: {
  className?: string;
  inset?: boolean;
}) {
  const pos = inset ? "0" : "-1px";
  return (
    <span aria-hidden="true" className={className}>
      <span
        className="absolute size-3 border-l border-t border-current"
        style={{ top: pos, left: pos }}
      />
      <span
        className="absolute size-3 border-r border-t border-current"
        style={{ top: pos, right: pos }}
      />
      <span
        className="absolute size-3 border-b border-l border-current"
        style={{ bottom: pos, left: pos }}
      />
      <span
        className="absolute size-3 border-b border-r border-current"
        style={{ bottom: pos, right: pos }}
      />
    </span>
  );
}
