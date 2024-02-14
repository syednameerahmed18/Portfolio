import "./Footer.css"
import { AiOutlineCopyright } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const handleInsta = () => {
    const instaURL = "https://www.instagram.com/syed_nameer_ahmed/"
    window.open(instaURL, "_blank")
  }

  const handleGit = () => {
    const gitURL = "https://github.com/syednameerahmed18"
    window.open(gitURL, "_blank")
  }

  const handleLinkedin = () => {
    const linkedinURL = "https://www.linkedin.com/in/syed-nameer-034378205/"
    window.open(linkedinURL, "_blank")
  }

  return (
    <div className="Footer-Container">
      <div className="Left-Footer">
        <div className="Copyright">
            <p>Copyright</p>
            <AiOutlineCopyright/>
        </div>
        <div>
          <p>2024</p>
        </div>
      </div>

      <div className="Vertical-Bar"></div>
      <div className="Footer-Items">
        <div className="Footer-Content">
          <p>Designed & Developed by</p>
        </div>
        <div className="Footer-Title">
          <h1>Syed Nameer Ahmed</h1>
        </div>
      </div>
      <div className="Vertical-Bar"></div>
      <div className="Links">
        <p>Follow me on: </p>
        <div className="Link-Icons">
          <FaInstagram className="Insta" onClick={handleInsta}/>
          <FaGithub className="Github" onClick={handleGit}/>
          <FaLinkedin className="LinkedIn-Footer" onClick={handleLinkedin}/>
        </div>
      </div>
    </div>
  )
}

export default Footer