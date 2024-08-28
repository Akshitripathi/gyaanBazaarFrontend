import React from "react";
import "./courses.css";
// import Heading from "../common/heading/Heading";

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container-online'>
          <div id="heading-online">
            <h1>Book Nest</h1>
            <h3>Browse Our Digital Library</h3>
          </div>
          {/* <Heading subtitle='COURSES' title='Browse Our Online Courses' /> */}
          <div className='content grid3'>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o1.png" alt="UI/UX Design" />
                <img src="./images/courses/online/o1.1.png" alt="UI/UX Design Hover" className='show' />
              </div>
              <h1>UI/UX Design Courses</h1>
              <span>25 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o2.png" alt="Art & Design" />
                <img src="./images/courses/online/o2.1.png" alt="Art & Design Hover" className='show' />
              </div>
              <h1>Art & Design</h1>
              <span>25 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o3.png" alt="Computer Science" />
                <img src="./images/courses/online/o3.1.png" alt="Computer Science Hover" className='show' />
              </div>
              <h1>Computer Science</h1>
              <span>10 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o4.png" alt="History & Archeologic" />
                <img src="./images/courses/online/o4.1.png" alt="History & Archeologic Hover" className='show' />
              </div>
              <h1>History & Archeologic</h1>
              <span>15 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o5.png" alt="Software Engineering" />
                <img src="./images/courses/online/o5.1.png" alt="Software Engineering Hover" className='show' />
              </div>
              <h1>Software Engineering</h1>
              <span>30 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o6.png" alt="Information Software" />
                <img src="./images/courses/online/o6.1.png" alt="Information Software Hover" className='show' />
              </div>
              <h1>Information Software</h1>
              <span>60 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o7.png" alt="Health & Fitness" />
                <img src="./images/courses/online/o7.1.png" alt="Health & Fitness Hover" className='show' />
              </div>
              <h1>Health & Fitness</h1>
              <span>10 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o8.png" alt="Marketing" />
                <img src="./images/courses/online/o8.1.png" alt="Marketing Hover" className='show' />
              </div>
              <h1>Marketing</h1>
              <span>30 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o9.png" alt="Graphic Design" />
                <img src="./images/courses/online/o9.1.png" alt="Graphic Design Hover" className='show' />
              </div>
              <h1>Graphic Design</h1>
              <span>80 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o10.png" alt="Music" />
                <img src="./images/courses/online/o10.1.png" alt="Music Hover" className='show' />
              </div>
              <h1>Music</h1>
              <span>120 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o11.png" alt="Business Administration" />
                <img src="./images/courses/online/o11.1.png" alt="Business Administration Hover" className='show' />
              </div>
              <h1>Business Administration</h1>
              <span>17 Courses</span>
            </div>
            <div className='box'>
              <div className='img'>
                <img src="./images/courses/online/o12.png" alt="Web Management" />
                <img src="./images/courses/online/o12.1.png" alt="Web Management Hover" className='show' />
              </div>
              <h1>Web Management</h1>
              <span>17 Courses</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
