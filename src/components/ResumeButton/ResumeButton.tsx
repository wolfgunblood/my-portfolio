import "./ResumeButton.scss";
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { IconContext } from "react-icons";

const ResumeButton = () => {
    const [state, dispatch] = useContext(store);
    //   const { theme } = state;
    const [hovered, setHovered] = useState(false);

    const handleTheme = () => {
        dispatch({ type: 'darkmode/TOGGLE' });
        if (state.darkMode) {
            toast('Hello Lightness!',
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
            toast('Hello Darkness!',
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

    const handleIconHover = () => {
        setHovered(!hovered);
      };

  return (
    <>
    <motion.button
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', duration: 0.2 }}
        className={`resume-button
        ${state.darkmode ? 'dark-theme-button' : 'light-theme-button'} 
    `}
        onClick={handleTheme}
        onMouseEnter={handleIconHover} 
        onMouseLeave={handleIconHover}
    >
        <IconContext.Provider value={{ className: hovered ? "icon-hover" : "icon" }}>
            {state.darkMode ? (
                <MdOutlineLightMode  />
            ) : (
                <MdDarkMode />
            )}
        </IconContext.Provider>
        <h4>
            {"Resume"}
        </h4>
    </motion.button>
</>
  )
}

export default ResumeButton