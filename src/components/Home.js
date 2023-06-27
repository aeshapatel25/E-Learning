import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1  className="title">Welcome to Learniverse Portal!</h1>
      <b>Welcome to My E-Learning Portal! Get ready to unlock your potential and embark on a transformative learning journey. Sign in to our platform to explore a wide range of courses designed to enhance your knowledge and skills.

In addition to our comprehensive course catalog, we are proud to offer an exclusive Placement Package specifically tailored for students of Computer Science & Engineering. This package is designed to equip you with the essential skills and knowledge required to excel in the competitive job market. From technical interview preparation to resume building and career guidance, we are committed to helping you secure your dream job.</b>
  <br></br>
      <button className="button">
        <Link to="/course" className="link">
          Start from Here
        </Link>
      </button>
    </div>
  );
};

export default Home;
