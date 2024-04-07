import React, { useState } from 'react';
import './contactus.css';
import Navbar from './Navbar';
import MenuBar from './MenuBar';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        rollNo: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // You can implement the submit logic here
        console.log(formData);
    };

    return (
        <>
        <Navbar loggedIn={true}/>
       <div className='nav'><MenuBar/></div>
        <div className="wrappercontact">
             
            <div className="title">
                <h1>Contact us</h1>
            </div>
            <div className="contact-form">
                <div className="input-fields">
                    <input
                        type="text"
                        className="input"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="input"
                        placeholder="Roll No."
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                    />
                </div>
                <div className="msg">
                    <textarea
                        placeholder="Message"
                        value={formData.message}
                        name="message"
                        onChange={handleChange}
                    ></textarea>
                    <div className="btn" onClick={handleSubmit}>send</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactForm;
