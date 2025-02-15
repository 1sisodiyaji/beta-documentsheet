import FiveCards from '../components/home/FiveCards'
import Hero from '../components/home/Hero'
import Cards from '../components/home/Cards'
import Scan from '../components/home/Scan'
import Empowering from '../components/home/Empowering'
import Testimonial from '../components/common/Testimonial'
import FAQ from '../components/home/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Scan />
      <Empowering />
      <FiveCards />
      <Testimonial />
      <FAQ />
    </>
  )
}
