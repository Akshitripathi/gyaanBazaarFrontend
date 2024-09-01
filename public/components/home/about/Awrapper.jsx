import React from "react";

const Awrapper = () => {
  return (
    <>
      <section className="awrapper">
        <div className="container grid">
          <div className="box flex">
            <div className="img">
              <img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" alt="Students Icon" />
            </div>
            <div className="text">
              <h1>5,000+</h1>
              <h3>ACTIVE STUDENTS</h3>
            </div>
          </div>

          <div className="box flex">
            <div className="img">
              <img src="https://img.icons8.com/ios/80/ffffff/classroom.png" alt="Classroom Icon" />
            </div>
            <div className="text">
              <h1>100+</h1>
              <h3>COURSES OFFERED</h3>
            </div>
          </div>

          <div className="box flex">
            <div className="img">
              <img src="https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png" alt="Calendar Icon" />
            </div>
            <div className="text">
              <h1>100+</h1>
              <h3>EVENTS HOSTED</h3>
            </div>
          </div>

          <div className="box flex">
            <div className="img">
              <img src="https://img.icons8.com/ios/80/ffffff/network.png" alt="Network Icon" />
            </div>
            <div className="text">
              <h1>1000+</h1>
              <h3>NETWORK MEMBERS</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awrapper;
