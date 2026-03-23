import Image from 'next/image'

export default function Mentres() {
  return (
    <section className="py-20 border-t border-faint">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="sec-label">Projectontwikkelaar</span>
            <h2 className="text-ink font-black text-3xl lg:text-4xl leading-[1.1] tracking-[-0.02em] mb-6">
              Eden Roc is een realisatie van Mentres
            </h2>
            <p className="text-ink/65 text-lg leading-[1.78] mb-4">
              Mentres is een ervaren vastgoedontwikkelaar uit Aalst. Wie met hen werkt, vindt een klein maar toegewijd team dat elk bouwproject echt ter harte neemt. Persoonlijke betrokkenheid, korte communicatielijnen en een directe aanpak maken het verschil.
            </p>
            <p className="text-ink/65 text-lg leading-[1.78]">
              Als familiebedrijf staat vertrouwen centraal: afspraken worden nagekomen, want een woord is een woord. Respect voor vakmanschap, gecombineerd met ervaring, visie en expertise, zijn de basis van elk Mentres-project.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/brand-assets/logo-mentres/MENTRES_zwart.svg"
              alt="Mentres"
              width={200}
              height={56}
              className="h-14 w-auto opacity-75"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
