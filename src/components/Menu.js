import React from 'react';

const Menu = () => {
  return (
    <div className="flex flex-col fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 space-y-4">
      <h1 className="text-xl font-bold">Glynac.AI</h1>
      <ul className="space-y-2">
        <li><a href="#landing" className="hover:text-gray-400">Landing Page</a></li>
        <li><a href="#how-glynac-works" className="hover:text-gray-400">How Glynac Works</a></li>
        <li><a href="#about-us" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#contact-us" className="hover:text-gray-400">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Menu;
