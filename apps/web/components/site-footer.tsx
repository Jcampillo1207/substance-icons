export const SiteFooter = ({ version }: { version: string }) => (
  <footer className="w-full border-t">
    <div className="text-muted-foreground mx-auto flex w-full max-w-5xl flex-col gap-y-1 px-3 py-8 text-xs md:flex-row md:items-center md:justify-between md:gap-y-0 md:px-5">
      <p>
        Built by{" "}
        <a
          href="https://jmcr.beer"
          className="text-foreground font-light underline underline-offset-2"
        >
          José Campillo
        </a>
        .
      </p>
      <p className="tabular-nums">
        v{version} &middot; ISC licensed. Free for anything.
      </p>
    </div>
  </footer>
)
