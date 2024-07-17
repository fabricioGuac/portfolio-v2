import {useState} from 'react';

export default function Contact() {

    // Sets state variables for the form inputs
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    // Function to handle the change on the form inputs
    const handleInputChange = (e) => {
        setEmail(e.target.value);
        setName(e.target.value);
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        
    }


    return (
        <form>
            <div className='form-group'>
                <label for="name" >Name</label>
                <input type="text" value={name}  onChange={handleInputChange} className='form-control' id='name'/>
            </div>

            <div className='form-group'>
                <label for="email" >Email address</label>
                <input type="text" value={email} onChange={handleInputChange} className='form-control' id='email'/>
            </div>

            <div className='form-group'>
                <label for="message">Message</label>
                <textarea className="form-control" value={message} onChange={handleInputChange} id="message" rows="4"></textarea>
            </div>

            <div className="form-group mt-2">
                    <button className="btn btn-success" type="submit" >Submit</button>
                </div>
        </form>
    )
}