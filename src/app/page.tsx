"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import "./globals.css";

// Define interfaces and variants
interface LogoItem {
  src: string;
  alt: string;
  info: string;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

type VariantType = React.ComponentProps<typeof Typography>["variant"];

interface MyTypographyProps {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
}

const MyTypography = ({ children, variant, className }: MyTypographyProps) => (
  <Typography
    variant={variant}
    className={className}
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
  >
    {children}
  </Typography>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeatureCard = React.memo(({ icon, title, desc }: FeatureCardProps) => (
  <motion.div
    className="bg-white shadow-xl p-6 rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-80 hover:bg-opacity-100 cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl border border-[#87CEEB]/20"
    variants={itemVariants}
    whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)" }}
  >
    <Image
      src={icon}
      alt={`${title} Icon`}
      width={64}
      height={64}
      sizes="64px"
      className="mb-4 w-16 mx-auto"
    />
    <MyTypography variant="h5" className="mb-2 font-bold text-2xl text-[#1E90FF]">
      {title}
    </MyTypography>
    <MyTypography className="text-gray-600">{desc}</MyTypography>
  </motion.div>
));

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null);

  const logoData: LogoItem[] = [
    {
      src: "/img/company1-logo.png",
      alt: "Company 1",
      info: "Glynac improved workforce efficiency by an average of 32% across six major corporations through advanced employee analytics.",
    },
    {
      src: "/img/company2-logo.png",
      alt: "Company 2",
      info: "By leveraging Glynac's data-driven insights, Grammarly saw a 25% reduction in employee turnover within the first year.",
    },
    {
      src: "/img/company3-logo.png",
      alt: "Company 3",
      info: "Our custom analytics solutions helped teams at Ferguson enhance collaboration leading to a 40% increase in cross-departmental productivity.",
    },
    {
      src: "/img/company4-logo.png",
      alt: "Company 4",
      info: "Over 90% of managers reported greater confidence in decision-making after implementing Glynac's streamlined reporting tools.",
    },
    {
      src: "/img/company5-logo.png",
      alt: "Company 5",
      info: "Within six months, Broadcom experienced an average of 18% reduction in operational costs related to workforce inefficiencies.",
    },
    {
      src: "/img/company6-logo.png",
      alt: "Company 6",
      info: "With Glynac's expertise, Loom achieved a 50% improvement in employee engagement scores, fostering stronger workplace communities.",
    },
  ];

  const handleLogoClick = (index: number) => {
    setSelectedLogo(selectedLogo === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      <nav className="w-full max-w-full overflow-hidden">
        {/* Navbar content */}
      </nav>
      {/* Hero Section - Updated with MyTypography */}
      <div className="relative flex min-h-[80vh] md:min-h-screen items-center justify-center bg-gradient-to-br from-[#87CEEB] to-[#1E90FF] px-4 pt-20 md:px-8 md:pt-28 overflow-hidden">
        <div className="max-w-6xl container mx-auto flex flex-col md:flex-row justify-between w-full">
          {/* Left Content */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 relative z-10 text-center md:text-left">
            <MyTypography
              variant="h1"
              className="mb-6 font-black text-3xl md:text-6xl lg:text-8xl text-white drop-shadow-lg"
            >
              Glynac.ai
            </MyTypography>
            <MyTypography
              variant="h2"
              className="mb-2 font-black text-2xl md:text-5xl lg:text-7xl text-white drop-shadow-lg"
            >
              Connecting you to
            </MyTypography>
            <MyTypography
              variant="h2"
              className="font-black text-2xl md:text-5xl lg:text-7xl text-white drop-shadow-lg"
            >
              the future of work
            </MyTypography>
            <Button
              variant="filled"
              size="lg"
              className="bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] text-white px-10 py-4 rounded-full shadow-lg mt-8 mb-4 md:mb-0 hover:from-[#1E90FF] hover:to-[#87CEEB] transform transition-all duration-300 ease-in-out hover:scale-105"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              CONNECT NOW
            </Button>
          </div>

         {/* Right Image */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center">
         <Image
          src="/img/landing_image.PNG"
          alt="Hero Section Image"
          width={500} // Ensure width is equal to height
          height={500} // Ensure height is equal to width
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover rounded-full shadow-2xl"
          />
        </div>

        </div>
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div className="w-72 h-72 bg-[#87CEEB] opacity-20 rounded-full absolute animate-pulse"></div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <MyTypography
            variant="h2"
            className="text-3xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]"
          >
            Glynac – AI-Powered Employee Monitoring Software
          </MyTypography>
          <MyTypography
            variant="h3"
            className="text-3xl font-semibold mb-6 text-gray-800"
          >
            Overview
          </MyTypography>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 overflow-hidden">
            {[
              {
                icon: "/img/insight-icon.png",
                title: "Optimizes Workflow Insights",
                desc: "Transforms raw data into meaningful analytics for performance improvements.",
              },
              {
                icon: "/img/wellbeing-icon.png",
                title: "Enhanced Employee Well-Being",
                desc: "Identifies trends in engagement, workload balance, and satisfaction.",
              },
              {
                icon: "/img/security-icon.png",
                title: "Advanced Security Encryption",
                desc: "Ensures strict data protection with anonymization and encryption.",
              },
              {
                icon: "/img/ethical-icon.png",
                title: "Ethical and Transparent Usage",
                desc: "Prioritizes fair monitoring, privacy, and actionable insights.",
              },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by 10,000 Customers Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <MyTypography
            variant="h3"
            className="text-4xl font-bold mb-4 text-[#1E90FF]"
          >
            Trusted by 10,000 customers all over the world
          </MyTypography>
          <MyTypography className="text-xl mb-8 text-gray-600">
            Click logo to see more info
          </MyTypography>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {logoData.map((logo, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={112} // Increased width (28 * 4 = 112px)
                  height={112} // Increased height (28 * 4 = 112px)
                  sizes="112px"
                  className="w-28 h-28 object-contain cursor-pointer mb-4 filter drop-shadow-lg"
                  onClick={() => handleLogoClick(index)}
                />
                {selectedLogo === index && (
                  <motion.div
                    className="bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] p-4 rounded-lg shadow-2xl w-full mt-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MyTypography className="text-sm font-medium">
                      {logo.info}
                    </MyTypography>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Potential Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <MyTypography
          variant="h3"
          className="text-xl md:text-4xl text-center max-w-3xl mx-auto mb-8 md:mb-12 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]"
        >
          Ready to unlock the full potential of your workforce? Glynac helps you:
        </MyTypography>
        <div className="max-w-6xl container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 md:space-y-12 text-center md:text-left mb-6 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: "/img/ai-icon.png",
                title: "Leverage AI",
                desc: "Leverage AI-driven insights for smarter workforce management.",
              },
              {
                icon: "/img/patterns-icon.png",
                title: "Detect Patterns",
                desc: "Detect patterns in productivity, engagement, and collaboration.",
              },
              {
                icon: "/img/data-icon.png",
                title: "Analyze Data",
                desc: "Securely analyze data while maintaining employee privacy.",
              },
              {
                icon: "/img/benchmark-icon.png",
                title: "Benchmark",
                desc: "Benchmark performance with standardized scoring for growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start group"
                variants={itemVariants}
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  width={48}
                  height={48}
                  sizes="48px"
                  className="mr-4 w-12 h-12"
                />
                <div>
                  <MyTypography
                    variant="h5"
                    className="font-bold text-lg md:text-2xl text-[#1E90FF] group-hover:text-[#87CEEB] transition-colors duration-300"
                  >
                    {item.title}
                  </MyTypography>
                  <MyTypography className="mt-2 text-sm md:text-base text-gray-700">
                    {item.desc}
                  </MyTypography>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section - Hidden on Phones */}
          <motion.div
            className="hidden md:block w-full md:w-1/2 pl-0 md:pl-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/img/large-image-right.png"
              alt="Related to workforce"
              width={300} // Reduced width for laptops
              height={300} // Adjusted height for proportional scaling
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full md:w-[300px] h-auto object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-6xl container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <MyTypography
              variant="h3"
              className="font-extrabold text-2xl md:text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] drop-shadow-lg"
            >
              From Monitoring to Empowerment: Glynac’s Feature Spotlight
            </MyTypography>
            <motion.p
              className="text-base md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Glynac isn’t about tracking, it’s about understanding. Gain deep
              insights to enhance employee well-being, optimize workflows, and foster
              a data-driven, thriving workplace.
            </motion.p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/img/large-image-left.png"
              alt="Empowerment"
              width={250} // Reduced width for phones
              height={250} // Adjusted height for proportional scaling
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-[250px] md:w-[500px] h-auto object-contain rounded-lg shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          <MyTypography
            variant="h2"
            className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]"
          >
            How Does Glynac.ai Work?
          </MyTypography>
          <MyTypography className="text-xl mb-12 max-w-3xl mx-auto text-gray-600">
            Glynac A.I. is an A.I. application that tracks the performance of
            employees by collecting data from common work applications such as
            Outlook, Microsoft Teams, and more. The data is analyzed by A.I. to
            determine overall productivity and employee attitude.
          </MyTypography>
          <motion.div
            className="flex justify-center items-center space-x-8 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { src: "/img/left-process.png", alt: "Left Process", size: "w-2/5" },
              { src: "/img/right-arrow.png", alt: "Right Arrow", size: "w-1/12" },
              { src: "/img/center-process.png", alt: "Center Process", size: "w-1/5" },
              { src: "/img/left-arrow.png", alt: "Left Arrow", size: "w-1/12" },
              { src: "/img/right-process.png", alt: "Right Process", size: "w-2/5" },
            ].map((img, index) => (
              <motion.div
                key={index}
                className={img.size}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.size === "w-2/5" ? 400 : img.size === "w-1/5" ? 200 : 100}
                  height={200}
                  sizes={img.size === "w-2/5" ? "40vw" : img.size === "w-1/5" ? "20vw" : "10vw"}
                  className="w-full object-contain rounded-lg shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
        <div className="max-w-6xl container mx-auto px-4 md:px-8 text-center">
          <MyTypography
            className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] to-[#1E90FF]"
          >
            Methodology
          </MyTypography>
          {[
            {
              step: 1,
              title: "Data Extraction",
              desc: [
                "Data is extracted from various workplace applications such as Outlook, Microsoft Teams, Slack, and other communication tools. The system then filters any irrelevant data and applies initial security measures to ensure privacy and protections.",
                "By extracting irrelevant data, Glynac creates a foundation for accurate insights into employee productivity and work efficiency.",
                "The system tracks the volume of extracted data, the accuracy of filtered information, and ensures privacy protocols are in place for correct analytics and high-quality data.",
              ],
              img: "/img/data-extraction-image.png",
            },
            {
              step: 2,
              title: "Encryption",
              desc: [
                "After the data is extracted, it undergoes encryption before integration into the AI system. This ensures sensitive information is secured and maintains security standards.",
                "Encryption protects employee and company data, preventing unauthorized access while adhering to data protection laws.",
                "Encryption effectiveness is measured through security audits, checks, and penetration tests to safeguard against data breaches.",
              ],
              img: "/img/encryption-image.png",
            },
            {
              step: 3,
              title: "Standardization",
              desc: [
                "Standardized metrics are applied to extracted data. The AI system organizes it into structured formats such as productivity scores, sentiment analysis, and performance benchmarks.",
                "Standardization enables fair compensation across employees and departments. It helps organizations identify trends and predict potential issues.",
                "The AI assigns standardized scores using historical performance data, making it easier to analyze workforce efficiency.",
              ],
              img: "/img/standardization-image.png",
            },
          ].map((method, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center justify-between mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Text Section */}
              <motion.div className="w-full md:w-2/3 text-left md:pr-8" variants={itemVariants}>
                <div className="flex items-center mb-4">
                  {/* Numbering Circle */}
                  <div className="w-10 h-10 bg-gradient-to-r from-[#87CEEB] to-[#1E90FF] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {method.step}
                  </div>
                  {/* Heading */}
                  <MyTypography className="text-xl md:text-2xl font-bold text-[#1E90FF]">
                    {method.title}
                  </MyTypography>
                </div>
                {/* Description */}
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                  {method.desc.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="w-full md:w-1/3 mt-6 md:mt-0 flex justify-center"
                variants={itemVariants}
              >
                <Image
                  src={method.img}
                  alt={method.title}
                  width={280} // Adjusted width
                  height={200} // Adjusted height
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-[280px] h-auto object-contain rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}



FeatureCard.displayName = "FeatureCard";