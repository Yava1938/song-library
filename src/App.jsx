import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./views/Home";
import{SongDetail} from './views/SongDetail'
import './css/app.css'


export const App = ()=> {
  useEffect(() =>{
    console.log('Se ha montado el componente');
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </Router>
  );
}