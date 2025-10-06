import { MetricsCard } from "./metrics-card"

const items = [
  {
      label: "used by",
      value: "14.4",
      suffix: "k",
      description: "designers and developers",
  },
  {
      label: "used by",
      value: "4.8",
      suffix: "k",
      description: "designers on Figma Community",
  },
  {
      label: "over",
      value: "1121",
      description: "clones and forks of the template on Github",
  },
  {
      label: "already",
      value: "8.5",
      suffix: "k",
      description: "installations with shadcn/ui CLI",
  },
]

export function MetricsSection() {

  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* Left copy */}
        <div>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            A proven solution 
            <br />for good design
          </h2>
          <p className="mt-6 max-w-xl text-base leading-6 text-muted-foreground md:text-lg md:leading-7">
            Thousands of designers and developers have already used HireDue to create beautiful and functional
            websites and products.
          </p>
        </div>

        {/* Right stats grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {items && items.map((item, index) => (
            <MetricsCard 
              key={index}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
              description={item.description}
            >

              </MetricsCard>))}
        </div>
      </div>
    </section>
  )
}
