import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer } from '@/widgets/layout/Footer';

export function Quantitative() {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className="h-[60vh] flex flex-col justify-center bg-gray-200 text-black text-center">
        <div className="pt-16"> {/* Adjusted padding top for the text */}
          <h1 className="text-6xl font-bold mb-6">AI Quantitative Analysis</h1>
          <p className="text-xl max-w-4xl mx-auto">
            Our AI-powered quantitative analysis measures key communication metrics, including volume, response times, and inactivity patterns. By tracking these metrics, businesses can gain insights into employee engagement, workflow efficiency, and identify areas for improvement in team collaboration.
          </p>
        </div>
      </div>

      {/* AI Quantitative Section */}
      <div className="py-12 px-8">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">Quantitative Analysis Category</h2>

        {/* Subsection: Volume of Communication */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4">✔ Volume of Communication</h4>
          <div className="flex flex-wrap justify-start items-center">
            <div className="w-full md:w-1/2">
              <p>
                Our AI measures the total number of words and characters exchanged across various communication channels, including emails, chats, and transcribed oral conversations. By quantifying communication volume, businesses can assess employee engagement levels, identify workload distribution, and optimize internal communication efficiency.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2">⭐ How can this be useful?</h5>
              <p>
                Tracking communication volume helps businesses assess employee engagement levels and workload distribution. By analyzing communication trends, organizations can optimize team interactions, ensure even workload distribution, and improve overall efficiency.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2">📊 How to measure?</h5>
              <p>
                Volume of communication is measured by counting the total number of words and characters exchanged across emails, chat messages, and transcribed voice communications per employee.
              </p>
            </div>
            <div className="w-full md:w-1/4 ml-40 pl-0"> {/* Slight margin-left adjustment */}
              <img src="/img/communication-volume.png" alt="Communication" className="w-full h-[300px] object-contain rounded-lg" />
            </div>
          </div>
        </div>

        {/* Subsection: Responsiveness */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4">✔ Responsiveness</h4>
          <div className="flex flex-wrap justify-start items-center">
            <div className="w-full md:w-1/2">
              <p>
                We analyze response times by calculating the average time (in minutes) taken to reply to a message, excluding non-responses. This metric helps organizations understand how quickly employees engage in conversations, ensuring timely collaboration and improving workflow efficiency.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2">⭐ How can this be useful?</h5>
              <p>
                Employee response time directly affects collaboration, decision-making speed, and operational efficiency. Slow response times may indicate communication bottlenecks, disengagement, or workload overload. By tracking response rates, organizations can improve internal workflows, reduce delays, and foster a more agile and communicative work environment.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2">📊 How to measure?</h5>
              <p>
                Responsiveness is measured by calculating the average time (in minutes) taken to reply to a message.
              </p>
            </div>
            <div className="w-full md:w-1/4 ml-40 pl-0"> {/* Slight margin-left adjustment */}
              <img src="/img/responsiveness-volume.png" alt="Responsiveness" className="w-full h-[300px] object-contain rounded-lg" />
            </div>
          </div>
        </div>

        {/* Subsection: Inactivity */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4">✔ Inactivity</h4>
          <div className="flex flex-wrap justify-start items-center">
            <div className="w-full md:w-1/2">
              <p>
                Our system tracks periods of inactivity by segmenting time into 15-minute intervals over a 40-hour workweek, creating a total of 160-time blocks per week. By analyzing at least 26 weeks of data, we identify recurring low-activity periods and measure deviations from normal engagement levels. Recognizing patterns of inactivity helps businesses optimize meeting schedules, identify potential bottlenecks, and enhance productivity.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2">⭐ How can this be useful?</h5>
              <p>
                Tracking inactivity patterns helps businesses identify disengagement, excessive downtime, or workload imbalances. Employees with frequent inactive periods may require additional tasks, better scheduling, or workflow adjustments. Recognizing these trends allows companies to redistribute work, improve resource allocation, and enhance team productivity.
              </p>
              <h5 className="text-xl font-medium mt-6 mb-2">📊 How to measure?</h5>
              <p>
                Inactivity is measured by tracking periods of no communication or user activity in 15-minute intervals over a standard 40-hour workweek.
              </p>
            </div>
            <div className="w-full md:w-1/4 ml-40 pl-0"> {/* Slight margin-left adjustment */}
              <img src="/img/inactivity-volume.png" alt="Inactivity" className="w-full h-[300px] object-contain rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 flex items-center">
          {/* Left Side: Image */}
          <div className="w-1/2 pr-12">
            <img
              src="/img/training-quan.png" // Replace with relevant image
              alt="Training"
              className="w-full h-[400px] object-contain rounded-lg shadow-none"
            />
          </div>

          {/* Right Side: Title and Text */}
          <div className="w-1/2">
            <Typography variant="h3" color="blue-gray" className="font-bold text-3xl mb-6">
              Training
            </Typography>
            <Typography color="blue-gray" className="text-xl">
              Users can review the AI-generated insights on communication volume, responsiveness, and inactivity to validate or refine the findings. By accepting or adjusting the data, organizations continuously improve the AI’s accuracy, ensuring it aligns with their unique operational needs. 
            </Typography>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl container mx-auto px-8 text-center">
          {/* Section Text */}
          <Typography variant="h2" color="blue-gray" className="text-4xl font-bold mb-8">
            How can AI Quantitative Analysis be useful?
          </Typography>

          <Typography color="blue-gray" className="text-xl mb-12 max-w-3xl mx-auto">
            Understanding communication behaviors through data-driven insights is essential for optimizing efficiency and collaboration. By tracking involvement-related metrics, organizations can assess employee engagement, identify workflow bottlenecks, and enhance operational productivity. AI-powered quantitative analysis allows businesses to gain insights to boost performance and create a more connected, responsive workplace. 
          </Typography>

          {/* Centered Image */}
          <div className="w-full flex justify-center">
            <img
              src="/img/efficiency.png"
              alt="Efficiency"
              className="w-1/2 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

    </div>
    {/* Footer */}
    <Footer />
    </>
  );
}

export default Quantitative;
