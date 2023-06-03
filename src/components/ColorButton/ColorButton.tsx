import { useContext } from 'react';
import './ColorButton.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";

const ColorButton = () => {
    const [state, dispatch] = useContext(store);
    //   const { theme } = state;

    const handleColor = () => {
        dispatch({type:"colormode/TOGGLE"});
        {console.log(state)}
        if (!state.darkMode) {
            toast('Hello Color Mode!',
                {
                    icon: '☀',
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
            <motion.button
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', duration: 0.2 }}
                className={`color-button
                ${state.darkmode ? 'dark-theme-button' : 'light-theme-button'} 
            `}
                onClick={handleColor}
            >
                <h4>
                    {state.colorMode ? 'Colors' : 'Close'}
                    
                </h4>
            </motion.button>
        </>
    )
}


export default ColorButton
