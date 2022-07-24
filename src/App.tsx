import React from 'react';
import './App.css';
import {BeersPage} from "./pages/BeersPage/BeersPage";
import {Route, Routes} from "react-router-dom";
import {BeerDescription} from "./pages/BeerDescription/BeerDescription";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<BeersPage/>}/>
        <Route path={"/:id"} element={<BeerDescription/>}/>
      </Routes>

    </div>
  );
}

export default App;
