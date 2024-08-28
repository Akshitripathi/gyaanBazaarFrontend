import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Login from "./components/login/Login"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Home" element={<Home />} />
  
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
