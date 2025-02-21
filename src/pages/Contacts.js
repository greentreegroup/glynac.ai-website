import React, { useState } from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"; 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 


export const contactData = [
  {
    title: "Phone Support",
    icon: PhoneIcon,
    description: (
      <>
        Reach out to us through our 24/7 customer service number on{" "}
        <span className="text-blue-500">(123) 456-7890</span> for assistance.
      </>
    ),
  },
  {
    title: "Email Us",
    icon: EnvelopeIcon,
    description: (
      <>
        Send us an email via{" "}
        <span className="text-blue-500">hello@reallygreatsite.com</span> and
        we'll get back to you within 24 hours.
      </>
    ),
  },
  {
    title: "Visit Us",
    icon: MapPinIcon,
    description: (
      <>
        Click{" "}
        <span className="text-blue-500">here</span> to find us at our office
        location. We're here to assist you in person.
      </>
    ),
  },
];

const Contacts = () => {
 
  const [horizontalPosition, setHorizontalPosition] = useState("50%"); 

  
  const backgroundSize = "50px"; 
  const backgroundOpacity = 0.8; 
  const backgroundColor = "black"; 

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
        className="absolute top-[calc(40%+4cm)] left-0 right-0 bg-white"
        style={{
          minHeight: "130vh", 
        }}
      >
        <div className="container px-6 py-12 flex flex-col justify-center items-center">
          
          <div
            className="text-center mb-6"
            style={{
              position: "absolute",
              top: "10%", 
              left: "50%", 
              transform: "translateX(-50%)", 
            }}
          >
            
            <h2 className="text-3xl font-bold">Get in Touch with Us</h2>
            
            <p className="text-lg text-gray-700">
              We want to work with you. Reach out to us through the following channels.
            </p>
          </div>

          
          <div
            className="mt-[3cm] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[200px]" 
            style={{
              position: "absolute", 
              top: "15%", 
              left: horizontalPosition, 
              transform: "translateX(-60%)", 
            }}
          >
            {contactData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
                style={{
                  width: "250px", 
                }}
              >
                
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: backgroundSize, 
                    height: backgroundSize, 
                    backgroundColor: backgroundColor, 
                    opacity: backgroundOpacity, 
                    borderRadius: "50%", 
                  }}
                >
                  <item.icon className="h-8 w-8 text-white" /> 
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                
                <p className="text-center text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
            style={{
              position: "absolute", 
              right: "10%", 
              top: "65%", 
              width: "200px", 
            }}
          >
            
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: backgroundSize, 
                    height: backgroundSize, 
                    backgroundColor: backgroundColor, 
                    opacity: backgroundOpacity, 
                    borderRadius: "50%", 
                  }}
                >
                  <FaFacebook className="h-8 w-8 text-white" />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: backgroundSize, 
                    height: backgroundSize, 
                    backgroundColor: backgroundColor, 
                    opacity: backgroundOpacity, 
                    borderRadius: "50%", 
                  }}
                >
                  <FaTwitter className="h-8 w-8 text-white" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: backgroundSize, 
                    height: backgroundSize, 
                    backgroundColor: backgroundColor, 
                    opacity: backgroundOpacity, 
                    borderRadius: "50%", 
                  }}
                >
                  <FaInstagram className="h-8 w-8 text-white" />
                </div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: backgroundSize, 
                    height: backgroundSize, 
                    backgroundColor: backgroundColor, 
                    opacity: backgroundOpacity, 
                    borderRadius: "50%", 
                  }}
                >
                  <FaLinkedin className="h-8 w-8 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
