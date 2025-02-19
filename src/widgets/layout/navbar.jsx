import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  return (
    <MTNavbar color="transparent" onMouseLeave={() => setIsDropdownOpen(false)} className="p-3">
      <div className="container mx-auto flex items-center justify-between text-black">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          {routes.map(({ name, path }) => {
            if (name === "software") {
              return (
                <div
                  key={name}
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  {/* Software Menu Item */}
                  <Typography as="li" variant="small" color="inherit" className="capitalize">
                    <span className="flex items-center gap-1 p-1 font-bold cursor-pointer">
                      Software 
                    </span>
                  </Typography>

                <div className="relative">
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div 
                      className="absolute left-0 mt-2 w-96 bg-white text-gray-800 shadow-lg rounded-lg p-4"
                      onMouseEnter={() => setIsDropdownOpen(true)} 
                    >
                      {[
                        { to: "/software/cloud-vs-on-premise", title: "Cloud vs. On-Premise Solution", desc: "Compare cloud and on-premise software options." },
                        { to: "/software/integrated-tools", title: "Integrated Tools", desc: "Discover software that integrates with existing systems." },
                        { to: "/software/communication-tools", title: "Communication Tools", desc: "Explore software that enhances team collaboration." },
                        { to: "/software/email-tools", title: "Email Tools", desc: "Find email solutions for business productivity." },
                      ].map(({ to, title, desc }) => (
                        <Link
                          key={to}
                          to={to}
                          className="block px-4 py-2 hover:bg-gray-200 rounded-t-lg"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="font-bold">{title}</span>
                          <p className="text-sm text-blue-600">{desc}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              );
            } else {
              return (
                <Typography key={name} as="li" variant="small" color="inherit" className="capitalize">
                  <Link to={path} className="flex items-center gap-1 p-1 font-bold">
                    {name}
                  </Link>
                </Typography>
              );
            }
          })}
        </div>

        {/* Mobile Navigation Toggle Button */}
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNav className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900" open={openNav}>
        <div className="container mx-auto">
          <ul className="flex flex-col gap-2 text-inherit">
            {routes.map(({ name, path }) => {
              if (name === "software") {
                return (
                  <div key={name} className="relative">
                    <Typography as="li" variant="small" color="inherit" className="capitalize">
                      <span
                        className="flex items-center gap-1 p-1 font-bold cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        Software 
                      </span>
                    </Typography>

                    {isDropdownOpen && (
                      <div 
                        className="mt-2 w-full bg-gray-200 rounded-lg p-4"
                      >
                        {[
                          { to: "/software/cloud-vs-on-premise", title: "Cloud vs. On-Premise Solution", desc: "Compare cloud and on-premise software options." },
                          { to: "/software/integrated-tools", title: "Integrated Tools", desc: "Discover software that integrates with existing systems." },
                          { to: "/software/communication-tools", title: "Communication Tools", desc: "Explore software that enhances team collaboration." },
                          { to: "/software/email-tools", title: "Email Tools", desc: "Find email solutions for business productivity." },
                        ].map(({ to, title, desc }) => (
                          <Link
                            key={to}
                            to={to}
                            className="block px-4 py-2 hover:bg-gray-300 rounded-t-lg"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setOpenNav(false);
                            }}
                          >
                            <span className="font-bold">{title}</span>
                            <p className="text-sm text-blue-500">{desc}</p>
                          </Link>
                        ))}  
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Typography key={name} as="li" variant="small" color="inherit" className="capitalize">
                    <Link to={path} className="flex items-center gap-1 p-1 font-bold">
                      {name}
                    </Link>
                  </Typography>
                );
              }
            })}
          </ul>
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
