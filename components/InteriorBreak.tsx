import Image from 'next/image'

export default function InteriorBreak() {
  return (
    <section className="relative h-[58vh] min-h-[380px]">
      <div className="img-wrap absolute inset-0">
        <Image
          src="/brand-assets/images/20260205_TricksForBricks_Lede_Int_A001.jpg"
          alt="Eden Roc leefruimte"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 break-grad" />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-md">
            <span className="sec-label-white">Interieur</span>
            <h3 className="text-white font-black text-3xl lg:text-4xl leading-[1.2] tracking-[-0.02em]">
              Ruime leefruimtes<br />met zicht op water en groen
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
