import React from "react";
import { Button } from "@material-tailwind/react";

const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 space-y-6">
    

      {/* Menu Links */}
      <div className="space-y-4">
        <Button className="bg-transparent text-white border-none w-full" ripple={true}>
          Landing Page
        </Button>
        <Button className="bg-transparent text-white border-none w-full" ripple={true}>
          How Glynac Works
        </Button>
        <Button className="bg-transparent text-white border-none w-full" ripple={true}>
          About Us
        </Button>
        <Button className="bg-transparent text-white border-none w-full" ripple={true}>
          Contact Us
        </Button>
        <Button className="bg-transparent text-white border-none w-full" ripple={true}>
          Customer Support
        </Button>
        <Button className="bg-transparent text-white border-none w-full" ripple={true}>
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;