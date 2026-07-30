import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items, light }: { items: Crumb[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          'flex flex-wrap items-center gap-1 font-display text-xs uppercase tracking-[0.14em]',
          light ? 'text-primary-foreground/70' : 'text-muted-foreground',
        )}
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className={cn(light ? 'text-primary-foreground' : 'text-foreground', 'font-medium')}>
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  crumbs?: Crumb[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
      <div className="dossier-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="relative border-l-2 border-primary pl-6">
          {crumbs && (
            <div className="mb-4">
              <Breadcrumbs items={crumbs} light />
            </div>
          )}
          {eyebrow && (
            <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-4xl font-display text-3xl font-semibold uppercase leading-[1.05] tracking-[0.04em] text-balance sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary-foreground/80 text-pretty md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
