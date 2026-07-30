import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of use for the PFP Canada website.',
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms governing use of this website and related online materials."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            This website is provided by {company.legalName} for informational purposes. Service agreements, inspection
            scopes, and pricing are confirmed in writing for each engagement.
          </p>
          <p>
            Content may change without notice. Emergency contact numbers are monitored 24/7; quote requests submitted
            online are handled during business hours listed on this site.
          </p>
          <p>
            Questions:{' '}
            <a href={company.emailHref} className="text-primary underline-offset-4 hover:underline">
              {company.email}
            </a>{' '}
            or{' '}
            <a href={company.phoneHref} className="text-primary underline-offset-4 hover:underline">
              {company.phone}
            </a>
            .
          </p>
          <p className="text-sm">Last updated: July 2026</p>
        </div>
      </section>
    </>
  )
}
