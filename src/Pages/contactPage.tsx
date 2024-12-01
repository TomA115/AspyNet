import React from "react";
import '../CSS/ContactPage.css';
import TopBanner from "../Components/topbanner";
import ContactForm from "../Components/contactForm";
import Footer from "../Components/footer";

const ContactPage: React.FC = () => {     
    return (
        <div className="container">
            <TopBanner />
            <div className="background"/>
            <div className="content-contact">
                <ContactForm></ContactForm>
                </div>
            <Footer wideFooter={false}/>
            </div>

    );
}

export default ContactPage;