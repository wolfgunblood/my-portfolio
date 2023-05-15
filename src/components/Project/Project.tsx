import React, { useState, useContext } from 'react';
import TopBar from '../TopBar/TopBar';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';
import { store } from '../../App';
// import { motion } from 'framer-motion';
import { motion, Variants } from "framer-motion";
import Preview1 from '../../assets/images/preview1.png';
import Preview2 from '../../assets/images/preview2.png'
import Preview3 from '../../assets/images/preview3.png'
import Preview4 from '../../assets/images/preview4.png'



const Project = ({ index }) => {
    const [state, dispatch] = useContext(store);
    const [zActive, setZActive] = React.useState(false);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const loremipsum = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];
    const builtOn = [
        "Bulit using TypeScript,React ...."
        , "Bulit using TypeScript,React ...."
        , "Bulit using TypeScript,React ...."
        , "Bulit using TypeScript,React ...."
    ];
    const preview = [
        Preview1,
        Preview2,
        Preview3,
        Preview4,
    ];

    const cardVariants: Variants = {
        offscreen: {
            y: 300
        },
        onscreen: {
            y: 50,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className='project__wrapper' variants={cardVariants}>
                <div className={`project__preview ${zActive ? 'zActive' : ''}`} onClick={() => setZActive(!zActive)}>
                    <TopBar active={zActive} />
                    <div className='imageWrapper'>
                        <img src={preview[index]} alt="Screenshot of Framer Motion" />
                    </div>
                </div>
                <div className={`project__details ${!zActive ? 'zActive' : ''}`} onClick={() => setZActive(!zActive)}>
                    {console.log(zActive)}
                    <TopBar active={!zActive} />
                    <div className='details__wrapper'>
                        <p>
                            {loremipsum[index]}
                        </p>
                        <hr className="horizontal-line" />
                        <div className='details__footer'>
                            <p className='footer__text'>{builtOn[index]}</p>
                            <div className='btn-group'>
                                <button
                                    onClick={(e) => { e.stopPropagation(); }}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <p>LIVE</p>
                                    <BsArrowUpRight size={15} />
                                    {/* {isHovered ? <BsArrowRight size={15} /> : <BsArrowUpRight size={15} />} */}
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); }}>
                                    <p>
                                        CODE
                                    </p>
                                    <BsArrowUpRight size={15} />
                                    {/* {isHovered ? <BsArrowRight size={15} /> : <BsArrowUpRight size={15} />} */}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Project