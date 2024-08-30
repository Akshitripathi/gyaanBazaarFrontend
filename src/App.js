import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Login from "./components/login/Login"
import Profile from "./components/profile/profile";
import Book from "./components/booknest/book";
import SubSubjects from "./components/booknest/subSubjects";
import CourseBooks from "./components/booknest/courseBooks";
import { UserContext } from "./components/userContext";

function App() {
  const [user, setUser] = useState(null);
  return (
      <Router>
         <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/subsubjects/:id" element={<SubSubjects />} />
          <Route path="/courseBooks" element={<CourseBooks/>}/>
        </Routes>
        
        </UserContext.Provider>
      </Router>
  );
}

export default App;
