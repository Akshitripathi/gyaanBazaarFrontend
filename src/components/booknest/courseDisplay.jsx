import React from "react";
import { useNavigate } from "react-router-dom";
import "../home/course/courses.css";

const CourseDisplay = ({ searchTerm }) => {
  const navigate = useNavigate();

  const coursesData = [
    { id: 1, title: 'UI/UX Design Courses', subject: 'UI/UX Design', count: 25, subSubjects: ['User Research', 'Wireframing', 'Prototyping'] },
    { id: 2, title: 'Art & Design', subject: 'Art & Design', count: 25, subSubjects: ['Graphic Design', 'Color Theory', '3D Modeling'] },
    { id: 3, title: 'Computer Science', subject: 'Computer Science', count: 10, subSubjects: ['Data Structures', 'Algorithms', 'Operating Systems'] },
    { id: 4, title: 'History & Archeologic', subject: 'History & Archeologic', count: 15, subSubjects: ['Ancient Civilizations', 'Archeological Methods'] },
    { id: 5, title: 'Software Engineering', subject: 'Software Engineering', count: 30, subSubjects: ['Software Development Life Cycle', 'Agile Methodologies'] },
    { id: 6, title: 'Information Software', subject: 'Information Software', count: 60, subSubjects: ['Database Management', 'Information Systems'] },
    { id: 7, title: 'Health & Fitness', subject: 'Health & Fitness', count: 10, subSubjects: ['Nutrition', 'Personal Training'] },
    { id: 8, title: 'Marketing', subject: 'Marketing', count: 30, subSubjects: ['Digital Marketing', 'SEO', 'Content Marketing'] },
    { id: 9, title: 'Graphic Design', subject: 'Graphic Design', count: 80, subSubjects: ['Logo Design', 'Branding'] },
    { id: 10, title: 'Music', subject: 'Music', count: 120, subSubjects: ['Music Theory', 'Instrumental'] },
    { id: 11, title: 'Business Administration', subject: 'Business Administration', count: 17, subSubjects: ['Management', 'Finance'] },
    { id: 12, title: 'Web Management', subject: 'Web Management', count: 17, subSubjects: ['Web Development', 'SEO'] },
  ];

  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCourseClick = (course) => {
    navigate(`/subsubjects/${course.id}`, { state: { subSubjects: course.subSubjects } });
  };

  return (
    <section className='online'>
      <div className='container-online'>
        <div className='content grid3'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <div className='box' key={course.id} onClick={() => handleCourseClick(course)}>
                <div className='img'>
                  <img src={`./images/courses/online/o${course.id}.png`} alt={course.title} />
                  <img src={`./images/courses/online/o${course.id}.1.png`} alt={`${course.title} Hover`} className='show' />
                </div>
                <h1>{course.title}</h1>
                <span>{course.count} Courses</span>
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseDisplay;