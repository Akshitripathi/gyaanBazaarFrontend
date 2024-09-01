import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import "./UpcomingEvents.css";

const UpcomingEvents = ({ selectedDate, showFilteredEvents, setShowFilteredEvents, toggleForm }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (showFilteredEvents && selectedDate) {
      const selectedDateStr = selectedDate.toLocaleDateString(); // Format selected date as string
      const filtered = events.filter(event => {
        const eventDateStr = new Date(event.eventDate).toLocaleDateString(); // Format event date as string
        return eventDateStr === selectedDateStr; // Compare formatted date strings
      });
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [selectedDate, showFilteredEvents, events]);

  const handleViewDetails = (id) => {
    navigate(`/event/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="event-upcoming-section">
      <div className="event-header">
        <h3>Upcoming Events</h3>
        <label>
          <input
            type="checkbox"
            checked={showFilteredEvents}
            onChange={() => setShowFilteredEvents(prev => !prev)}
          />
          Events on {showFilteredEvents && selectedDate ? selectedDate.toLocaleDateString() : 'selected date'}
        </label>
        <button className="event-add-btn" onClick={toggleForm}>
          + Add new event
        </button>
      </div>
      
      <div className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div className="event-card" key={event._id}>
              <img
                src={`http://localhost:5000/${event.eventImage}`}
                alt="Event"
                className="event-image"
              />
              <div className="event-details">
                <h4>{event.eventName}</h4>
                <div className="event-para-details">
                  <p>
                    <FaCalendarAlt className="event-icon" />
                    {new Date(event.eventDate).toLocaleDateString()} | {event.eventTime}
                  </p>
                  <p>
                    <FaMapMarkerAlt className="event-icon" />
                    {event.eventPlace}
                  </p>
                  <p>
                    <FaUsers className="event-icon" />
                    Invited: {event.invitedPeople}
                  </p>
                </div>
                <div className="event-button">
                  <button className="event-view-btn" onClick={() => handleViewDetails(event._id)}>
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
