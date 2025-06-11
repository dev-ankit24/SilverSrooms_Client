import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/partials/Navbar";
import "./components/assets/css/style.css"
import Home from "./components/Home";
import Footer from "./components/partials/Footer";
import About from "./components/About";
import Gallery from "./components/Gallery";
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
