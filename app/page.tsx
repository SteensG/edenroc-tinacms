import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProjectIntro from '@/components/ProjectIntro'
import Quote from '@/components/Quote'
import Voordelen from '@/components/Voordelen'
import InteriorBreak from '@/components/InteriorBreak'
import Aanbod from '@/components/Aanbod'
import PhotoStrip from '@/components/PhotoStrip'
import Ligging from '@/components/Ligging'
import Contact from '@/components/Contact'
import Mentres from '@/components/Mentres'
import PlanModal from '@/components/PlanModal'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProjectIntro />
      <Quote
        variant="dark"
        text={<>Wakker worden aan het water.<br />Elke dag opnieuw.</>}
      />
      <Voordelen />
      <InteriorBreak />
      <Quote
        variant="light"
        text={<>Kleinschalig woonproject.<br />Groot gevoel.</>}
      />
      <Aanbod />
      <PhotoStrip />
      <Ligging />
      <Quote
        variant="border"
        text='"Eden Roc ligt in een rustige, residentiële buurt in Lede, omringd door groen en water"'
      />
      <Contact />
      <Mentres />
      <PlanModal />
      <Footer />
    </>
  )
}
