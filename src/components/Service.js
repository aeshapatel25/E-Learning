import React from 'react';
import './Service.css';

const services = [
  {
    title: 'Online Courses and Classes',
    description: 'Avail the best of the online classes and courses for a headstart in the field you desire. Packed and loaded with nothing less than the best.',
    imageUrl: 'https://source.unsplash.com/400x300/?courses',
  },
  {
    title: 'Live Webinars and Workshops',
    description: 'Fuse in with the best of the best in their fileds with our live sessions and webinars. Also register yourself for a trial to avail one to one mentorship. ',
    imageUrl: 'https://source.unsplash.com/400x300/?webinars',
  },
  {
    title: 'Personalized Learning Experience',
    description: 'No need to hurry! Complete the courses at your own pace with the self-paced learning resources available 24*7 over the protal after successful registration.',
    imageUrl: 'https://source.unsplash.com/400x300/?personalized',
  },
];

const Service = () => {
  return (
    <div>
      {services.map((service, index) => (
        <div className={`Service-section-${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <div className="Service-container">
            <div className="Service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="Service-text">
              <h1 className="title">{service.title}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
