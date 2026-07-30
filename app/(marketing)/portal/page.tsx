import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, ExternalLink, FileText, ClipboardCheck, Bell } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icon'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Customer Portal',
  description:
    'Access PFP Canada inspection reports, tags, compliance documents, and deficiency tracking through the online customer portal.',
}

const portalFeatures = [
  {
    icon: FileText,
    title: 'Inspection Reports',
    desc: 'Access digital copies of all inspection reports and certifications, organized by facility and date.',
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Scheduling',
    desc: 'Review upcoming inspection dates and track completion status across your portfolio of properties.',
  },
  {
    icon: Bell,
    title: 'Deficiency Tracking',
    desc: 'Monitor open deficiencies, receive remediation quotes, and confirm corrections with your account team.',
  },
]

export default function PortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer access"
        title="Customer portal"
        description="Review inspection reports, tags, and deficiency quotes for your facilities. Sign in with the credentials provided by your account manager."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Portal' }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Portal Access Panel */}
          <div className="border border-border bg-secondary p-6 text-secondary-foreground md:p-8">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
              Secure sign-in
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em]">
              Access your account
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
              Our customer portal is hosted on our secure inspection management platform. Click below to open the portal login page.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto"
              >
                <a
                  href={company.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open portal
                  <Icon icon={ExternalLink} size={16} />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full border border-secondary-foreground/25 bg-secondary-foreground/5 shadow-none hover:bg-secondary-foreground/10 sm:w-auto"
              >
                <a href={company.emailHref}>
                  Request portal access
                  <Icon icon={ArrowRight} size={16} />
                </a>
              </Button>
            </div>
            <div className="mt-8 border-t border-secondary-foreground/15 pt-6">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">
                Need help?
              </p>
              <p className="mt-2 text-sm text-secondary-foreground/70">
                Contact your account manager or call us during business hours.
              </p>
              <a
                href={company.phoneHref}
                className="mt-3 flex items-center gap-2 text-sm font-medium text-secondary-foreground hover:text-primary"
              >
                <Icon icon={Phone} size={16} className="text-primary" />
                {company.phone}
              </a>
            </div>
          </div>

          {/* Portal Features */}
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              What&apos;s inside
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-foreground">
              Your compliance dashboard
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every active PFP Canada account includes access to our digital compliance portal — the same system our technicians use to file reports after every inspection.
            </p>
            <ul className="mt-8 grid gap-px bg-border">
              {portalFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-4 bg-card p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center border border-border bg-secondary text-secondary-foreground">
                    <Icon icon={f.icon} size={18} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-card-foreground">
                      {f.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Not yet a client?{' '}
              <Link
                href="/contact"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Request a quote
              </Link>{' '}
              to get started.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
