import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';

export function Updates() {
  const changelogData = [
    {
      version: '(Newest Version) Beta 1.0.0',
      date: 'February 17, 2025',
      changes: [
        { type: 'New', text: 'Software includes communication and email tools.' },
        { type: 'New', text: 'AI-analysis provides qualitative and quantitative analysis of workplace data, providing valuable insights that foster efficiency and colloboration.' },
        { type: 'Improvement', text: 'AI now optimizes workflow insights, generating better extrapolations of the data.' },
        { type: 'Improvement', text: 'AI developed more advanced security encryption, making the data more secure.' },
      ],
    },
  ];

  const [feedback, setFeedback] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    suggestions: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Updates Title - Back to the top */}
      <Typography variant="h4" className="text-center mb-6 text-5xl font-extrabold">Updates</Typography>

      {/* Versions Title - Under Coming Soon and above Beta */}
      <Typography variant="h3" className="text-center mb-6 text-3xl font-bold">Versions</Typography>

      {changelogData.map((versionData, index) => (
        <div key={index} className="mb-8 border-b pb-4">
          <div className="text-xl font-semibold">{versionData.version} - {versionData.date}</div>
          <div className="mt-2">
            {versionData.changes.map((change, idx) => (
              <div key={idx} className="ml-4 flex items-center mb-4">
                {/* Bubble for the type */}
                <span className={`inline-block px-3 py-1 rounded-full text-white text-sm mr-4 my-2 ${change.type === 'New' ? 'bg-green-500' : change.type === 'Improvement' ? 'bg-blue-500' : 'bg-red-500'}`}>
                  {change.type}
                </span>
                {/* Change text */}
                <p className="text-gray-700">{change.text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Feedback Section with grey background */}
      <div className="mt-12 bg-gray-100 p-8 rounded-lg">
        <Typography variant="h4" className="text-center mb-6">We want YOUR Feedback</Typography>
        <p className="text-center mb-6">
          Your suggestions on adding new features or improving existing features would provide valuable insight on how to expand our growing website. Feel free to address any issues or complaints.
        </p>
        
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              onChange={handleInputChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={feedback.phoneNumber}
              onChange={handleInputChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={feedback.email}
              onChange={handleInputChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Suggestions */}
          <div>
            <label htmlFor="suggestions" className="block text-sm font-semibold">Suggestion for our Next Improvement</label>
            <textarea
              id="suggestions"
              name="suggestions"
              value={feedback.suggestions}
              onChange={handleInputChange}
              className="w-full mt-1 p-3 border rounded-lg"
              rows="4"
              placeholder="Enter your suggestions here"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600"
            >
              Send Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Updates;
