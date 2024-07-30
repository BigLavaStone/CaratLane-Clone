import { useState } from "react";
// import './App.css'
//import NavBar from "./CSS/Navbar";
import Navbar from "./Components/Header/Navbar";
import TopBar from "./Components/Header/TopBar";
// import SimpleSlider from "./Components/Home/SimpleSlider";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
        <TopBar />
        <Navbar />
        <Home />
    </>
  );
}


export default App;
