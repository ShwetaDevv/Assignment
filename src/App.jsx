import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component1/Home";
import About from "./Component1/About";
import Navbar from "./Component1/Navbar";
import User from "./Component1/User";
import Admin from "./Component1/Admin";

function App() {
  return (
    <>
    <Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="user" element={<User/>}/>
          <Route path="user/admin" element={<Admin/>}/>
        </Routes>
        </Navbar>
    </>
  );
}

export default App;
