import React from 'react';
import './About.css';
import aboutimg from '../assets/businesslaptops-2048px-0098-2x1-1.webp';

const About = () => {
  return (
    <div className="About-section">
      <div className="About-container">
        <div className="About-image">
          <img src={aboutimg} alt="About Us" />
        </div>
        <div className="About-text">
          <h1 className="title">About Me</h1>
          <p>
            Welcome to My Learniverse platform! With over 10 years of experience
            in React Js, I'm here to help you unlock your full potential. Join
            me on this transformative educational journey, where we'll dive
            into the intricacies of React Js. From beginners to advanced
            learners, my tailored courses foster critical thinking, creativity,
            and problem-solving skills. Let's unlock endless possibilities
            together!
          </p>
          <p>
            Throughout my teaching career, I have developed a strong
            understanding of various learning styles and effective instructional
            strategies. My courses are meticulously crafted to be engaging,
            interactive, and tailored to meet the unique needs of each student.
            I firmly believe that education should be a transformative
            experience that not only imparts knowledge but also stimulates
            critical thinking, nurtures creativity, and fosters problem-solving
            skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
