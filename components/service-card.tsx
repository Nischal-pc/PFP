import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/site-data'
import { Icon } from '@/components/icon'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col bg-card p-6 transition-colors hover:bg-muted/60"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-11 items-center justify-center border border-border bg-secondary text-secondary-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon icon={service.icon} size={20} />
        </span>
        <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {service.codeRef ?? 'AHJ-SPEC'}
        </span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.04em] text-card-foreground group-hover:text-primary transition-colors">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <span className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 font-display text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        Inspect Specification
        <Icon icon={ArrowRight} size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
