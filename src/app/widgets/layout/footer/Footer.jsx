"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Description */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Glynac.ai</h2>
            <p className="text-sm mt-2">
              Empowering businesses with AI-driven insights and solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="/resources/about" className="hover:text-white transition">
              About Us
            </a>
            <a href="/resources/blog" className="hover:text-white transition">
              Blog
            </a>
            <a href="/resources/contacts" className="hover:text-white transition">
              Contact
            </a>
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Glynac.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;