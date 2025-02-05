import React, { useState } from 'react';
import { ContactResponse, postContactForm } from "../Service/EmailService";

interface ContactFormProps {
  form: {
    name: string;
    EmailAddress: string;
    Subject: string;
    ContactResponseText: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  HandleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ form, handleInputChange, handleTextAreaChange, HandleFormSubmit, buttonText }) => {
  return (
    <form className=" mx-auto p-8 bg-gray-100 rounded-lg shadow-lg w-1/2" onSubmit={HandleFormSubmit}>
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">Get in contact</h1>
      <div className="mb-4">
        <input
          id="name"
          name="name"
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Name"
          value={form.name}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          id="EmailAddress"
          name="EmailAddress"
          type="email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Your email"
          value={form.EmailAddress}
          required
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          id="Subject"
          name="Subject"
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Subject"
          value={form.Subject}
          required
          onChange={handleInputChange}
        />
      </div>
    <div className="mb-6">
      <textarea
        id="ContactResponseText"
        name="ContactResponseText"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 h-40"
        placeholder="Your message"
        value={form.ContactResponseText}
        required
        onChange={handleTextAreaChange}
      />
    </div>
      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
        {buttonText}
      </button>
    </form>
  );
};

const ContactFormContainer: React.FC = () => {
  const initialFormValues = {
    ContactResponseText: '',
    name: '',
    Subject: '',
    EmailAddress: ''
  };

  const [form, setForm] = useState<ContactResponse>(initialFormValues);
  const [buttonText, setButtonText] = useState('Submit');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const HandleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setButtonText('Sending....');
      await postContactForm(form);
      alert("Message sent successfully");
      setForm(initialFormValues);
      setButtonText('Submit');
    } catch {
      alert("Failed to send email, please try again or email me directly at thomasaspy1@gmail.com");
      setButtonText('Submit');
    }
  };

  return (
    <ContactForm
      form={form}
      handleInputChange={handleInputChange}
      handleTextAreaChange={handleTextAreaChange}
      HandleFormSubmit={HandleFormSubmit}
      buttonText={buttonText}
    />
  );
};

export default ContactFormContainer;