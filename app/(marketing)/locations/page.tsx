import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPinned, ArrowRight, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icon'
import { company, cities, provinces, branches } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Locations',
  description:
    'PFP Canada branch locations across Alberta, British Columbia, Saskatchewan, and Manitoba.',
}

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Branch register"
        title="Locations across Western Canada"
        description="Local technicians, regional coverage, and 24/7 emergency response from our headquarters in Calgary."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Locations' }]}
      >
        <Button asChild size="lg">
          <a href={company.phoneHref}>
            <Icon icon={Phone} size={16} />
            {company.phone}
          </a>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="border border-border bg-secondary p-6 text-secondary-foreground md:p-8">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Headquarters</p>
          <h2 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em]">Calgary, Alberta</h2>
          <p className="mt-3 flex items-start gap-2 text-secondary-foreground/80">
            <Icon icon={MapPinned} size={16} className="mt-0.5 text-primary" />
            {company.hqAddress}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {provinces.map((province) => {
            const provinceCities = cities.filter((c) => c.provinceCode === province.code)
            if (!provinceCities.length) return null
            return (
              <div key={province.code}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {province.name}
                </h3>
                <ul className="mt-4 grid gap-0 border border-border sm:grid-cols-2">
                  {provinceCities.map((city) => (
                    <li key={city.slug} className="border-b border-border sm:odd:border-r">
                      <Link
                        href={`/service-areas/${city.slug}`}
                        className="group flex items-center justify-between gap-3 px-4 py-4 hover:bg-muted/60"
                      >
                        <span className="font-display uppercase tracking-[0.08em]">{city.name}</span>
                        <Icon icon={ArrowRight} size={16} className="text-primary opacity-60 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand title="Need a technician near you?" />
    </>
  )
}
