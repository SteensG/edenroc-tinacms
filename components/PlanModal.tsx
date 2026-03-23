'use client'

import { useEffect, useRef, useState } from 'react'

type ModalState = { woning: string; pdf: string } | null

export default function PlanModal() {
  const [modal, setModal] = useState<ModalState>(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      const { woning, pdf } = (e as CustomEvent).detail
      setModal({ woning, pdf })
      setSuccess(false)
      setLoading(false)
      setError(false)
    }
    window.addEventListener('openPlanModal', handler)
    return () => window.removeEventListener('openPlanModal', handler)
  }, [])

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 300)
    } else {
      document.body.style.overflow = ''
    }
  }, [modal])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModal(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.checkValidity()) { form.reportValidity(); return }

    setLoading(true)
    setError(false)

    const data = {
      voornaam: (form.elements.namedItem('voornaam') as HTMLInputElement).value,
      naam: (form.elements.namedItem('naam') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      gsm: (form.elements.namedItem('gsm') as HTMLInputElement).value,
      woning: modal?.woning,
      _subject: 'Plannen aanvraag — Eden Roc',
    }

    try {
      const res = await fetch('https://submit-form.com/dAbJT14I7', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('submit failed')

      const a = document.createElement('a')
      a.href = modal!.pdf
      a.download = ''
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      setSuccess(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (!modal) return null

  return (
    <div className={`plan-modal-wrap open`} role="dialog" aria-modal="true" aria-labelledby="plan-modal-title">
      <div className="plan-modal-backdrop" onClick={() => setModal(null)} />
      <div className="plan-modal-card">

        <button
          type="button"
          className="plan-modal-close"
          aria-label="Sluiten"
          onClick={() => setModal(null)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M4 4l12 12M16 4L4 16"/>
          </svg>
        </button>

        {!success ? (
          <div>
            <span className="sec-label">Plannen</span>
            <h2 id="plan-modal-title" className="text-ink font-black text-2xl lg:text-3xl leading-[1.1] tracking-[-0.02em] mb-2">
              Plan downloaden
            </h2>
            <p className="text-ink/55 text-sm leading-relaxed mb-7">
              Vul uw gegevens in om het grondplan van <strong className="text-forest">{modal.woning}</strong> te downloaden.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-1.5">Voornaam *</label>
                  <input ref={firstInputRef} type="text" name="voornaam" className="field" placeholder="Voornaam" required />
                </div>
                <div>
                  <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-1.5">Naam *</label>
                  <input type="text" name="naam" className="field" placeholder="Naam" required />
                </div>
              </div>
              <div>
                <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-1.5">E-mail *</label>
                <input type="email" name="email" className="field" placeholder="naam@email.be" required />
              </div>
              <div>
                <label className="block text-ink/50 text-xs font-bold uppercase tracking-[0.12em] mb-1.5">GSM *</label>
                <input type="tel" name="gsm" className="field" placeholder="+32 …" required />
              </div>
              {error && (
                <p className="plan-error">Er ging iets mis. Probeer het opnieuw.</p>
              )}
              <button type="submit" disabled={loading} className="btn btn-green w-full mt-2">
                {loading ? <span className="plan-spinner" /> : 'Plan downloaden'}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-moss/15 flex items-center justify-center">
                <svg className="w-8 h-8 text-forest" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 25 L20 35 L38 15"/>
                </svg>
              </div>
            </div>
            <h3 className="text-ink font-black text-xl mb-2">Download start dadelijk</h3>
            <p className="text-ink/55 text-sm leading-relaxed">
              Bedankt! Uw download start automatisch. Lukt het niet?{' '}
              <a href={modal.pdf} className="text-forest underline" download>Klik hier</a>.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
