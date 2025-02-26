"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

// Color palette
const colors = {
  primary: "#1E3A8A",
  secondary: "#3B82F6",
  accent: "#60A5FA",
  text: "#64748B",
  white: "#FFFFFF",
  lightGray: "#F7FAFC",
  softBlue: "#E0F2FE",
  darkPrimary: "#0F1C4D", 
};

// Software content
const softwareContent = {
  "cloud-vs-on-premise": {
    title: "Cloud vs. On-Premise Solutions",
    description:
      "Choosing between cloud-based and on-premise solutions depends on your business needs. Below is a comparison to help you decide:",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What is Cloud Computing",
        text: "Cloud computing delivers computing services—such as storage, databases, networking, and software—over the internet, allowing businesses to scale quickly without maintaining physical infrastructure.",
      },
      {
        heading: "What is On-Premise Computing?",
        text: "On-premise solutions require businesses to host software and infrastructure on their own servers, giving them full control over security, compliance, and performance.",
      },
    ],
    prosAndCons: {
      cloud: {
        title: "Advantages of Cloud Solutions",
        pros: [
          "Lower upfront costs (subscription-based pricing).",
          "Scalable resources that grow with your business.",
          "Remote accessibility from any location.",
          "Automatic updates and maintenance handled by providers.",
        ],
        cons: [
          "Requires an internet connection to access services.",
          "Data security is managed by a third party.",
          "Subscription costs may add up over time.",
        ],
      },
      onPremise: {
        title: "Advantages of On-Premise Solutions",
        pros: [
          "Greater control over security and compliance.",
          "One-time investment with no recurring subscription fees.",
          "Better performance for high-demand local applications.",
          "No reliance on internet connectivity for operation.",
        ],
        cons: [
          "Higher upfront hardware and maintenance costs.",
          "Requires in-house IT expertise.",
          "Limited scalability compared to cloud solutions.",
        ],
      },
    },
    comparisonTable: {
      headers: ["Feature", "Cloud-Based", "On-Premise"],
      rows: [
        ["Upfront Cost", "Low (Subscription)", "High (One-Time)"],
        ["Scalability", "Highly Scalable", "Limited by Hardware"],
        ["Maintenance", "Managed by Provider", "Managed by IT Team"],
        ["Security", "Provider-Managed", "Fully Controlled by Business"],
        ["Internet Dependency", "Required", "Not Required"],
      ],
    },
    useCases: [
      {
        title: "When to Choose Cloud?",
        points: [
          "Startups and small businesses needing cost-effective solutions.",
          "Companies with remote teams requiring access from anywhere.",
          "Organizations that want automatic software updates.",
        ],
      },
      {
        title: "When to Choose On-Premise",
        points: [
          "Businesses with strict data security and compliance needs.",
          "Companies requiring full control over IT infrastructure.",
          "Organizations handling sensitive or confidential information.",
        ],
      },
    ],
  },
  "integrated-tools": {
    title: "Integrated Tools",
    description: "Discover software that seamlessly integrates with your existing business systems.",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What Are Integrated Tools?",
        text: "Integrated tools are software solutions designed to work seamlessly with your existing business applications, ensuring smooth workflow automation and improved efficiency.",
      },
      {
        heading: "Why Use Integrated Tools?",
        text: "Using integrated tools reduces manual data entry, enhances communication between departments, and allows businesses to scale more effectively.",
      },
    ],
    prosAndCons: {
      pros: [
        "Improves workflow efficiency by automating tasks.",
        "Reduces errors caused by manual data entry.",
        "Enhances collaboration between different software tools.",
        "Allows businesses to scale without major system overhauls.",
      ],
      cons: [
        "Some integrations require additional setup and maintenance.",
        "Not all software supports seamless integration.",
        "Security concerns when connecting third-party applications.",
      ],
    },
    comparisonTable: {
      headers: ["Feature", "Integrated Tools", "Standalone Software"],
      rows: [
        ["Workflow Automation", "Yes", "Limited"],
        ["Data Sync Across Apps", "Yes", "No"],
        ["Scalability", "High", "Moderate"],
        ["Collaboration Features", "Yes", "Basic"],
        ["Custom Integrations", "Available", "Rare"],
      ],
    },
    useCases: [
      {
        title: "When to Use Integrated Tools?",
        points: [
          "When managing multiple applications that need to share data.",
          "For businesses looking to improve automation and reduce manual tasks.",
          "When teams need seamless communication between different software tools.",
        ],
      },
      {
        title: "When to Avoid Integrated Tools?",
        points: [
          "If your business operates independently with minimal software dependencies.",
          "If security and data privacy concerns prevent third-party integration.",
          "When cost of integration outweighs the benefits for small operations.",
        ],
      },
    ],
  },
  "communication-tools": {
    title: "Communication Tools",
    description: "Explore top communication tools designed to improve collaboration and productivity.",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What Are Communication Tools?",
        text: "Communication tools enable teams to collaborate efficiently, share information in real-time, and streamline workflow through various digital channels.",
      },
    ],
    prosAndCons: {
      pros: [
        "Enhance team collaboration and productivity.",
        "Allows for real-time communication regardless of location.",
        "Reduces email clutter by offering instant messaging alternatives.",
        "Supports video conferencing and file sharing.",
      ],
      cons: [
        "Some tools require training for effective use.",
        "Security concerns when sharing sensitive information.",
        "Can lead to communication overload if not managed properly.",
      ],
    },
    comparisonTable: {
      headers: ["Feature", "Slack", "Zoom", "Google Meet"],
      rows: [
        ["Instant Messaging", "Yes", "No", "No"],
        ["Video Conferencing", "No", "Yes", "Yes"],
        ["File Sharing", "Yes", "Yes", "Yes"],
        ["Screen Sharing", "Yes", "Yes", "Yes"],
        ["Integration with Other Apps", "Extensive", "Moderate", "Limited"],
      ],
    },
    useCases: [
      {
        title: "When to Use Communication Tools?",
        points: [
          "For remote teams needing seamless real-time collaboration.",
          "To reduce reliance on email for quick updates and discussions.",
          "For hosting virtual meetings and screen-sharing sessions.",
          "When managing projects across different teams and departments.",
        ],
      },
      {
        title: "Best Practices for Using Communication Tools",
        points: [
          "Set clear communication guidelines to avoid overload.",
          "Use appropriate channels for different types of communication.",
          "Leverage integrations to enhance productivity.",
          "Ensure data security and encryption when using communication tools.",
        ],
      },
    ],
  },
  "email-tools": {
    title: "Email Tools",
    description: "Find email management tools to enhance business efficiency and organization.",
    image: "/img/data-image.jpg",
    details: [
      {
        heading: "What Are Email Tools?",
        text: "Email tools help businesses and individuals manage their emails efficiently by organizing messages, automating tasks, and enhancing communication security.",
      },
      {
        heading: "Why Are Email Tools Important?",
        text: "With the overwhelming amount of emails professionals receive daily, email tools streamline inbox organization, improve response times, and reduce clutter.",
      },
    ],
    prosAndCons: {
      pros: [
        "Automates email sorting and prioritization.",
        "Enhances security with encryption and spam filtering.",
        "Integrates with calendars and task management apps.",
        "Improves productivity with scheduling and templates.",
      ],
      cons: [
        "Some tools require a learning curve to set up effectively.",
        "Premium features may come with additional costs.",
        "Email automation may sometimes misclassify important messages.",
      ],
    },
    comparisonTable: {
      headers: ["Features", "Gmail", "Outlook", "ProtonMail"],
      rows: [
        ["AI-Powered Email Sorting", "Yes", "Yes", "No"],
        ["End-to-End Encryption", "No", "No", "Yes"],
        ["Integrated Calendar", "Yes", "Yes", "No"],
        ["Custom Email Template", "Limited", "Yes", "No"],
        ["Advanced Spam Filtering", "Yes", "Yes", "Yes"],
      ],
    },
    useCases: [
      {
        title: "When to Use Email Tools?",
        points: [
          "For managing high volumes of daily emails efficiently.",
          "To automate email marketing campaigns and follow-ups.",
          "For businesses needing secure, encrypted email communication.",
          "To reduce spam and improve inbox organization.",
        ],
      },
      {
        title: "Best Practices for Using Email Tools",
        points: [
          "Use filters and labels to automatically categorize emails.",
          "Enable two-factor authentication for email security.",
          "Regularly clean up your inbox to maintain efficiency.",
          "Schedule emails for better time management.",
        ],
      },
    ],
  },
};

