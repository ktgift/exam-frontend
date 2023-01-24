import React from "react";
import logo from "./assets/images/logo.png";

const App = () => {
  return (
    <div className="app background">
      <div className="logo">
        <img className="imgLogo" src={logo} alt="logo" />
      </div>
      <div className="container">
        <p className="title">ชื่อของคุณ</p>
        <input />
      </div>
    </div>
  );
};

export default App;
