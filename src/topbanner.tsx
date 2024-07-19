import ImageLink from './ImageLink';
import {  useNavigate } from 'react-router-dom';
import './CSS/TopBanner.css';
import React, { useEffect, useState } from 'react';
import HomePage from './HomePage';


const TopBanner: React.FC = () =>{

    const Navigate = useNavigate();
    const HandleContactButtonOnClick = () =>{
      Navigate('/contact');
    }
    const HandleNameTagClick = () =>{
        Navigate('/');}

    const [backgroundColor,setbackgroundColor] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scroll event triggered");
            const scrollPosition = window.scrollY;
            if (scrollPosition > 900) {
                setbackgroundColor('#091D2A');
            } else {
                setbackgroundColor('transparent');
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
    <div className='top-banner'>
      <div onClick={HandleNameTagClick} className='nametag'>TomAspinall.uk</div>
      <div className='header-buttons'>
        <button className='banner-button'> Blog</button>
        <button onClick={HandleContactButtonOnClick} className='banner-button'> Contact </button>
        <ImageLink imageUrl={`${process.env.PUBLIC_URL}/linkedinlogo2.png`} linkUrl="https://www.linkedin.com/in/tom-aspinall-6330951b8" altText="LinkedIn Profile"></ImageLink>
      </div>
      </div>
    )
}

export default TopBanner;