import React, { useContext, useRef } from "react";
import './ContactForm.scss';
import { store } from '../../App';
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";



const ContactForm = () => {
  const [state, _dispatch] = useContext(store);
  const form = useRef<any>(null);

  const input1 = useRef(null),
    input2 = useRef(null),
    input3 = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    toast.success(
      "Message sent!",
      {
        position: "top-left",
        style: {
          border: state.darkmode ? "2px solid hsla(0,0%,51.4%,.16)" : "1px solid #ebebeb",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
          borderRadius: "14px",
          fontFamily: "Inter",
          color: state.darkmode ? "white" : "#1d1d1f",
          fontSize: "14px",
          backgroundColor: state.darkmode ? "#141414" : ""
        },
      }
    );

    emailjs
      .sendForm(
        "default_service",
        "template_uxfphw9",
        form.current,
        "w3q1SEfedSizS4E66"
      )
      .then(
        (result: any) => {
          console.log(result);
        },
        (error: any) => {
          console.log(error);
        }
      );

    // clear fields after submitting message
    const fields = document.getElementsByClassName("field");
    const field1 = fields[0] as HTMLInputElement,
      field2 = fields[1] as HTMLInputElement,
      field3 = fields[2] as HTMLTextAreaElement;
    field1.value = "";
    field2.value = "";
    field3.value = "";
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`contact-form 
        ${state.darkMode ? 'dark-card' : 'light-card'}
        ${state.darkMode ? 'dark-shadow' : 'light-shadow'}
        `}
    >
      <div className='input-container'>
        <input
          ref={input1}
          type="text"
          name='user_name'
          placeholder='Your Name'
          className={`field data ${state.darkMode ? 'dark-field' : 'light-field'}`}
          required
        />
        <input
          ref={input2}
          type="email"
          name='user_email'
          placeholder='Your Email'
          className={`field data ${state.darkMode ? 'dark-field' : 'light-field'}`}
          required
        />
      </div>
      <textarea
        ref={input3}
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