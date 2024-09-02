import React, { useState, useEffect } from "react";
import axios from "axios";
import UpcomingEvents from "./list/UpcomingEvents";
import RightSection from "./right/Right";
import EventForm from "./form/EventForm";
import Header from "../navbar/header";
import "./EventPage.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showFilteredEvents, setShowFilteredEvents] = useState(false); // State to toggle filtering

  const toggleForm = () => setShowForm(!showForm);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // const handleAddEvent = async (eventData) => {
  //   try {
  //     await axios.post('http://localhost:5000/api/events', eventData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     fetchEvents(); // Refresh events list
  //     toggleForm(); // Close form after submission
  //   } catch (err) {
  //     console.error("Error submitting form:", err);
  //   }
  // };

  const handleAddEvent = async (eventData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/events', eventData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setEvents((prevEvents) => [...prevEvents, response.data]); // Update state directly
      toggleForm(); // Close form after submission
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };
  

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="event-outer">
      <div className="header-image">
        <div className="header" >
          <Header/>
        </div>
      </div>
      <div className="event-page">
        <div className="event-content">
          <div className="event-main">
            <UpcomingEvents 
              events={events} 
              selectedDate={selectedDate} 
              showFilteredEvents={showFilteredEvents} 
              setShowFilteredEvents={setShowFilteredEvents} 
              toggleForm={toggleForm} 
            />
            <RightSection 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
              setShowFilteredEvents={setShowFilteredEvents} 
            />
          </div>
        </div>
        <EventForm
          showForm={showForm}
          toggleForm={toggleForm}
          onSubmit={handleAddEvent}
        />
      </div>
    </div>
  );
};

export default EventPage;
