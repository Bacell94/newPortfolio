import { useState } from "react";
export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
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
            <form action="">
                <h2 class="section-title__contact">How can i help?</h2>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button className="btn" onClick={submit}>Send Message</button>
                    <span className={!emailSent ? 'hidden' : null}>Thank you for your message, we will be in touch in no time!</span>
                </form>
        </section>
    )

}