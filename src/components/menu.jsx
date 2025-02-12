import { Link } from "react-router-dom";
import { useState } from "react";

// Dropdown Menu Component
const DropdownMenu = ({ isOpen, children }) => (
  <div
    className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-lg transition-all duration-300 ${
      isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
    }`}
    style={{ zIndex: isOpen ? 100 : -1 }}
  >
    {children}
  </div>
);

// Dropdown Item Component
const DropdownItem = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block px-4 py-3 text-gray-800 hover:bg-blue-100 transition-all duration-200 rounded-md"
  >
    {children}
  </Link>
);

// Navbar Component
export function MenuBar() {
  const [dropdownOpen, setDropdownOpen] = useState({
    software: false,
    features: false,
    aiAnalysis: false,
  });

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [showBlur, setShowBlur] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setShowBlur(!isMobileNavOpen);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen({ software: false, features: false, aiAnalysis: false });
    setIsMobileNavOpen(false);
    setShowBlur(false);
  };

  return (
    <>
      {/* Background Blur */}
      {showBlur && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-0 pointer-events-none"></div>
      )}

      <nav className="bg-blue-900 py-4 fixed top-0 w-full z-20 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold tracking-wide">
            <Link to="/">Glynac.ai</Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white text-lg">

            {/* Dropdowns */}
            {["software", "features", "AI Analysis", "pricing", "security", "resources"].map((menu) => (
              <li
                key={menu}
                className="relative group"
                onMouseEnter={() => setDropdownOpen((prev) => ({ ...prev, [menu]: true }))}
                onMouseLeave={() => setDropdownOpen((prev) => ({ ...prev, [menu]: false }))}
              >
                <button className="hover:text-blue-300 transition-all duration-200">
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </button>
                <DropdownMenu isOpen={dropdownOpen[menu]}>
                  {menu === "software" && (
                    <>
                      <DropdownItem to="/software" onClick={closeAllDropdowns}>Glync AI Software</DropdownItem>
                      <DropdownItem to="/communication-tools" onClick={closeAllDropdowns}>Communication Tools</DropdownItem>
                      <DropdownItem to="/email-tools" onClick={closeAllDropdowns}>Email Tools</DropdownItem>
                    </>
                  )}
                  {menu === "features" && (
                    <>
                      <DropdownItem to="/demographic-data" onClick={closeAllDropdowns}>Demographic Data</DropdownItem>
                      <DropdownItem to="/pre-clean-data" onClick={closeAllDropdowns}>Pre-cleaned Data</DropdownItem>
                      <DropdownItem to="/standardized-data" onClick={closeAllDropdowns}>Standardized Data</DropdownItem>
                    </>
                  )}
                  {menu === "AI Analysis" && (
                    <>
                      <DropdownItem to="/ai-qualitative" onClick={closeAllDropdowns}>AI Qualitative</DropdownItem>
                      <DropdownItem to="/ai-quantitative" onClick={closeAllDropdowns}>AI Quantitative</DropdownItem>
                    </>
                  )}
                  {menu === "pricing" && (
                    <>
                      <DropdownItem to="/pricing" onClick={closeAllDropdowns}>Pricing</DropdownItem>
                    </>
                  )}
                  {menu === "security" && (
                    <>
                      <DropdownItem to="/security" onClick={closeAllDropdowns}>Security</DropdownItem>
                    </>
                  )}
                  {menu === "resources" && (
                    <>
                      <DropdownItem to="/about" onClick={closeAllDropdowns}>About</DropdownItem>
                      <DropdownItem to="/blog" onClick={closeAllDropdowns}>blog</DropdownItem>
                      <DropdownItem to="/client_case" onClick={closeAllDropdowns}>Client case</DropdownItem>
                      <DropdownItem to="/contacts" onClick={closeAllDropdowns}>Contacts</DropdownItem>
                      <DropdownItem to="/faq" onClick={closeAllDropdowns}>FAQ</DropdownItem>
                      <DropdownItem to="/manual" onClick={closeAllDropdowns}>Manual</DropdownItem>
                      <DropdownItem to="/news" onClick={closeAllDropdowns}>News</DropdownItem>
                      <DropdownItem to="/partner_program" onClick={closeAllDropdowns}>Partner program</DropdownItem>
                      <DropdownItem to="/support" onClick={closeAllDropdowns}>Support</DropdownItem>
                      <DropdownItem to="/updates" onClick={closeAllDropdowns}>Updates</DropdownItem>
                    </>
                  )}
                </DropdownMenu>
              </li>
            ))}

            
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileNav} className="text-white">
              <div className="w-6 h-0.5 bg-white my-1"></div>
              <div className="w-6 h-0.5 bg-white my-1"></div>
              <div className="w-6 h-0.5 bg-white my-1"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-300 z-50 transform ${isMobileNavOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="p-5 flex flex-col space-y-5">
              <button onClick={closeAllDropdowns} className="text-black text-2xl self-end">✕</button>
              <DropdownItem to="/home" onClick={closeAllDropdowns}>Home</DropdownItem>
              <DropdownItem to="/software" onClick={closeAllDropdowns}>Software</DropdownItem>
              <DropdownItem to="/features" onClick={closeAllDropdowns}>Features</DropdownItem>
              <DropdownItem to="/ai-analysis" onClick={closeAllDropdowns}>AI Analysis</DropdownItem>
              <DropdownItem to="/pricing" onClick={closeAllDropdowns}>Pricing</DropdownItem>
              <DropdownItem to="/security" onClick={closeAllDropdowns}>Security</DropdownItem>
              <DropdownItem to="/about" onClick={closeAllDropdowns}>Resources</DropdownItem>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;
