import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

const navList = (
  <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    {routes.map(({ name, path }) => {
      if (name === "software") {
        return (
          <div
            key={name}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Typography as="li" variant="small" color="inherit" className="capitalize">
              <span className="flex items-center gap-1 p-1 font-bold cursor-pointer">
                Software
              </span>
            </Typography>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-96 bg-white text-gray-800 shadow-lg rounded-lg p-4">
                <Link to="/software/cloud-vs-on-premise" className="block px-4 py-2 hover:bg-gray-200 rounded-t-lg">
                  <span className="font-bold">Cloud vs. On-Premise Solution</span>
                  <p className="text-sm" style={{ color: "#7bae37"}}>
                    Compare cloud and on-premise software options.</p> 
                </Link>

                <Link to="/software/integrated-tools" className="block px-4 py-2 hover:bg-gray-200">
                  <span className="font-bold">Integrated Tools</span>
                  <p className="text-sm" style={{ color: "#7bae37"}}>
                    Discover software that integrates with existing systems</p>
                </Link>

                <Link to="/software/communication-tools" className="block px-4 py-2 hover:bg-gray-200">
                  <span className="font-bold">Communication Tools</span>
                  <p className="text-sm" style={{ color: "#7bae37"}}>
                    Explore software that enhances team collaboration</p>
                </Link>

                <Link to="/software/email-tools" className="block px-4 py-2 hover:bg-gray-200 rounded-b-lg">
                  <span className="font-bold">Email Tools</span>
                  <p className="text-sm" style={{ color: "#7bae37"}}>
                    Find email solutions for business productivity.</p>
                </Link>
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
);

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <a
            href="https://www.material-tailwind.com/blocks?ref=mtkr"
            target="_blank"
          >
            <Button variant="text" size="sm" color="white" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          <ul className="flex flex-col gap-2 text-inherit">
            {routes.map(({ name, path }) => {
              if (name === "software") {
                return (
                  <div key={name} className="relative">
                    <Typography
                      as="li"
                      variant="small"
                      color="inheret"
                      className="capitalize"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="flex items-center gap-1 p-1 font-bold cursor-pointer">
                        Software
                      </span>
                    </Typography>

                    {isDropdownOpen && (
                      <div className="mt-2 w-full bg-gray-200 rounded-lg">
                        <Link to="/software/section1" className="block px-4 py-2 hover:bg-gray-300 rounded-t-lg">Section 1</Link>
                        <Link to="/software/section=2" className="block px-4 py-2 hover:bg-gray-300">Section 2</Link>
                        <Link to="/software/section3" className="block px-4 py-2 hover:bg-gray-300">Section 3</Link>
                        <Link to="/software/section4" className="block px-4 py-2 hover:bg-gray-300 rounded-t-lg">Section 4</Link>
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
          <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Material Tailwind React",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
