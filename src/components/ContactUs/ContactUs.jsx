import React, { useState } from 'react';

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //code to submit form data
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                 </label>
                 <br />
                 <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactUs;