import React from "react";
import { useNavigate } from "react-router-dom";
import "../home/course/courses.css";

const CourseDisplay = ({ searchTerm }) => {
  const navigate = useNavigate();

  const coursesData = [
    { id: 1, title: 'UI/UX Design Courses', subject: 'UI/UX Design', count: 25, subSubjects: [
      "Introduction to UI/UX Design",
      "User Research and Analysis",
      "Personal Development",
      "User Journey Mapping",
      "Information Architecture",
      "Wireframing Techniques",
      "Prototyping",
      "Interaction Design",
      "Visual Design Principles",
      "Design Systems",
      "Responsive Design",
      "Usability Testing",
      "Accessibility and Inclusive Design",
      "User Interface Development",
      "UX Strategy and Planning",
      "Behavioral Psychology in Design",
      "Ethics in UX Design",
      "Design Thinking",
      "Motion Design and Animation",
      "Advanced Prototyping",
      "User Experience Metrics",
      "Collaborative Design",
      "Cultural Considerations in Design",
      "Portfolio Development",
      "Career Development and Job Search"
    ] },
    { id: 2, title: 'Art & Design', subject: 'Art & Design', count: 25, subSubjects: [
      "Introduction to Art and Design",
      "Color Theory",
      "Drawing Fundamentals",
      "Digital Art",
      "Graphic Design",
      "Typography",
      "3D Modeling and Animation",
      "Art History",
      "Concept Art",
      "Printmaking Techniques",
      "Photography",
      "Illustration",
      "Painting Techniques",
      "Sculpture",
      "Design Principles",
      "Fashion Design",
      "Textile Design",
      "Interior Design",
      "User Interface Design",
      "User Experience Design",
      "Visual Communication",
      "Art Direction",
      "Creative Coding",
      "Art and Technology",
      "Mixed Media Art"
    ] },
    { id: 3, title: 'Computer Science', subject: 'Computer Science', count: 15, subSubjects: [
      "Introduction to Computer Science",
      "Data Structures and Algorithms",
      "Computer Architecture",
      "Operating Systems",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
      "Machine Learning",
      "Cybersecurity",
      "Human-Computer Interaction",
      "Web Development",
      "Mobile App Development",
      "Programming Languages",
      "Discrete Mathematics"
    ] },
    { id: 4, title: 'History & Archeologic', subject: 'History & Archeologic', count: 15, subSubjects: [
      "Ancient Civilizations",
      "Medieval History",
      "Modern History",
      "Prehistoric Archaeology",
      "Classical Archaeology",
      "Historical Methodology",
      "Art History",
      "Cultural Heritage Management",
      "Historical Geography",
      "Historiography",
      "Ancient Near Eastern Studies",
      "Egyptology",
      "Roman History",
      "Greek History",
      "World Archaeology"
    ] },
    { id: 5, title: 'Software Engineering', subject: 'Software Engineering', count: 20, subSubjects:[
      "Introduction to Software Engineering",
      "Software Development Life Cycle",
      "Requirements Engineering",
      "Software Design Patterns",
      "Object-Oriented Programming",
      "Software Testing and Quality Assurance",
      "Database Management Systems",
      "Web Development",
      "Mobile Application Development",
      "Software Project Management",
      "Version Control Systems",
      "Algorithms and Data Structures",
      "Software Architecture",
      "Human-Computer Interaction",
      "Distributed Systems",
      "Software Engineering for Cloud Computing",
      "Cybersecurity Fundamentals",
      "DevOps Practices",
      "Software Maintenance and Evolution",
      "Agile Methodologies"
    ]  },
    { id: 6, title: 'Information Software', subject: 'Information Software', count: 60, subSubjects:[
      "Introduction to Information Systems",
      "Database Management Systems",
      "Software Engineering",
      "Programming Fundamentals",
      "Data Structures and Algorithms",
      "Web Development",
      "Operating Systems",
      "Computer Networks",
      "Human-Computer Interaction",
      "Information Security",
      "Software Development Life Cycle",
      "Systems Analysis and Design",
      "Cloud Computing",
      "Artificial Intelligence",
      "Machine Learning",
      "Big Data Analytics",
      "Data Warehousing",
      "Mobile Application Development",
      "Software Testing and Quality Assurance",
      "Project Management",
      "Information Retrieval",
      "Software Architecture",
      "User Interface Design",
      "Database Administration",
      "Business Intelligence"
    ]  },
    { id: 7, title: 'Health & Fitness', subject: 'Health & Fitness', count: 10, subSubjects: [
      "Exercise Physiology",
      "Nutrition and Dietetics",
      "Strength Training",
      "Cardiovascular Health",
      "Yoga and Flexibility",
      "Mental Health and Wellness",
      "Sports Medicine",
      "Personal Training and Coaching",
      "Fitness Assessment and Evaluation",
      "Biomechanics"
    ] },
    { id: 8, title: 'Marketing', subject: 'Marketing', count: 30, subSubjects:  [
      "Introduction to Marketing",
      "Marketing Principles",
      "Consumer Behavior",
      "Market Research",
      "Digital Marketing",
      "Social Media Marketing",
      "Content Marketing",
      "Brand Management",
      "Marketing Strategy",
      "Advertising",
      "Sales Management",
      "Public Relations",
      "International Marketing",
      "Product Management",
      "Data Analytics for Marketing"
    ] },
    { id: 9, title: 'Graphic Design', subject: 'Graphic Design', count: 80, subSubjects:[
      "Introduction to Graphic Design",
      "Typography",
      "Color Theory",
      "Digital Illustration",
      "Layout Design",
      "Brand Identity",
      "Print Design",
      "Web Design",
      "User Interface (UI) Design",
      "User Experience (UX) Design",
      "Information Design",
      "Packaging Design",
      "Motion Graphics",
      "3D Design",
      "Visual Storytelling",
      "Advertising Design",
      "Editorial Design",
      "Interactive Design",
      "Design Thinking",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Design for Social Media",
      "UI/UX Prototyping",
      "Logo Design",
      "Corporate Branding",
      "Design Ethics",
      "Creative Process",
      "Digital Photography",
      "Design Research",
      "Design Systems",
      "Creative Coding"
    ]  },
    { id: 10, title: 'Music', subject: 'Music', count: 120, subSubjects: [
      "Music Theory",
      "Ear Training",
      "Sight Reading",
      "Harmony",
      "Counterpoint",
      "Music History",
      "Music Composition",
      "Arranging and Orchestration",
      "Music Production",
      "Digital Audio Workstations (DAWs)",
      "Sound Design",
      "Music Technology",
      "Music Performance",
      "Vocal Techniques",
      "Instrumental Techniques",
      "Music Improvisation",
      "Conducting",
      "Music Analysis",
      "Music Criticism",
      "Ethnomusicology",
      "Music Psychology",
      "Music Education",
      "Music Pedagogy",
      "Music Therapy",
      "Music Business",
      "Music Marketing",
      "Film Scoring",
      "Game Music Composition",
      "Songwriting",
      "Jazz Studies",
      "Classical Music",
      "Pop Music",
      "Rock Music",
      "Electronic Music",
      "World Music",
      "Hip Hop Studies",
      "Folk Music",
      "Blues Studies",
      "Opera Studies",
      "Choral Music",
      "Marching Band Techniques",
      "Music Notation"
    ] },
    { id: 11, title: 'Business Administration', subject: 'Business Administration', count: 17, subSubjects: [
      "Introduction to Business",
      "Principles of Management",
      "Marketing Management",
      "Financial Accounting",
      "Managerial Accounting",
      "Business Law",
      "Organizational Behavior",
      "Human Resource Management",
      "Strategic Management",
      "Operations Management",
      "Economics for Business",
      "Business Ethics",
      "Entrepreneurship",
      "International Business"
    ] },
    { id: 12, title: 'Web Management', subject: 'Web Management', count: 17, subSubjects: [
      "Web Development Fundamentals",
      "HTML & CSS",
      "JavaScript Programming",
      "Responsive Web Design",
      "User Experience (UX) Design",
      "User Interface (UI) Design",
      "Content Management Systems (CMS)",
      "Website Analytics",
      "Search Engine Optimization (SEO)",
      "Web Accessibility",
      "Website Security",
      "Web Hosting & Deployment",
      "Front-End Development",
      "Back-End Development",
      "Web Project Management",
      "Web Performance Optimization",
      "Web Usability Testing"
    ] },
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
                <span>{course.count} Subjects</span>
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






