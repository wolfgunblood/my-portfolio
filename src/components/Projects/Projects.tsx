import { useContext } from 'react';
import './Projects.scss';
import { store } from '../../App';
// import { motion } from 'framer-motion';
import Project from '../Project/Project';
import { motion } from "framer-motion";


const Projects = () => {
  const [ state, _dispatch ] = useContext(store);

  
  return (
    <div 
        className={`projects-container
          ${state.darkMode ? 'dark-bg-1' : 'light-bg-1'}
        `}
    >
      <div className='anchor' id='portfolio'/>
      <motion.h3
        className={`eyebrow ${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h3>
      <motion.h3
        className={`heading ${state.darkMode ? 'dark-heading' : 'light-heading'}`}
        initial={{ y: 250 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        Preview of my Projects
      </motion.h3>
      <article className='project'>
        <Project index={0}/>
        <Project index={1}/>
        <Project index={2} />
        <Project index={3} />
      </article>
    </div>
  )
}

export default Projects