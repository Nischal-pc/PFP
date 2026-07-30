import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { TriangleAlert } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ServiceCard } from '@/components/service-card'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { industries, getIndustry, getService } from '@/lib/site-data'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}
  return {
    title: `${industry.name} Fire Protection`,
    description: `${industry.overview.slice(0, 155)}`,
  }
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  const recommended = industry.recommendedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))

  return (
    <>
      <PageHero
        eyebrow="Occupancy file"
        title={`${industry.name} Fire Protection`}
        description={industry.short}
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: industry.name },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
            <Image
              src={industry.image || '/placeholder.svg'}
              alt={`${industry.name} facility served by PFP Canada`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Sector brief</p>
            <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-foreground text-balance">
              Protecting {industry.name.toLowerCase()} facilities
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{industry.overview}</p>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Challenges we solve
            </h3>
            <ul className="mt-4 border border-border">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 border-b border-border px-4 py-3.5 last:border-0">
                  <Icon icon={TriangleAlert} size={16} className="mt-0.5 text-primary" />
                  <span className="text-foreground">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-foreground text-balance">
            Recommended services for {industry.name.toLowerCase()}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            A typical protection program for this sector combines the following systems.
          </p>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Protect your ${industry.name.toLowerCase()} facility`} />
    </>
  )
}
