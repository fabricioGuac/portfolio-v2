import {useState} from 'react';

export default function Contact() {

    // Sets state variables for the form inputs
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    // Function to handle the change on the form inputs
    const handleInputChange = (e) => {
        // Deconstructs the event target to get the id and value from the input field
        const {id, value} = e.target;

        // Utilizes a switch statement to change the value of the targeted input element
        switch(id) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                console.warn('Unexpected input id:', id);
                break;
        }
    }

    const handleSubmit = (e) => {
        
    }


    return (
        <form>
            <div className='form-group'>
                <label htmlFor="name" >Name</label>
                <input type="text" value={name}  onChange={handleInputChange} className='form-control' id='name' />
            </div>

            <div className='form-group'>
                <label htmlFor="email" >Email address</label>
                <input type="text" value={email} onChange={handleInputChange} className='form-control' id='email' />
            </div>

            <div className='form-group'>
                <label htmlFor="message">Message</label>
                <textarea className="form-control" value={message} onChange={handleInputChange} id="message"  rows="4"></textarea>
            </div>

            <div className="form-group mt-2">
                    <button className="btn btn-success" type="submit" >Submit</button>
                </div>
        </form>
    )
}