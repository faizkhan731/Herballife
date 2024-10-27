import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Shop } from "./Pages/Shop";
import { Aboutus } from "./Pages/About us";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
