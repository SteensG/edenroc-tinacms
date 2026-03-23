import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-10 border-b border-white/10">

          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/brand-assets/logo-eden-roc/logo-eden-roc@4x.png"
              alt="Eden Roc"
              width={160}
              height={40}
              className="h-10 w-auto logo-footer-img"
            />
            <p className="text-white/35 text-sm">Steenland 16, Lede</p>
          </div>

          <nav aria-label="Paginanavigatie" className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="#project"   className="text-white/45 text-sm hover:text-white transition-colors duration-200">Project</Link>
            <Link href="#voordelen" className="text-white/45 text-sm hover:text-white transition-colors duration-200">Voordelen</Link>
            <Link href="#aanbod"    className="text-white/45 text-sm hover:text-white transition-colors duration-200">Aanbod</Link>
            <Link href="#ligging"   className="text-white/45 text-sm hover:text-white transition-colors duration-200">Ligging</Link>
            <Link href="#contact"   className="text-white/45 text-sm hover:text-white transition-colors duration-200">Contact</Link>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="text-white/25 text-xs uppercase tracking-[0.15em]">Marketing door</span>
            <Image
              src="/brand-assets/logo-tricks/tricks-for-bricks_logo_rgb wit.svg"
              alt="Tricks for Bricks"
              width={140}
              height={36}
              className="h-9 w-auto opacity-70"
            />
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-white/25 text-xs">© 2026 Eden Roc. Alle rechten voorbehouden.</p>
          <div className="flex gap-5">
            <Link href="#" className="text-white/25 text-xs hover:text-white/55 transition-colors duration-200">Privacyverklaring</Link>
            <Link href="#" className="text-white/25 text-xs hover:text-white/55 transition-colors duration-200">Cookie-instellingen</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
