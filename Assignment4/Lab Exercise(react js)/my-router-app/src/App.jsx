import About from "./About";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Menu from "./Menu";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
