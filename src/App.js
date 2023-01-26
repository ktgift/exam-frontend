import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Confrim from "./pages/Confrim";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/confrim" element={<Confrim />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;
