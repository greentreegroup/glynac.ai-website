import React from "react";
import {
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Pricing() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[500px] w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-[500px] w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-7xl"
              >
                Plans & Packages
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      {/* Plans & Packages Section */}
      <section className="bg-white px-4 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Basic Plan */}
            <Card className="shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
              <Typography variant="h3" className="mb-4 font-bold text-gray-800 text-center">
                BASIC
              </Typography>
              <Typography variant="h4" className="mb-6 text-center font-extrabold text-3xl text-blue-600">
                Free
              </Typography>
              <Button 
                variant="gradient" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 transition-all duration-300 mt-auto"
              >
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-white">
        <footer className="py-6 text-center text-gray-700">© 2025 Your Company</footer>
      </div>
    </>
  );
}

export default Pricing;
