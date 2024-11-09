'use server'
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
        console.log(data)
    }
}