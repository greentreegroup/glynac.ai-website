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

  // Define menu items and their respective links
  const menuItems = {
    software: [
      { to: "/software", label: "Glync AI Software" },
      { to: "/communication-tools", label: "Communication Tools" },
      { to: "/email-tools", label: "Email Tools" },
    ],
    features: [
      { to: "/demographic-data", label: "Demographic Data" },
      { to: "/pre-clean-data", label: "Pre-cleaned Data" },
      { to: "/standardized-data", label: "Standardized Data" },
    ],
    aiAnalysis: [
      { to: "/ai-qualitative", label: "AI Qualitative" },
      { to: "/ai-quantitative", label: "AI Quantitative" },
    ],
    pricing: [{ to: "/pricing", label: "Pricing" }],
    security: [{ to: "/security", label: "Security" }],
    resources: [
      { to: "/about", label: "About" },
      { to: "/blog", label: "Blog" },
      { to: "/client_case", label: "Client Case" },
      { to: "/contacts", label: "Contacts" },
      { to: "/faq", label: "FAQ" },
      { to: "/manual", label: "Manual" },
      { to: "/news", label: "News" },
      { to: "/partner_program", label: "Partner Program" },
      { to: "/support", label: "Support" },
      { to: "/updates", label: "Updates" },
    ],
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
            {Object.keys(menuItems).map((menu) => (
              <li
                key={menu}
                className="relative group"
                onMouseEnter={() => setDropdownOpen((prev) => ({ ...prev, [menu]: true }))}
                onMouseLeave={() => setDropdownOpen((prev) => ({ ...prev, [menu]: false }))}
              >
                {menuItems[menu].length === 1 ? (
                  <Link
                    to={menuItems[menu][0].to}
                    className="hover:text-blue-300 transition-all duration-200"
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                  </Link>
                ) : (
                  <>
                    <button className="hover:text-blue-300 transition-all duration-200">
                      {menu.charAt(0).toUpperCase() + menu.slice(1)}
                    </button>
                    <DropdownMenu isOpen={dropdownOpen[menu]}>
                      {menuItems[menu].map((item) => (
                        <DropdownItem key={item.to} to={item.to} onClick={closeAllDropdowns}>
                          {item.label}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </>
                )}
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
              {Object.keys(menuItems).map((menu) => (
                menuItems[menu].length === 1 ? (
                  <DropdownItem key={menuItems[menu][0].to} to={menuItems[menu][0].to} onClick={closeAllDropdowns}>
                    {menuItems[menu][0].label}
                  </DropdownItem>
                ) : (
                  menuItems[menu].map((item) => (
                    <DropdownItem key={item.to} to={item.to} onClick={closeAllDropdowns}>
                      {item.label}
                    </DropdownItem>
                  ))
                )
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;
