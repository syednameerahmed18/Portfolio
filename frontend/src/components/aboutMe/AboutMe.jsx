import './AboutMe.css'
import {motion} from "framer-motion"

function AboutMe() {
  return (
    <div id="about" className="About-Container">
        <motion.div 
          className="About-Header"
          initial = {{opacity: 0, scale: 0.5}}
          animate = {{opacity:1, scale:1}}
          transition={{duration:1, ease: "easeInOut",}}
          >
            <h1>About Me</h1>
        </motion.div>
        <div className="About-Para">
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.1}}>
                I am a Post-Graduate with a Master's Degree in Computer Application,
            </motion.p>
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.2}}>
              I graduated from Presidency College.
            </motion.p>
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.3}}>
              I completed my Under-Graduation from St.Joseph's College.
            </motion.p>
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.4}}>
              During my academics, I gained significant knowledge in programming languages like
            </motion.p>
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.5}}>
              Java, Python, JavaScript, HTML, CSS.
            </motion.p>
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.6}}>
              I am a passionate web-developer with a strong foundation in frontend framework like Reactjs
            </motion.p>
            <motion.p
              initial = {{opacity: 0, scale: 0.5}}
              animate = {{opacity:1, scale:1}}
              transition={{duration:1, ease: "easeInOut", delay:0.7}}>
              and also knowledge in backend framework like Expressjs, Nodejs and MongoDb.
            </motion.p>
        </div>

    </div>
  )
}

export default AboutMe