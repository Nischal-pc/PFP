import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { industries } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "PFP Canada delivers fire protection tailored to commercial, industrial, healthcare, education, hospitality, retail, warehouse, and multi-family residential facilities across Western Canada.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Occupancy files"
        title="Fire protection tailored to your sector"
        description="Every occupancy carries unique code requirements and risks. We build compliance programs around the realities of your industry."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <ul className="grid gap-0 border border-border sm:grid-cols-2">
          {industries.map((industry) => (
            <li
              key={industry.slug}
              className="border-b border-border sm:odd:border-r"
            >
              <Link
                href={`/industries/${industry.slug}`}
                className="group grid h-full grid-rows-[auto_1fr] transition-colors hover:bg-muted/50"
              >
                <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={`${industry.name} building served by PFP Canada`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 flex size-10 items-center justify-center border border-secondary-foreground/20 bg-secondary text-secondary-foreground">
                    <Icon icon={industry.icon} size={18} />
                  </span>
                </div>
                <div className="flex flex-col p-5">
                  <h2 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-foreground group-hover:text-primary">
                    {industry.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {industry.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Open sector file
                    <Icon
                      icon={ArrowRight}
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
