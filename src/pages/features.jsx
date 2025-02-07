// components/sections/Glynac.jsx
import React from "react";
import { Typography } from "@material-tailwind/react";

export function Glynac() {
  return (
    <div id="glynac" className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <Typography variant="h2" color="blue-gray" className="text-4xl font-extrabold text-center mb-8">
          Welcome to Glynac.ai
        </Typography>
        <Typography color="blue-gray" className="text-lg text-center">
          At Glynac.ai, we leverage cutting-edge artificial intelligence to help businesses unlock insights from their data. Our innovative solutions offer comprehensive analysis and anonymization for better decision-making.
        </Typography>
        <div className="text-center mt-8">
          <Typography color="blue-gray" className="text-xl font-semibold">
            Transforming your data with AI.
          </Typography>
        </div>
      </div>
    </div>
  );
}
