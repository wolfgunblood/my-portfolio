import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';
import './Contact.scss';
import ContactForm from '../ContactForm/ContactForm';
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg';




const Contact = () => {

  const [state, dispatch] = useContext(store);
  return (
    <div
      className={`contact-container 
        ${state.darkMode ? 'dark-bg-1' : 'light-bg-1'}
      `}
    >
      <div className='anchor' id='contact' />
      <motion.h3
        className={`eyebrow
          ${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}
        `}
        initial={{ y:200 }}
        whileInView={{ y:0 }}
        viewport={{ once:true }}
      >
        Contact
      </motion.h3>
      <motion.h1
        className={`heading
          ${state.darkMode ? 'dark-heading' : 'light-heading'}
        `}
        initial={{ y:150 }}
        whileInView={{ y:0 }}
        viewport={{ once:true }}
      >
        Reach out to me any way you want. 
      </motion.h1>
      <p className={`${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}>
        Fill in the form on te left side with you information and I will get back to you.
      </p>

      <div className='contact-data'>
        <motion.div
          initial={{ x:-250,opacity:0}}
          whileInView={{ x:0,opacity:1 }}
          viewport={{ once:true }}
          transition={{ 
            opacity:{ duration: 0.3, delay: 0.3 },
            x:{ duration: 0.8, type: 'spring', delay:0.25 },
          }}
        >
          <ContactForm />
        </motion.div>

        <motion.section
          className={`contact-socials-container 
            ${state.darkMode ? 'dark-card' : 'light-card'}
            ${state.darkMode ? 'dark-shadow' : 'light-shadow'}
          `}
          initial={{ x:250, opacity:0 }}
          whileInView={{ x:0, opacity:1 }}
          viewport={{ once:true }}
          transition={{ 
            opacity:{ duration: 0.3, delay: 0.3 },
            x:{ duration: 0.8, type: 'spring', delay:0.25 },
          }}
        >
          <button
            className={`contact-socials-item linkedin 
              ${state.darkMode ? 'dark-field' : ''}
            `}
          >
            <LinkedIn className={`svg ${state.darkMode ? 'dark-svg' : 'light-svg'}`} />
            LinkedIn
          </button>
        </motion.section>
      </div>
    </div>
  )
}

export default Contact