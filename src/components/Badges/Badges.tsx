import React from 'react';
import "./Badge.scss";
import { SiTypescript, SiRedux } from 'react-icons/si';
import { FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { AiOutlineGithub } from 'react-icons/ai';

const Badges = () => {
    return (
        <div className='badges-container'>
            <button className='badge-btn'>
                <SiTypescript />
                TypeScript
            </button>
            <button className='badge-btn'>
                <FaReact />
                React
            </button>
            <button className='badge-btn'>
                <FaSass />
                Sass
            </button>
            <button className='badge-btn'>
                <TbBrandFramerMotion />
                Framer Motion
            </button>
            <button className='badge-btn'>
                <SiRedux />
                Redux
            </button>
            <button className='badge-btn'>
                <FaGitAlt />
                Git
            </button>
            <button className='badge-btn'>
                <AiOutlineGithub />
                Github
            </button>
        </div>
    )
}

export default Badges