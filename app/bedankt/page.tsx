import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bedankt — Eden Roc',
}

export default function Bedankt() {
  return (
    <div className="font-sans text-ink bg-white min-h-screen flex flex-col">

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-forest/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link href="/" aria-label="Eden Roc home">
            <Image
              src="/brand-assets/logo-eden-roc/logo-eden-roc@4x.png"
              alt="Eden Roc"
              width={160}
              height={40}
              className="h-10 w-auto logo-nav"
            />
          </Link>
          <Link href="/#contact" className="btn btn-green text-xs px-6 py-3">
            Terug naar site
          </Link>
        </div>
      </nav>

      {/* MAIN */}
      <main className="flex-1 flex items-center justify-center px-6 pt-20">
        <div className="max-w-lg w-full text-center py-24">

          {/* Checkmark */}
          <div className="flex justify-center mb-10 check-circle">
            <div className="w-24 h-24 rounded-full bg-moss/15 flex items-center justify-center">
              <svg className="w-12 h-12 text-forest" viewBox="0 0 48 48" fill="none"
                   stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path className="check-path" d="M10 25 L20 35 L38 15"/>
              </svg>
            </div>
          </div>

          <div className="flex justify-center fade-up-1">
            <span className="sec-label">Bevestiging</span>
          </div>

          <h1 className="text-ink font-black text-4xl lg:text-5xl leading-[1.1] tracking-[-0.025em] mb-5 fade-up-2">
            Bedankt voor<br />uw bericht
          </h1>

          <p className="text-ink/60 text-lg leading-[1.75] mb-10 fade-up-3">
            We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.
          </p>

          <div className="fade-up-3">
            <Link href="/" className="btn btn-green">
              Terug naar Eden Roc
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/brand-assets/logo-eden-roc/logo-eden-roc@4x.png"
              alt="Eden Roc"
              width={144}
              height={36}
              className="h-9 w-auto logo-footer-img"
            />
            <p className="text-white/25 text-xs">© 2026 Eden Roc. Alle rechten voorbehouden.</p>
            <Image
              src="/brand-assets/logo-tricks/tricks-for-bricks_logo_rgb wit.svg"
              alt="Tricks for Bricks"
              width={120}
              height={32}
              className="h-8 w-auto opacity-60"
            />
          </div>
        </div>
      </footer>

    </div>
  )
}
