import "./ContactMe.css"
import {motion} from "framer-motion"

function ContactMe() {
  return (
    <div id="contact" className="Contact-Container">
      <motion.div
        initial = {{opacity: 0, scale: 0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1, ease: "easeInOut"}} 
        className="Contact-Header">
        Contact Me
      </motion.div>
    </div>
  )
}

export default ContactMe