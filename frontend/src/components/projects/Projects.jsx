import "./Projects.css" 
import { motion } from "framer-motion"
import Ai from "../../assets/AiVoiceAssistant.jpg"
import { FaExternalLinkAlt } from "react-icons/fa";


function Projects() {
  return (
    <div id="projects" className="Project-Container">
        <motion.div 
          className="Project-Header"
          initial = {{opacity: 0, scale: 0.5}}
          whileInView = {{opacity:1, scale:1}}
          transition={{duration:1, ease: "easeInOut"}}
          >
          Projects
        </motion.div>
        <motion.div 
          className="Projects"
          initial = {{opacity: 0, scale: 0.5}}
          whileInView = {{opacity:1, scale:1}}
          transition={{duration:1, ease: "easeInOut"}}>
          <div className="Project-1">
            <motion.img
               initial = {{opacity: 0, scale: 0.5}}
               whileInView = {{opacity:1, scale:1}}
               transition={{duration:1, ease: "easeInOut", delay:0.2}} 
              src={Ai} alt="Project Picture"></motion.img>
            <div className="Project-1-Desc">
              <a href="https://github.com/syednameerahmed18/Ai-voice-assistant/tree/main"><h1>AI Voice Assistant Using Python <FaExternalLinkAlt className="Project-1-link"/></h1></a>
              <p>This Project was built using Python packages</p>
              <p>like pyttsx3, speech_recognition, wikipedia</p>
              <p>webbrowser, googlesearch</p>
            </div>
          </div>
          <div className="Project-2">
            Project 2
          </div>
          <div className="Project-3"> 
            Project 3
          </div>
        </motion.div>
    </div>
  )
}

export default Projects