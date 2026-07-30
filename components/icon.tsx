import type { LucideIcon, LucideProps } from 'lucide-react'
import { cn } from '@/lib/utils'

type IconProps = LucideProps & {
  icon: LucideIcon
}

/** Consistent stroke weight and optical sizing for dossier UI marks. */
export function Icon({ icon: Glyph, className, size = 18, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth
      aria-hidden={props['aria-hidden'] ?? true}
      className={cn('shrink-0', className)}
      {...props}
    />
  )
}
