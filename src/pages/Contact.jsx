import {useState} from 'react';

export default function Contact() {

    // Sets state variables for the form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [fullForm, setFullForm] = useState({full: true, target:""});

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
                setValidEmail(true);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                console.warn('Unexpected input id:', id);
                break;
        }
    }

    // Function to handle when the cursor leaves one of the form fields
    const blurHandler = (e) => {

        // Deconstructs the event target to get the id and value from the input field
        const {id, value} = e.target;

        // Toogles the full boolean if there is a value or not and sets the target to the id
        setFullForm({full:value, target:id});

        // Leverages regex to ensure the email is valid
        if(id === 'email') {
            setValidEmail(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value))}
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('I DO NOT WORKK');
    }


    return (
        <>
        <h2>Contact</h2>
        <div className='row'>
        <form className='col-md-6' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name" >Name:</label>
                <input type="text" value={name}  onChange={handleInputChange} onBlur={blurHandler} className='form-control' id='name' />
            </div>

            <div className='form-group'>
                <label htmlFor="email" >Email address:</label>
                <input type="text" value={email} onChange={handleInputChange} onBlur={blurHandler} className='form-control' id='email' />
            </div>

            <div className='form-group'>
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" value={message} onChange={handleInputChange} onBlur={blurHandler} id="message"  rows="4"></textarea>
            </div>

            {validEmail ? "" : <h3 className='text-danger'>Invalid email</h3>}
            {fullForm.full ? '' : <h3 className='text-danger'>Form must contain {fullForm.target}</h3>}

            <div className="form-group mt-2">
                    <button className="btn btn-secondary" type="submit" >Submit</button>
                </div>
        </form>
        </div>
        </>
    )
}