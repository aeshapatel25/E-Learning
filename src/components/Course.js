import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import WebDevImage from '../assets/undraw_web_developer_re_h7ie.svg';
import MLImage from '../assets/cloud-computing.svg';
import CloudImage from '../assets/undraw_cloud_hosting_7xb1.svg';

const Course = () => {
  const courses = [
    {
      id: 1,
      title: 'Front End Development',
      description: 'Front-end Development: This focuses on the visual and interactive aspects of a website. Front-end developers use languages like HTML, CSS, and JavaScript to create the layout, design, and user interface of a website. They ensure that the website is responsive, accessible, and compatible with different devices and browsers.',
    },
    {
      id: 2,
      title: 'Back End Development',
      description: 'Backend technology serves as the foundation of a robust and scalable digital ecosystem. It encompasses the server-side programming, databases, and infrastructure that power websites, web applications, and other software systems. Backend technologies handle data storage, processing, and communication between the client-side and server-side components.',
    },
    {
      id: 3,
      title: 'BlockChain',
      description: 'Blockchain technology has emerged as a groundbreaking innovation with the potential to revolutionize various industries. At its core, blockchain is a decentralized and transparent digital ledger that records and verifies transactions in a secure and immutable manner. Unlike traditional centralized systems, blockchain operates on a distributed network of computers, ensuring transparency, integrity, and trust without the need for intermediaries.',
    },
  ];

  return (
    <div className="course-section">
      <div className="course-container">
        {courses.map((course, index) => (
          <div className={`course-card ${index % 2 === 0 ? 'course-section-even' : 'course-section-odd'}`} key={course.id}>
            <div className="course-details">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <Link to={`/course/${course.id}`} className="course-button">
                Go To Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
