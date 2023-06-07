import { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';
import './Contact.scss';
import ContactForm from '../ContactForm/ContactForm';
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineGithub } from "react-icons/ai";
import toast from "react-hot-toast";

const Contact = () => {

  const [state, _dispatch] = useContext(store);
  const copyEmail = () => {
    navigator.clipboard.writeText('jalajdorai@gmail.com');
    toast.success('Email copied successfully!', {
      icon: "📧",
      position: "top-left",
      style: {
        border: state.darkMode
          ? "2px solid hsla(0,0%,51.4%,.16)"
          : "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        color: state.darkMode ? "#fff" : "#000",
        fontSize: "14px",
        borderRadius: "14px",
        backgroundColor: state.darkMode ? "#141414" : "",
      }
    });
  };
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
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h3>
      <motion.h1
        className={`heading
          ${state.darkMode ? 'dark-heading' : 'light-heading'}
        `}
        initial={{ y: 150 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        Reach out to me any way you want.
      </motion.h1>
      <p className={`${state.darkMode ? 'dark-eyebrow' : 'light-eyebrow'}`}>
        Fill in the form on te left side with you information and I will get back to you.
      </p>

      <div className='contact-data'>
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: 'spring', delay: 0.25 },
          }}
          className='contact-form-container'
        >
          <ContactForm />
        </motion.div>

        <motion.section
          className={`contact-socials-container 
            ${state.darkMode ? 'dark-card' : 'light-card'}
            ${state.darkMode ? 'dark-shadow' : 'light-shadow'}
          `}
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.3, delay: 0.3 },
            x: { duration: 0.8, type: 'spring', delay: 0.25 },
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jalajdorai/"
          >
            <button
              className={`contact-socials-item linkedin 
            
            ${state.darkMode ? 'dark-field' : ''}
            `}
            >
              <FaLinkedinIn className={`svg ${state.darkMode ? 'dark-svg' : 'light-svg'}`} />
              LinkedIn
            </button>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/jalaj_dorai"
          >

            <button
              className={`contact-socials-item  twitter
            ${state.darkMode ? 'dark-field' : ''}
            `}
            >
              <FaTwitter className={`svg ${state.darkMode ? 'dark-svg' : 'light-svg'}`} />
              Twitter
            </button>
          </a>
          <a
            target="_blank"
            href="https://wa.me/+917209787530"
          >

            <button
              className={`contact-socials-item  whatsapp
            ${state.darkMode ? 'dark-field' : ''}
            `}
            >
              <FaWhatsapp className={`svg ${state.darkMode ? 'dark-svg' : 'light-svg'}`} />
              WhatsApp
            </button>
          </a>
          <a
            target="_blank"
            href="https://github.com/wolfgunblood"
          >

            <button
              className={`contact-socials-item github
          ${state.darkMode ? 'dark-field' : ''}
          `}
            >
              <AiOutlineGithub className={`svg ${state.darkMode ? 'dark-svg' : 'light-svg'}`} />
              Github
            </button>

          </a>
          <button
            className='email'
            onClick={copyEmail}

          >
            {"Copy My Email"}
          </button>
        </motion.section>
      </div>
    </div >
  )
}

export default Contact