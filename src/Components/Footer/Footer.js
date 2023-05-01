import React from "react";
import './Footer.css';
import yt from './images/Youtube.png';
import spotify from './images/spotify.png';
import facebook from './images/facebook.jfif';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className='footerDiv'>
                    <div className='footerTitle'>
                        The Generics
                    </div>
                    <div className='mediaLinks'>
                        <div>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <img src={yt} className='yt' alt="youtubeLink"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://spotify.com" target="_blank" rel="noreferrer">
                                <img src={spotify} className='spotify' alt="spotifyLink"/>
                            </a>
                        </div>
                        <div>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={facebook} className='facebook' alt="facebookLink"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
};

export default Footer;