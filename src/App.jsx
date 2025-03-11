import React, { useEffect } from "react";
import {Home} from "./views/Home";
import './css/app.css'

export const App = ()=> {
  useEffect(() =>{
    console.log('Se ha montado el componente');
  }, [])
  return (
      <div className="App">
      <Home />
    </div>
  );
}


