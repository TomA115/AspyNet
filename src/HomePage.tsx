import './CSS/HomePage.css';
import React, { useRef } from 'react';
import Footer from './footer';
import ImageLink from './ImageLink';
import ContactForm from './contactForm';

const HomePage: React.FC = () => {
    const aboutLoc = useRef<HTMLDivElement>(null);

    const scrollAbout = () => {
        if (aboutLoc.current) {
            aboutLoc.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='content'>
            <div className='landing-pic'>
                <div className='intro-box'>
                    <div className='intro-line-one'>Welcome, I'm Tom</div>
                    <div className='intro-line-two'>a software developer</div>
                    <button className='learn-more-button'onClick={scrollAbout}> About me</button>
                </div>
            </div>

            <div ref={aboutLoc} className='about-container'>
                <img src={`${process.env.PUBLIC_URL}/profilepic.jpeg`} alt="Profile pic" className="profile-pic" />
                <div className='about-content'>
                    <div className='about-header'>About me</div>
                    <div className='about-body'>
                    <p>I am a London based software developer currently working for the Bank of England. I mainly have backend experience focusing on data mastering and ETL pipelines but am always trying to learn new skills.</p>
    <p>I have a preference for backend but am currently working on improving my frontend skills. I have experience in C#, .NET Core, Python, SQL Server, SSIS, CSS/HTML, RESTful APIs</p>
    <p>This website (more specifically my <a href='https://medium.com/@thomasaspy1'>Medium page)</a> is a place for me to post my musings on technology, personal projects, and anything I find interesting.</p>
        
    <p>If you scroll further or even if you choose not to click any other link, then please click one of the links below. You could make a real difference.</p></div>
                    <div className='link-container'>
                        <ImageLink imageUrl={`${process.env.PUBLIC_URL}/kidney-research.png`} linkUrl="https://www.kidneyresearchuk.org/support/" altText="Kidney Research UK" />
                        <ImageLink imageUrl={`${process.env.PUBLIC_URL}/CRUK.WEBP`} linkUrl="https://www.cancerresearchuk.org/" altText="Cancer Research UK" />
                        <ImageLink imageUrl={`${process.env.PUBLIC_URL}/claire-house.png`} linkUrl="https://www.clairehouse.org.uk/donate/" altText="Claire House Childrens Hospice" />
                    </div>
                </div>
            </div>
            <div className='contact-container'><ContactForm />
            <ImageLink imageUrl={`${process.env.PUBLIC_URL}/linkedinlogo2.png`} linkUrl="https://www.linkedin.com/in/tom-aspinall-6330951b8" altText="LinkedIn Profile"></ImageLink></div>
            <Footer wideFooter={true} />
        </div>
    );
}

export default HomePage;