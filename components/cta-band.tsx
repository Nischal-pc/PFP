import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icon'
import { company } from '@/lib/site-data'

export function CtaBand({
  title = 'Ready to make your building compliant?',
  description = 'Book an inspection or request a free quote. Our certified technicians serve commercial, industrial, and institutional facilities across Western Canada.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Action required</p>
          <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-primary-foreground/85 text-pretty">{description}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Request a Quote
              <Icon icon={ArrowRight} size={16} />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground shadow-none hover:bg-primary-foreground/20"
          >
            <a href={company.phoneHref}>
              <Icon icon={Phone} size={16} />
              {company.phone}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
