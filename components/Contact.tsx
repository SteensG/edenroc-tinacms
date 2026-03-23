export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16 reveal">
          <span className="sec-label sec-label--center">Info &amp; verkoop</span>
          <h2 className="text-ink font-black text-4xl lg:text-5xl tracking-[-0.025em] mb-4">Contacteer ons</h2>
          <p className="text-ink/55 text-lg max-w-xl mx-auto leading-[1.7]">
            Heb je interesse in Eden Roc of wil je meer informatie? Neem contact op met onze woonadviseur.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">

          {/* Info card */}
          <div className="lg:col-span-2">
            <div className="bg-forest p-8 h-full rounded-sm noise relative overflow-hidden shadow-contact">
              <div className="absolute inset-0 contact-card-glow" />
              <div className="relative">
                <span className="block text-sand text-xs font-bold uppercase tracking-[0.18em] mb-6">Eden Roc woonadviseur</span>
                <p className="text-white font-black text-2xl mb-1">Thomas Van der Sypt</p>
                <a href="tel:0473447691"
                   className="inline-flex items-center gap-2 text-white/70 hover:text-sand text-lg mt-3 transition-colors duration-200">
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  0473&nbsp;44&nbsp;76&nbsp;91
                </a>

                <div className="border-t border-white/12 mt-8 pt-7">
                  <span className="block text-white/45 text-xs uppercase tracking-widest mb-2">Projectadres</span>
                  <p className="text-white font-semibold">Steenland 16</p>
                  <p className="text-white/65">Lede</p>
                </div>

                <div className="border-t border-white/12 mt-7 pt-7">
                  <p className="text-white/55 text-sm leading-[1.7]">
                    Eden Roc is een realisatie van{' '}
                    <strong className="text-white">Mentres</strong> — ervaren vastgoedontwikkelaar uit Aalst.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form className="space-y-5" action="https://submit-form.com/dAbJT14I7" method="POST">
              <input type="hidden" name="_redirect" value="https://eden-roc-smoky.vercel.app/bedankt" />
              <input type="hidden" name="_append" value="false" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-2">Voornaam *</label>
                  <input type="text" name="voornaam" className="field" placeholder="Voornaam" required />
                </div>
                <div>
                  <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-2">Naam *</label>
                  <input type="text" name="naam" className="field" placeholder="Naam" required />
                </div>
              </div>
              <div>
                <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-2">E-mail *</label>
                <input type="email" name="email" className="field" placeholder="naam@email.be" required />
              </div>
              <div>
                <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-2">Telefoonnummer</label>
                <input type="tel" name="telefoon" className="field" placeholder="+32 …" />
              </div>
              <div>
                <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-2">Interesse in</label>
                <select name="interesse" className="field select-muted">
                  <option value="" disabled>— Selecteer een woning —</option>
                  <option className="opt-ink">Woning 3 — 141,62 m² · tuin 125,48 m²</option>
                  <option className="opt-ink">Woning 4 — 141,62 m² · tuin 29,50 m²</option>
                  <option className="opt-ink">Woning 5 — 141,62 m² · tuin 29,50 m²</option>
                  <option className="opt-ink">Woning 6 — 141,62 m² · tuin 89,58 m²</option>
                  <option className="opt-ink">Meer informatie / lastenboek</option>
                </select>
              </div>
              <div>
                <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-2">Bericht</label>
                <textarea name="bericht" className="field resize-none" rows={4} placeholder="Uw bericht…" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="_privacy" className="mt-1 w-4 h-4 shrink-0 accent-forest" required />
                <span className="text-ink/55 text-sm leading-relaxed">
                  Ik ga akkoord met de{' '}
                  <a href="#" className="text-forest underline hover:no-underline">privacyverklaring</a>
                </span>
              </label>
              <button type="submit" className="btn btn-green w-full">Verstuur bericht</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
