import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState for controlling the dropdown

export function MenuBar() {
  const [isSoftwareDropdownOpen, setIsSoftwareDropdownOpen] = useState(false); // State for Software dropdown visibility
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false); // State for Features dropdown visibility
  const [isAIAnalysisDropdownOpen, setIsAIAnalysisDropdownOpen] = useState(false); // State for AI Analysis dropdown visibility
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false); // State for Resources dropdown visibility

  // Function to handle mouse enter and mouse leave for the Software dropdown
  const handleSoftwareMouseEnter = () => {
    setIsSoftwareDropdownOpen(true);
  };

  const handleSoftwareMouseLeave = () => {
    setIsSoftwareDropdownOpen(false);
  };

  // Function to handle mouse enter and mouse leave for the Features dropdown
  const handleFeaturesMouseEnter = () => {
    setIsFeaturesDropdownOpen(true);
  };

  const handleFeaturesMouseLeave = () => {
    setIsFeaturesDropdownOpen(false);
  };

  // Function to handle mouse enter and mouse leave for the AI Analysis dropdown
  const handleAIAnalysisMouseEnter = () => {
    setIsAIAnalysisDropdownOpen(true);
  };

  const handleAIAnalysisMouseLeave = () => {
    setIsAIAnalysisDropdownOpen(false);
  };

  // Function to handle mouse enter and mouse leave for the Resources dropdown
  const handleResourcesMouseEnter = () => {
    setIsResourcesDropdownOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    setIsResourcesDropdownOpen(false);
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
            onMouseEnter={handleSoftwareMouseEnter} // Show dropdown when mouse enters
          >
            <button className="hover:text-blue-200">
              Software
            </button>

            {/* Software Dropdown Menu */}
            {isSoftwareDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md"
                onMouseLeave={handleSoftwareMouseLeave} // Hide dropdown when cursor leaves both the dropdown and button
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

          {/* Features Link with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleFeaturesMouseEnter} // Show dropdown when mouse enters
          >
            <button className="hover:text-blue-200">
              Features
            </button>

            {/* Features Dropdown Menu */}
            {isFeaturesDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md"
                onMouseLeave={handleFeaturesMouseLeave} // Hide dropdown when cursor leaves both the dropdown and button
              >
                <Link to="/demographic-data" className="block px-4 py-2 hover:bg-blue-200">
                  Demographic Data
                </Link>
                <Link to="/pre-clean-data" className="block px-4 py-2 hover:bg-blue-200">
                  Pre-cleaned Data
                </Link>
                <Link to="/standardized-data" className="block px-4 py-2 hover:bg-blue-200">
                  Standardized Data
                </Link>
              </div>
            )}
          </div>

          {/* AI Analysis Link with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleAIAnalysisMouseEnter}
          >
            <button className="hover:text-blue-200">
              AI Analysis
            </button>

            {/* AI Analysis Dropdown Menu */}
            {isAIAnalysisDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md"
                onMouseLeave={handleAIAnalysisMouseLeave} // Hide dropdown when cursor leaves both the dropdown and button
              >
                <Link to="/ai-qualitative" className="block px-4 py-2 hover:bg-blue-200">
                  AI Qualitative
                </Link>
                <Link to="/ai-quantitative" className="block px-4 py-2 hover:bg-blue-200">
                  AI Quantitative
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/pricing" className="hover:text-blue-200">Pricing</Link>
          <Link to="/security" className="hover:text-blue-200">Security</Link>

          {/* Resources Link with Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleResourcesMouseEnter} // Show dropdown when mouse enters
          >
            <button className="hover:text-blue-200">
              Resources
            </button>

            {/* Resources Dropdown Menu */}
            {isResourcesDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-md"
                onMouseLeave={handleResourcesMouseLeave} // Hide dropdown when cursor leaves both the dropdown and button
              >
                <Link to="/blog" className="block px-4 py-2 hover:bg-blue-200">
                  Blog
                </Link>
                <Link to="/news" className="block px-4 py-2 hover:bg-blue-200">
                  News
                </Link>
                <Link to="/updates" className="block px-4 py-2 hover:bg-blue-200">
                  Updates
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default MenuBar;
