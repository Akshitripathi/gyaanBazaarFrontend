import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Login from "./components/login/Login"
import Profile from "./components/profile/profile";
import Book from "./components/booknest/book";
import SubSubjects from "./components/booknest/subSubjects";
import CourseBooks from "./components/booknest/courseBooks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/book" element={<Book />} />
          <Route path="/subsubjects/:id" element={<SubSubjects />} />
          <Route path="/courseBooks" element={<CourseBooks/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
