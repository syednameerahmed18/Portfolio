import "./Projects.css" 
import { motion } from "framer-motion"
import Ai from "../../assets/AiVoiceAssistant.jpg"


function Projects() {
  return (
    <div id="projects" className="Project-Container">
        <motion.div 
          className="Project-Header"
          initial = {{opacity: 0, scale: 0.5}}
          whileInView = {{opacity:1, scale:1}}
          transition={{duration:1, ease: "easeInOut", delay:0.3}}
          >
          Projects
        </motion.div>
        <div className="Projects">
          <div className="Project-1">
            <img src={Ai} alt="Project Picture"></img>
            <div className="Project-1-Desc">
              <a href="https://github.com/syednameerahmed18/Ai-voice-assistant/tree/main"><h1>AI Voice Assistant Using Python</h1></a>
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
        </div>
    </div>
  )
}

export default Projects