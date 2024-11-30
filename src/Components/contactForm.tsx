import {useState} from "react";
import '../CSS/ContactPage.css'
import { ContactResponse, postContactForm } from "./ApiService";
import config from '../appsettings.json';
import AppSettings from "../Interfaces/appsettings";

const ContactForm :React.FC = () =>{

    const typedConfig = config as AppSettings;
    const initialFormValues = {
        ContactResponseText: '',
        name: '',
        Subject: '',
        EmailAddress: ''
    }

    const [form, setForm] = useState<ContactResponse>(initialFormValues);
    
    const [buttonText,setButtonText] = useState('Submit');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
      };
    
    const HandleFormSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            setButtonText('Sending....');
            await postContactForm(form);
            alert("Message sent successfully");
            setForm(initialFormValues);
            setButtonText('Submit');
        }
        catch{
            alert(`Failed to send email, please try again or email me directly at ${typedConfig.EmailToAddress}`);
            setButtonText('Submit');
        }

    }

    return(
        <form className="form-container" onSubmit={HandleFormSubmit}>
        <h1 className="form-title">Get in contact</h1>
        <input
        id="name"
        name="name"
        type='text'
        className="form-input"
        placeholder="Name"
        value={form.name}
        required
        onChange={handleInputChange}>
        </input>
        <input
        id='EmailAddress'
        name='EmailAddress'
        type='text'
        className="form-input"
        placeholder="Your email"
        value={form.EmailAddress}
        required
        onChange={handleInputChange}>
        </input>
        <input
        id='Subject'
        type='text'
        name="Subject"
        className="form-input"
        placeholder="Subject"
        value={form.Subject}
        required
        onChange={handleInputChange}>
        </input>
        <input
        type='text'
        id="ContactResponseText"
        name="ContactResponseText"
        className="form-input-large"
        placeholder="Your message"
        value={form.ContactResponseText}
        required
        onChange={handleInputChange}>
        </input>
        <button  className="form-button">{buttonText}</button>
        </form>
    )
}

export default ContactForm;