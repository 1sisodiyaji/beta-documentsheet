import AboutCard from '../../components/About/AboutCard'
import AboutTabs from '../../components/About/AboutTabs'
import CTA from '../../components/common/CTA'
import HeroAbout from '../../components/About/HeroAbout'

const About = () => {
  return (
    <>
      <HeroAbout />
      <AboutTabs />
      <AboutCard />
      <CTA
        title="Create Your New Document Sheet with Ease"
        text=" Start your journey to effortless documentation. Create your sheets in a few clicks, and access them securely anytime, anywhere."
        btnText="Create Your Sheet"
      />
    </>
  )
}

export default About
