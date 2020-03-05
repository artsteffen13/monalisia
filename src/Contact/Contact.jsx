import React, {useEffect, useState} from 'react';
import './contact.css';

const Contact = () => {
    const [formControl, setFormControl] = useState(false);
    const [nameCheck, setNameCheck] = useState(null);
    const [phoneCheck, setPhoneCheck] = useState(null);
    const [messageCheck, setMessageCheck] = useState(null);
    const [emailCheck, setEmailCheck] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
       if (nameCheck === false && phoneCheck === false && messageCheck === false && emailCheck === false) {
           setFormControl(true);
       } else {
           setFormControl(false);
       }
    }, [nameCheck, phoneCheck, messageCheck, emailCheck]);

    const validateName = (e) => {
        const value = e.target.value;
        const re = /[a-zA-z]/;
        if (re.test(value)) {
            setNameCheck(false);
        } else {
            setNameCheck(true);
        }
    };

    const validateNumber = (e) => {
        const value = e.target.value;
        const re = /^1?[- (.]?\d{3}[- ).]?\d{3}[- .]?\d{4}$/;
        if (re.test(value)) {
            setPhoneCheck(false);
        } else {
            setPhoneCheck(true);
        }
    };

    const validateMessage = (e) => {
        const value = e.target.value;
        const re = /[a-zA-z]/;
        if (re.test(value)) {
            setMessageCheck(false);
        } else {
            setMessageCheck(true);
        }
    };

    const validateEmail = (e) => {
        const value = e.target.value;
        const re = /.+@[a-zA-z0-9]+\.[a-zA-Z]{2,}$/;
        if (re.test(value)) {
            setEmailCheck(false);
        } else {
            setEmailCheck(true);
        }
    };

    const showError = (e) => {
        if (e.target.type === 'button') {
            setError(true);
        } else {
            setError(false)
        }
    };


    return (
        <div
            className="contact-page"
            id="Contact"
        >
            <h1>Contact Us</h1>
            <hr/>
            <div className="flex">
                <div className="contact">
                    <h2 style={{textDecoration: 'underline darkred'}}>Monalisia</h2>
                    <p>745 Corkery Lane</p>
                    <p>Williamstown, NJ 08094</p>
                    <p>Phone: 856-629-8000</p>
                    <p>Email: Alam@monalisia.com</p>
                </div>
                <div className="contact">
                    <h2 style={{textDecoration: 'underline darkred'}}>Business Hours</h2>
                    <p>Mon - Thurs: 11:30am to 8:30pm</p>
                    <p>Fri: 11:30am to 9:30pm</p>
                    <p>Sat: 4:00pm to 9:30pm</p>
                    <p>Sun: 3:00pm to 8:30pm</p>
                </div>
            </div>
            <div>
                <iframe title="Google Maps"
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn4B0LkLVxokRs6R6RlZYw-U&key=AIzaSyDT0F3iUciH2-VQ9W5-5cCRM1Ir7ncZZvw"
                        allowFullScreen/>
            </div>
            <div>
                <form
                    action="https://formspree.io/xbjyjejw"
                    method="POST"
                >
                    <label>
                        Name:<br/>
                        <h4 style={{
                            display: nameCheck ? 'inherit' : 'none',
                            fontSize: '60%',
                            color: 'red'
                        }}>Please enter a name</h4>
                        <input onBlur={validateName} type="text" name="name"/>
                    </label>
                    <label>
                        Phone:<br/>
                        <h4 style={{
                            display: phoneCheck ? 'inherit' : 'none',
                            fontSize: '60%',
                            color: 'red'
                        }}>Please enter a valid number with area code in a correct format</h4>
                        <input onBlur={validateNumber} type="text" name="phone"/>
                    </label>
                    <label>
                        Your email:<br/>
                        <h4 style={{
                            display: emailCheck ? 'inherit' : 'none',
                            fontSize: '60%',
                            color: 'red'
                        }}>Please enter a valid email</h4>
                        <input onBlur={validateEmail} type="text" name="email"/>
                    </label>
                    <label>
                        Your message:<br/>
                        <h4 style={{
                            display: messageCheck ? 'inherit' : 'none',
                            fontSize: '60%',
                            color: 'red'
                        }}>Please enter a message</h4>
                        <textarea onBlur={validateMessage} name="message"/>
                    </label>
                    {error ? <h3>*All fields required before submitting</h3> : null}

                    <button
                        style={{cursor: formControl ? 'pointer' : 'not-allowed'}}
                        onClick={showError}
                        type={formControl ? 'submit' : 'button'}
                    >
                        Send
                    </button>
                </form>
            </div>
            <div>
                <h4>&copy; Monalisia {new Date().getFullYear()}</h4>
            </div>
        </div>
    );
};

export default Contact;