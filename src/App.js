import React from "react";
import Destinations from "./components/Destinations/Destinations";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
// import Search from "./components/Search/Search";
import TComponent from "./components/TComponent/TComponent";



function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <TComponent />
      <Destinations />
    </div>
  );
}

export default App;
