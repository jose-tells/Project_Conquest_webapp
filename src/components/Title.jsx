import React, { useEffect, useState, useRef } from "react";

const frases = [
  {
    id: 0,
    frase: "PROJECTCONQUEST",
  },
  {
    id: 1,
    frase: "CREATIVITY",
  },
  {
    id: 2,
    frase: "MADNESS",
  },
];
const delay = 2500;

const Title = () => {
  const [id, setId] = useState(0);
  const timeOutRef = useRef(null);
  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };
  useEffect(() => {
    resetTimeOut();
    timeOutRef.current = setTimeout(
      () => setId((prevId) => (prevId === frases.length - 1 ? 0 : prevId + 1)),
      delay
    );
    return () => {
      resetTimeOut();
    };
  }, [id]);

  return (
    <div className="container-title">
      <h2>We are</h2>
      <div className="container-title-slideshow">
        {frases.map((frase) => (
          <h1
            key={frase.id}
            className="slide"
            style={{ transform: `translate3d(${-id * 100.5}%,0,0)` }}
            frase={frase.frase}
          >
            {frase.frase}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Title;
