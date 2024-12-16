import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccesMessage]  = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });

        // Clear error message when the user starts typing
        setErrorMessage('');
    };

    const blurHandler = (e) => {
        const { id, value } = e.target;

        if (id === 'email' && value) {
            const isValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(value);
            if (!isValid) {
                setErrorMessage('Invalid email address.');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!form.name || !form.email || !form.message) {
            setErrorMessage('All fields are required.');
            return;
        }

        // Validate email
        const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(form.email);
        if (!isEmailValid) {
            setErrorMessage('Invalid email address.');
            return;
        }

        // Check EmailJS configuration
        if (
            !import.meta.env.VITE_APP_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ) {
            setErrorMessage('Email configuration is missing. Please try again later.');
            return;
        }

        try {
            // Send email using EmailJS
            await emailjs.send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: `${form.name} <${form.email}>`,
                    to_name: "Fabricio",
                    to_email: 'guacutofabricio@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            console.log('Form submitted successfully:', form);
            setForm({ name: '', email: '', message: '' });
            setSuccesMessage("Form submitted successfully")
            setErrorMessage(''); // Clear error message on success
        } catch (error) {
            setErrorMessage('An error occurred while sending your message. Please try again.');
            console.log(error);
        }
    };

    return (
        <>
            <h2>Contact</h2>
            <div className="row">
                <form className="col-md-6" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            value={form.name}
                            onChange={handleInputChange}
                            onBlur={blurHandler}
                            className="form-control"
                            id="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="text"
                            value={form.email}
                            onChange={handleInputChange}
                            onBlur={blurHandler}
                            className="form-control"
                            id="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className="form-control"
                            value={form.message}
                            onChange={handleInputChange}
                            id="message"
                            rows="4"
                        ></textarea>
                    </div>

                    {errorMessage && <h3 className="text-danger">{errorMessage}</h3>}
                    {successMessage && <h3 className="text-success">{successMessage}</h3>}

                    <div className="form-group mt-2">
                        <button className="btn btn-secondary" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
