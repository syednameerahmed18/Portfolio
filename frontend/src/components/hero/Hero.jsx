import "./Hero.css"
import picture from '../../assets/syednameerahmed.jpg'
import {motion} from "framer-motion"

function Hero() {
  return (
    <div id="Hero" className="Hero-Container">
      <div className="Hero-Intro">
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}>
          <h1>Hi there,</h1>
          <h2>I am Syed Nameer Ahmed,</h2>
          <h3>I am a Bangalore based Software Developer</h3>
        </motion.div>
        <motion.div
         className="Hero-Btn"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}>
          <button>Let's Talk</button>
          <button>Download CV</button>
        </motion.div>        
      </div>
      <div className="Hero-Picture">
        <img src={picture} alt="Syed Nameer Ahmed Picture"></img>
      </div>
    </div>
  )
}

export default Hero