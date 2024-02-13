import "./Footer.css"
import { AiOutlineCopyright } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Copyright">
        <p>Copyright</p>
        <AiOutlineCopyright/>
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
        <p>Follow me on</p>
        <div className="Link-Icons">
          <FaInstagram className="Insta"/>
          <FaGithub className="Github"/>
          <FaLinkedin className="LinkedIn"/>
        </div>
      </div>
    </div>
  )
}

export default Footer