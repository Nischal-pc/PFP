export function SectionHeading({
  stamp,
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  stamp?: string
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  const label = stamp ?? eyebrow
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {label && (
        <p className="font-display text-xs font-medium uppercase tracking-[0.2em] text-accent">{label}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold uppercase tracking-[0.04em] text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}
