import config from '../appsettings.json';
import AppSettings from "../Interfaces/appsettings";

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
  const typedConfig = config as AppSettings;
  const {EmailClient} = require("@azure/communication-email");

  const connectionString = `endpoint=https://aspyemailer.uk.communication.azure.com/;accesskey=${typedConfig.AzureEmailEndpoint}`
  const client = new EmailClient(connectionString);
  try {
    let formToSend: ContactResponse = {
      ContactResponseText: form.ContactResponseText,
      Subject: "Sent from " + form.name + " at " + form.EmailAddress + " " + form.Subject,
      EmailAddress: form.EmailAddress,
      name: form.name
    };

    console.log('Form data being sent:', formToSend);
    const message = {
      senderAddress:typedConfig.EmailFromAddress,
      content:{
        subject: formToSend.Subject,
        plainText: formToSend.ContactResponseText,
      },
      recipients:{
        to:[{address:typedConfig.EmailToAddress}],
      },
    }

    const poller = await client.beginSend(message);
    await poller.pollUntilDone();

  } catch (error) {
      console.log("Error sending email",error);
}
};