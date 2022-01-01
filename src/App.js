import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <h1>MERN APP with authentication</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />

          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />

          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
      <hr />
      <footer>this is footer</footer>
    </div>
  );
}

export default App;