// Memoized Icon Component
const IconComponent = React.memo(({ img, text }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    }}
    whileHover={{ scale: 1.2, rotate: 360 }}
    transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
    className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/5 min-w-[160px]"
  >
    <Image
      src={img}
      alt={text}
      width={96}
      height={96}
      className="mb-4 rounded-full shadow-xl border border-[colors.secondary]/50 bg-[colors.white] p-3"
    />
    <Typography className="text-lg font-bold text-[colors.primary]">{text}</Typography>
  </motion.div>
));

export function Software() {
  const { category = "cloud-vs-on-premise" } = useParams();
  const content = softwareContent[category];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 },
    },
  };

  const hoverEffect = {
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.5, type: "spring", stiffness: 150 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  return (
    <>
      <Head>
        <title>{content.title} | Your Company Name</title>
        <meta name="description" content={content.description} />
      </Head>
      <div className="bg-gradient-to-br from-[colors.softBlue] via-[colors.white] to-[colors.softBlue] min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative min-h-screen flex flex-col items-center justify-center text-center text-[colors.white] pt-32 pb-16 px-6 bg-[colors.primary]/95 backdrop-blur-2xl overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[colors.secondary]/30 to-[colors.accent]/30"
            initial={{ y: -200 }}
            animate={{ y: 200 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 15, ease: "linear" }}
          />
          <Typography
            variant="h1"
            className="relative z-10 mb-8 font-extrabold text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-grey-900 bg-clip-text bg-gradient-to-r from-[colors.secondary] via-[colors.accent] to-[colors.white] tracking-widest uppercase drop-shadow-2xl"
          >
            {content.title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </Typography>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="relative z-10 max-w-4xl">
            <Typography
              variant="lead"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider opacity-90 text-[colors.white]"
            >
              {content.description}
            </Typography>
          </motion.div>
        </motion.div>

        {/* Dynamic Content Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto -mt-28 px-6 py-20"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={itemVariants} className="w-full lg:w-1/2 text-left">
              <Typography
                variant="h2"
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[${colors.darkPrimary}] tracking-tight leading-tight`}
              >
                {content.title}
              </Typography>
              <Typography className="text-lg md:text-xl text-[colors.text] leading-relaxed">
                {content.description}
              </Typography>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={hoverEffect}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <Image
                src={content.image}
                alt="Software Visual"
                width={600}
                height={400}
                className="w-full max-w-md h-auto rounded-2xl shadow-2xl border border-[colors.secondary]/20 transform transition-all duration-700 hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Additional Content */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto px-6 py-20 flex flex-col items-center text-center"
        >
          {content && (
            <>
              {/* Icons Section */}
              <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-12 py-16">
                {[
                  { img: "/img/i'm_watching_you.png", text: "Employee Monitoring" },
                  { img: "/img/timer_icon.png", text: "Work Time Tracking" },
                  { img: "/img/stats_icon.png", text: "Remote Access & Stats" },
                  { img: "/img/list_icon.png", text: "Monitoring Guide" },
                ].map((item, index) => (
                  <IconComponent key={index} img={item.img} text={item.text} />
                ))}
              </motion.div>

              {/* Details Section */}
              {content.details && (
                <motion.div variants={itemVariants} className="mt-16 max-w-4xl">
                  {content.details.map((section, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="mb-10 bg-[colors.white] p-8 rounded-2xl shadow-lg"
                    >
                      <Typography
                        variant="h3"
                        className="text-3xl md:text-4xl font-bold text-[colors.primary] mb-4"
                      >
                        {section.heading}
                      </Typography>
                      <Typography className="text-lg text-[colors.text] leading-loose">
                        {section.text}
                      </Typography>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Pros and Cons Section */}
              {content.prosAndCons && (
                <motion.div variants={itemVariants} className="mt-16 max-w-5xl">
                  {content.prosAndCons.cloud && (
                    <div className="mb-12">
                      <Typography
                        variant="h3"
                        className="text-3xl md:text-4xl font-bold text-[colors.primary] mb-6"
                      >
                        {content.prosAndCons.cloud.title}
                      </Typography>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[colors.text] text-lg">
                        {content.prosAndCons.cloud.pros.map((pro, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 bg-[colors.lightGray] p-4 rounded-lg shadow-md"
                          >
                            <span className="text-[colors.secondary] text-2xl">✔</span> {pro}
                          </motion.li>
                        ))}
                        {content.prosAndCons.cloud.cons.map((con, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 bg-[colors.lightGray] p-4 rounded-lg shadow-md"
                          >
                            <span className="text-red-500 text-2xl">✘</span> {con}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {content.prosAndCons.onPremise && (
                    <div>
                      <Typography
                        variant="h3"
                        className="text-3xl md:text-4xl font-bold text-[colors.primary] mb-6"
                      >
                        {content.prosAndCons.onPremise.title}
                      </Typography>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[colors.text] text-lg">
                        {content.prosAndCons.onPremise.pros.map((pro, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 bg-[colors.lightGray] p-4 rounded-lg shadow-md"
                          >
                            <span className="text-[colors.secondary] text-2xl">✔</span> {pro}
                          </motion.li>
                        ))}
                        {content.prosAndCons.onPremise.cons.map((con, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 bg-[colors.lightGray] p-4 rounded-lg shadow-md"
                          >
                            <span className="text-red-500 text-2xl">✘</span> {con}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {content.prosAndCons.pros && (
                    <div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[colors.text] text-lg">
                        {content.prosAndCons.pros.map((pro, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 bg-[colors.lightGray] p-4 rounded-lg shadow-md"
                          >
                            <span className="text-[colors.secondary] text-2xl">✔</span> {pro}
                          </motion.li>
                        ))}
                        {content.prosAndCons.cons.map((con, index) => (
                          <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-start gap-3 bg-[colors.lightGray] p-4 rounded-lg shadow-md"
                          >
                            <span className="text-red-500 text-2xl">✘</span> {con}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Comparison Table */}
              {content.comparisonTable && (
                <motion.div variants={itemVariants} className="mt-16 max-w-5xl w-full">
                  <Typography
                    variant="h3"
                    className="text-3xl md:text-4xl font-bold text-[colors.primary] mb-8 text-center"
                  >
                    Feature Comparison
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="shadow-2xl rounded-xl overflow-hidden bg-[colors.white]"
                  >
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[colors.primary] text-[colors.white]">
                          {content.comparisonTable.headers.map((header, index) => (
                            <th
                              key={index}
                              className="px-6 py-4 font-semibold text-base uppercase tracking-wider border-b border-[colors.secondary]/50"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {content.comparisonTable.rows.map((row, rowIndex) => (
                          <motion.tr
                            key={rowIndex}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: rowIndex * 0.1, duration: 0.6 }}
                            className={`${
                              rowIndex % 2 === 0 ? "bg-[colors.white]" : "bg-[colors.lightGray]"
                            } hover:bg-[colors.secondary]/10 transition-colors`}
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="px-6 py-4 text-[colors.text] text-base border-b border-[colors.secondary]/20"
                              >
                                {cell}
                              </td>
                            ))}
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                </motion.div>
              )}

              {/* Use Cases Section */}
              {content.useCases && (
                <motion.div variants={itemVariants} className="mt-16 max-w-4xl">
                  {content.useCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="mb-12 bg-[colors.white] p-8 rounded-2xl shadow-lg"
                    >
                      <Typography
                        variant="h3"
                        className="text-3xl md:text-4xl font-bold text-[colors.primary] mb-4"
                      >
                        {useCase.title}
                      </Typography>
                      <ul className="list-none text-lg text-[colors.text] space-y-4">
                        {useCase.points.map((point, i) => (
                          <motion.li
                            key={i}
                            variants={itemVariants}
                            className="flex items-start gap-3"
                          >
                            <span className="text-[colors.secondary] font-bold text-2xl">→</span> {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </>
          )}
        </motion.section>
      </div>
    </>
  );
}

export default Software;