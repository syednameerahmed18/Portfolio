import "./Hero.css"
import picture from '../../assets/syednameerahmed.jpg'

function Hero() {
  return (
    <div id="Hero" className="Hero-Container">
      <div className="Hero-Intro">
        <h1>Hi there,</h1>
        <h2>I am Syed Nameer Ahmed,</h2>
        <h3>I am a Bangalore based Software Developer</h3>
        <div className="Hero-Btn">
          <button>Let's Talk</button>
          <button>Download CV</button>
        </div>        
      </div>
      <div className="Hero-Picture">
        <img src={picture} alt="Syed Nameer Ahmed Picture"></img>
      </div>
    </div>
  )
}

export default Hero