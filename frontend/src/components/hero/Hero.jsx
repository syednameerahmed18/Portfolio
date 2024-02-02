import "./Hero.css"
import picture from '../../assets/syednameerahmed.jpg'
import {motion} from "framer-motion"

function Hero() {
  return (
    <div id="Hero" className="Hero-Container">
      <div className="Hero-Intro">
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
          <h1>Hi there,</h1>
          
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay:0.2 }}>
          <h2>I am Syed Nameer Ahmed,</h2>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay:0.4 }}>
          <h3>I am a Bangalore based Software Developer</h3>
        </motion.div>
        <motion.div
         className="Hero-Btn"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay:0.6 }}>
          <button>Let's Talk</button>
          <button>Download CV</button>
        </motion.div>        
      </div>
      <motion.div 
        className="Hero-Picture"
        initial={{opacity: 0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration: 1, ease: "easeInOut"}}
        >
        <img src={picture} alt="Syed Nameer Ahmed Picture"></img>
      </motion.div>
    </div>
  )
}

export default Hero