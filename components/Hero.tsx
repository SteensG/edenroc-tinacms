import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end noise">

      <div className="img-wrap absolute inset-0">
        <Image
          src="/brand-assets/images/20260205_TricksForBricks_Lede_Ext_A003.jpg"
          alt="Eden Roc aan het water"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 hero-grad-main" />
      <div className="absolute inset-0 hero-grad-radial" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="max-w-2xl">
          <span className="sec-label-white">Lede · Een project van Mentres</span>
          <h1 className="text-white font-black text-5xl lg:text-[5.5rem] leading-[1.0] tracking-[-0.03em] mb-6">
            Jouw thuis<br />aan het water
          </h1>
          <p className="text-white/75 text-xl leading-[1.72] mb-10 max-w-lg">
            Vier stijlvolle woningen aan de waterkant in Lede. Rust, natuur en architectuur in perfecte balans.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#aanbod"  className="btn btn-white">Bekijk het aanbod</Link>
            <Link href="#contact" className="btn btn-ghost">Contacteer ons</Link>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-bob absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-[10px] uppercase tracking-[0.2em]">Ontdek</span>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  )
}
