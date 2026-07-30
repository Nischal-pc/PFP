import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceCard } from '@/components/service-card'
import { CtaBand } from '@/components/cta-band'
import { SectionHeading } from '@/components/section-heading'
import { Icon } from '@/components/icon'
import { services } from '@/lib/site-data'
import { ClipboardList, Wrench, CalendarClock, FileBadge } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fire Protection Services',
  description:
    'Explore PFP Canada fire protection services: fire alarm systems, extinguishers, emergency lighting, kitchen suppression, sprinkler systems, and managed inspection programs across Western Canada.',
}

const process = [
  {
    icon: ClipboardList,
    title: 'Assess',
    desc: 'We survey your building and identify every code-mandated system and deficiency.',
  },
  {
    icon: Wrench,
    title: 'Install & Repair',
    desc: 'Certified technicians install, upgrade, and correct systems to code.',
  },
  {
    icon: CalendarClock,
    title: 'Inspect',
    desc: 'We schedule and perform all recurring inspections automatically.',
  },
  {
    icon: FileBadge,
    title: 'Document',
    desc: 'Digital reports and tags keep you audit-ready for any authority.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service index"
        title="Complete fire protection for every building"
        description="One certified partner for design, installation, inspection, and testing of every life-safety system your facility depends on."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            stamp="Program method"
            title="A managed program, not a one-off visit"
            description="Our four-step approach keeps your building compliant year after year without the administrative burden."
          />
          <ol className="mt-10 grid gap-0 border border-border bg-card sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li
                key={step.title}
                className="relative border-b border-border p-6 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="font-display text-xs uppercase tracking-[0.18em] text-accent">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <span className="mt-4 flex size-11 items-center justify-center border border-border bg-secondary text-secondary-foreground">
                  <Icon icon={step.icon} size={20} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-[0.04em] text-card-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
