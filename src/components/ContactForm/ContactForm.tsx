import React, { useContext, useRef } from 'react';
import './ContactForm.scss';
import { store } from '../../App';

const ContactForm = () => {
  const [ state, dispatch ] = useContext(store);

  return (
    <form 
      onSubmit={() => {}}
      className={`contact-form 
        ${state.darkMode ? 'dark-card' : 'light-card'}
        ${state.darkMode ? 'dark-shadow' : 'light-shadow'}
        `}
    >
      <div  className='input-container'>
        <input 
          type="text"
          name='user_name'
          placeholder='Your Name'
          className={`field data ${state.darkMode ? 'dark-field' : 'light-field'}`}
          required 
        />
        <input 
          type="email"
          name='user_email'
          placeholder='Your Email'
          className={`field data ${state.darkMode ? 'dark-field' : 'light-field'}`}
          required 
          />
      </div>
      <textarea 
        name="message" 
        placeholder="Your Message for me"  
        className={`field ${state.darkMode ? 'dark-field' : 'light-field'}`}
        required 
      />
      <input 
        type="submit"
        value={"Submit"}
        className='submit' 
      />
    </form>
  )
}

export default ContactForm