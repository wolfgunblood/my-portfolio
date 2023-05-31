import React from 'react';
import "./Badge.scss";
import { SiTypescript, SiRedux, SiJavascript } from 'react-icons/si';
import { FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { AiOutlineGithub } from 'react-icons/ai';


const Badges = ({ index }: any) => {
    return (
        <div className='badges-container'>
            {index === 0 &&
                (
                    <button className='badge-btn typescript-badge'>
                        <SiTypescript />
                        <p>TypeScript</p>
                    </button>)

            }
            {index !== 0 &&
                (
                    <button className='badge-btn javascript-badge'>
                        <SiJavascript />
                        <p>JavaScript</p>
                    </button>
                )}
            <button className='badge-btn react-badge'>
                <FaReact />
                <p>React</p>
            </button>
            <button className='badge-btn sass-badge'>
                <FaSass />
                <p>Sass</p>
            </button>
            {index === 0 && (
                <button className='badge-btn framer-motion-badge'>
                    <TbBrandFramerMotion />
                    <p>Framer Motion</p>
                </button>
            )}
            {(index === 0 || index === 2) &&
                (
                    <button className='badge-btn redux-badge'>
                        <SiRedux />
                        <p>Redux</p>
                    </button>
                )}
            <button className='badge-btn git-badge'>
                <FaGitAlt />
                <p>Git</p>
            </button>
            <button className='badge-btn github-badge'>
                <AiOutlineGithub />
                <p>Github</p>
            </button>
        </div>
    )
}

export default Badges