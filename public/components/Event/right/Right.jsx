import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./Right.css";

const RightSection = ({ selectedDate, setSelectedDate, setShowFilteredEvents }) => {
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowFilteredEvents(true); // Automatically check the checkbox
  };

  return (
    <div className="event-right-section">
      {/* Calendar Section */}
      <div className="event-calendar-section">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>

      {/* To-Do List Section */}
      <div className="event-todo-section">
        <h3>To do list</h3>
        <ul>
          <li>Online meeting with speakers - 05.04.2024</li>
          <li>Reserve Function Room - 08.04.2024</li>
          <li>Send Invites - 10.04.2024</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSection;
