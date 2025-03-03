"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Qualitative() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Parallax effect for value proposition image
  const valuePropRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: valuePropRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans">
      {/* Hero Section with Animated Shapes */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-50"></div>
        {/* Floating Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200 rounded-full animate-float delay-2000"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center px-4"
        >
          <div className="glass-panel p-8 rounded-2xl backdrop-blur-lg border border-white/20 shadow-xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AI Analysis
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered analysis provides a comprehensive view of workplace communication through advanced NLP and sentiment analysis.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Analysis Categories with Staggered Animation */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Qualitative Analysis Metrics
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Positive Language",
              icon: "⭐",
              image: "/img/positive-language.png",
              content: "Detects encouraging statements and solution-focused communication...",
            },
            {
              title: "Complaint Language",
              icon: "⚠️",
              image: "/img/complaint-language.png",
              content: "Identifies workplace concerns and dissatisfaction patterns...",
            },
            {
              title: "Negative Language",
              icon: "🚩",
              image: "/img/negative-language.png",
              content: "Flags problem-focused communication without solutions...",
            },
            {
              title: "Unclear Language",
              icon: "❓",
              image: "/img/unclear-language.png",
              content: "Detects ambiguous or redundant statements...",
            },
            {
              title: "Harassment Language",
              icon: "🚨",
              image: "/img/harassment-language.png",
              content: "Identifies potentially hostile or inappropriate language...",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              className="glass-panel mb-12 p-8 rounded-3xl backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`order-1 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-4xl">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{item.content}</p>
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <span>📈</span> Business Impact
                      </h4>
                      <p className="text-gray-700">How this metric affects organizational health...</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <span>🔍</span> Measurement
                      </h4>
                      <p className="text-gray-700">AI-powered frequency analysis per 10k words...</p>
                    </div>
                  </div>
                </div>
                <div className={`order-2 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    className="relative group"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-auto rounded-2xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Training Section with Emphasized Text */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-3xl backdrop-blur-lg border border-white/20 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}>
                <img
                  src="/img/training-image.png"
                  alt="AI Training"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Adaptive AI Training
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our machine learning models{" "}
                <span className="font-semibold text-blue-600">continuously evolve</span> through{" "}
                <span className="font-semibold text-blue-600">user feedback loops</span>. Validate
                or refine AI classifications to create{" "}
                <span className="font-semibold text-blue-600">custom communication profiles</span>{" "}
                tailored to your organization's unique culture.
              </p>
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span>🔄</span> Continuous Learning Cycle
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Real-time feedback integration</li>
                  <li>• Context-aware pattern recognition</li>
                  <li>• Custom sentiment weighting</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Value Proposition with Parallax Effect */}
      <section ref={valuePropRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUp}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Transform Workplace Communication
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-8 rounded-3xl backdrop-blur-lg border border-white/20 shadow-lg"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              Leverage our AI-driven insights to cultivate a communication ecosystem that boosts
              productivity, enhances employee satisfaction, and mitigates organizational risk
              through data-driven cultural optimization.
            </p>
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 blur-2xl opacity-20"></div>
              <motion.img
                style={{ y }}
                src="/img/inclusive.png"
                alt="Workplace Analytics"
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Qualitative;