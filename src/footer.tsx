import './CSS/footer.css'
import React from 'react'

interface footerProps{
    wideFooter:boolean;
}

const Footer :React.FC<footerProps> =({wideFooter}) =>{

    return(
        <div className={wideFooter?'footer-banner':'footer-text-only'}>
            <span className={wideFooter?'footer-text':'footer-text-highlighted'}>© 2024 Tom Aspinall</span>
        </div>
    )
}

export default Footer;