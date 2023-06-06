import "./ResumeButton.scss";
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { store } from '../../App';
import toast from "react-hot-toast";
import { IoDocumentTextOutline } from 'react-icons/io5';
import { IconContext } from "react-icons";
import Resume from "../../assets/Resume/jalajCV.pdf"

const ResumeButton = () => {
    const [state, _dispatch] = useContext(store);
    //   const { theme } = state;
    const [hovered, setHovered] = useState(false);

    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Resume.pdf';
        link.click();

        if (!state.darkMode) {
            toast.success('Download Successful',
                {
                    icon: '👏',
                    position: "top-left",
                    style: {
                        borderRadius: '10px',
                        background: '#fff',
                        color: '#333',
                    },
                });
        }
        else {
            toast.success('Download Successful',
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
        ${state.darkMode ? 'dark-theme-button' : 'light-theme-button'} 
    `}
                onClick={handleDownload}
                onMouseEnter={handleIconHover}
                onMouseLeave={handleIconHover}
            >
                <IconContext.Provider value={{ className: state.darkMode ?  "icon-dark" : hovered ? "icon-hover" : "icon" }}>
                    <IoDocumentTextOutline size={18} />
                </IconContext.Provider>
                <h4>
                    {"Resume"}
                </h4>
            </motion.button>
        </>
    )
}

export default ResumeButton