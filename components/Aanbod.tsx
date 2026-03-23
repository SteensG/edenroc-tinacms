'use client'

import Image from 'next/image'
import Link from 'next/link'

export type Woning = {
  ref: string
  kamers: number
  oppWoning: string
  oppTerras: string
  oppTuin: string
  status: string
  pdf: string
}

const woningen: Woning[] = [
  { ref: 'Woning 3', kamers: 3, oppWoning: '141,62 m²', oppTerras: '10,56 m²', oppTuin: '125,48 m²', status: 'Beschikbaar', pdf: '/plannen/woning1.pdf' },
  { ref: 'Woning 4', kamers: 3, oppWoning: '141,62 m²', oppTerras: '10,56 m²', oppTuin: '29,50 m²',  status: 'Beschikbaar', pdf: '/plannen/woning2.pdf' },
  { ref: 'Woning 5', kamers: 3, oppWoning: '141,62 m²', oppTerras: '10,56 m²', oppTuin: '29,50 m²',  status: 'Beschikbaar', pdf: '/plannen/woning3.pdf' },
  { ref: 'Woning 6', kamers: 3, oppWoning: '141,62 m²', oppTerras: '10,56 m²', oppTuin: '89,58 m²',  status: 'Beschikbaar', pdf: '/plannen/woning4.pdf' },
]

export default function Aanbod() {
  const openModal = (woning: string, pdf: string) => {
    window.dispatchEvent(new CustomEvent('openPlanModal', { detail: { woning, pdf } }))
  }

  return (
    <section id="aanbod" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-center mb-20">
          <div className="reveal-left">
            <span className="sec-label">Het aanbod</span>
            <h2 className="text-ink font-black text-4xl lg:text-[3.2rem] leading-[1.08] tracking-[-0.025em] mb-6">
              Ontdek het aanbod
            </h2>
            <p className="text-ink/65 text-lg leading-[1.75] mb-5">
              Eden Roc bestaat uit 2 gesloten en 2 halfopen woningen, elk met 3 slaapkamers. Ruim, lichtrijk en volledig afgewerkt naar jouw smaak.
            </p>
            <p className="text-ink/65 text-lg leading-[1.75] mb-10">
              In Eden Roc koop je al een volledig afgewerkte woning vanaf{' '}
              <strong className="text-forest">€&thinsp;446.265</strong>{' '}
              <span className="text-ink/40 text-base">(excl. kosten)</span>
            </p>
            <Link href="#contact" className="btn btn-green">Contacteer ons</Link>
          </div>
          <div className="img-wrap rounded-sm overflow-hidden shadow-card">
            <Image
              src="/brand-assets/images/Unknown-1.jpeg"
              alt="Eden Roc bovenaanzicht"
              width={800}
              height={384}
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm shadow-table-wrap">
          <table className="w-full border-collapse">
            <thead>
              <tr className="thead-forest">
                <th className="text-left py-4 px-5 pl-7 text-white text-xs font-bold uppercase tracking-[0.1em]">Referentie</th>
                <th className="text-left py-4 px-5 text-white text-xs font-bold uppercase tracking-[0.1em]">Kamers</th>
                <th className="text-left py-4 px-5 text-white text-xs font-bold uppercase tracking-[0.1em]">Opp. woning</th>
                <th className="text-left py-4 px-5 text-white text-xs font-bold uppercase tracking-[0.1em]">Opp. terras</th>
                <th className="text-left py-4 px-5 text-white text-xs font-bold uppercase tracking-[0.1em]">Opp. tuin</th>
                <th className="text-left py-4 px-5 text-white text-xs font-bold uppercase tracking-[0.1em]">Status</th>
                <th className="text-left py-4 px-5 pr-7 text-white text-xs font-bold uppercase tracking-[0.1em]">Plannen</th>
              </tr>
            </thead>
            <tbody>
              {woningen.map((w, i) => (
                <tr key={w.ref} className={`offer-row border-b border-ink/6${i % 2 === 1 ? ' tr-alt' : ''}`}>
                  <td className="py-5 px-5 pl-7 font-black text-forest text-base">{w.ref}</td>
                  <td className="py-5 px-5 text-ink/65 text-base">{w.kamers}</td>
                  <td className="py-5 px-5 text-ink/65 text-base">{w.oppWoning}</td>
                  <td className="py-5 px-5 text-ink/65 text-base">{w.oppTerras}</td>
                  <td className="py-5 px-5 text-ink/65 text-base">{w.oppTuin}</td>
                  <td className="py-5 px-5"><span className="badge-ok">{w.status}</span></td>
                  <td className="py-5 px-5 pr-7">
                    <button
                      type="button"
                      className="plan-btn text-forest text-sm font-semibold hover:underline inline-flex items-center gap-1.5"
                      onClick={() => openModal(w.ref, w.pdf)}
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                      Plan downloaden
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-ink/40 text-sm mt-4 italic">Contacteer ons voor het lastenboek en kom alles te weten over de technische afwerking van de woningen.</p>

      </div>
    </section>
  )
}
