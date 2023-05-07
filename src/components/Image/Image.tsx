import React, { useContext } from 'react';
import { store } from '../../App';
import './Image.scss';

const Image = ({source, name}) => {

    const [ state , dispatch ] = useContext(store); 

    return (
        <div className='skill-tab-item'>
            <img
                src={source}
                alt="skill-tab"
                className='skill-tab-item'
            />
            <h3
                className={`${state.darkMode ? 'dark-eyebrow' : 'light-heading'}`}
            >
                {name}
            </h3>
        </div>
    )
}

export default Image