import { useState } from 'react';
import '../styles/contact.css'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactSection = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !validateEmail(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <div className="form-section">
          <h2>Contact Me</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="social-section">
          <h3>Find Me</h3>
          <ul className="social-links">
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};



export default ContactSection;