import "./ContactMe.css"
import {motion} from "framer-motion"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function ContactMe() {
  // Function to Redirect to Whatsapp chat
  const handleWhatsapp = () => {
    const phoneNumber = "+918310782008"
    const whatsappURL = `https://wa.me/${phoneNumber}`
    window.open(whatsappURL, "_blank")
  }

  const handleLinkedIn = () => {
    const LinkedInURL = "https://www.linkedin.com/in/syed-nameer-034378205/"
    window.open(LinkedInURL, "_blank")
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
        <div className="Icon-Firstcolumn">
          <motion.div 
              className="Phone"
              initial = {{opacity: 0, scale: 0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay: 0.2}}>
                <FaPhoneSquareAlt  className="Ph-Icon" />
                <div className="Phone-Content">
                  <h5>Phone Number:</h5>
                  <p>+91 8310782008</p>
                </div>
            </motion.div>
            <motion.div
              className="LinkedIn"
              onClick={handleLinkedIn} 
              initial = {{opacity: 0, scale: 0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay: 0.4}}>
                <FaLinkedin  className="Li-Icon" />
                <div className="LinkedIn-Content">
                  <h5>Connect with me:</h5>
                  <p>linkedin.com/in/syed-nameer-034378205</p>
                </div>
            </motion.div>
             
        </div>
        <div className="Icon-Secondcolumn">
        <motion.div 
              onClick={handleWhatsapp}
              className="WhatsApp"
              initial = {{opacity: 0, scale: 0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay: 0.2}}>
                <FaWhatsapp  className="Wa-Icon" />
                <div className="WhatsApp-Content">
                  <h5>WhatsApp Me:</h5>
                  <p>+91 8310782008</p>
                </div>
            </motion.div> 
          
            <motion.div
              className="Gmail"
              onClick={handleLinkedIn} 
              initial = {{opacity: 0, scale: 0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay: 0.4}}>
                <BiLogoGmail  className="Gmail-Icon" />
                <div className="Gmail-Content">
                  <h5>E-mail Me:</h5>
                  <p>syednameerahmed18@gmail.com</p>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe