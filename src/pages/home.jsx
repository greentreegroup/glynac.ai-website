import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Footer } from '@/widgets/layout/Footer';  // Correct path

export function Home() {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const logoData = [
    {
      src: "/img/company1-logo.png",
      alt: "Company 1",
      info: "Glynac improved workforce efficiency by an average of 32% across six major corporations through advanced employee analytics."
    },
    {
      src: "/img/company2-logo.png",
      alt: "Company 2",
      info: "By leveraging Glynac's data-driven insights, Grammarly saw a 25% reduction in employee turnover within the first year."
    },
    {
      src: "/img/company3-logo.png",
      alt: "Company 3",
      info: "Our custom analytics solutions helped teamsat Ferguson enhance collaboration leading to a 40% incraese in cross-departmental productivity."
    },
    {
      src: "/img/company4-logo.png",
      alt: "Company 4",
      info: "Over 90% of managers reported greater confidence in decision-making after implementing Glynac's streamlined reporting tools."
    },
    {
      src: "/img/company5-logo.png",
      alt: "Company 5",
      info: "Within six months, Broadcom experienced an average of 18% reduction in operational costs related to workforce inefficiencies."
    },
    {
      src: "/img/company6-logo.png",
      alt: "Company 6",
      info: "With Glynac's expertise, Loom achieve a 50% improvement in employee engagement scores, fostering stronger workplace communities."
    },
  ];

  const handleLogoClick = (index) => {
    setSelectedLogo(index === selectedLogo ? null : index); // Toggle selection
  };

  return (
    <>
      {/* Hero Section with Left-aligned Text and Right-aligned Image */}
      <div className="relative flex h-screen items-center justify-between bg-gray-100 px-8">
        <div className="max-w-6xl container mx-auto flex justify-between w-full">
          {/* Hero Text Section */}
          <div className="flex flex-col items-start w-1/2">
            <Typography variant="h1" color="blue-gray" className="mb-6 font-black text-5xl md:text-7xl">
              Glynac.ai
            </Typography>
            <Typography variant="h2" color="blue-gray" className="mb-2 font-black text-4xl md:text-6xl">
              Here to
            </Typography>
            <Typography variant="h2" color="blue-gray" className="font-black text-4xl md:text-6xl">
              connect
            </Typography>
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <Typography variant="h2" color="blue-gray" className="text-4xl font-bold mb-8">
            Glynac – AI-Powered Employee Monitoring Software
          </Typography>
          {/* Overview Subheader */}
          <Typography variant="h3" color="blue-gray" className="text-3xl font-semibold mb-6">
            Overview
          </Typography>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Feature 1: Optimizes Workflow Insights */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="/img/insight-icon.png" alt="Insight Icon" className="mb-4 w-16 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold text-xl">
                Optimizes Workflow Insights
              </Typography>
              <Typography color="blue-gray">
                Transforms raw data into meaningful analytics for performance improvements.
              </Typography>
            </div>

            {/* Feature 2: Enhanced Employee Well-Being */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="/img/.png" alt="Well-being Icon" className="mb-4 w-16 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold text-xl">
                Enhanced Employee Well-Being
              </Typography>
              <Typography color="blue-gray">
                Identifies trends in engagement, workload balance, and satisfaction.
              </Typography>
            </div>

            {/* Feature 3: Advanced Security Encryption */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="/img/security-icon.png" alt="Security Icon" className="mb-4 w-16 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold text-xl">
                Advanced Security Encryption
              </Typography>
              <Typography color="blue-gray">
                Ensures strict data protection with anonymization and encryption.
              </Typography>
            </div>

            {/* Feature 4: Ethical and Transparent Usage */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <img src="/img/ethical-icon.png" alt="Ethical Icon" className="mb-4 w-16 mx-auto" />
              <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold text-xl">
                Ethical and Transparent Usage
              </Typography>
              <Typography color="blue-gray">
                Prioritizes fair monitoring, privacy, and actionable insights.
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by 10,000 customers section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <Typography variant="h3" color="blue-gray" className="text-3xl font-bold mb-4">
            Trusted by 10,000 customers all over the world
          </Typography>
          <Typography color="blue-gray" className="text-xl mb-8">
            Click logo to see more info
          </Typography>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logoData.map((logo, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-24 h-24 object-contain cursor-pointer mb-4"
                  onClick={() => handleLogoClick(index)}
                />
                {/* Display Info Box under clicked logo */}
                {selectedLogo === index && (
                  <div className="bg-white p-4 rounded-lg shadow-lg w-full mt-4">
                    <Typography color="blue-gray">{logo.info}</Typography>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to unlock the full potential of your workforce Section */}
      <section className="py-16">
        {/* New Section Header: Ready to unlock the full potential of your workforce */}
        <Typography
          variant="h3"
          color="blue-gray"
          className="text-center max-w-2xl mx-auto mb-8 text-3xl font-bold"
        >
          Ready to unlock the full potential of your workforce? Glynac helps you:
        </Typography>

        <div className="max-w-6xl container mx-auto px-8 flex items-center">
          {/* Left Side: Headers with Text */}
          <div className="w-1/2 space-y-12">
            {/* Header 1 */}
            <div className="flex items-start">
              <img src="/img/ai-icon.png" alt="AI Icon" className="mr-4 w-12 h-12" />
              <div>
                <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl">
                  Leverage AI
                </Typography>
                <Typography color="blue-gray" className="mt-2">
                  Leverage AI-driven insights for smarter workforce management.
                </Typography>
              </div>
            </div>

            {/* Header 2 */}
            <div className="flex items-start">
              <img src="/img/patterns-icon.png" alt="Patterns Icon" className="mr-4 w-12 h-12" />
              <div>
                <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl">
                  Detect Patterns
                </Typography>
                <Typography color="blue-gray" className="mt-2">
                  Detect patterns in productivity, engagement, and collaboration.
                </Typography>
              </div>
            </div>

            {/* Header 3 */}
            <div className="flex items-start">
              <img src="/img/data-icon.png" alt="Data Icon" className="mr-4 w-12 h-12" />
              <div>
                <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl">
                  Analyze Data
                </Typography>
                <Typography color="blue-gray" className="mt-2">
                  Securely analyze data while maintaining employee privacy.
                </Typography>
              </div>
            </div>

            {/* Header 4 */}
            <div className="flex items-start">
              <img src="/img/benchmark-icon.png" alt="Benchmark Icon" className="mr-4 w-12 h-12" />
              <div>
                <Typography variant="h5" color="blue-gray" className="font-semibold text-2xl">
                  Benchmark
                </Typography>
                <Typography color="blue-gray" className="mt-2">
                  Benchmark performance with standardized scoring for growth.
                </Typography>
              </div>
            </div>
          </div>

          {/* Right Side: Large Image */}
          <div className="w-1/2 pl-12">
            <img
              src="/img/large-image-right.png" // Replace with relevant large image
              alt="Related to workforce"
              className="w-full h-[400px] object-contain rounded-lg shadow-none" // Removed shadow and background classes
            />
          </div>
          </div>
      </section>

      {/* From Monitoring to Empowerment: Glynac’s Feature Spotlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 flex items-center">
          {/* Left Side: Image */}
          <div className="w-1/2 pr-12">
            <img
              src="/img/large-image-left.png" // Replace with relevant image
              alt="Empowerment"
              className="w-full h-[400px] object-contain rounded-lg shadow-none"
            />
          </div>

          {/* Right Side: Title and Text */}
          <div className="w-1/2">
            <Typography variant="h3" color="blue-gray" className="font-bold text-3xl mb-6">
              From Monitoring to Empowerment: Glynac’s Feature Spotlight
            </Typography>
            <Typography color="blue-gray" className="text-xl">
              Glynac isn’t about tracking, it’s about understanding. Gain deep insights to enhance employee well-being, optimize workflows, and foster a data-driven, thriving workplace.
            </Typography>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
