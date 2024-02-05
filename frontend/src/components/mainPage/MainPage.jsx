import AboutMe from "../aboutMe/AboutMe"
import ContactMe from "../contactme/ContactMe"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
import Projects from "../projects/Projects"
import Skills from "../skills/Skills"
import "./MainPage.css"


function MainPage() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <div className="Horizontal-row"></div>
        <AboutMe/>
        <div className="Horizontal-row"></div>
        <Skills/>
        <div className="Horizontal-row"></div>
        <Projects/>
        <div className="Horizontal-row"></div>
        <ContactMe/>
    </>
  )
}

export default MainPage