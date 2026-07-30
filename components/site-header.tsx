"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { company, services, industries } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/90 dossier-rule">
      <div className="hidden bg-secondary text-secondary-foreground md:block border-b border-secondary-foreground/15">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs tracking-wide">
          <p className="font-display uppercase tracking-[0.16em] text-secondary-foreground/75">
            {company.hours} · AHJ Code Compliant Operations
          </p>
          <div className="flex items-center gap-5">
            <a
              href={company.emailHref}
              className="text-secondary-foreground/75 hover:text-secondary-foreground"
            >
              {company.email}
            </a>
            <a
              href={company.emergencyPhoneHref}
              className="flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-primary"
            >
              <Icon icon={Phone} size={14} />
              24/7 Emergency {company.emergencyPhone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Logo size="md" variant="icon-only" linkTo="/" />

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          <DropdownLink
            label="Services"
            href="/services"
            items={services.map((s) => ({
              label: s.name,
              href: `/services/${s.slug}`,
            }))}
          />
          <DropdownLink
            label="Industries"
            href="/industries"
            items={industries.map((i) => ({
              label: i.name,
              href: `/industries/${i.slug}`,
            }))}
          />
          <TopLink href="/service-areas">Service Areas</TopLink>
          <TopLink href="/locations">Locations</TopLink>
          <TopLink href="/about">About</TopLink>
          <TopLink href="/contact">Contact</TopLink>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a
              href={company.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal Sign In
            </a>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <a href={company.phoneHref}>
              <Icon icon={Phone} size={16} />
              {company.phone}
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Icon icon={Menu} size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full max-w-sm overflow-y-auto rounded-none"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="mt-6 flex flex-col gap-0.5">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border px-1 py-3 font-display text-lg uppercase tracking-[0.08em] text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/locations"
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-1 py-3 font-display text-lg uppercase tracking-[0.08em] text-foreground"
                >
                  Locations
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-1 py-3 font-display text-lg uppercase tracking-[0.08em] text-foreground"
                >
                  Careers
                </Link>
                <Link
                  href="/portal"
                  onClick={() => setOpen(false)}
                  className="border-b border-border px-1 py-3 font-display text-lg uppercase tracking-[0.08em] text-foreground"
                >
                  Customer Portal
                </Link>
                <div className="mt-6 flex flex-col gap-2">
                  <Button asChild size="lg">
                    <a href={company.phoneHref}>
                      <Icon icon={Phone} size={16} />
                      {company.phone}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <a href={company.emergencyPhoneHref}>24/7 Emergency</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function TopLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3 py-2 font-display text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}

function DropdownLink({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="flex items-center gap-1 px-3 py-2 font-display text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown
          className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
          aria-hidden="true"
        />
      </Link>
      <div
        className={cn(
          "invisible absolute left-0 top-full z-50 min-w-64 translate-y-1 border border-border bg-popover p-1 opacity-0 shadow-md transition-all",
          "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block border-b border-border/60 px-3 py-2.5 text-sm text-popover-foreground last:border-0 hover:bg-muted hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
