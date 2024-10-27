import React from "react";
import { useState } from "react";
import Nav from "../components/nav/Nav";
import "./Contact.css";
import conmg from "/public/img2.jpg";
export const Contact = () => {
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Message, SetMessage] = useState("");

  const handlesubmitonclick = (e) => {
    e.preventDefault();

    const condata = {
      Name,
      Email,
      Message,
    };
    console.log(condata);
  };

  return (
    <>
      <Nav />

      <div className="cont">
        <h1>Contact</h1>
        <form onSubmit={handlesubmitonclick}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="Name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="Email"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)}
          />

          <label>message</label>
          <textarea
            name="Message"
            placeholder="Enter your Message"
            value={Message}
            onChange={(e) => SetMessage(e.target.value)}
          />
          <button className="subbtn">Submit</button>
        </form>
      </div>
    </>
  );
};
