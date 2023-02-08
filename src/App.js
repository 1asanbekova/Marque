import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Aos from "aos";

const App = () => {
  return (
    <div>
      <Navbar />
      {Aos.init()}
      <HomePage />
    </div>
  );
};

export default App;
