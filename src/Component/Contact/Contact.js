import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';



const  Contact=()=> {
function sendemail(e){
    e.preventDefault();
    emailjs.sendForm('service_c485se6','template_ju3j6n8',e.target,'NggmySREufx-h2BC0' ).then(res=>{
        console.log(res);
        alert("Your message send successfully!");
    }).catch(err=>{
        console.log(err);
        alert("we are facing some tecnical error");
    })
}
 

    return (
        <>
            <div className="message">
                <form onSubmit={sendemail}>
                    <p>Name</p>
                    <input type={'text'} name={"Name"} id="" placeholder={'Enter Your Name'} required />
                    <p>Email</p>
                    <input type={'email'} name={"Email"} placeholder={'Enter Your Email'}  required/>
                    <p>Phone No.</p>
                    <input type={'tel'}  name={"Phone"} placeholder={'Enter Your Phone Number'}  required/>
                    <p>Message</p>
                    <textarea  name={"Message"} placeholder={'How Can I Help You ?'}  required/>

                    <button type={"submit"}>Send &gt;  </button>
                </form>

                <img src="./assest/Contact_vector_2-removebg-preview.webp" alt="" />
            </div>
                    
        </>
    )
}

export default Contact