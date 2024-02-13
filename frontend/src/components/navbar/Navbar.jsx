import "../hero/Hero"
import "./Navbar.css"
import "../hero/Hero"
import "../aboutMe/AboutMe"
import "../skills/Skills"
import "../projects/Projects"
import "../contactme/ContactMe"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react"


function Navbar() {
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle("Hamburger")
  }

  return (
    <div className="Container">
      <div className="Navbar-Logo">
        <h3>Syed Nameer Ahmed</h3>
      </div>
      <div className="Navbar-elements">
        <a href="/">Home</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div >
      
      <div className="Navbar-Hamburger">
          <FontAwesomeIcon className="Hamburger-icon" icon={faBars} onClick={showNavbar}/>
      </div>
      
      
      <div ref={navRef} className="Hamburger" >
        <div className="Hamburger-elements">
          <FontAwesomeIcon className="Hamburger-close" icon={faXmark} onClick={showNavbar}/>
          <a href="/">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar