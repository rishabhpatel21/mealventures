import React, {useState} from 'react';
import '../CSS/Contact.css';
import Footer from '../Component/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
      setFormData({...formData, [name]: value });
  };

  const handleSubmit = (e) => {
        e.preventDefault();
      // Handle form submission, e.g., send data to server or display it
      console.log(formData);
      // Clear form after submission
      setFormData({name: '', email: '', message: '' });
  };

      return (
        <>
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className='details-name-email'>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className='submit-button'>Submit</button>
        </form>
      </div>
      <Footer />
      </>
      );
};

export default Contact
