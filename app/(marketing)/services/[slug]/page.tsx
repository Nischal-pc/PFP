import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CircleCheck, ShieldCheck, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { services, getService, company } from '@/lib/site-data'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.name,
    description: `${service.short} PFP Canada provides ${service.name.toLowerCase()} across Western Canada.`,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero
        eyebrow="Service file"
        title={service.name}
        description={service.hero}
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name }]}
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
            className="border border-secondary-foreground/25 bg-secondary-foreground/5 shadow-none hover:bg-secondary-foreground/10"
          >
            <a href={company.phoneHref}>
              <Icon icon={Phone} size={16} />
              {company.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="flex size-14 items-center justify-center border border-border bg-secondary text-secondary-foreground">
              <Icon icon={service.icon} size={28} />
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-foreground text-balance">
              About our {service.name.toLowerCase()}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{service.overview}</p>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              What&apos;s included
            </h3>
            <ul className="mt-4 grid gap-0 border border-border sm:grid-cols-2">
              {service.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 border-b border-border px-3 py-3 text-sm leading-relaxed text-foreground sm:odd:border-r"
                >
                  <Icon icon={CircleCheck} size={16} className="mt-0.5 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] overflow-hidden border border-border bg-muted">
              <Image
                src={service.image || '/placeholder.svg'}
                alt={`${service.name} performed by PFP Canada`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="mt-0 border border-t-0 border-border bg-card p-6">
              <div className="flex items-center gap-2">
                <Icon icon={ShieldCheck} size={18} className="text-primary" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-card-foreground">
                  Codes & standards
                </h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.compliance.map((c) => (
                  <li
                    key={c}
                    className="border border-border bg-secondary px-2.5 py-1 font-display text-xs uppercase tracking-[0.1em] text-secondary-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.04em] text-foreground">
            Related service files
          </h2>
          <ul className="mt-6 grid gap-0 border border-border bg-card sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug} className="border-b border-border sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0">
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 px-4 py-4 transition-colors hover:bg-muted/70"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-secondary text-secondary-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon icon={s.icon} size={18} />
                  </span>
                  <span className="font-display text-sm font-medium uppercase tracking-[0.06em] text-card-foreground group-hover:text-primary">
                    {s.name}
                  </span>
                  <Icon
                    icon={ArrowRight}
                    size={14}
                    className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Need ${service.name.toLowerCase()} for your building?`} />
    </>
  )
}
