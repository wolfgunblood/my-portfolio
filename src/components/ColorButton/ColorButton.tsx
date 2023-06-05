import { useContext,useState } from 'react';
import './ColorButton.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import { MdOutlineInvertColors } from 'react-icons/md';
import { IconContext } from "react-icons";


const ColorButton = () => {
    const [state, dispatch] = useContext(store);
    //   const { theme } = state;
    const [hovered, setHovered] = useState(false);

    const handleIconHover = () => {
        setHovered(!hovered);
    };

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
                    onMouseEnter={handleIconHover}
                    onMouseLeave={handleIconHover}
                >
                    <IconContext.Provider value={{ className: hovered ? "icon-hover" : "icon" }}>
                        <MdOutlineInvertColors />
                    </IconContext.Provider>
                    <h4>Color Mode</h4>
                </motion.button>
            }
        </>
    )
}


export default ColorButton
