// src/pages/Contacts.jsx
import React from "react";

const Contacts = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/photo-Black background.avif')", 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute text-white text-4xl lg:text-6xl font-bold text-center"
        style={{
          top: "40%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
        }}
      >
        <h1>Contact Us</h1>
      </div>
      <div
        className="absolute bg-white w-full"
        style={{
          top: "50%", // Adjust this percentage as needed to control the position below the text
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "2rem", // Add padding to control the spacing inside the white background
        }}
      >
        {/* Add any content here like a contact form or additional information */}
        <p className="text-center text-black">Feel free to reach out to us!</p>
      </div>
    </div>
  );
};

export default Contacts;
   

