import React from 'react';
import './Contact.css';


function Contact() {

 

    return (
        <>
            <div className="message">
                <form action={"Mail.php"}>
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

                <img src="./assest/Contact_vector_2-removebg-preview.png" alt="" />
            </div>
                    
        </>
    )
}

export default Contact