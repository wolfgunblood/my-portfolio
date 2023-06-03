import { useContext } from 'react';
import './ColorPalette.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import updateSysColor from '../../utils/helpers/updateSysColor';
import { AiOutlineCloseCircle,AiOutlineCheckCircle } from "react-icons/ai";



const ColorPalette = () => {
    const [state, dispatch] = useContext(store);

    const colorChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        dispatch({ type: "currentColor/TOGGLE", payload: target.id  });

        updateSysColor(target.id);
    }
    const handleColor = () => {
        dispatch({ type: "colormode/TOGGLE" });
        toast.error("Color mode Closed",
        {
                position: "top-left",
                style: {
                    borderRadius: '10px',
                    background: '#fff',
                    color: '#333',
                },
            });
    
    }

return (
    <>
        {!state.darkMode && !state.colorMode &&
            (<motion.button
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 0.2 }}
                className={`color-palette-btn
                    ${state.darkode ? 'dark-color-palette' : 'light-color-palette'} 
                    `}
            // onClick={handleTheme}
            >
                <ul className='color-palette'>
                    <li>
                        <button className='color-btn color-btn1' id='babybrown' onClick={colorChange}>
                            {state.currentColor === 'babybrown' && <AiOutlineCheckCircle size={18} />}
                        </button>
                    </li>
                    <li>
                        <button className='color-btn color-btn2' id='babyblue' onClick={colorChange}>
                            {state.currentColor === 'babyblue' && <AiOutlineCheckCircle size={18} />}
                        </button>
                    </li>
                    <li>
                        <button className='color-btn color-btn3' id='babypink' onClick={colorChange}>
                            {state.currentColor === 'babypink' && <AiOutlineCheckCircle size={18} />}
                        </button>
                    </li>
                    <li>
                        <button className='color-btn color-btn4' id='babypurple' onClick={colorChange}>
                            {state.currentColor === 'babypurple' && <AiOutlineCheckCircle size={18} />}
                        </button>
                    </li>
                    <li>
                        <button onClick={handleColor} className='close-btn'>
                            <AiOutlineCloseCircle size={25} />
                        </button>
                    </li>
                </ul>
            </motion.button>)
        }
    </>
)
}

export default ColorPalette