import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
function About() {
  const navigate = useNavigate();
  return (
    <div
      style={{ padding: "20px", textAlign: "center" }}
      className="about-container"
    >
      <h2 className="about-heading">About Us</h2>
      <p className="about-text">
        Welcome to <strong>Project Digger </strong>. We’re a team
              Discovers, Develops,  Delivers — Your Ideal Final-Year Project Awaits
      </p>
      <p className="about-text">
        Our mission is to connect passionate learners with innovative companies
        and help bridge the gap between academics and real-world experience.
      </p>
      <button onClick={() => navigate("/domains")} className="continue-button">
        Continue
      </button>
    </div>
  );
}

export default About;

