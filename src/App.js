import "./App.css";
import Header from "./components/navbar/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
// import Login from "./components/login/Login"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />  */}
  
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
