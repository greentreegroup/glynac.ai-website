import React from "react";
import {
  InformationCircleIcon, 
  HomeIcon,              
  SparklesIcon,          
} from "@heroicons/react/24/solid"; 

export const contactData = [
  {
    title: "Overview",
    icon: InformationCircleIcon,
    description:
      "This section provides a comprehensive overview of Glynac, including its features and functionalities.",
    link: "/overview", 
  },
  {
    title: "Setup",
    icon: HomeIcon,
    description:
      "Learn how to set up Glynac for your use. This section covers the installation process and configuration.",
    link: "/setup", 
  },
  {
    title: "Advanced Features",
    icon: SparklesIcon,
    description:
      "Discover the advanced features of Glynac, including tips for maximizing efficiency and customization.",
    link: "/features", 
  },
];

const Manual = () => {
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
        <h1>Glynac User Manual</h1> 
      </div>

      
      <div
        className="absolute top-[calc(40%+4cm)] left-0 right-0 bg-white"
        style={{
          minHeight: "150vh", 
        }}
      >
        <div className="container px-6 py-12 h-full flex items-center justify-center">
          
          <div
            className="max-w-[50%] max-h-[7cm] w-full h-full bg-white flex flex-col items-center justify-center text-center p-4"
            style={{
              left: "6%", 
              position: "relative", 
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
            }}
          >
            
            <h2 className="text-3xl font-bold mb-4">Welcome to the Glynac User Manual</h2>
            
            <p className="text-lg text-gray-700">
              This manual provides you with a comprehensive guide on how to use Glynac. Below, you will find links to the full PDF guide, the glossary, and the training documentation for each section.
            </p>
          </div>
        </div>

        
        <div className="container px-6 py-12 flex justify-between"> 
          <div className="w-[48%]"> 
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              style={{
                height: "400px", 
                border: "1px solid #e5e7eb", 
              }}
            >
              
              <div
                className="w-full h-[250px] bg-gray-200 mb-4" 
                style={{
                  backgroundImage: `url(/img/Guide.jpg)`, 
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Full PDF Guide</h3>
              <p className="text-lg text-gray-700 mb-4">
                Download the full PDF guide for a comprehensive understanding of Glynac. Click below to get started.
              </p>
              <a
                href="https://example.com/glynac-guide.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white py-2 px-4 rounded-md text-lg"
                style={{ backgroundColor: "black", opacity: 0.8 }} 
              >
                Download Full Guide
              </a>
            </div>
          </div>

          <div className="w-[48%]"> 
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              style={{
                height: "400px", 
                border: "1px solid #e5e7eb", 
              }}
            >
              
              <div
                className="w-full h-[250px] bg-gray-200 mb-4" 
                style={{
                  backgroundImage: `url(/img/Glossary.png)`, 
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Glossary</h3>
              <p className="text-lg text-gray-700 mb-4">
                Access the glossary to understand the terminology used in Glynac. Click the link below to view.
              </p>
              <a
                href="/glossary" 
                className="inline-block text-white py-2 px-4 rounded-md text-lg"
                style={{ backgroundColor: "black", opacity: 0.8 }} 
              >
                View Glossary
              </a>
            </div>
          </div>
        </div>

        
        <div className="container px-6 py-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">Training Documentation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    height: "400px", 
                  }}
                >
                  
                  <div className="h-16 w-16 bg-black bg-opacity-80 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  
                  <h4 className="text-xl font-semibold text-center text-gray-800 mb-4">{item.title}</h4>

                  
                  <p className="text-lg text-gray-700 text-center mb-4">{item.description}</p>

                  
                  <a
                    href={item.link} 
                    className="inline-block text-white py-2 px-4 rounded-md text-lg"
                    style={{ backgroundColor: "black", opacity: 0.8 }} 
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manual;
