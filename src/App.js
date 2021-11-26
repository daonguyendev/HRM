import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Staff from "./components/main/Staff";
import Department from "./components/main/Department";
import Sidebar from "./components/common/Sidebar";
import Login from "./components/main/Login";
import Report from "./components/main/Report";
import Config from "./components/main/Config";
import Admin from "./components/main/Admin";
function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/staff" element={<Staff />} />
        <Route path="/department" element={<Department />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/config" element={<Config />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
