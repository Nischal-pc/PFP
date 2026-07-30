import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MapPinned, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { cities, getCity, company, services } from "@/lib/site-data";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `Fire Protection in ${city.name}`,
    description: `Certified fire protection services in ${city.name}, ${city.province}. ${city.blurb}`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${city.province} coverage`}
        title={`Fire protection in ${city.name}`}
        description={city.blurb}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: city.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Request a Quote
              <Icon icon={ArrowRight} size={16} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="border border-secondary-foreground/20 bg-secondary-foreground/5 shadow-none hover:bg-secondary-foreground/10"
          >
            <a href={company.phoneHref}>
              <Icon icon={Phone} size={16} />
              {company.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div>
          <div className="relative aspect-4/3 overflow-hidden border border-border bg-muted">
            <Image
              src={city.image}
              alt={`Fire protection services in ${city.name}, ${city.province}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
            Neighbourhoods served
          </p>
          <ul className="mt-4 grid gap-0 border border-border sm:grid-cols-2">
            {city.neighbourhoods.map((n) => (
              <li
                key={n}
                className="flex items-center gap-2 border-b border-border px-3 py-3 text-sm sm:odd:border-r"
              >
                <Icon icon={MapPinned} size={14} className="text-primary" />
                {n}
              </li>
            ))}
          </ul>

          <p className="mt-10 font-display text-xs uppercase tracking-[0.2em] text-accent">
            Available services
          </p>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="font-medium text-foreground hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Protect your ${city.name} facility`} />
    </>
  );
}
