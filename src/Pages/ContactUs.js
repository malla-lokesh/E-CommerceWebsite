import { useState } from "react";
import './ContactUs.css';

const ContactUs = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');

    const submitHandler = async (event) => {
        event.preventDefault();
        const newPerson = {
            name: userName,
            mail: email,
            phoneNo: phoneNo
        }

        setUserName('');
        setEmail('');
        setPhoneNo('');

        try{
            const response = await fetch(`https://ecommercewebsite-21c8d-default-rtdb.firebaseio.com/users.json`, {
                method: 'POST',
                body: JSON.stringify(newPerson),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok) {
                throw new Error('Failed to post data.');
            }
        }
        catch(error) {
            console.error(error);
        }
    }

    return <div className="contactUsForm">
        <form onSubmit={submitHandler}>
            <div className='contactUsTitle'>
                Contact US
            </div>
            <hr/>
            <label>Name:</label>
            <input 
                type='text'
                value={userName}
                placeholder="abc"
                onChange={(e) => setUserName(e.target.value)}
                required/>
            <label>Email ID:</label>
            <input 
                type='email'
                value={email}
                placeholder="...@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required/>
            <label>Phone Number</label>
            <input 
                type='text'
                value={phoneNo}
                placeholder="+91 xxxxxxxxxx"
                onChange={(e) => setPhoneNo(e.target.value)}
                required/>
            <button 
                className="submitButton">
            Sumbit</button>
        </form>
    </div>
};

export default ContactUs;