import React from 'react'
import ContactForm from '../../components/ContactForm'
import HeroSection from '../../components/HeroSection'
import "./index.scss"

const About = () => {
  const name = "Chairman's note";
const aboutme =
  "Experienced web developer creating engaging websites. Let's bring your digital vision to life!";
  return (
    <div className='about-page'>
      <HeroSection name={name} aboutme={aboutme} />
      <ContactForm/>
    </div>
  )
}

export default About