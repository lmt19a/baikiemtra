import Login from "./Pages/LoginForm/Login";
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import { useState } from "react";
import PrivateRoute from "./PrivateRoute";
import Create from "./Pages/Crud/Create";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
