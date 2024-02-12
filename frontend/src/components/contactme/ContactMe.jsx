import "./ContactMe.css"
import {motion} from "framer-motion"
import { FaWhatsapp } from "react-icons/fa";

function ContactMe() {
  // Function to Redirect to Whatsapp chat
  const handleWhatsapp = () => {
    const phoneNumber = "+918310782008"
    const whatsappURL = `https://wa.me/${phoneNumber}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <div id="contact" className="Contact-Container">
      <motion.div
        initial = {{opacity: 0, scale: 0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1, ease: "easeInOut"}} 
        className="Contact-Header">
        Contact Me
      </motion.div>
      <div className="Contact-Icons">
        <FaWhatsapp className="Wa-Icon" onClick={handleWhatsapp}/>
      </div>
    </div>
  )
}

export default ContactMe