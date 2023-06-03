import { useContext } from 'react';
import './ColorButton.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ColorButton = () => {
    const [state, dispatch] = useContext(store);
    //   const { theme } = state;

    const handleColor = () => {
        dispatch({ type: "colormode/TOGGLE" });
        { console.log(state) }
        if (!state.darkMode) {
            toast.success('Hello Color Mode!',
                {
                    position: "top-left",
                    style: {
                        borderRadius: '10px',
                        background: '#fff',
                        color: '#333',
                    },
                });
        }
        else {
            toast('Hello Color Mode!',
                {
                    icon: '👏',
                    position: "top-left",
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
    }

    return (
        <>
            {!state.darkMode && state.colorMode &&
                <motion.button
                    initial={{ x: -150 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', duration: 0.2 }}
                    className={`color-button
                ${state.darkMode ? 'dark-theme-button' : 'light-theme-button'} 
                ${state.colorMode ? 'color-pad' : 'close-pad'} 
            `}
                    onClick={handleColor}
                >
                    
                        <h4>Colors</h4>
                </motion.button>
            }
        </>
    )
}


export default ColorButton
