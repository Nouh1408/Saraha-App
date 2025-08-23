import nodemailer from 'nodemailer'
export async function sendMail({to,subject,html}){
    const transport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:"ahmedinouh@gmail.com",
            pass:"uiso okzx ryos mbte"
        }
    })
   await transport.sendMail({
        from:"'Saraha app'<ahmedinouh@gmail.com",
        to:"",
        subject:"Verify Account",
        html,
        
    })
}
