import './CSS/HomePage.css';
import React, { useEffect,useState } from 'react';
import { getAboutContent } from './ApiService';
import TopBanner from './topbanner';
import Footer from './footer';
import ImageLink from './ImageLink';

const HomePage :React.FC = () => {
    const[aboutText, setAboutText]=useState<string>('');
    const [error, setError] = useState<string |null>(null);
    const [isLoading,setisLoading] = useState(true);

    useEffect(()=>{
        const fetchAboutContent = async() =>{
            try{
                const aboutText = (await getAboutContent());
                setAboutText(aboutText.aboutPageText);
                console.log("Fetched about text",aboutText);
                setisLoading(false);
            }
            catch (error){ 
                setError("Failed to load about content.");
                console.error('Error fetching about text: ',error);
                setisLoading(false);
            }
        }; 
        fetchAboutContent();
    },[]);
  

  return (
    <div className='content'>
        <TopBanner/>
      <div className='landing-pic'>
      <div className='intro-box'>
        <div className='intro-line-one'> Welcome to</div>
        <div className='intro-line-two'> Tom Aspinall.UK</div>
        </div>
      </div>
    
      <div className='about-container'>
      <img src={`${process.env.PUBLIC_URL}/profilepic.jpeg`} alt="Profile pic" className="profile-pic"/>
        <div className='about-content'>
            <div className='about-header'> About me </div>
            {error ? 
                (<div className='about-body'>{isLoading? "Loading...": error}</div>)
                :
                (<div className='about-body'>{isLoading? "Loading..." :aboutText}</div>)
            }
            <div className='link-container'>
            <ImageLink imageUrl={`${process.env.PUBLIC_URL}/kidney-research.png`} linkUrl="https://www.kidneyresearchuk.org/support/" altText="Kidney Research UK"></ImageLink>
            <ImageLink imageUrl={`${process.env.PUBLIC_URL}/CRUK.WEBP`} linkUrl="https://www.cancerresearchuk.org/" altText="Cancer Research UK"></ImageLink>
            <ImageLink imageUrl={`${process.env.PUBLIC_URL}/claire-house.png`} linkUrl="https://www.clairehouse.org.uk/donate/" altText="Claire House Childrens Hospice"></ImageLink>
            </div>
            
        </div>
      </div>
      <Footer wideFooter={true}/>
    </div>
  );
}

export default HomePage;
