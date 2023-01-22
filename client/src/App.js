import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Home";
import Service from "./components/Service";
import Doctor from "./components/Doctor";
import AboutUs from "./components/AboutUs";
import Appointment from "./components/Appointment";
import NewAppointment from "./components/NewAppointment";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/services" element={<Service />} />
          <Route exact="true" path="/newappointment" element={<NewAppointment user={user}/>} />
          <Route exact="true" path="/appointments" element={<Appointment />} />
          <Route exact="true" path="/doctors" element={<Doctor />} />
          <Route exact="true" path="/aboutus" element={<AboutUs />} />
        </Routes>
    </>
  );
}

export default App;
