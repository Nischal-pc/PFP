import Link from "next/link";
import { Phone, Mail, MapPinned } from "lucide-react";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { company, services, cities, branches } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <div className="mb-2">
              <Logo size="sm" variant="icon-only" linkTo="/" />
            </div>
            <p className="mt-1 font-display text-xs uppercase tracking-[0.18em] text-accent">
              File · Western Canada · Est. {company.founded}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
              {company.legalName}. Certified fire protection services across
              Western Canada.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <a
                href={company.phoneHref}
                className="flex items-center gap-2 text-secondary-foreground/80 transition-colors hover:text-primary"
              >
                <Icon icon={Phone} size={16} /> {company.phone}
              </a>
              <a
                href={company.emailHref}
                className="flex items-center gap-2 text-secondary-foreground/80 transition-colors hover:text-primary"
              >
                <Icon icon={Mail} size={16} /> {company.email}
              </a>
              <p className="flex items-start gap-2 text-secondary-foreground/80">
                <Icon icon={MapPinned} size={16} className="mt-0.5 shrink-0" />{" "}
                {company.hqAddress}
              </p>
            </div>
          </div>

          {/* Services Column */}
          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Service Areas — 2-col grid */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Service Areas
            </h3>
            <ul className="mt-3 grid list-none grid-cols-2 gap-x-4 gap-y-1.5">
              {cities.slice(0, 12).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/service-areas/${c.slug}`}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {c.name}, {c.provinceCode}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <FooterCol title="Company">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/industries">Industries</FooterLink>
            <FooterLink href="/locations">Locations</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/portal">Customer Portal</FooterLink>
            <FooterLink href="/contact">Request a Quote</FooterLink>
          </FooterCol>
        </div>

        {/* REGIONAL BRANCH DIRECTORY */}
        <div className="mt-12 border-t border-secondary-foreground/15 pt-8">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Regional Branch Network &amp; Direct Lines
          </p>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 text-xs">
            {branches.map((b) => (
              <div key={b.city} className="space-y-0.5">
                <span className="font-display font-semibold uppercase tracking-wider text-secondary-foreground/90">
                  {b.city}
                  {b.note ? ` (${b.note})` : ""}
                </span>
                <a
                  href={b.phoneHref}
                  className="block text-secondary-foreground/60 transition-colors hover:text-primary"
                >
                  {b.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-secondary-foreground/15 pt-6 text-sm text-secondary-foreground/60 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-accent">
        {title}
      </h3>
      <ul className="mt-3 list-none space-y-1.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
      >
        {children}
      </Link>
    </li>
  );
}
