import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Footer } from '@/widgets/layout/Footer';  // Correct path

export function Home() {
  return (
    <>
      {/* Hero Section with Left-aligned Text and Right-aligned Image */}
      <div className="relative flex h-screen items-center justify-between bg-gray-100 px-8">
        <div className="max-w-6xl container mx-auto flex justify-between w-full">
          {/* Hero Text Section */}
          <div className="flex flex-col items-start w-1/2">
            {/* Title */}
            <Typography variant="h1" color="blue-gray" className="mb-6 font-black text-5xl md:text-7xl">
              Glynac.ai
            </Typography>

            {/* Subtitle - "Here to" in one line */}
            <Typography variant="h2" color="blue-gray" className="mb-2 font-black text-4xl md:text-6xl">
              Here to
            </Typography>

            {/* Subtitle - "connect" on a new line, smaller font size */}
            <Typography variant="h2" color="blue-gray" className="font-black text-4xl md:text-6xl">
              connect
            </Typography>

            {/* Connect Button */}
            <Button
              variant="filled"
              size="lg"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              CONNECT HERE
            </Button>
          </div>

          {/* Image Section */}
          <div className="hidden md:block w-1/2">
            <img
              src="/img/landing_image.PNG" // Image from the public/img folder
              alt="Glynac.ai Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* New Section: How Does Glynac.ai Work? */}
      <div className="relative flex h-screen items-center justify-between bg-white px-8">
        <div className="max-w-6xl container mx-auto flex justify-between w-full">
          {/* Left-aligned text */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            {/* Title */}
            <Typography variant="h2" color="blue-gray" className="mb-6 font-black text-4xl md:text-5xl">
              How Does Glynac.ai Work?
            </Typography>       
            
                 
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
