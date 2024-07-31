import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import linkedinIcon from '../../Images/linkedin-icon.png';
import githubIcon from '../../Images/github-icon.png';

function Footer () {
    return(
        <div className='footer'>
            <Link to='https://www.linkedin.com/in/cayn-williard-2b54a0200'>
            <img src={linkedinIcon} alt='linkedin' height= '50'></img>
            </Link>
            <Link to='https://github.com/caynwsp'>
            <img src={githubIcon} alt='github' height='50'></img>
            </Link>
        </div>
    )
};

export default Footer;