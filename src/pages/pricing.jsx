import React from "react";
import { Typography, Card, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Pricing() {
  const plans = [
    {
      name: "BASIC",
      price: "Free",
      features: [
        "Basic Communication Monitoring",
        "Message Frequency Analysis",
        "Visualization",
        "20 Devices",
      ],
    },
    {
      name: "STARTER",
      price: "$100/Month",
      features: [
        "Relationship Mapping",
        "Department Mapping",
        "Keyword Trends",
        "Happiness Trends",
        "Trend Analysis",
        "25 Devices",
      ],
    },
    {
      name: "ADVANCED",
      price: "$200/Month",
      features: [
        "Language Categorization",
        "Sentiment Analysis",
        "Pay Issues Analysis",
        "Manager Analysis",
        "250 Devices",
      ],
    },
    {
      name: "PRO",
      price: "$300/Month",
      features: [
        "API Agent Integration",
        "Retention Insights",
        "Keyword Trends",
        "Happiness Trends",
        "350 Devices",
      ],
    },
  ];

  return (
    <section className="bg-black/90 px-6 py-16 relative">
      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg" />

      <div className="container mx-auto relative">
        <Typography variant="h2" className="text-center text-white font-bold mb-12">
          Plans & Packages
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glassmorphism p-8 rounded-xl text-center shadow-xl border border-white/10">
                <Typography variant="h4" className="text-white font-bold">
                  {plan.name}
                </Typography>
                <Typography variant="h5" className="text-purple-400 text-lg mt-2">
                  {plan.price}
                </Typography>
                <ul className="text-gray-300 mt-6 space-y-2 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex justify-center items-center gap-2">
                      <span className="text-purple-400">→</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="gradient"
                  size="md"
                  className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg shadow-md hover:opacity-90 transition"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
