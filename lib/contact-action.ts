'use server'
import { Resend } from 'resend';

interface formData{
    company: string;
    name: string;
    email: string;
    message: string;
}

export const sendMessage = async (data:formData) => {
    if (!data){
        console.log("Bad data")
    }else if (data.message.length < 1 && data.company.length < 1 && data.email.length < 1 && data.name.length < 1){
        console.log("Empty data")
    }else{
        const resend = new Resend(`${process.env.RESEND_API_KEY}`);
        
        resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'info@nikentoladgroup.com',
          subject: `Message from ${data.name} at ${data.company}, ${data.email}`,
          html: `<p>${data.message}</p>`
        });

        console.log("Message sent")
    }
}


