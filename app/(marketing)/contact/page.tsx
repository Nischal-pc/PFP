import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPinned, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icon'
import { company } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a free fire protection quote or call PFP Canada for 24/7 emergency service across Western Canada.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact file"
        title="Request a quote or reach our team"
        description="Tell us about your building and systems. We respond during business hours; emergencies are answered 24/7."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
        <div className="border border-border bg-card p-6 md:p-8">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Quote request</p>
          <h2 className="mt-3 font-display text-2xl font-semibold uppercase tracking-[0.04em]">Send us the details</h2>
          <form className="mt-8 space-y-5" action={`mailto:${company.email}`} method="get">
            <Field label="Full name" name="name" required />
            <Field label="Company / facility" name="company" />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <label className="block">
              <span className="font-display text-xs uppercase tracking-[0.16em] text-muted-foreground">How can we help?</span>
              <textarea
                name="body"
                rows={5}
                required
                className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
              />
            </label>
            <Button type="submit" size="lg">
              Submit request
              <Icon icon={ArrowRight} size={16} />
            </Button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="border border-border bg-secondary p-6 text-secondary-foreground md:p-8">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-accent">Direct lines</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href={company.phoneHref} className="flex items-center gap-3 hover:text-primary">
                  <Icon icon={Phone} size={18} className="text-primary" />
                  <span>
                    <span className="block font-display uppercase tracking-[0.1em]">Main</span>
                    {company.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={company.emergencyPhoneHref} className="flex items-center gap-3 hover:text-primary">
                  <Icon icon={Phone} size={18} className="text-primary" />
                  <span>
                    <span className="block font-display uppercase tracking-[0.1em]">24/7 Emergency</span>
                    {company.emergencyPhone}
                  </span>
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="flex items-center gap-3 hover:text-primary">
                  <Icon icon={Mail} size={18} className="text-primary" />
                  <span>
                    <span className="block font-display uppercase tracking-[0.1em]">Email</span>
                    {company.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon icon={MapPinned} size={18} className="mt-0.5 text-primary" />
                <span>
                  <span className="block font-display uppercase tracking-[0.1em]">Headquarters</span>
                  {company.hqAddress}
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-secondary-foreground/70">{company.hours}</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Prefer a branch near you?{' '}
            <Link href="/locations" className="font-medium text-primary underline-offset-4 hover:underline">
              View locations
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="font-display text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-border bg-background px-3 py-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
      />
    </label>
  )
}
