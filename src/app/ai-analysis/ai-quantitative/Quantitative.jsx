"use client";

import React, { useRef } from "react";
import { Typography } from "@material-tailwind/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Quantitative() {
  const sections = [
    {
      title: "Volume of Communication",
      image: "/img/communication-volume.png",
      description: "Our AI measures total words and characters exchanged across communication channels to assess engagement and workload distribution.",
      benefits: "Optimizing communication volume helps businesses ensure even workload distribution and improve team efficiency.",
      measure: "Measured by counting the total words and characters exchanged per employee across various platforms.",
    },
    {
      title: "Responsiveness",
      image: "/img/responsiveness-volume.png",
      description: "We analyze response times to understand how quickly employees engage in conversations, ensuring timely collaboration.",
      benefits: "Tracking response rates helps businesses reduce delays and foster a more agile work environment.",
      measure: "Measured by calculating the average time taken to reply to a message.",
    },
    {
      title: "Inactivity",
      image: "/img/inactivity-volume.png",
      description: "Tracks periods of inactivity in 15-minute intervals to identify engagement patterns and workflow inefficiencies.",
      benefits: "Identifying inactivity trends helps optimize meeting schedules, enhance productivity, and rebalance workloads.",
      measure: "Measured by tracking no communication or user activity in 15-minute intervals over a 40-hour workweek.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  // Parallax effect for the final section image
  const valuePropRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: valuePropRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div>
      {/* Hero Section with Animated Shapes */}
      <div className="h-[60vh] flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-600 to-blue-400 text-white p-10 shadow-lg rounded-lg relative overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full animate-float delay-1000"></div>
        <motion.h1
          className="text-6xl font-extrabold mb-4 z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          AI Quantitative Analysis
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Our AI-powered quantitative analysis measures key communication metrics, including volume, response times, and inactivity patterns. Gain insights into employee engagement and workflow efficiency to improve team collaboration.
        </motion.p>
      </div>

      {/* Analysis Categories with Glassmorphism and Staggered Animation */}
      <div className="py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Quantitative Analysis Category</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {sections.map((item, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="flex flex-wrap justify-center items-center mb-16 bg-white bg-opacity-30 backdrop-blur-md border border-white/20 p-8 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full md:w-1/2 p-6">
                <h4 className="text-2xl font-bold mb-4 text-blue-600">✔ {item.title}</h4>
                <p className="mb-4 text-gray-700">{item.description}</p>
                <h5 className="text-xl font-medium mt-6 mb-2 text-blue-500">⭐ How can this be useful?</h5>
                <p className="text-gray-700">{item.benefits}</p>
                <h5 className="text-xl font-medium mt-6 mb-2 text-blue-500">📊 How to measure?</h5>
                <p className="text-gray-700">{item.measure}</p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <motion.div whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-lg"
                    layout="responsive"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Training Section with Emphasized Text */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-12">
            <motion.div whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
              <Image
                src="/img/training-quan.png"
                alt="Training"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
                layout="responsive"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <Typography variant="h3" className="font-bold text-3xl mb-6 text-blue-700">
              Training
            </Typography>
            <Typography className="text-xl text-gray-700">
              Users can review the AI-generated insights on{" "}
              <span className="font-semibold text-blue-600">communication volume, responsiveness, and inactivity</span>{" "}
              to validate or refine the findings. By accepting or adjusting the data, organizations{" "}
              <span className="font-semibold text-blue-600">continuously improve the AI’s accuracy</span>, ensuring it
              aligns with their unique operational needs.
            </Typography>
          </div>
        </div>
      </section>

      {/* Final Section with Parallax Effect */}
      <section ref={valuePropRef} className="py-16 text-center bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <Typography variant="h2" className="text-4xl font-bold mb-8 text-blue-700">
            How can AI Quantitative Analysis be useful?
          </Typography>
          <Typography className="text-xl mb-12 max-w-3xl mx-auto text-gray-700">
            Understanding communication behaviors through data-driven insights is essential for optimizing efficiency
            and collaboration. AI-powered quantitative analysis allows businesses to enhance performance and create a
            more connected, responsive workplace.
          </Typography>
          <motion.div whileHover={{ scale: 1.05 }}>
            <motion.div style={{ y }}>
              <Image
                src="/img/efficiency.png"
                alt="Efficiency"
                width={800}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
                layout="responsive"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Quantitative;