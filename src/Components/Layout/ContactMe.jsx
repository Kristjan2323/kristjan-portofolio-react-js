import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'


export default function ContactMe(){

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, 
    form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
         
          toast.success("Email sent!")
      }, (error) => {
          console.log(error.text);
          toast.error("An error occured, the email isn't sent.")
      });
  };


    return(
        <form ref={form} onSubmit={sendEmail} id="contactMe" className="contact-section-container">
            <div className="contact-top-container">
                <div className="pre-info-container">
                    <h4 className="pre-info pre-info-h4">Get In Touch</h4>
                    <h2 className="pre-info pre-info-h2">Contact Me</h2>
                    <p>Feel free to reach out with any questions, project inquiries, or just to say hello.
                       I'm always eager to connect 
                      and discuss exciting opportunities in the world of software development.</p>
                </div>
                <div className="input-container">
                <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input 
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                placeholder="Surname"
                required
            />
          </label>
          <label htmlFor="from_email" className="contact--label">
            <span className="text-md">Email</span>
            <input 
                type="email"
                className="contact--input text-md"
                name="from_email"
                id="email"
                placeholder="user@gmail.com"
                required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone number</span>
            <input 
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                placeholder="123-456-789"
                required
            />
          </label>
          <label htmlFor="choose-topic" className="choose-topic ">
            <span className="text-md2">Choose a topic</span>
            <select className="option-contact contact--input text-md" name="choose-topic">
            <option>--Select--</option>
            <option>Bug Fixing</option>
            <option>New Feature</option>
            <option>Create website from scratch</option>
            <option>Others</option>
            </select>
             
          </label>
          <label htmlFor="message" className="message">
            <span className="text-md2"> Message</span>
            <textarea 
                type="text"
                className="message-input contact--input"
                rows={8}
                placeholder="Type your message..."
                name="message"
                id="message"
            />
          </label>
      
        
                </div>
                <button type="submit" className=" btn-contact-submit">Submit</button>
            </div>
        </form>
    )
}