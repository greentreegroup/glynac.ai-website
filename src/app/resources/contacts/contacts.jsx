"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const contactData = [
  {
    title: "Phone Support",
    icon: PhoneIcon,
    description: (
      <>
        Available 24/7 at{" "}
        <a 
          href="tel:+1234567890" 
          className="text-blue-600 font-medium hover:underline"
          aria-label="Call us at 1 2 3 4 5 6 7 8 9 0"
        >
          (123) 456-7890
        </a>
      </>
    ),
  },
  {
    title: "Email Us",
    icon: EnvelopeIcon,
    description: (
      <>
        Reach us at{" "}
        <a 
          href="mailto:hello@reallygreatsite.com" 
          className="text-blue-600 font-medium hover:underline"
          aria-label="Email us at hello at really great site dot com"
        >
          hello@reallygreatsite.com
        </a>
      </>
    ),
  },
  {
    title: "Office Location",
    icon: MapPinIcon,
    description: (
      <>
        Visit us at{" "}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
          aria-label="View our office location on Google Maps"
        >
          123 Business Ave, Suite 100
        </a>
      </>
    ),
  },
];

export function Contacts() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Animation cycle completed");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Submit logic here
      console.log("Form submitted:", formData);
      setTimeout(() => setIsSubmitting(false), 2000);
    }
  };

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 25, 
        duration: 0.5 
      },
    },
  };

  const socialVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
  };

  const titleVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1, 
        ease: "easeOut" 
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Scroll progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50" 
        style={{ scaleX }}
      />

      {/* Header */}
      <motion.header
        className="text-center pt-20 pb-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white"
        variants={titleVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact Our Team
        </h1>
        <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          We're here to assist you. Reach out today!
        </p>
      </motion.header>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-16 max-w-6xl">
        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactData.map((item, index) => (
            <motion.div
              key={`contact-${index}`}
              variants={cardVariants}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 bg-blue-50 rounded-full p-3">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-center text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Connect With Us
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { Icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
              { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
              { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={`social-${index}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label={`Follow us on ${social.label}`}
              >
                <social.Icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;