import { cn } from "@/lib/utils"
import {Card, CardContent} from "@/components/ui/card"

type MetricsCardProps = {
  label?: string
  value: string | number
  suffix?: string
  description?: string
  className?: string
}

export function MetricsCard({
  label,
  value,
  suffix,
  description,
  className,
}: MetricsCardProps) {
  return (
    <Card 
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card/70 text-card-foreground glass-3",
        // subtle inner border + surface
        "shadow-[inset_0_0_0_1px_hsl(var(--border))] backdrop-blur-sm",
        className,
      )}
      >
        {/* ambient glow behind number */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          // soft radial glow using theme token (chart-5 as warm amber)
          // background: "radial-gradient(220px 160px at 35% 45%, var(--color-chart-5) 0%, transparent 60%)",
          background: "linear-gradient(90deg,rgba(43, 45, 48, 1) 0%, rgba(39, 43, 42, 1) 38%, rgba(0, 0, 0, 1) 100%)",
          opacity: 0.25,
        }}
      />
      {/* vignette for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, transparent 0%, color-mix(in oklab, var(--color-background) 85%, black) 70%)",
          opacity: 0.5,
        }}
      />
      <CardContent className="p-6 md:p-8">
        <div className={cn("flex flex-col items-start gap-3 text-left", className)}>
      {/* Top label */}
      {label && (
        <div className="text-muted-foreground text-sm font-semibold">
          {label}
        </div>
      )}

      {/* Main value and suffix */}
      <div className="flex items-baseline gap-2">
        <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
          {value}
        </div>
        {suffix && (
          <div className="text-brand text-2xl font-semibold">{suffix}</div>
        )}
      </div>

      {/* Bottom description */}
      {description && (
        <div className="text-muted-foreground text-sm font-semibold text-pretty">
          {description}
        </div>
      )}
    </div>
      </CardContent>
    </Card>
  )
}