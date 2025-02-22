import React from "react";
import {
  InformationCircleIcon, // Overview icon
  HomeIcon,              // Installation icon
  SparklesIcon,          // Features icon
} from "@heroicons/react/24/solid"; // Importing new icons

// Data for the training sections with updated icons
export const contactData = [
  {
    title: "Overview",
    icon: InformationCircleIcon,
    description:
      "This section provides a comprehensive overview of Glynac, including its features and functionalities.",
    link: "/overview", // Link for 'View' button
  },
  {
    title: "Setup",
    icon: HomeIcon,
    description:
      "Learn how to set up Glynac for your use. This section covers the installation process and configuration.",
    link: "/setup", // Link for 'View' button
  },
  {
    title: "Advanced Features",
    icon: SparklesIcon,
    description:
      "Discover the advanced features of Glynac, including tips for maximizing efficiency and customization.",
    link: "/features", // Link for 'View' button
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
          top: "40%", // Adjust top position of title
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1>Glynac User Manual</h1> {/* Updated Header */}
      </div>

      {/* White Background Section */}
      <div
        className="absolute top-[calc(40%+4cm)] left-0 right-0 bg-white"
        style={{
          minHeight: "150vh", // Adjust the height as needed
        }}
      >
        <div className="container px-6 py-12 h-full flex items-center justify-center">
          {/* Centering the introduction text in its own box */}
          <div
            className="max-w-[50%] max-h-[7cm] w-full h-full bg-white flex flex-col items-center justify-center text-center p-4"
            style={{
              left: "6%", // Change this value to adjust the position manually (e.g., "20%" to move it slightly to the right)
              position: "relative", // Make sure to use relative positioning
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Optional: add a subtle shadow for depth
            }}
          >
            {/* Title */}
            <h2 className="text-3xl font-bold mb-4">Welcome to the Glynac User Manual</h2>
            {/* Description */}
            <p className="text-lg text-gray-700">
              This manual provides you with a comprehensive guide on how to use Glynac. Below, you will find links to the full PDF guide, the glossary, and the training documentation for each section.
            </p>
          </div>
        </div>

        {/* Features Section with Absolute Positioning */}
        <div className="container px-6 py-12 flex justify-between"> {/* Changed to flexbox layout */}
          <div className="w-[48%]"> {/* Left Section */}
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              style={{
                height: "400px", // Fixed height for each field (8cm equivalent)
                border: "1px solid #e5e7eb", // Optional border for separation
              }}
            >
              {/* Image Placeholder */}
              <div
                className="w-full h-24 bg-gray-200 mb-4"
                style={{
                  backgroundImage: `url(/path/to/your/pdf-image.jpg)`, // Set background image here
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Full PDF Guide</h3>
              <p className="text-lg text-gray-700 mb-4">
                Download the full PDF guide for a comprehensive understanding of Glynac. Click below to get started.
              </p>
              <a
                href="https://example.com/glynac-guide.pdf" // PDF link here
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white py-2 px-4 rounded-md text-lg"
                style={{ backgroundColor: "black", opacity: 0.8 }} // Button Style
              >
                Download Full Guide
              </a>
            </div>
          </div>

          <div className="w-[48%]"> {/* Right Section */}
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
              style={{
                height: "400px", // Fixed height for each field (8cm equivalent)
                border: "1px solid #e5e7eb", // Optional border for separation
              }}
            >
              {/* Image Placeholder */}
              <div
                className="w-full h-24 bg-gray-200 mb-4"
                style={{
                  backgroundImage: `url(/path/to/your/glossary-image.jpg)`, // Set background image here
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">Glossary</h3>
              <p className="text-lg text-gray-700 mb-4">
                Access the glossary to understand the terminology used in Glynac. Click the link below to view.
              </p>
              <a
                href="/glossary" // Path to the glossary page
                className="inline-block text-white py-2 px-4 rounded-md text-lg"
                style={{ backgroundColor: "black", opacity: 0.8 }} // Button Style
              >
                View Glossary
              </a>
            </div>
          </div>
        </div>

        {/* Centered Training Documentation Section */}
        <div className="container px-6 py-12 flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-2xl font-semibold mb-8 text-center">Training Documentation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  style={{
                    height: "400px", // Adjusted height for each card
                  }}
                >
                  {/* Icon with black circle background and opacity */}
                  <div className="h-16 w-16 bg-black bg-opacity-80 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-center text-gray-800 mb-4">{item.title}</h4>

                  {/* Description */}
                  <p className="text-lg text-gray-700 text-center mb-4">{item.description}</p>

                  {/* View Button */}
                  <a
                    href={item.link} // Link for each section
                    className="inline-block text-white py-2 px-4 rounded-md text-lg"
                    style={{ backgroundColor: "black", opacity: 0.8 }} // Button Style
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
