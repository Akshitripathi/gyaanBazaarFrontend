import React from "react";
import "./courses.css";
import { useNavigate } from "react-router-dom";

const OnlineCourses = () => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/book'); 
  };

  return (
    <section className="online">
      <div className="container-online">
        <div id="heading-online">
          <h1>Book Nest</h1>
          <h3>Browse Our Digital Library</h3>
        </div>
        <div className="content grid3">
          <div className="box">
            <div className="img" onClick={handleClick}>
              <img src="./images/courses/online/o1.png" alt="UI/UX Design" />
              <img src="./images/courses/online/o1.1.png" alt="UI/UX Design Hover" className="show" />
            </div>
            <h1>UI/UX Design Courses</h1>
            <span>25 Courses</span>
          </div>
          <div className="box">
            <div className="img"onClick={handleClick}>
              <img src="./images/courses/online/o2.png" alt="Art & Design" />
              <img src="./images/courses/online/o2.1.png" alt="Art & Design Hover" className="show" />
            </div>
            <h1>Art & Design</h1>
            <span>25 Courses</span>
          </div>
          <div className="box">
            <div className="img"onClick={handleClick}>
              <img src="./images/courses/online/o3.png" alt="Computer Science" />
              <img src="./images/courses/online/o3.1.png" alt="Computer Science Hover" className="show" />
            </div>
            <h1>Computer Science</h1>
            <span>25 Courses</span>
          </div>
          <div className="box">
            <div className="img"onClick={handleClick}>
              <img src="./images/courses/online/o4.png" alt="Blockchain" />
              <img src="./images/courses/online/o4.1.png" alt="Blockchain Hover" className="show" />
            </div>
            <h1>Blockchain</h1>
            <span>25 Courses</span>
          </div>
          <div className="box">
            <div className="img"onClick={handleClick}>
              <img src="./images/courses/online/o5.png" alt="Marketing" />
              <img src="./images/courses/online/o5.1.png" alt="Marketing Hover" className="show" />
            </div>
            <h1>Marketing</h1>
            <span>25 Courses</span>
          </div>
          <div className="box">
            <div className="img"onClick={handleClick}>
              <img src="./images/courses/online/o6.png" alt="Data Science" />
              <img src="./images/courses/online/o6.1.png" alt="Data Science Hover" className="show" />
            </div>
            <h1>Data Science</h1>
            <span>25 Courses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCourses;
