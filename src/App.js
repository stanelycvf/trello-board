import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home"
import "./index.scss";

import Search from "./components/Search/Search";






export default function App() {
  const[setsearch]=useState("");
  
  return (
    <div>  
      <Navbar/> 
      <Search handleSearchNote={setsearch}/>
      <Home/>
        
    </div>
  );
}