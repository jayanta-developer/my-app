import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./page/Home";
import User from "./page/user";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
