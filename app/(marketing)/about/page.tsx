import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { company, certifications, stats } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Precision Fire Protection Canada Ltd. — certified fire protection services across Western Canada since 2004.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company file"
        title="Precision Fire Protection Canada"
        description={`${company.tagline} Headquartered in Calgary with branches across four provinces.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
              Mandate
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em]">
              One partner for every life-safety system
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {company.legalName} helps building owners and facility managers
              keep alarms, sprinklers, extinguishers, emergency lighting, and
              kitchen suppression inspection-ready — with digital reporting that
              satisfies Authorities Having Jurisdiction.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 font-display uppercase tracking-widest"
            >
              <Link href="/contact">
                Work with us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-6">
                <p className="font-display text-3xl font-semibold uppercase text-primary">
                  {s.value}
                </p>
                <p className="mt-2 font-display text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MISSION & VISION DOSSIER */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative border border-border bg-card p-6 md:p-8">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Official Mission
            </span>
            <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground">
              Mitigating Hazard Risk
            </h3>
            <p className="mt-4 border-l-2 border-primary pl-4 text-base italic leading-relaxed text-foreground">
              "{company.mission}"
            </p>
          </div>

          <div className="relative border border-border bg-card p-6 md:p-8">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Official Vision
            </span>
            <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-[0.04em] text-foreground">
              Integrated Protection Solutions
            </h3>
            <p className="mt-4 border-l-2 border-primary pl-4 text-base italic leading-relaxed text-foreground">
              "{company.vision}"
            </p>
          </div>
        </div>

        <div className="mt-16 border border-border bg-muted/50 p-6 md:p-8">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
            Credentials
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="border border-border bg-card px-4 py-3 text-sm"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
