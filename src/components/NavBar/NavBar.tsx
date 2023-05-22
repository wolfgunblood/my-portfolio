import { useContext } from 'react';
import './NavBar.scss';
import { store } from '../../App';
import { motion } from 'framer-motion';
// import { GiWolfHowl } from "react-icons/gi";
import { SiWolframlanguage } from "react-icons/si";
import { IconContext } from "react-icons";
import scroll from '../../utils/helpers/scroll';

const NavBar = () => {
  const [state, _dispatch] = useContext(store);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 0.7 }}
      className={` ${state.darkMode ? 'dark-nav' : 'light-nav'}`}
    >
      {/* <nav
      className={` ${state.darkmode ? 'dark-nav' : 'light-nav'}`}
      // className='dark-nav'
    > */}
      <IconContext.Provider value={{ color: `${state.darkMode ? "white" : "black"}`, className: "wolf" }}>
        <SiWolframlanguage size={30} />
      </IconContext.Provider>

      <h3
        onClick={(_e) => scroll("about-me")}
        className={`first  ${state.darkMode ? 'dark-anchor' : 'light-anchor'}`}
        >
        About Me
      </h3>

      <h3
        onClick={(_e) => scroll("portfolio")}
        className={`${state.darkMode ? 'dark-anchor' : 'light-anchor'}`}
        >
        Portfolio
      </h3>
      <h3
        onClick={(_e) => scroll("skills")}
        className={`${state.darkMode ? 'dark-anchor' : 'light-anchor'}`}
        >
        Skills
      </h3>
      {/* <h3
        onClick={(e) => scroll("about-me")}
        className={`${state.darkMode ? 'dark-anchor' : 'light-anchor'}`}
      >
        Resume
      </h3> */}
      <button
        type='button'
        className='btn-nav'
        onClick={(_e) => scroll("contact")}
      >
        Contact
      </button>
      {/* </nav> */}
    </motion.nav>
  )
}

export default NavBar