import Image from 'next/image'

const photos = [
  { src: '/brand-assets/images/20260205_TricksForBricks_Lede_Int_A002.jpg', alt: 'Eden Roc eetkamer' },
  { src: '/brand-assets/images/Unknown-2.jpeg', alt: 'Eden Roc slaapkamer' },
  { src: '/brand-assets/images/20260205_TricksForBricks_Lede_Ext_B001.jpg', alt: 'Eden Roc exterieur' },
  { src: '/brand-assets/images/20260205_TricksForBricks_Lede_Ext_B002.jpg', alt: 'Eden Roc exterieur straat' },
]

export default function PhotoStrip() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 h-72 md:h-80">
      {photos.map((p) => (
        <div key={p.src} className="img-wrap overflow-hidden relative">
          <Image src={p.src} alt={p.alt} fill className="object-cover" />
        </div>
      ))}
    </section>
  )
}
