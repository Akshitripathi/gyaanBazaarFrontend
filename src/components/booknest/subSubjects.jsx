import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './subsubjects.css';

const SubSubjects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subSubjects } = location.state;

  const handleSubSubjectClick = (subSubject) => {
    navigate('/courseBooks', { state: { subSubject } });
  };

  return (
    <div className="subsubjects-container">
      <h1>Sub-Subjects</h1>
      <div className="subsubjects-list">
        {subSubjects.map((subSubject, index) => (
          <div className="subsubject-item" key={index} onClick={() => handleSubSubjectClick(subSubject)}>
            <h2>{subSubject}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubSubjects;