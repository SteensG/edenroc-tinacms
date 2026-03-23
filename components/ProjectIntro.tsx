import Image from 'next/image'
import Link from 'next/link'

export default function ProjectIntro() {
  return (
    <section id="project" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Image */}
          <div className="img-wrap rounded-sm overflow-hidden order-last lg:order-first self-stretch reveal-left shadow-project">
            <Image
              src="/brand-assets/images/Unknown.jpeg"
              alt="Eden Roc terras aan het water"
              width={800}
              height={600}
              className="w-full h-full object-cover min-h-[480px]"
            />
          </div>

          {/* Text */}
          <div className="reveal-right">
            <span className="sec-label">Eden Roc</span>
            <h2 className="text-ink font-black text-4xl lg:text-[3.2rem] leading-[1.08] tracking-[-0.025em] mb-7">
              Kleinschalig.<br />Bijzonder gelegen.<br />Volledig van jou.
            </h2>
            <p className="text-ink/65 text-lg leading-[1.78] mb-5">
              Eden Roc is een kleinschalig nieuwbouwproject op een unieke locatie in Lede: vier stijlvolle woningen aan de waterkant, in een rustige residentiële buurt met volop groen.
            </p>
            <p className="text-ink/65 text-lg leading-[1.78] mb-5">
              De naam verwijst naar de legendarische discotheek die er vroeger stond — een plek die velen in de omtrek nog goed kennen. Vandaag schrijft Eden Roc een nieuw hoofdstuk.
            </p>
            <p className="text-ink/65 text-lg leading-[1.78] mb-10">
              Overal vanuit de woning heb je zicht op water en groen. Of je nu in de woonkamer zit of ontbijt op het terras — de rust van de natuur is altijd aanwezig. En toch vind je het centrum van Lede op wandel- of fietsafstand.
            </p>
            <Link href="#aanbod" className="btn btn-green">Bekijk het aanbod</Link>
          </div>

        </div>
      </div>
    </section>
  )
}
