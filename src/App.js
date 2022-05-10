import { useState } from "react";

// import ima from './assest/10.jpg';
// import Images from './assest/3.png';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";

const App=()=>{

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/list" element={<List />}/>

      </Routes>
    </div>
  )
}

export default App;
