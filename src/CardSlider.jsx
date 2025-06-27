

/**
 * CardSlider component displays a horizontal slider of user profile cards.
 * 
 * Each card presents information about a developer, including their title, name,
 * description, and profile image. The slider allows navigation between cards using
 * previous and next buttons. The currently active card is visually emphasized.
 *
 * @component
 * @example
 * return (
 *   <CardSlider />
 * )
 *
 * @returns {JSX.Element} The rendered card slider component.
 */

// CardSlider.jsx
import React, { useState } from 'react';
import "./CardSlider.css"
import user1 from "./assets/user-1.jpg";
import user2 from "./assets/user-2.jpg";
import user3 from "./assets/user-3.jpg";
import user4 from "./assets/user-4.jpg";
import user5 from "./assets/user-5.jpg";

const cards = [
  {
    title: 'Front-End Developer',
    name: 'Sarah Lind',
    desc: 'An expert in UI/UX and responsive web development, using React and TailwindCSS to bring designs to life.',
    image: user1,
    bg: '#d8b4fe',
    btn: '#a855f7',
  },
  {
    title: 'Junior Developer',
    name: 'Jane Developer',
    desc: 'An up-and-coming developer skilled in HTML, CSS, and JavaScript with a passion for building clean interfaces.',
    image: user2,
    bg: '#fdba74',
    btn: '#f97316',
  },
  {
    title: 'Full Stack Developer',
    name: 'Anna Smith',
    desc: 'Specialized in both frontend and backend, building scalable applications using React and Node.js.',
    image: user3,
    bg: '#f9a8d4',
    btn: '#ec4899',
  },
  {
    title: 'Mobile Frontend Developer',
    name: 'Alan Doe',
    desc: 'Specialized in both frontend and backend, building scalable applications using React and Node.js.',
    image: user4,
    bg: '#b8e0d2',
    btn: '#00bd7b',
  },
   {
    title: 'Blockchain Developer',
    name: 'John Doe',
    desc: 'Specialized in both frontend and backend, building scalable applications using React and Node.js.',
    image: user5,
    bg: '#a0ced9',
    btn: '#00c5f7',
  },
];

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const getCardStyle = (index) => {
    const position = index - currentIndex;
    const baseZ = -Math.abs(position);
    const scale = position === 0 ? 1.2 : 0.8;
    const opacity = position === 0 ? 1 : 0.4;
    const translateX = position * 120;
    return {
      transform: `translateX(${translateX}%) scale(${scale})`,
      zIndex: 100 + baseZ,
      opacity,
    };
  };

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div className="card-slider">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={getCardStyle(index)}
            >
              <div className="card-header" style={{backgroundColor: `${card.bg}`}}>
                <img src={card.image} />
              </div>
              <div className="card-body">
                <h3>{card.title}</h3>
                <p className='name'>{card.name}</p>
                <p>{card.desc}</p>
                <button style={{backgroundColor: `${card.btn}`}}>About Me</button>
              </div>
            </div>
          ))}
        </div>
        <div className="nav-buttons">
          <button onClick={prevSlide}>{"<"}</button>
          <button onClick={nextSlide}>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
