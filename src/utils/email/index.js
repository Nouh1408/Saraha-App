import nodemailer from 'nodemailer'
export function sendMail(){
    const transport = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:"ahmedinouh@gmail.com",
            pass:"uiso okzx ryos mbte"
        }
    })
}