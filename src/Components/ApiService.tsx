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
  const {EmailClient} = require("@azure/communication-email");
  const connectionString = process.env.REACT_APP_AZURE_EMAIL_CONNECTION_STRING;
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
      senderAddress:"DoNotReply@379d5ed1-5188-4984-bde3-02c31707bf3c.azurecomm.net",
      content:{
        subject: formToSend.Subject,
        plainText: formToSend.ContactResponseText,
      },
      recipients:{
        to:[{address:"thomasaspy1@gmail.com"}]
      },
    }

    const poller = await client.beginSend(message);
    await poller.pollUntilDone();

  } catch (error) {
      console.log("Error sending email",error);
}
};