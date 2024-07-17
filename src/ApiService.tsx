import axios from "axios";

//const base_URL = 'https://localhost:5098/api'

const base_URL = 'http://aspynetapi.azurewebsites.net/api';

export interface AboutContent {
    aboutTextId: number;
    aboutPageText: string;
  }

export interface ContactResponse{
  ContactResponseText:string;
  name:string;
  Subject:string;
  EmailAddress:string;
}
export const postContactForm = async (form: ContactResponse): Promise<void> => {
  try {
    var formToSend: ContactResponse = {
      ContactResponseText: form.ContactResponseText,
      Subject: "Sent from " + form.name + " at " + form.EmailAddress + " " + form.Subject,
      EmailAddress: form.EmailAddress,
      name: form.name
    };

    console.log('Form data being sent:', formToSend);

    var response = await axios.post(`${base_URL}/contact/emailContactForm`, formToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status !== 200) {
      console.log(response.statusText);
      throw new Error("Failed to send email");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request made but no response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }

    throw new Error("Failed to send email");
  }
}

export const getAboutContent = async (): Promise<AboutContent> => {
    try {
      const response = await axios.get(`${base_URL}/site/about`);
      return response.data;
    } catch (error) {
      console.error('Error fetching about content:', error);
      throw error;
    }
  };


export const deleteAboutContent = async (): Promise<void> => {
    try {
      await axios.delete(`${base_URL}/site/about`);
    } catch (error) {
      console.error('Error deleting about content:', error);
      throw error;
    }
  };