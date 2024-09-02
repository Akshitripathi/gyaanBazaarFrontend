// import React from "react";
// import "./event.css";

// const Hblog = () => {
//   return (
//     <section className='blog'>
//       <div className='container-blog'>
//         <div id="heading-event">
//           <h1>UPCOMING EVENTS</h1>
//           <h3>Latest Events</h3>
//         </div>
//         <div className='grid2'>
//           <div className='items shadow'>
//             <div className='img'>
//               <img src="../images/events/b1.png" alt='Event 1' />
//             </div>
//             <div className='text'>
//               <div className='admin flexSB'>
//                 <span>
//                   <i className='fa fa-calendar-alt'></i>
//                   <label htmlFor=''>AUG. 30, 2024</label>
//                 </span>
//                 <span>
//                   <i className='fa fa-map-marker-alt'></i>
//                   <label htmlFor=''>Auditorium</label>
//                 </span>
//                 <span>
//                   <i className='fa fa-clock'></i>
//                   <label htmlFor=''>10:00 AM</label>
//                 </span>
//               </div>
//               <h1>Tech Innovations Seminar</h1>
//               <p>Join us for an exciting seminar on the latest tech innovations and future trends in technology.</p>
//             </div>
//           </div>
//           <div className='items shadow'>
//             <div className='img'>
//               <img src="../images/events/b2.webp" alt='Event 2' />
//             </div>
//             <div className='text'>
//               <div className='admin flexSB'>
//                 <span>
//                   <i className='fa fa-calendar-alt'></i>
//                   <label htmlFor=''>SEP. 15, 2024</label>
//                 </span>
//                 <span>
//                   <i className='fa fa-map-marker-alt'></i>
//                   <label htmlFor=''>Main Hall</label>
//                 </span>
//                 <span>
//                   <i className='fa fa-clock'></i>
//                   <label htmlFor=''>2:00 PM</label>
//                 </span>
//               </div>
//               <h1>Networking Mixer</h1>
//               <p>Connect with peers and professionals at our networking mixer, and explore new opportunities.</p>
//             </div>
//           </div>
//           <div className='items shadow'>
//             <div className='img'>
//               <img src="../images/events/b3.webp" alt='Event 3' />
//             </div>
//             <div className='text'>
//               <div className='admin flexSB'>
//                 <span>
//                   <i className='fa fa-calendar-alt'></i>
//                   <label htmlFor=''>OCT. 10, 2024</label>
//                 </span>
//                 <span>
//                   <i className='fa fa-map-marker-alt'></i>
//                   <label htmlFor=''>Conference Room 1</label>
//                 </span>
//                 <span>
//                   <i className='fa fa-clock'></i>
//                   <label htmlFor=''>11:00 AM</label>
//                 </span>
//               </div>
//               <h1>Career Development Workshop</h1>
//               <p>Enhance your career skills with our workshop focused on resume building, interview techniques, and more.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hblog;




import React from "react";
import "./event.css";

const Hblog = () => {
  return (
    <section className='eventpart-container' id='range'>
      <div className='eventpart-toppart'>
        <p className='smallheading'>EVENTS</p>
        <div className='bigheading'>
          <h1>Discover New Horizons</h1>
          <p>Broaden your horizons through events that introduce you to new ideas, cultures,<br/>
           and experiences, enriching your college life and expanding your worldview.
          </p>
          <a href="/event" className='event-home-button'>Explore Events</a>
        </div>
      </div>

      <div className='eventpart-bottompart'>
        <div className='eventpart-bottompart-left'>
          <div className='eventpart-bottompart-style'>
            <img src="../images/events/event1.png" alt="" />
            <h1>Networking Mixer</h1>
          </div>
        </div>
        <div className='eventpart-bottompart-middle'>
          <div className='eventpart-bottompart-style'>
            <img src="../images/events/event2.png" alt="" />
            <h1>Career Development Workshop</h1>
          </div>
        </div>
        <div className='eventpart-bottompart-right'>
          <div className='eventpart-bottompart-style'>
            <img src="../images/events/event3.png" alt="" />
            <h1>Tech Innovations Seminar</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hblog;
