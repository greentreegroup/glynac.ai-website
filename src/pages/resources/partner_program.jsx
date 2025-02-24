import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export function Partner_program() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/register");
  };

  const levels = [
    {
      name: "Silver",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-gray-400"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      description: "Entry-level partnership",
      features: [
        "Place partnership info on website",
        "Post about partnership on social media",
        "30% discount on product purchases",
        "No sales required",
        "Support on every level",
        "$2000 for promoting in advertising",
      ],
    },
    {
      name: "Gold",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-yellow-400"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          <path d="M6 18h12" />
          <path d="M6 14h12" />
        </svg>
      ),
      description: "Mid-tier partnership",
      features: [
        "Place partnership info on website",
        "Post about partnership on social media",
        "CleverControl promotes partner",
        "Sell licenses from $2000 to $5000",
        "40% discount on product purchases",
        "Support on every level",
        "$2000 for promoting in advertising",
      ],
    },

    {
      name: "Platinum",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-gray-600"
        >
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          <path d="M6 18h12" />
          <path d="M6 14h12" />
          <path d="M6 10h12" />
        </svg>
      ),
      description: "High-tier partnership",
      features: [
        "Place partnership info on website",
        "Post about partnership on social media",
        "CleverControl promotes partner",
        "Sell licenses over $5000",
        "50% discount on product purchases",
        "Support on every level",
        "$2000 for promoting in advertising (issued as licenses)",
      ],
    },
    {
      name:"White Label",
      illustration: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-blue-500"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
        </svg>
      ),
      description: "Custom branding partnership",
      features: [
        "Create and sell program with own logo",
        "Assistance in using, promoting, and selling",
        "Individual conditions",
        "Set-up fee: $2500 or buy $5000 in licenses without fee",
      ],
    },
  ];
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Image */}
      <img
        src="/img/partner.png"
        alt="Partner Program"
        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Glynac.ai Partner Program
      </h1>
      <p className="text-lg text-center mb-8">
        Thank you for your interest in Glynac.ai! Please find 4 different kinds
        of levels of cooperation below. Here you can find steps to set up your
        partner account and start offering our product to your clients.
      </p>

      {/* Join Button */}
      <div className="flex justify-center mb-8">
        <Button color="blue" size="lg" onClick={handleJoinClick}>
          Join Partner Program
        </Button>
      </div>

      {/* Partnership Levels */}
      <PartnershipLevels levels={levels} />
    </div>
  );
}

const FlipCard = ({ level }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card-container" onClick={handleClick}>
      <motion.div
        className="flip-card"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="flip-card-front"
          style={{
            backgroundColor: "white",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {level.illustration}
          <h2 className="text-2xl font-bold text-center mt-4">{level.name}</h2>
        </div>
        <div
          className="flip-card-back"
          style={{
            backgroundColor: "white",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "auto",
          }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>{level.name}</CardTitle>
              <CardDescription>{level.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                {level.features.map((feature, index) => (
                  <li key={index} className="text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export function PartnershipLevels({ levels }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {levels.map((level) => (
        <FlipCard key={level.name} level={level} />
      ))}
    </div>
  );
}

export default Partner_program;
