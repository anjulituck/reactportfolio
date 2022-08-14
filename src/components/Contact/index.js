import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log('Handle Form', formState);
    }
  }
    return (
      <section className="contact container-sm my-5" id="contact">
        <h2>Contact</h2>
        <form id="contact" onSubmit={handleSubmit}>
        <div>
          <label className='text-uppercase form-label' htmlFor="name">Name:</label>
          <input className="form-control my-2" type="text" name="name" placeholder="i.e.Beyonce Knowles-Carter" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label className='text-uppercase form-label ' htmlFor="email">Email Address:</label>
          <input className="form-control my-2" type="email" name="email" placeholder="i.e.yonce@gmail.com" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label className='text-uppercase form-label'  htmlFor="message">Message:</label>
          <textarea className="form-control my-2" name="message" rows="5" placeholder="Can't wait hear from you!" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="btn btn-success btn-block mt-5 text-uppercase btn-lg fw-bold" style={{width:"60%"}} data-testid="button" type="submit">Submit</button>
      </form>
      </section>
    );
  }
  
  export default Contact;
  