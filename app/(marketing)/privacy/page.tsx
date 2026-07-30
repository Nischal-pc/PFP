import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for PFP Canada website and customer communications.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect and use information when you contact us or use our services."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]}
      />
      <section className="mx-auto max-w-3xl px-4 py-16 prose-none md:py-20">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            {company.legalName} (“PFP Canada”) collects contact and facility information you provide when requesting
            quotes, scheduling service, or accessing customer records. We use that information to deliver fire
            protection services, compliance documentation, and related communications.
          </p>
          <p>
            We do not sell personal information. Access to inspection reports and account data is limited to authorized
            personnel and your designated contacts. For privacy questions, email{' '}
            <a href={company.emailHref} className="text-primary underline-offset-4 hover:underline">
              {company.email}
            </a>
            .
          </p>
          <p className="text-sm">Last updated: July 2026</p>
        </div>
      </section>
    </>
  )
}
