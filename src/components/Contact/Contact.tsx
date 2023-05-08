import React, { useContext } from 'react';
import { store } from '../../App';
import { motion } from 'framer-motion';



const Contact = () => {

  const [state, dispatch] = useContext(store);
  return (
    <div>Contact</div>
  )
}

export default Contact