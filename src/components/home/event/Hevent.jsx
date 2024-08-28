import React from "react";
import "./event.css";

const Hblog = () => {
  return (
    <section className='blog'>
      <div className='container-blog'>
        <div id="heading-event">
          <h1>UPCOMING EVENTS</h1>
          <h3>Latest Events</h3>
        </div>
        <div className='grid2'>
          <div className='items shadow'>
            <div className='img'>
              <img src="../images/events/b1.webp" alt='Event 1' />
            </div>
            <div className='text'>
              <div className='admin flexSB'>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>AUG. 30, 2024</label>
                </span>
                <span>
                  <i className='fa fa-map-marker-alt'></i>
                  <label htmlFor=''>Auditorium</label>
                </span>
                <span>
                  <i className='fa fa-clock'></i>
                  <label htmlFor=''>10:00 AM</label>
                </span>
              </div>
              <h1>Tech Innovations Seminar</h1>
              <p>Join us for an exciting seminar on the latest tech innovations and future trends in technology.</p>
            </div>
          </div>
          <div className='items shadow'>
            <div className='img'>
              <img src="../images/events/b2.webp" alt='Event 2' />
            </div>
            <div className='text'>
              <div className='admin flexSB'>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>SEP. 15, 2024</label>
                </span>
                <span>
                  <i className='fa fa-map-marker-alt'></i>
                  <label htmlFor=''>Main Hall</label>
                </span>
                <span>
                  <i className='fa fa-clock'></i>
                  <label htmlFor=''>2:00 PM</label>
                </span>
              </div>
              <h1>Networking Mixer</h1>
              <p>Connect with peers and professionals at our networking mixer, and explore new opportunities.</p>
            </div>
          </div>
          <div className='items shadow'>
            <div className='img'>
              <img src="../images/events/b3.webp" alt='Event 3' />
            </div>
            <div className='text'>
              <div className='admin flexSB'>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>OCT. 10, 2024</label>
                </span>
                <span>
                  <i className='fa fa-map-marker-alt'></i>
                  <label htmlFor=''>Conference Room 1</label>
                </span>
                <span>
                  <i className='fa fa-clock'></i>
                  <label htmlFor=''>11:00 AM</label>
                </span>
              </div>
              <h1>Career Development Workshop</h1>
              <p>Enhance your career skills with our workshop focused on resume building, interview techniques, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hblog;
