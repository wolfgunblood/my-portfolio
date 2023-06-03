import React, { useState, useContext } from 'react';
import './Project.scss'
import TopBar from '../TopBar/TopBar';
import { BsFillTerminalFill } from 'react-icons/bs';
import { AiFillEye } from "react-icons/ai";
import { store } from '../../App';
// import { motion } from 'framer-motion';
import { motion, Variants } from "framer-motion";
import Preview1 from '../../assets/images/preview1.png';
import Preview2 from '../../assets/images/preview2.png';
import Preview3 from '../../assets/images/preview3.png';
import Preview4 from '../../assets/images/preview4.png';
import Draggable from 'react-draggable';
import Badges from '../Badges/Badges';


const Project = ({ index }: any) => {
    const [state, _dispatch] = useContext(store);
    const [zActive, setZActive] = React.useState(false);
    const [zActive_2, setZActive_2] = React.useState(true);

    const [_isHovered, setIsHovered] = useState(false);

    const isDescription = false;

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // const loremipsum = [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //     , "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    // ];

    const title = [
        "MacOS Clone"
        , "Trading Jounal"
        , "Movie Search"
        , "Sushi-Shop Landing"
    ];
    const describe = [
        "This project is a macOS clone built using React and TypeScript. It aims to recreate the familiar and intuitive user interface of macOS within a web application. The combination of React's component-based architecture, TypeScript's type safety, and the sleek design of macOS provides a seamless and responsive user experience. Users will be able to interact with a macOS-like interface, including windows, menus, and toolbars, offering cross-platform compatibility and the convenience of a familiar operating system within their web browser.",
        "An React SPA to create a Trading Journal with. You can add, edit and delete input fields to put your data in. All of these changes are adopted by the preview Trading Journal in real-time. Once you are happy with the result, you can save and download your trading Journal to your local machine via a simple button click. Also comes with a functionality to autofill all fields and look at what the CV would look like if you filled it out by hand.",
        "The Movie Search App, built using React and Material-UI (MUI), is a web application that enables users to search for movies and explore detailed information about them. With a sleek and responsive interface, the app allows users to easily search for movies by title, genre, or actor. It leverages the power of React to provide real-time search results and interactive user experiences. The integration of Material-UI ensures a modern and visually appealing design, with components that follow Google's Material Design guidelines.",
        "The Sushi Shop Landing Page is a captivating and responsive web page built using React. It serves as an introduction to a virtual sushi shop, providing visitors with a visually appealing and immersive experience. With a focus on user engagement, the landing page showcases a wide range of sushi delicacies, enticing users to explore the menu and place their orders. The use of React allows for a seamless and interactive user interface, ensuring a smooth navigation experience. "
    ]
    const preview = [
        Preview1,
        Preview2,
        Preview3,
        Preview4,
    ];
    const codePreview = [
        "macos",
        "trading-journal",
        "movie-search",
        "sushi-landing-page",
    ];

    const livepreview = [
        "https://wolfgunblood.github.io/macos/",
        "https://wolfgunblood.github.io/trading-journal/",
        "https://movie-search-app-react-mui.netlify.app/",
        "https://wolfgunblood.github.io/sushi-landing-page/",
    ];

    const projectVariants: Variants = {
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
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div
                className='project__wrapper'
                variants={projectVariants}
            >
                <Draggable
                    handle="#handle"
                    axis='x'
                >

                    <div
                        className={`project__preview ${zActive ? 'zActive' : ''}`}
                        onClick={() => {
                            setZActive(true);
                            setZActive_2(false)
                        }}
                    >
                        <TopBar check={!isDescription} index={index} active={zActive} titleName={title[index]} handle={"handle"} />
                        <div className='imageWrapper'>
                            <img src={preview[index]} alt="Screenshot of Framer Motion" />
                        </div>
                    </div>
                </Draggable>
                <Draggable
                    handle="#handle1"
                    axis='x'
                >
                    <div
                        className={`project__details ${zActive_2 ? 'zActive' : ''}`}
                        onClick={() => {
                            setZActive(false);
                            setZActive_2(true);
                        }}
                    >
                        <TopBar check={isDescription} index={index} active={!zActive} titleName={title[index]} handle={"handle1"} />
                        <div className={`details__wrapper ${state.darkMode ? 'dark-wrapper' : 'light-wrapper'}`}>
                            <p className={`details__text ${state.darkMode ? 'dark-detail' : 'light-detail'}`}>
                                {describe[index]}
                            </p>
                            <hr className="horizontal-line" />
                            <div className='details__footer'>
                                <Badges index={index} />

                                <div className='btn-group'>
                                    <a
                                        href={`${livepreview[index]}`}
                                        target="_blank"

                                    >
                                        <button
                                            onClick={(e) => { e.stopPropagation(); }}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <p>PREVIEW</p>
                                            <AiFillEye size={18} />
                                            {/* {isHovered ? <BsArrowRight size={15} /> : <BsArrowUpRight size={15} />} */}
                                        </button>
                                    </a>
                                    <a
                                        href={`${'https://github.com/wolfgunblood/'+codePreview[index]}`}
                                        target="_blank"

                                    >
                                        <button onClick={(e) => { e.stopPropagation(); }}>
                                            <p>
                                                CODE
                                            </p>
                                            <BsFillTerminalFill size={18} />
                                            {/* {isHovered ? <BsArrowRight size={15} /> : <BsArrowUpRight size={15} />} */}
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </motion.div>
        </motion.div>
    )
}

export default Project