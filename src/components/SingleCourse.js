import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleCourse.css';

const SingleCourse = () => {
  const { id } = useParams();

  const courses = [
    {
      id: 1,
      title: 'Frontend Development',
      content: 'Course content for Frontend Development',
      tableOfContents: [
        { heading: 'HTML', videoId: 'byTOONVJn-k' },
        { heading: 'CSS', videoId: 'hkQv0NIxKQY' },
        { heading: 'JavaScript', videoId: 'KGkiIBTq0y0' },  
        { heading: 'Bootstrap', videoId: 'Qb8DLdSYBAo' },
        { heading: 'React Js', videoId: 'EHTWMpD6S_0' },
      ],
    },
    {
      id: 2,
      title: 'Backend Technology',
      content: 'Course content for Backend Technology',
      tableOfContents: [
        { heading: 'PART-1', videoId: 'Yy1yx9uTHIs' },
        { heading: 'PART-2', videoId: 'IIpiLZGTWuo' },
        { heading: 'PART-3', videoId: 'JxzZxdht-XY' },
      ],
    },
    {
      id: 3,
      title: 'BlockChain',
      content: 'Course content for BlockChain',
      tableOfContents: [
        { heading: 'PART-1', videoId: 'mfSr-c9sAjI' },
        { heading: 'PART-2', videoId: 'VU59tR982W4' },
      ],
    },
  ];

  const selectedCourse = courses.find((course) => course.id === Number(id));

  const [activeHeading, setActiveHeading] = useState(
    selectedCourse?.tableOfContents[0]?.heading || ''
  );

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  const handleHeadingClick = (heading) => {
    setActiveHeading(heading);
  };

  const activeContent = selectedCourse.tableOfContents.find(
    (content) => content.heading === activeHeading
  );

  return (
    <div className="single-course">
      <div className="sidebar">
        <ul className="content-list">
          {selectedCourse.tableOfContents.map((content, index) => (
            <li
              key={index}
              className={content.heading === activeHeading ? 'active' : ''}
              onClick={() => handleHeadingClick(content.heading)}
            >
              {content.heading}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h2 className="content-title">{selectedCourse.title}</h2>
        <div className="video-container">
          {activeContent ? (
            <iframe
              title="Embedded Video"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${activeContent.videoId}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
