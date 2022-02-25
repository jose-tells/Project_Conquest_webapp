import React from "react";
import PropTypes from "prop-types";
// Styles
import "@styles/components/ContactForm.styl";

const ContactForm = ({ handleClose, isClose, successfulHash }) => {
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

  const handleSubmit = () => {
    handleClose(false);
  };

  return (
    <div className="contactForm">
      <form
        action={`https://formsubmit.co/${process.env.RANDOM_STRING_EMAIL}`}
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_next"
          value={`https://${process.env.MY_DOMAIN}#${successfulHash}`}
        />
        <input
          type="hidden"
          name="_subject"
          value={`New beautiful message from ${form.name}`}
        />
        <input type="hidden" name="_template" value="table" />
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

ContactForm.propTypes = {
  handleClose: PropTypes.func,
  isClose: PropTypes.bool,
};

ContactForm.defaultProps = {
  handleClose: () => {},
  isClose: true,
};

export default ContactForm;
