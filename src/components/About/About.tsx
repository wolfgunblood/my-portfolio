import { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const [state, _dispatch] = useContext(store);

  return (
    <div className={`aboutme-container ${state.darkMode ? 'dark-bg-2' : 'light-bg-2'}`}>
      <div className='anchor' id='about-me' />
      <motion.h3
        className={`start eyebrow ${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h3>
      <motion.h1
        className={`start heading ${state.darkMode ? 'dark-heading' : 'light-heading'}`}
        initial={{ opacity: 0, y: 150 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My Tech Stack and Expertise.
      </motion.h1>

      <div className='intro-container'>
        <section
          className={`left-intro big-card ${state.darkMode ? 'dark-card' : 'light-card'}`}
        >
          <h3
            className={`${state.darkMode ? 'dark-heading' : 'light-heading'}`}
          >Full Stack Developer</h3>
          <p
            className={`${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}
          >
            Starting with the fundamentals of HTML, CSS, and JavaScript, I embarked on a self-guided programming journey, continuously expanding my skills beyond the basics. 
            Today, my primary focus lies in TypeScript and React, leveraging the benefits of type safety and enhanced development experience. 
            Depending on the specific requirements of each project, I make use of either Redux or Context API for efficient state management.
            To streamline my CSS workflow and promote maintainability, I rely on SASS as a pre-processor.
            Furthermore, I find great joy in incorporating motion libraries like Framer Motion to infuse my applications with captivating animations and interactive elements. 
            Beyond coding, I am enthusiastic about trading stocks and options, as well as pursuing music production as engaging hobbies during my free time.
          </p>
        </section>

      </div>
    </div>
  )
}

export default About