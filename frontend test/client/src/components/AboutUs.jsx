import React from "react";
import image from "../images/daktari.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="hero" />
          </div>
          <div className="hero-content">
            <p>
              Welcome to  <b>Daktari App</b>, a
              user-friendly platform that simplifies scheduling and managing
              doctor appointments. Patients can easily browse available doctors,
              specialties, and book appointments with a few clicks. Medical
              practitioners can access real-time updates, view patient
              information, and maintain a synchronized schedule. Our system
              ensures data security and confidentiality, adhering to industry
              standards. We strive to revolutionize healthcare by connecting
              patients and doctors seamlessly, enhancing the overall healthcare
              experience. Experience the convenience of our Doctor Appointment
              Management System and take control of your healthcare journey
              today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
