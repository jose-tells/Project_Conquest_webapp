import React, { useState, useRef, useEffect } from "react";

const messages = [
  {
    id: 0,
    message: {
      firstL: "We are a film studio who",
      secondL: "makes you fly into",
      thirdL: "your dreams...",
    },
  },
  {
    id: 1,
    message: {
      firstL: "Don't tell me that you've",
      secondL: "never heard 'bout our",
      thirdL: "creative process",
    },
  },
  {
    id: 2,
    message: {
      firstL: "Good artist copy",
      secondL: "Great artist",
      thirdL: "STEAL",
    },
  },
];

const WelcomeMessages = () => {
  const [id, setId] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setId((prevId) => (prevId === messages.length - 1 ? 0 : prevId + 1)),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [id]);

  return (
    <section className="header">
      <div className="header__slider">
        {messages.map((text) => (
          <h1
            className="header__slider--message"
            key={text.id}
            style={{ transform: `translate(${-id * 100}%, 0)` }}
          >
            {text.message.firstL}
            <br /> {text.message.secondL} <br /> {text.message.thirdL}
          </h1>
        ))}
      </div>
      <div className="slider__icons" />
    </section>
  );
};

export default WelcomeMessages;
