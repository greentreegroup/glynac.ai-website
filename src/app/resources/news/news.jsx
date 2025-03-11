"use client";

import { Typography, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";

export function News() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Business Trends in 2025",
      description: "We explore the key trends to watch for in the business world in the coming years.",
      imageUrl: "/img/Bus Trend.jpeg",
    },
    {
      title: "Exploring the Future of AI",
      description: "A deep dive into the advancements in AI and how it's shaping industries worldwide.",
      imageUrl: "/img/AI 2.jpeg",
    },
  ];

  const categories = [
    { name: "Business", imageUrl: "/img/Business.jpg" },
    { name: "Technology", imageUrl: "/img/Technology.jpeg" },
    { name: "Innovation", imageUrl: "/img/Innovation.jpg" },
  ];

  const footerLinks = [
    { text: "Home", href: "/home" },
    { text: "Software", href: "/software" },
    { text: "Features", href: "/features" },
    { text: "AI Analysis", href: "/ai-analysis" },
    { text: "Pricing", href: "/pricing" },
    { text: "Security", href: "/security" },
    { text: "Blog", href: "/blog" },
    { text: "Updates", href: "/updates" },
    { text: "Manual", href: "/manual" },
    { text: "FAQ", href: "/faq" },
    { text: "Partner Program", href: "/partner-program" },
    { text: "Support", href: "/support" },
    { text: "Contacts", href: "/contacts" },
    { text: "About Us", href: "/about-us" },
  ];

  const socialIcons = [
    { src: "/img/Facebook.jfif", alt: "Facebook", href: "#" },
    { src: "/img/Instagram.png", alt: "Instagram", href: "#" },
    { src: "/img/Linkedin.png", alt: "LinkedIn", href: "#" },
    { src: "/img/X.jfif", alt: "Twitter", href: "#" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="relative mb-8 animate-fadeIn">
        <Typography variant="h1" className="text-4xl font-bold text-gray-900">
          <span className="text-red-500">N</span>ews
        </Typography>
        <div className="w-full h-[2px] bg-gradient-to-r from-red-500 to-gray-900 mt-2"></div>
      </div>

      {/* Intro Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8 animate-fadeInUp">
        <Typography variant="h2" className="text-2xl font-bold text-gray-800 mb-4">
          Stay Up to Date with the Latest News
        </Typography>
        <Typography variant="paragraph" className="text-lg text-gray-600">
          Stay informed with the latest business, technology, and innovation news. Discover in-depth analysis, expert commentary, and breaking news.
        </Typography>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden mb-8 shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
              <Typography variant="h3" className="text-2xl font-bold text-white mb-2">
                {slide.title}
              </Typography>
              <Typography variant="paragraph" className="text-lg text-white mb-4">
                {slide.description}
              </Typography>
              <a
                href={`/article/${slide.title.toLowerCase().replace(" ", "-")}`}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Read more...
              </a>
            </div>
          </div>
        ))}
        <Button
          color="gray"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        >
          &lt;
        </Button>
        <Button
          color="gray"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        >
          &gt;
        </Button>
      </div>

      {/* Categories Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <Typography variant="h3" className="text-xl font-semibold text-gray-800 mb-4">
          Explore Categories
        </Typography>
        <Typography variant="paragraph" className="text-gray-600 mb-6">
          Explore a wide range of categories that keep you informed about the latest trends and updates.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center animate-fadeInUp" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="w-[220px] h-[220px] rounded-lg overflow-hidden mb-4 transform transition-transform duration-300 hover:scale-105">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button
                color="red"
                className="px-6 py-3 text-lg transition-transform duration-300 hover:scale-105"
              >
                {category.name}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Expert Insights Section */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-8 shadow-lg animate-fadeInUp">
        <img
          src="/img/expert.jpg"
          alt="Expert Insights"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
          <Typography variant="h3" className="text-2xl font-semibold text-white mb-2">
            Expert Insights
          </Typography>
          <Typography variant="paragraph" className="text-lg text-white">
            Read exclusive interviews and insights from industry leaders and experts.
          </Typography>
          <a
            href="/expert-interviews"
            className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block"
          >
            See Interviews...
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative w-full h-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/img/pattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute bottom-6 right-6 p-6 animate-fadeInUp">
          <Typography variant="h4" className="text-xl font-semibold text-white mb-2">
            Stay Updated with Our Newsletter
          </Typography>
          <Typography variant="paragraph" className="text-white mb-4">
            Subscribe now to get the latest news, analysis, and insights delivered to your inbox.
          </Typography>
          <Button
            color="white"
            className="px-6 py-3 transition-transform duration-300 hover:scale-105"
          >
            Subscribe Now
          </Button>
        </div>
        <div className="absolute top-6 left-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-lg">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-red-400 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="absolute top-6 right-6 flex gap-4">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img src={icon.src} alt={icon.alt} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;