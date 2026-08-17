import { icons, iconCount } from "@/lib/icons"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16">
      <header className="flex flex-col gap-y-2 border-b pb-6">
        <h1 className="text-2xl font-medium">Substance Icons</h1>
        <p className="text-muted-foreground text-sm">
          {iconCount} customizable, scalable SVG icons for React.
        </p>
      </header>

      <div className="grid grid-cols-4 gap-px border-b md:grid-cols-6 lg:grid-cols-8">
        {icons.map(({ name, Component }) => (
          <div
            key={name}
            className="group hover:bg-accent flex aspect-square flex-col items-center justify-center gap-y-2 border-r border-b"
          >
            <Component size={20} />
            <span className="text-muted-foreground group-hover:text-foreground max-w-full truncate px-2 text-[10px]">
              {name}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
