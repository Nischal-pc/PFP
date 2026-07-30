import type { Metadata } from "next";
import Link from "next/link";
import { MapPinned, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { cities, provinces } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "PFP Canada fire protection service areas across Alberta, British Columbia, Saskatchewan, and Manitoba.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage index"
        title="Service areas across Western Canada"
        description="From Vancouver Island to Manitoba, our branches keep commercial and industrial buildings protected."
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        {provinces.map((province, provinceIdx) => {
          const provinceCities = cities.filter(
            (c) => c.provinceCode === province.code,
          );
          if (!provinceCities.length) return null;

          return (
            <div key={province.code} className="mb-14 last:mb-0">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xs font-semibold text-primary/50">
                  {String(provinceIdx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {province.name}
                </h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">
                  {provinceCities.length}{" "}
                  {provinceCities.length === 1 ? "branch" : "branches"}
                </span>
              </div>

              <ul className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px overflow-hidden rounded-sm border border-border bg-border">
                {provinceCities.map((city) => (
                  <li key={city.slug} className="bg-background">
                    <Link
                      href={`/service-areas/${city.slug}`}
                      className="group relative flex h-full items-start gap-3 px-5 py-6 transition-colors duration-200 hover:bg-muted/60"
                    >
                      <span className="absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-primary transition-transform duration-200 group-hover:scale-y-100" />
                      <Icon
                        icon={MapPinned}
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-display font-semibold uppercase tracking-[0.06em] transition-colors group-hover:text-primary">
                          {city.name}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                          {city.blurb}
                        </p>
                      </div>
                      <Icon
                        icon={ArrowRight}
                        size={16}
                        className="mt-1 shrink-0 opacity-40 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <CtaBand />
    </>
  );
}
