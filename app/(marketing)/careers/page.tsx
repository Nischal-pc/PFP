import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  HardHat,
  MapPinned,
  Clock,
  ShieldCheck,
  Wrench,
  ClipboardList,
  Users,
  BadgeCheck,
  Phone,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icon'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the PFP Canada team — certified fire protection technicians, sprinkler fitters, and inspection specialists serving Western Canada.',
}

const openings = [
  {
    title: 'Fire Alarm Technician',
    location: 'Calgary, AB',
    type: 'Full-Time',
    cert: 'CFAA / ASTTBC',
    desc: 'Install, inspect, and service fire alarm panels and devices across commercial and industrial accounts in the Calgary region. Experience with addressable systems required.',
  },
  {
    title: 'Sprinkler Fitter',
    location: 'Edmonton, AB',
    type: 'Full-Time',
    cert: 'UA Local 488',
    desc: 'Perform NFPA 25 inspection, testing, and maintenance on wet, dry, and pre-action sprinkler systems. Fire pump and backflow experience an asset.',
  },
  {
    title: 'Fire Protection Inspector',
    location: 'Vancouver, BC',
    type: 'Full-Time',
    cert: 'CFAA Required',
    desc: 'Conduct annual multi-system inspections (alarms, extinguishers, lighting, suppression) for commercial and hospitality clients across the Lower Mainland.',
  },
  {
    title: 'Kitchen Suppression Technician',
    location: 'Calgary, AB',
    type: 'Full-Time',
    cert: 'UL 300 Certified',
    desc: 'Service and semi-annually inspect commercial kitchen hood suppression systems. Experience with Ansul or Amerex systems preferred.',
  },
  {
    title: 'Service Coordinator',
    location: 'Calgary, AB (HQ)',
    type: 'Full-Time',
    cert: 'No field cert required',
    desc: 'Schedule and track inspection and service work orders across our Western Canada branch network. CRM and dispatch experience preferred.',
  },
]

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Certification Support',
    desc: 'We sponsor CFAA, ASTTBC, and NFPA training courses and examination fees for qualifying employees.',
  },
  {
    icon: MapPinned,
    title: 'Regional Branches',
    desc: 'Work close to home. We have branches in Alberta, BC, Saskatchewan, and Manitoba.',
  },
  {
    icon: Clock,
    title: 'Stable Schedule',
    desc: 'Primarily daytime commercial work with clear scheduling. Emergency on-call rotations are shared and compensated.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-First Culture',
    desc: 'COR certified operations, company-supplied PPE, and a zero-compromise approach to technician safety.',
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    desc: 'Fleet vehicles, calibrated test instruments, and digital reporting tools are provided and maintained.',
  },
  {
    icon: Users,
    title: 'Tight-Knit Teams',
    desc: 'Small branch crews that support each other, led by experienced technicians who mentor new hires.',
  },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Personnel file"
        title="Join the team protecting Western Canada"
        description="PFP Canada is growing. We're looking for certified fire protection technicians, sprinkler fitters, and service specialists who take code compliance seriously."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#openings">
              View open positions
              <Icon icon={ArrowRight} size={16} />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="border border-secondary-foreground/25 bg-secondary-foreground/5 shadow-none hover:bg-secondary-foreground/10"
          >
            <a href={company.emailHref}>
              <Icon icon={HardHat} size={16} />
              Send your résumé
            </a>
          </Button>
        </div>
      </PageHero>

      {/* WHY WORK HERE */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <SectionHeading
          stamp="Why PFP Canada"
          title="Built for people who take the work seriously"
          description="We do technical, code-critical work that matters. Our technicians protect hospitals, schools, high-rises, and industrial facilities — and we equip them to do it right."
        />
        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-4 bg-card p-6">
              <span className="flex size-11 items-center justify-center border border-border bg-secondary text-secondary-foreground">
                <Icon icon={b.icon} size={20} />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold uppercase tracking-[0.06em] text-card-foreground">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section
        id="openings"
        className="border-t border-border bg-muted/50 py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            stamp="Open positions"
            title="Current openings across Western Canada"
            description="We hire throughout the year. If you don't see your role below, send us your résumé — we keep strong applicants on file."
          />
          <ul className="mt-10 grid gap-px bg-border">
            {openings.map((job, i) => (
              <li key={job.title} className="bg-background">
                <div className="flex flex-col gap-5 p-6 md:flex-row md:items-start md:justify-between md:p-8">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs font-bold text-primary/40 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl font-semibold uppercase tracking-[0.04em] text-foreground">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Icon icon={MapPinned} size={12} className="text-primary" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Icon icon={Clock} size={12} className="text-primary" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Icon icon={ClipboardList} size={12} className="text-primary" />
                          {job.cert}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {job.desc}
                      </p>
                    </div>
                  </div>
                  <Button asChild size="sm" className="shrink-0">
                    <a href={company.emailHref}>
                      Apply
                      <Icon icon={ArrowRight} size={14} />
                    </a>
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          {/* GENERAL APPLICATION */}
          <div className="mt-10 border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Don&apos;t see your role?
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-foreground">
                  General application
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Send your résumé and certification credentials to{' '}
                  <a
                    href={company.emailHref}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {company.email}
                  </a>
                  . We&apos;ll review your application and contact you when a matching position opens.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={company.emailHref}>
                    Send résumé
                    <Icon icon={ArrowRight} size={16} />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={company.phoneHref}>
                    <Icon icon={Phone} size={16} />
                    {company.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Protect buildings. Build a career."
        description="Join a certified team trusted by commercial, industrial, healthcare, and institutional facilities across Western Canada."
      />
    </>
  )
}
