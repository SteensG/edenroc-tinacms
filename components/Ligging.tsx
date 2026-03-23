export default function Ligging() {
  return (
    <section id="ligging" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Text */}
          <div className="reveal-left">
            <span className="sec-label">Locatie</span>
            <h2 className="text-ink font-black text-4xl lg:text-[3.2rem] leading-[1.08] tracking-[-0.025em] mb-7">
              Rustig gelegen.<br />Toch overal dichtbij.
            </h2>
            <p className="text-ink/65 text-lg leading-[1.78] mb-5">
              Eden Roc ligt in een rustige, residentiële buurt in Lede, omringd door groen en water. Het centrum van Lede met supermarkten, winkels, horeca, scholen en sportmogelijkheden bereik je vlot te voet of met de fiets.
            </p>
            <p className="text-ink/65 text-lg leading-[1.78] mb-10">
              Met de wagen of het openbaar vervoer sta je snel in de omliggende steden: Aalst, Gent en Brussel zijn allemaal vlot bereikbaar. Je woont hier weg van de drukte, maar nooit ver van alles wat telt.
            </p>
            <div className="flex items-center gap-3 text-forest">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="font-semibold text-base">Steenland 16, Lede</span>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden map-frame shadow-map-wrap">
            <iframe
              src="https://maps.google.com/maps?q=Steenland+16+Lede+Belgium&output=embed&z=14"
              className="iframe-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Eden Roc Lede"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
