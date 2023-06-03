import { useContext } from 'react';
import './ColorPalette.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";

const ColorPalette = () => {
    const [state, dispatch] = useContext(store);
  return (
    <>
    <motion.button
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 0.2 }}
        className={`color-button
        ${state.darkmode ? 'dark-color-palette' : 'light-color-palette'} 
    `}
        // onClick={handleTheme}
    >
        <ul className='color-palette'>
            <li>
                <button className='color-btn color-btn1'></button>
            </li>
            <li>
                <button className='color-btn color-btn2'></button>
            </li>
            <li>
                <button className='color-btn color-btn3'></button>
            </li>
            <li>
                <button className='color-btn color-btn4'></button>
            </li>
        </ul>
    </motion.button>
</>
  )
}

export default ColorPalette