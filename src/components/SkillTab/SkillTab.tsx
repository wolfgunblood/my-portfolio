import React,{ useContext } from 'react';
import { store } from '../../App';
import './SkillTab.scss';
import { motion } from 'framer-motion';
// import Imgae from '../Image/Imgae';
import Image from '../Image/Image';
import {
  Javascript,
  HTML,
  CSS,
} from '../../assets';

const SkillTab = ({topic}) => {

  const [ state, dispatch ] = useContext(store);

  return (
    <motion.div
      className={`skill-tab-container ${state.darakMode ? "dark-card": "light-card"}`}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5,type: "spring",bounce: 0.3 }}
    >
      {topic === "languages" ? (
        <div className='skill-tab-list languages'>
          <Image source={Javascript} name="JavaScript" />
          <Image source={HTML} name="HTML" />
          <Image source={CSS} name="CSS" />
        </div>
      ) : null
    }
    </motion.div>
  )
}

export default SkillTab