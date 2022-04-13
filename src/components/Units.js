import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import data from "./data";

function Units() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="units-container" id="units">
      <div className="units-title-container">
        <h2>UNITS</h2>
      </div>
      <div className="units-section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "units-nextSlide";
          if (personIndex === index) {
            position = "units-activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "units-lastSlide";
          }

          return (
            <article className={position} key={id}>
              <Link to={"units/"+ id}>
                <img src={image} alt={name} className="units-person-img" />
              </Link>
              <h4>{name}</h4>
              <p className="units-title">{title}</p>
              <p className="units-text">{quote}</p>
            </article>
          );
        })}
        <button className="units-prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="units-next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Units;
