import React, { Component } from "react";
import Home from "./views/Home";
import './css/app.css'

class App extends Component {
  componentDidMount(){
    console.log('Se ha montado el componente');
  }
  render(){
    return (
      <div className="App">
      <Home />
    </div>
  );
}
}

export default App;
