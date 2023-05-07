import React,{ useContext } from 'react';
import { store } from '../../App';
import './Image.scss';

const Imgae = ({source,name}) => {
  return (
    <div className='skill-tab-item'>
        <img 
            src={source} 
            alt="skill-tab"
            className='skill-tab-item' 
        />
    </div>
  )
}

export default Imgae