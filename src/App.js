import Navbar from "./Navbar";
import './App.css';
import Education from './pages/Education';
import Home from "./pages/Home";
import {Route, Routes } from "react-router-dom"
import Work from "./pages/Work";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./components/footer";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
