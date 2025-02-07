import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState for controlling the dropdown

export function MenuBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  // Function to handle mouse enter and mouse leave for the entire dropdown area
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-blue-600 py-4 fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-extrabold">Glynac.ai</div>
        <div className="space-x-8 hidden md:flex text-white text-lg">
          <Link to="/home" className="hover:text-blue-200">Home</Link>

          {/* Software Link with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter} // Show dropdown when mouse enters
          >
            <button className="hover:text-blue-200">
              Software
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md"
                onMouseLeave={handleMouseLeave} // Hide dropdown when cursor leaves both the dropdown and button
              >
                <Link to="/software" className="block px-4 py-2 hover:bg-blue-200">
                  Software
                </Link>
                <Link to="/communication-tools" className="block px-4 py-2 hover:bg-blue-200">
                  Communication Tools
                </Link>
                <Link to="/email-tools" className="block px-4 py-2 hover:bg-blue-200">
                  Email Tools
                </Link>
              </div>
            )}
          </div>

          <Link to="/features" className="hover:text-blue-200">Features</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/resources" className="hover:text-blue-200">Resources</Link>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
