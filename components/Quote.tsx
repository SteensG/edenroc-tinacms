import { ReactNode } from 'react'

type Props = {
  variant: 'dark' | 'light' | 'border'
  text: ReactNode
}

export default function Quote({ variant, text }: Props) {
  if (variant === 'dark') {
    return (
      <section className="relative py-24 bg-forest noise overflow-hidden">
        <div className="absolute inset-0 quote1-radial" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <span className="qmark text-white">&quot;</span>
          <blockquote className="text-white text-2xl lg:text-4xl font-black leading-[1.45] tracking-[-0.01em]">
            {text}
          </blockquote>
        </div>
      </section>
    )
  }

  if (variant === 'light') {
    return (
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <span className="qmark text-forest">&quot;</span>
          <blockquote className="text-forest text-2xl lg:text-4xl font-black leading-[1.45] tracking-[-0.01em]">
            {text}
          </blockquote>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 border-t border-b border-faint">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <blockquote className="text-forest text-xl lg:text-2xl font-black leading-[1.45]">
          {text}
        </blockquote>
      </div>
    </section>
  )
}
