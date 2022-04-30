import React from 'react';
import fb from '../../../images/footer/Facebook_Logo.png'
import li from '../../../images/footer/linkedIn.png'
import tr from '../../../images/footer/twitter-thumbnail.png'
import yt from '../../../images/footer/y.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='mt-5 footer-class'>
            <div>
                <h5>Connect with Us</h5>
                {/* <p><FontAwesomeIcon icon="fa-brands fa-facebook" /></p> */}
                <div>
                    <p className='social-icon-class'>
                        <a href="https://www.facebook.com/thowhid.antor/"><img src={fb} alt="" /></a>
                        <a href="https://www.linkedin.com/in/thowhidantor/"><img src={li} alt="" /></a>
                        <a href="https://twitter.com/ThowhidAntor"><img src={tr} alt="" /></a>
                        <a href="https://www.youtube.com/"><img src={yt} alt="" /></a>
                    </p>
                </div>
            <p><small><span dangerouslySetInnerHTML={{ "__html": "&copy;"} }/> 
                 Copyright: {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

export default Footer;