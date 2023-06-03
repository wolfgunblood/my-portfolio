import { useContext } from 'react';
import './ColorPalette.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import updateSysColor from '../../utils/helpers/updateSysColor';

const ColorPalette = () => {
    const [state, dispatch] = useContext(store);

    const colorChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        
        updateSysColor(target.id);
    }
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
                <button className='color-btn color-btn1' id='babybrown' onClick={colorChange}></button>
            </li>
            <li>
                <button className='color-btn color-btn2' id='babyblue' onClick={colorChange}></button>
            </li>
            <li>
                <button className='color-btn color-btn3' id='babypink' onClick={colorChange}></button>
            </li>
            <li>
                <button className='color-btn color-btn4' id='babypurple' onClick={colorChange}></button>
            </li>
        </ul>
    </motion.button>
</>
  )
}

export default ColorPalette