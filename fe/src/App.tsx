import React from "react";
import Login from "./pages/Login";
import Homepage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/homepage" element={<Homepage />} />
            <Route path="/cadastro" element={<Registration />} />

            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
