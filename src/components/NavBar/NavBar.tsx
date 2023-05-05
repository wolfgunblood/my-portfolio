import React, { useContext } from 'react';
import './NavBar.scss';
import { store } from '../../App';

const NavBar = () => {
  const [state, dispatch] = useContext(store);

  return (
    <nav>
      <p>j</p>
      <h3
        className={`first light-nav`}
      >
        About Me
      </h3>
      <h3
        className={`light-nav`}
      >
        Portfolio
      </h3>
      <h3
        className={`light-nav`}
      >
        Skills
      </h3>
      <h3
        className={`light-nav`}
      >
        Resume
      </h3>
      <button
        type='button'
        className='btn-nav'
      >
        Contact
      </button>
    </nav>
  )
}

export default NavBar