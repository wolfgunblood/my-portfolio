import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  const [state, dispatch] = useContext(store);

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

      {/* <div className='intro-container'>
        <section
          className={`left-intro big-card ${state.darkMode ? 'dark-card' : 'light-card'}`}
        >
          <h3
            className={`${state.darkMode ? 'dark-heading' : 'light-heading'}`}
          >React Developer</h3>
          <p
            className={`${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}
          >
            Starting with HTML, CSS and JavaScript,
            I taught myself programming on my own.
            However, nowadays there is a lot to discover far beyond vanilla JavaScript:
            Today I work with TypeScript in React, use Redux or Context for state management
            and use SASS as a pre-processor for CSS.
            As you can see, I also like to work with motion libraries -
            e.g. Framer Motion.
          </p>
        </section>
        <section className='right-intro'>
          <motion.div
            className={`small-card ${state.darkMode ? 'dark-card' : 'light-card'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className='card-top'>
              <h2>
                200
              </h2>
            </div>
          </motion.div>
          <motion.div
            className={`small-card ${state.darkMode ? 'dark-card' : 'light-card'}`}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className='card-top'>
              <h2>
                200
              </h2>
            </div>
          </motion.div>
          <motion.div
            className={`small-card ${state.darkMode ? 'dark-card' : 'light-card'}`}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className='card-top'>
              <h2>
                200
              </h2>
            </div>
          </motion.div>
        </section>
      </div> */}
    </div>
  )
}

export default About