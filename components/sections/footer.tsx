import { profile, socials } from '@/lib/portfolio-data'

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-semibold tracking-[0.25em]">
            AA<span className="text-gold">.</span>
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {profile.name} — {profile.location}
          </p>
        </div>

        <p className="max-w-xs text-center font-serif text-sm italic text-muted-foreground md:text-right">
          &ldquo;{profile.philosophy}&rdquo;
        </p>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} {profile.name}. Crafted with intention.
      </p>
    </footer>
  )
}
