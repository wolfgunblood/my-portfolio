import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';
import './Contact.scss';




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
    </div>
  )
}

export default Contact