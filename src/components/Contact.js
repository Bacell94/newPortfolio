import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (name && email && message) {
           const serviceId = 'service_gtky4bk';
           const templateId = 'template_0c3hp8j';
           const userId = 'oQvPJAXGzqcHpSDcR';
           const templateParams = {
               name,
               email,
               message
           };

           emailjs.send(serviceId, templateId, templateParams, userId)
               .then(response => console.log(response))
               .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return(
        <section className="contact" id="contact">
            <form  onSubmit={submit}>
                <h2 class="section-title__contact">How can i help?</h2>
                    <input name="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button className="btn">Send Message</button>
                    <span className={!emailSent ? 'hidden' : null}>Thank you for your message, we will be in touch in no time!</span>
                </form>
        </section>
    )

}