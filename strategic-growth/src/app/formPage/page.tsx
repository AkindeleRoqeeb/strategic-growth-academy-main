// "use client";
// import { send } from "process";
import { use, useState } from "react";
import { sendMail } from "../lib/mail";

export default function(){

    const Send = async () => {
        "use server";
        await sendMail({
            to: "roele@gmail.com",
            name: "mercy",
            subject: "Test mail",
            body : `name: <h1>hello world <h1>`
        })
    }

    var message = {
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: "<p>HTML version of the message</p>",
      };
      

    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [phone, setphone] = useState();

    // const handleChange = (e: any) => {
    //     return
    // }

    // const [subject, setSubject] = useState('');
    // const [message, setMessage] = useState('')
    // "use server";
    // const sendMail = async (e) => {
    //   e.preventDefault();
  
    //   const response = await fetch('/api/sendEmail', {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       subject,
    //       message
    //     })
    //   })
    //   console.log(await response.json())
    // }

    return(
        <section>
            <form action="" className="p-4 bg-blue-700 text-white">
                {/* <input type="text" value={name} onChange={()=>{}} />
                <input type="text" value={email} onChange={()=>{}} />
                <input type="text" value={phone} onChange={()=>{}} /> */}
            <button formAction={Send} >Send</button>
            </form>
        </section>
    )
}