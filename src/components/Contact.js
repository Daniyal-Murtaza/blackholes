import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic for submitting the form here
    setSubmitted(true);
  };

  return (
    <div style={{color: 'white'}}>
      <h1>Contact Us</h1>
      <p>{date.toDateString()}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsum. Vitae assumenda explicabo itaque tenetur omnis, ut nostrum suscipit est, rerum optio blanditiis laudantium. </p>
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          /> <br /> <br />
          <label htmlFor="message">Input:</label>
          <textarea
            id="message"
            value={message}
            placeholder="Enter your message"
            onChange={(event) => setMessage(event.target.value)}
          /> <br /> <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
