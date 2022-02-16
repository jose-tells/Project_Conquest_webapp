import React from "react";
// Styles
import "../assets/styles/components/ContactForm.styl";

const ContactForm = ({ handleClose, isClose }) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const hasInput = Object.values(form).find((item) => item.includes(""));

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    setForm({
      name: "",
      email: "",
      message: "",
    });
    handleClose(false);
  };

  return (
    <div className="contactForm">
      <form onSubmit={handleSubmit}>
        <button
          type="button"
          disabled={isClose}
          onClick={() => handleClose(!!hasInput)}
          className="contactForm__closeButton"
        >
          X
        </button>
        <section className="contactForm__input--container">
          <label className="contactForm__label">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label className="contactForm__label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
        </section>
        <section className="contactForm__input--container">
          <label className="contactForm__label">
            Message
            <textarea
              className="contactForm__textarea"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              required
            />
          </label>
        </section>
        <button type="submit" className="contactForm__button">
          Let's work together!
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
