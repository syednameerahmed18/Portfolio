import "./Projects.css" 
import Ai from "../../assets/AiVoiceAssistant.jpg"
function Projects() {
  return (
    <div id="projects" className="Project-Container">
        <div className="Project-Header">Projects</div>
        <div className="Projects">
          <div className="Project-1">
            <img src={Ai} alt="Project Picture"></img>
            <h1>AI Voice Assistant Using Python</h1>
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