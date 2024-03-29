import "./Skills.css"
import cssIcon from "../../assets/css3-alt.svg"
import htmlIcon from "../../assets/html5.svg"
import jsIcon from "../../assets/js.svg"
import nodeIcon from "../../assets/node-js.svg"
import javaIcon from "../../assets/java.svg"
import pythonIcon from "../../assets/python.svg"
import reactIcon from "../../assets/react.svg"
import { SiExpress, SiMongodb, SiPowerbi,  } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import {motion} from "framer-motion"


function Skills() {
  return (
    <div id="skills" className="Skills-Container">
        <motion.div 
              initial = {{opacity: 0, scale: 0.5}}
              whileInView={{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut",}} 
              className="Skills-Header">
            Skills
        </motion.div>
        <motion.div
            initial = {{opacity: 0, scale: 0.5}}
            whileInView = {{opacity:1, scale:1}}
            transition={{duration:1, ease: "easeInOut", delay:0.2}} 
            className="Skills-ImageContainer">
            <div className="First-Image-Container">
                <img src={htmlIcon} alt="HTML Icon"/>    
                <img src={cssIcon} alt="Css Icon" />
                <img src={jsIcon} alt="Css Icon" />            
                <img src={javaIcon} alt="Css Icon" />
                <img src={pythonIcon} alt="Css Icon" />
                <SiMongodb className="Mongo-logo"/>
                <SiExpress className="Express-js-logo"/>
            </div>
            <div className="Second-Image-Container">
                <img src={reactIcon} alt="Css Icon" />
                <img src={nodeIcon} alt="Css Icon" />
                <SiPowerbi className="Powerbi-logo"/>
                <TbSql className="Sql-logo"/>
            </div>
        </motion.div>
    </div>
  )
}

export default Skills