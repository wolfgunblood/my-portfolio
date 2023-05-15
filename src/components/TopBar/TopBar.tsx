import React,{ useContext } from 'react';
import { store } from '../../App';
import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import { IconContext } from "react-icons";
import './TopBar.scss';

const TopBar = ({active}) => {
    const [state, dispatch] = useContext(store);

    return (
        <div className={`windows-top-bar ${state.darkMode ? "dark-top-bar" : "light-top-bar"}`}>
            <div className='windows-controls'>
                <button
                    className={`windows-control ${active ? 'close-window' : state.darkMode ? 'notActive-darkMode' :  'notActive-lightMode'}`}
                >
                    <IconContext.Provider value={{ className: 'windows-control-icon', size: '1.5em' }}>
                        <GrFormClose />
                    </IconContext.Provider>
                </button>
                <button
                    className= {`windows-control ${active ? 'minimize-window' : state.darkMode ? 'notActive-darkMode' :  'notActive-lightMode'}`}
                >
                    <IconContext.Provider value={{ className: 'windows-control-icon', size: '1.5em' }}>
                        <GrFormSubtract />
                    </IconContext.Provider>
                </button>
                <button
                    className={`windows-control ${active ? 'maximize-window' : state.darkMode ? 'notActive-darkMode' :  'notActive-lightMode'}`}
                >
                    <IconContext.Provider value={{ className: 'windows-control-icon', size: '1.5em' }}>
                        <CgExpand />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    )
}

export default TopBar