import React, { useContext } from 'react';
import './ThemeButton.scss'
import { motion } from 'framer-motion';
import { store } from '../../App';

const ThemeButton = () => {
    const [ state, dispatch ] = useContext(store);
    //   const { theme } = state;

    const handleTheme = () => {
        dispatch({ type: 'darkmode/TOGGLE' });
    }

    return (
        <motion.button
            initial={{ y: 150 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring',duration: 0.2 }}
            className={`theme-button
                ${state.darkmode ? 'dark-theme-button' : 'light-theme-button'} 
            `}
            onClick={handleTheme}
        >
            <h4>
                {state.darkMode ? 'To Light Mode' : 'To Dark Mode'}
            </h4>
        </motion.button>
    )
}

export default ThemeButton