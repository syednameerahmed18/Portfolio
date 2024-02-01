import AboutMe from "../aboutMe/AboutMe"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"
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
    </>
  )
}

export default MainPage