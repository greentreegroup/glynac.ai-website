import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 h-screen w-64 bg-gray-800 text-white p-6 shadow-lg">
      {/* Brand/Logo (Optional) */}
      <div className="mb-8">
        <Typography variant="h5" className="font-bold">
          <Link to="/" className="text-white hover:text-gray-300">
            Glynac.AI 
          </Link>
        </Typography>
      </div>

      {/* Menu Links */}
      <ul className="space-y-4">
        <li>
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
            Landing Page
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
            How Glynac Works
          </Link>
        </li>
        <li>
          <Link to="/about" className="block py-2 px-4 hover:bg-gray-700 rounded transition duration-200">
            About Us
          </Link>
        </li>
        {/* ... more links */}
      </ul>

      {/* Login/Signup (Optional) - Consider a more prominent style */}
      <div className="mt-auto">
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          Login
        </Button>
        <Button variant="outlined" size="sm" fullWidth color="white">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
