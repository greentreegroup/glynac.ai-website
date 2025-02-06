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

      {/* Combined Section: "How Does Glynac.ai Work?" with 3 Columns */}
      <div className="relative flex flex-col items-center justify-center bg-white px-8 py-16">
        <div className="max-w-6xl container mx-auto flex flex-col items-center w-full">
          {/* Title: How Does Glynac.ai Work? */}
          <Typography variant="h2" color="blue-gray" className="mb-24 font-black text-4xl md:text-5xl text-center">
            How Does Glynac.ai Work?
          </Typography>

          {/* 3 Columns with Spacer Lines */}
          <div className="flex justify-between w-full space-x-4">
            {/* Left Column */}
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <Typography color="blue-gray" className="text-lg">
                First, the anonymizer stage data is anonymized. For small companies, we do this on our own servers. For large companies, we provide a script and guidance for them to export their data and anonymize it.
              </Typography>
            </div>

            {/* Spacer Line */}
            <div className="hidden md:block w-0.5 bg-gray-300 mx-4"></div>

            {/* Middle Column */}
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <Typography color="blue-gray" className="text-lg">
                Second, pre analyzer stage---data is already extracted, anonymized and is ready for AI analysis. AI analysis--data is analyzed by AI and converted into numerical data maps. Sentiment analysis for each employee is made. Data is presented with anonymous reports, and the 'de-anonymizer' code is given to management to see which employee is which person.
              </Typography>
            </div>

            {/* Spacer Line */}
            <div className="hidden md:block w-0.5 bg-gray-300 mx-4"></div>

            {/* Right Column */}
            <div className="w-full md:w-1/3 flex flex-col items-start">
              <Typography color="blue-gray" className="text-lg">
              Finally, open source data analysis--numerical data maps, which lack the underlying email data, are shared open source, specifically to universities to create more advanced analysis.
              </Typography>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home;
