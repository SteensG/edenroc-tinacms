import Link from 'next/link'

const voordelen = [
  {
    num: '01',
    title: <>Aan het water,<br className="hidden lg:block" /> omgeven door groen</>,
    body: 'Je woont letterlijk aan de waterkant. Vanuit elke hoek van je woning heb je zicht op water en groen — een zeldzame troef die rust en natuur naar binnen haalt.',
    delay: 'd1',
  },
  {
    num: '02',
    title: <>BEN-woningen met<br className="hidden lg:block" /> lage energiefactuur</>,
    body: 'Lucht-lucht warmtepompen en airco\'s die koelen én verwarmen. E-peil van 20 of beter — maximaal comfort én levenslang lage energiefacturen.',
    delay: 'd2',
  },
  {
    num: '03',
    title: <>Volledig naar<br className="hidden lg:block" /> jouw smaak afgewerkt</>,
    body: 'Van keuken tot sanitair, van vloeren tot deuren — jij bepaalt de afwerking volledig via het lastenboek. Zo woon je in een woning die écht bij jou past.',
    delay: 'd3',
  },
  {
    num: '04',
    title: <>Eigen staanplaats<br className="hidden lg:block" /> en ruime berging</>,
    body: 'Elke woning heeft een eigen staanplaats én een royale afgesloten berging — ideaal voor fietsen, steps of gewoon wat extra opbergruimte.',
    delay: 'd4',
  },
  {
    num: '05',
    title: 'Aankoop aan 6% btw',
    body: (
      <>
        Wie in aanmerking komt, koopt aan 6% btw i.p.v. 21%. Dat is een besparing van maar liefst{' '}
        <strong className="text-forest font-black">€&thinsp;57.639</strong>. Vraag ons naar de voorwaarden.
      </>
    ),
    badge: 'Fiscaal voordeel',
    highlight: true,
    delay: 'd5',
  },
  {
    num: '06',
    title: <>Oplevering<br className="hidden lg:block" /> op 6 maanden</>,
    body: 'Modulaire bouwmethode betekent bijzonder snelle bouw. Eens 2 van de 4 woningen verkocht zijn, gaat de bouw officieel van start.',
    delay: 'd6',
  },
]

export default function Voordelen() {
  return (
    <section id="voordelen" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-10 items-end mb-20 reveal">
          <div>
            <span className="sec-label">De troeven</span>
            <h2 className="text-ink font-black text-4xl lg:text-[3.4rem] leading-[1.06] tracking-[-0.025em]">Waarom Eden Roc?</h2>
          </div>
          <p className="text-ink/50 text-lg leading-[1.75] lg:pb-2">
            Zes eigenschappen die Eden Roc onderscheiden — voor wie bewust kiest voor kwaliteit, comfort en ligging.
          </p>
        </div>

        <div>
          {voordelen.map((v) => (
            <div
              key={v.num}
              className={`feat-row reveal ${v.delay} group border-t border-forest/10 -mx-6 lg:-mx-10 px-6 lg:px-10${v.highlight ? ' bg-sand/20' : ''}`}
            >
              <div className="grid grid-cols-[52px_1fr] lg:grid-cols-[72px_1fr_1fr] gap-x-8 lg:gap-x-14 gap-y-2 py-9 items-start">
                <span className={`row-num pt-1${v.highlight ? ' row-num--hi' : ''}`}>{v.num}</span>
                <div>
                  {v.badge && (
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-moss mb-2">{v.badge}</span>
                  )}
                  <h3 className="font-black text-forest text-xl lg:text-2xl tracking-[-0.015em] leading-snug">{v.title}</h3>
                </div>
                <p className="text-ink/55 text-base leading-[1.75] col-start-2 lg:col-start-auto">{v.body}</p>
              </div>
            </div>
          ))}

          <div className="feat-row border-b border-forest/10 -mx-6 lg:-mx-10" />
        </div>

        <div className="mt-14 flex justify-end">
          <Link href="#contact" className="btn btn-green">Contacteer ons</Link>
        </div>
      </div>
    </section>
  )
}
