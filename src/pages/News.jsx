import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function News() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides (titles, descriptions, and image URLs)
  const slides = [
    {
      title: "Business Trends in 2025",
      description: "We explore the key trends to watch for in the business world in the coming years.",
      imageUrl: "/img/Guide.jpg", // Replace with your image URL
    },
    {
      title: "Exploring the Future of AI",
      description: "A deep dive into the advancements in AI and how it's shaping industries worldwide.",
      imageUrl: "/img/Glossary.png", // Replace with your image URL
    },
  ];

  // Change slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="m-5 flex flex-col gap-7 relative">
      {/* News title at the top-left */}
      <Typography variant="h1" className="absolute top-[1.2cm] left-[2cm] text-4xl font-bold text-gradient">
        <span className="text-red-500">N</span>
        <span className="text-black">ews</span>
      </Typography>

      {/* Red and black line */}
      <div className="absolute top-[2.2cm] left-[2cm] w-[calc(100%-2cm)] h-[2px] bg-gradient-to-r from-red-500 to-black"></div>

      {/* New section for "Stay Up to Date" */}
      <div className="w-full lg:w-3/5 mt-24 bg-white rounded-xl shadow-lg z-10 relative p-6 mb-6">
        <div className="text-left mb-6">
          <Typography variant="h2" className="font-bold text-xl text-gradient mb-4 text-left">
            Stay Up to Date with the Latest News
          </Typography>
          <Typography variant="paragraph" className="text-lg font-normal text-gray-700 mb-6 text-left">
            Stay informed with the latest business, technology, and innovation news. Discover in-depth analysis, expert commentary, and breaking news.
          </Typography>
        </div>
      </div>

      {/* Slideshow Section for Business Trends and AI */}
      <div className="w-full lg:w-3/5 mt-[0.003cm] bg-white rounded-xl shadow-lg z-10 relative overflow-hidden">
        <div className="relative w-full h-[500px]">
          {/* Slide Content 1 */}
          <div
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === 0 ? 1 : 0,
              zIndex: currentSlide === 0 ? 10 : 0,
            }}
          >
            <img
              src={slides[0].imageUrl}
              alt={slides[0].title}
              className="w-full h-full object-cover" // Ensure image covers the entire area
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
              <Typography variant="h3" className="font-bold text-2xl text-white mb-2 text-left">
                {slides[0].title}
              </Typography>
              <Typography variant="paragraph" className="text-lg font-medium text-white mb-2 text-left">
                {slides[0].description}
              </Typography>
              <Link to="/article/business-trends" className="text-blue-500 mt-2 inline-block">Read more...</Link>
            </div>
          </div>

          {/* Slide Content 2 */}
          <div
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === 1 ? 1 : 0,
              zIndex: currentSlide === 1 ? 10 : 0,
            }}
          >
            <img
              src={slides[1].imageUrl}
              alt={slides[1].title}
              className="w-full h-full object-cover" // Ensure image covers the entire area
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4">
              <Typography variant="h3" className="font-bold text-2xl text-white mb-2 text-left">
                {slides[1].title}
              </Typography>
              <Typography variant="paragraph" className="text-lg font-medium text-white mb-2 text-left">
                {slides[1].description}
              </Typography>
              <Link to="/article/ai" className="text-blue-500 mt-2 inline-block">Read more...</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="w-full lg:w-3/5 mt-8 bg-white rounded-xl shadow-lg z-10 relative p-6 mb-6">
        <Typography variant="h3" className="font-semibold mb-2">Explore Categories</Typography>
        <Typography variant="paragraph" className="text-gray-600 mb-4">
          Explore a wide range of categories that keep you informed about the latest trends and updates.
        </Typography>

        {/* Picture Space Above Buttons */}
        <div className="flex gap-[3cm] mb-6">
          {/* Business Button */}
          <div className="flex flex-col items-center">
            <div className="w-[220px] h-[220px] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src="/img/Guide.jpg" // Replace with your image URL
                alt="Business"
                className="w-full h-full object-cover"
              />
            </div>
            <Button color="black" className="px-6 py-3 text-lg hover:bg-black-700 transition-all transform hover:scale-105 hover:opacity-70">
              Business
            </Button>
          </div>

          {/* Technology Button */}
          <div className="flex flex-col items-center">
            <div className="w-[220px] h-[220px] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src="/img/Guide.jpg" // Replace with your image URL
                alt="Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <Button color="black" className="px-6 py-3 text-lg hover:bg-black-700 transition-all transform hover:scale-105 hover:opacity-70">
              Technology
            </Button>
          </div>

          {/* Innovation Button */}
          <div className="flex flex-col items-center">
            <div className="w-[220px] h-[220px] bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src="/img/Guide.jpg" // Replace with your image URL
                alt="Innovation"
                className="w-full h-full object-cover"
              />
            </div>
            <Button color="black" className="px-6 py-3 text-lg hover:bg-black-700 transition-all transform hover:scale-105 hover:opacity-70">
              Innovation
            </Button>
          </div>
        </div>
      </div>

      {/* Expert Insights Section with Image Cover */}
      <div className="w-full lg:w-3/5 mt-8 bg-white rounded-xl shadow-lg z-10 relative p-6 mb-6">
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
          <img
            src="/img/Guide.jpg" // Replace with your image URL
            alt="Expert Insights"
            className="w-full h-full object-cover" // Ensure image covers the entire field
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-6">
            <Typography variant="h3" className="font-semibold text-2xl text-white mb-2 text-left">
              Expert Insights
            </Typography>
            <Typography variant="paragraph" className="text-lg font-medium text-white text-left">
              Read exclusive interviews and insights from industry leaders and experts.
            </Typography>
            <Link to="/expert-interviews" className="text-blue-500 mt-2 inline-block">See Interviews...</Link>
          </div>
        </div>
      </div>

      {/* Red Line between sections */}
      <div className="w-full h-[2px] bg-red-500 animate-fadeInOut mb-4"></div>

      {/* Black background section below */}
      <div className="w-full h-[10cm] mt-4 bg-black rounded-xl relative">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-xl"
        />
        {/* Move "Stay Updated with Our Newsletter" to bottom right */}
        <div className="absolute bottom-4 right-4 z-20">
          <Typography variant="h4" className="font-semibold mb-2 text-xl text-white">
            Stay Updated with Our Newsletter
          </Typography>
          <Typography variant="paragraph" className="text-white mb-4">
            Subscribe now to get the latest news, analysis, and insights delivered to your inbox.
          </Typography>
          <Button color="white" className="px-6 py-3 transform hover:scale-105 transition-all">Subscribe Now</Button>
        </div>

        {/* Links section aligned to the left */}
        <div className="absolute top-[0.6cm] left-[1.9cm] grid grid-cols-4 gap-x-6 gap-y-[1.5cm] text-white text-lg">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/software" className="hover:underline">Software</Link>
          <Link to="/features" className="hover:underline">Features</Link>
          <Link to="/ai-analysis" className="hover:underline">AI Analysis</Link>

          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/security" className="hover:underline">Security</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/updates" className="hover:underline">Updates</Link>

          <Link to="/manual" className="hover:underline">Manual</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/partner-program" className="hover:underline">Partner Program</Link>
          <Link to="/support" className="hover:underline">Support</Link>

          <Link to="/contacts" className="hover:underline">Contacts</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
        </div>

        {/* Follow Us Section */}
        <div className="absolute top-4 right-4 flex gap-4 z-20">
          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
            <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </Link>
          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
            <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </Link>
          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </Link>
          <Link to="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200">
            <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default News;
