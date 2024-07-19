import ImageLink from './ImageLink';
import { useNavigate } from 'react-router-dom';
import './CSS/TopBanner.css';
import React from 'react';

const TopBanner: React.FC = () => {

    const navigate = useNavigate();

    const handleContactButtonOnClick = () => {
        navigate('/contact');
    }

    const handleNameTagClick = () => {
        navigate('/');
    }

    return (
        <div className='top-banner'>
            <div onClick={handleNameTagClick} className='nametag'>TomAspinall</div>
            <div className='header-buttons'>
                <button className='banner-button'>Blog</button>
                <button onClick={handleContactButtonOnClick} className='banner-button'>Contact</button>
                <ImageLink imageUrl={`${process.env.PUBLIC_URL}/linkedinlogo2.png`} linkUrl="https://www.linkedin.com/in/tom-aspinall-6330951b8" altText="LinkedIn Profile"></ImageLink>
            </div>
        </div>
    );
}

export default TopBanner;