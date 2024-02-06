import "./Projects.css" 
import { motion } from "framer-motion"
import Ai from "../../assets/AiVoiceAssistant.jpg"
import Brain from "../../assets/BrainTumor.jpeg"
import Crud from "../../assets/crud.webp"
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
          
          <div className="Project">
            <motion.img
               initial = {{opacity: 0, scale: 0.5}}
               whileInView = {{opacity:1, scale:1}}
               transition={{duration:1, ease: "easeInOut", delay:0.2}} 
              src={Ai} alt="Project Picture"></motion.img>
            <motion.div 
                className="ProjectDesc"
                initial = {{opacity: 0, scale: 0.5}}
                whileInView = {{opacity:1, scale:1}}
                transition={{duration:1, ease: "easeInOut", delay:0.4}}>
              <a href="https://github.com/syednameerahmed18/Ai-voice-assistant/tree/main"><h1>AI Voice Assistant Using Python <FaExternalLinkAlt className="Projectlink"/></h1></a>
              <p>This Project is built using Python packages</p>
              <p>like pyttsx3, speech_recognition, wikipedia</p>
              <p>webbrowser, googlesearch.</p>
            </motion.div>
          </div>

          <motion.div 
              className="Project"
              initial = {{opacity: 0, scale: 0.5}}
              whileInView = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.2}}>
            <motion.img
               initial = {{opacity: 0, scale: 0.5}}
               whileInView = {{opacity:1, scale:1}}
               transition={{duration:1, ease: "easeInOut", delay:0.4}} 
              src={Brain} alt="Project Picture"></motion.img>
            <motion.div 
                className="ProjectDesc"
                initial = {{opacity: 0, scale: 0.5}}
                whileInView = {{opacity:1, scale:1}}
                transition={{duration:1, ease: "easeInOut", delay:0.5}}>
              <a href="https://github.com/syednameerahmed18/Brain-Tumor-Detection"><h1>Brain Tumor Detection <FaExternalLinkAlt className="Projectlink"/></h1></a>
              <p>This Project is built using Machine Learning, algorithm</p>
              <p>used in this project is Logistic Regression and SVC,</p>
              <p>used matplotlib for visualization.</p>
            </motion.div>        
          </motion.div>
          <motion.div 
            className="Project"
            initial = {{opacity: 0, scale: 0.5}}
            whileInView = {{opacity:1, scale:1}}
            transition={{duration:1, ease: "easeInOut", delay:0.3}}>
            <motion.img
               initial = {{opacity: 0, scale: 0.5}}
               whileInView = {{opacity:1, scale:1}}
               transition={{duration:1, ease: "easeInOut", delay:0.4}} 
              src={Crud} alt="Project Picture"></motion.img> 
            <motion.div 
                className="ProjectDesc"
                initial = {{opacity: 0, scale: 0.5}}
                whileInView = {{opacity:1, scale:1}}
                transition={{duration:1, ease: "easeInOut", delay:0.5}}>
              <a href="https://github.com/syednameerahmed18/CRUD"><h1>CRUD Operations Using MERN <FaExternalLinkAlt className="Projectlink"/></h1></a>
              <p>This Project is built using MongoDb, Express js,React js, </p>
              <p>and Node js. This is a simple project to demonstrate</p>
              <p>CRUD Operations</p>
            </motion.div>      
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Projects