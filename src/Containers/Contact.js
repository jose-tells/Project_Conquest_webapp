import React from "react";
import { Link } from "react-router-dom";
// Components
import ContactForm from "@components/ContactForm";
import SliderTitle from "@components/SliderTitle";
import ContactSocials from "@components/ContactSocials";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";
// Modal
import Modal from "../Modal";
// Assets
import contactBackground from "../assets/img/Solitude shared.jpg";
import "@styles/Contact.styl";

const Contact = ({ location, history }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const successfulHash = "BEAUTIFUL";

  const isSuccessfullySubmitted = location.hash.slice(1) === successfulHash;

  const handleOpen = () => {
    dispatch({ type: onOpen });

    setTimeout(() => {
      dispatch({ type: onOpen, payload: true });
    }, 100);
  };

  const handleClose = (payload) => {
    dispatch({ type: onClose, payload: true });

    setTimeout(() => {
      dispatch({ type: onClose, payload });
    }, 300);
  };

  const redirect = () => {
    history.push("/");
  };

  return (
    <>
      <section className="gridContact">
        <div className="gridContact__background--container">
          <img
            className="gridContact__background"
            src={contactBackground}
            alt="Solitude contact"
          />
        </div>
        <Link to="/" className="grid__home--container">
          <FontAwesomeIcon icon={faHouse} className="grid__home--icon" />
        </Link>
        <SliderTitle />
        <ContactSocials />
        <div className="gridContact__button--container">
          <button
            type="button"
            className="gridContact__button"
            onClick={!isSuccessfullySubmitted ? handleOpen : redirect}
            disabled={state.open}
          >
            <span
              className={`gridContact__button--text ${location.hash.slice(1)}`}
            >
              {isSuccessfullySubmitted ? (
                <>
                  Successfully Submitted!{" "}
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: "1.2rem",
                      textAlign: "left",
                    }}
                  >
                    thanks for your message!
                  </p>
                </>
              ) : (
                "Keep in touch!"
              )}
            </span>
            {!isSuccessfullySubmitted && (
              <FontAwesomeIcon
                className="gridContact__button--icon"
                icon={faArrowRight}
              />
            )}
          </button>
          <div
            className={`gridContact__button--animation ${
              state.open ? "isOpen" : ""
            }`}
          />
        </div>
      </section>
      {state.show && (
        <Modal modalStyles={state.open}>
          <ContactForm
            successfulHash={successfulHash}
            handleClose={handleClose}
            isClose={state.close}
          />
        </Modal>
      )}
    </>
  );
};

const onOpen = "ON_OPEN";
const onClose = "ON_CLOSE";

const reducer = (state, action) => {
  switch (action.type) {
    case onOpen:
      return {
        open: !!action.payload,
        close: false,
        show: true,
      };
    case onClose:
      return {
        open: false,
        close: true,
        show: !!action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const initialState = {
  open: false,
  close: true,
  show: false,
};

export default Contact;
