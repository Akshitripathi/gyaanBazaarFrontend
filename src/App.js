import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/login/Login"
import Profile from "./components/profile/profile";
import Book from "./components/booknest/book";
import SubSubjects from "./components/booknest/subSubjects";
import CourseBooks from "./components/booknest/courseBooks";
import { UserContext } from "./components/userContext";
import EventPage from "./components/Event/EventPage";
import EventDetails from "./components/Event/viewDetails/EventDetails";
import About from "./components/about/About";
import Contact from "./components/contact/ContactUs";
import Unimart from "./components/unimart/unimart";
import Cart from "./components/unimart/Cart";
function App() {
  const [user, setUser] = useState(null);
  return (
      <Router>
         <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/subsubjects/:id" element={<SubSubjects />} />
          <Route path="/courseBooks" element={<CourseBooks/>}/>
          <Route path="/about-container" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/unimart" element={<Unimart/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        
        </UserContext.Provider>
        
      </Router>
  );
}

export default App;
