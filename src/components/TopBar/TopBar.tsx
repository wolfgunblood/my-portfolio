import { useContext } from 'react';
import { store } from '../../App';
import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import { IconContext } from "react-icons";
import './TopBar.scss';

const TopBar = ({active,handle,titleName,index,check} :any) => {
    const [state, _dispatch] = useContext(store);
    
    return (
        <div id={`${handle}`} className={`windows-top-bar ${state.darkMode ? "dark-top-bar" : check ? "light-top-bar-preview" : "light-top-bar-info"}`}>
            {/* <div className='windows-controls'>
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
            </div> */}
            <div className='topbar-heading'>
                <h4 className = {` ${state.darkMode ? 'dark-heading' : 'light-heading'}`} >{titleName}</h4>
                {/* {console.log(titleName)} */}
            </div>
        </div>
    )
}

export default TopBar