import { useContext } from 'react';
import { store } from '../../App';
import './SkillTab.scss';
import { motion } from 'framer-motion';
// import Imgae from '../Image/Imgae';
import Image from '../Image/Image';
import {
  Javascript,
  HTML,
  CSS,
  ChakraUI,
  Figma,
  FramerMotion,
  Git,
  Github,
  Next,
  Next2,
  Photoshop,
  Python,
  React1,
  Redux1,
  SASS,
  Tailwind,
  Typescript,
  VSCode,
} from '../../assets';

const SkillTab = ({topic} :any) => {

  const [ state, _dispatch ] = useContext(store);

  return (
    <motion.div
      className={`skill-tab-container ${state.darkMode ? "dark-card": "light-card"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5,type: "spring",bounce: 0.3,delay: topic === "libraries" ? 0.35 : topic === "prototyping" ? 0.35 : topic === "code" ? 0.65 : 0.05 }}
    >
      <h3 className={`head ${state.darkMode ? "white": ""}`}>
        {topic === "languages" ? "Languages" : null}
        {topic === "libraries" ? "Libraries" : null}
        {topic === "frameworks" ? "Frameworks" : null}
        {topic === "collaborative" ? "Collaborative Work" : null}
        {topic === "prototyping" ? "Prototyping" : null}
        {topic === "code" ? "Code Editor" : null}
      </h3>
      {topic === "languages" ? (
        <div className='skill-tab-list languages'>
          <Image source={Typescript} name="Typescript" />
          <Image source={Javascript} name="JavaScript" />
          <Image source={HTML} name="HTML" />
          <Image source={CSS} name="CSS" />
          <Image source={SASS} name="SASS" />
          <Image source={Python} name="Python" />
        </div>
      ) : null}
      {topic === "frameworks" ? (
        <div  className='skill-tab-list'>
          <Image source={React1} name="React" />
          <Image source={state.darkMode ? Next2 : Next} name="Next.js" /> 
          <Image source={Tailwind} name="Tailwind" />

        </div>
      ): null}
      {topic === "libraries" ? (
        <div className='skill-tab-list'>
          <Image source={Redux1} name="Redux" />
          <Image source={FramerMotion} name="Framer Motion" />
          <Image source={ChakraUI} name="Chakra UI" /> 

        </div>
      ) : null}
      {topic === "collaborative" ? (
        <div className='skill-tab-list'>
          <Image source={Git} name="Git" /> 
          <Image source={Github} name="Github" />  

        </div>
      ): null}
      {topic === "prototyping" ? (
        <div className='skill-tab-list'> 
          <Image source={Figma} name="Figma" />
          <Image source={Photoshop} name="Photoshop" /> 
        </div>
      ): null}
      {topic === "code" ? (
        <div className='skill-tab-list'>
          <Image source={VSCode} name="VS Code" /> 
        </div>
      ): null}
    </motion.div>
  )
}

export default SkillTab