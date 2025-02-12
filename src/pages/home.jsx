import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout/footer";
import { motion } from "framer-motion"; // For animations

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8">
        <div className="max-w-6xl container mx-auto flex flex-col md:flex-row justify-between items-center w-full">
          
          {/* Left - Text Content */}
          <div className="flex flex-col items-start w-full md:w-1/2 space-y-6">
            <Typography
              variant="h1"
              className="text-white font-black text-5xl md:text-7xl leading-tight"
            >
              Glynac.ai
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-black text-4xl md:text-6xl"
              >
                Here to connect.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                variant="filled"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-xl shadow-xl transition-all transform hover:scale-105 hover:bg-blue-600"
              >
                CONNECT HERE
              </Button>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block w-full md:w-1/2"
          >
            <img
              src="/img/landing_image.PNG"
              alt="Glynac.ai Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* How Glynac Works Section */}
      <div className="relative flex flex-col items-center justify-center bg-gray-900 px-8 py-20">
        <Typography
          variant="h2"
          className="text-white font-black text-4xl md:text-5xl text-center mb-16"
        >
          How Does Glynac.ai Work?
        </Typography>

        {/* 3 Steps with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          
          {/* Step 1 - Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg relative hover:scale-105 transition-transform"
          >
            <div className="absolute -top-6 left-6 text-white text-sm bg-blue-600 px-4 py-1 rounded-full shadow-md">
              Step 1
            </div>
            <Typography className="text-white text-xl font-bold mb-2">
              Data Anonymization
            </Typography>
            <Typography className="text-gray-300">
              We anonymize company data either on our servers or provide
              guidance for large companies to do it internally.
            </Typography>
          </motion.div>

          {/* Step 2 - Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg relative hover:scale-105 transition-transform"
          >
            <div className="absolute -top-6 left-6 text-white text-sm bg-teal-500 px-4 py-1 rounded-full shadow-md">
              Step 2
            </div>
            <Typography className="text-white text-xl font-bold mb-2">
              AI Analysis
            </Typography>
            <Typography className="text-gray-300">
              AI extracts and analyzes data, generating sentiment analysis
              maps. Management receives de-anonymization codes for insights.
            </Typography>
          </motion.div>

          {/* Step 3 - Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg relative hover:scale-105 transition-transform"
          >
            <div className="absolute -top-6 left-6 text-white text-sm bg-purple-500 px-4 py-1 rounded-full shadow-md">
              Step 3
            </div>
            <Typography className="text-white text-xl font-bold mb-2">
              Open Source Insights
            </Typography>
            <Typography className="text-gray-300">
              Anonymous numerical data is shared with universities for
              developing more advanced AI analytics.
            </Typography>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
