
import React, { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "", 
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user); 

    
    setUser({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className='section-contact'>
      <h1 className='container-title'>Contact Us</h1>
      <div className="contact-wrapper container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder='Enter your name'
            required
            autoComplete='off'
            name='username' 
            onChange={handleInputChange}
            value={user.username} 
          />
          <input
            type="email"
            placeholder='Enter your email'
            required
            autoComplete='off'
            name='email' 
            onChange={handleInputChange}
            value={user.email} 
          />
          <textarea
            name="message" 
            className='form-control'
            rows="8"
            placeholder='Enter your message'
            onChange={handleInputChange}
            value={user.message} 
          ></textarea>
          <button type='submit'>Click me</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
