import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import OrganizationalChart from "./OrganizationalChart";

export function About() {
  return (
    <>
      {/* Background Wrapper */}
      <div className="relative flex min-h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto text-center">
          <Typography variant="h1" color="white" className="mb-6 font-black">
            About Us
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80">
            At Glynac.ai, we are dedicated to helping businesses navigate the evolving 
            landscape of hybrid and remote work.
          </Typography>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg bg-white p-6">
            <CardBody>
              <Typography variant="h4" className="font-bold text-blue-gray-900 flex items-center gap-2">
                <FingerPrintIcon className="h-6 w-6 text-blue-gray-900" />
                Our Mission
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Traditional monitoring methods no longer provide a complete picture of 
                employee engagement and productivity. That’s why we use AI to analyze 
                workplace communication—bridging gaps between office and remote teams.
              </Typography>
            </CardBody>
          </Card>
          
          <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-10">
            <div className="flex-1 md:pr-8">
                <Typography variant="h2" className="text-3xl font-bold">
                    Letters To Users
                </Typography>
                <Typography variant="body1" className="mb-8 font-normal text-blue-gray-500">
                    In today’s digital workplace, employees communicate across multiple platforms. These conversations hold productivity, morale, and collaboration.
                    However, analyzing this vast amount of unstructured data in real time has always been a challenge. With advancements in AI and Large Language Models 
                    (LLMs), it is now possible to process and interpret massive volumes of communication data. Our AI-driven platform collects and analyzes messages from 
                    platforms like Slack, Teams, Gmail, and Outlook, transforming raw data into actionable insights.
                </Typography> 
            </div>
            <div className="hidden md:block w-px bg-gray-300 mx-4" />
            <div className="flex-1 md:pl-8 mt-8 md:mt-0">
                <Typography variant="h2" className="text-3xl font-bold">
                    Our Solutions
                </Typography>
                <Typography variant="body1" className="mb-8 font-normal text-blue-gray-500">
                    We know that no two companies are the same, which is why we offer customizable services for different businesses.
                    Whether you need high-level analytics or deep sentiment tracking, Glynac.AI provides scalable solutions that fit your needs.
                    With AI-driven insights, you can make smarter decisions, enhance employee morale, and create a more connected workforce.
                </Typography>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 px-4">
            <Typography variant="body1" className="text-3xl font-normal text-center">
            Welcome to our AI-driven platform that empowers businesses to navigate hybrid and remote work. Our mission is to enhance workplace 
            experiences and unite teams, no matter their location.
            <br /><br />
            We prioritize sustainability, collaboration, diversity, and integrity. Our innovative tools are designed to exceed expectations and 
            drive meaningful change within your organization.
            <br /><br />
            Our AI solutions optimize productivity, improve communication, and support employee well-being. Join us in embracing the evolving work 
            landscape and explore how we can help your business thrive in a hybrid world.
            </Typography>
          </div>
        </div>

        <Card className="shadow-lg border shadow-gray-500/10 rounded-lg bg-white p-6 mt-10 max-w-4xl mx-auto">
            <CardBody>
              <Typography variant="h4" className="font-bold text-blue-gray-900 text-center">
                Locations
                <br /><br />
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500 text-center">
                Headquarters: Chicago
                <br /><br />
                Sales and Development Office: India 
                <br /><br />
                Development Office: Israel 
                <br /><br />
                Sales Office: Beijing, London
              </Typography>
            </CardBody>
          </Card>
      </section>
      
      {/* Organizational Chart */}
      <section className="bg-white px-4 py-24">
        <div className="container mx-auto max-w-6xl">
          <Typography variant="h2" className="text-3xl font-bold text-center text-blue-gray-900 mb-6">
            Organizational Chart
          </Typography>
          <OrganizationalChart />
        </div>
      </section>

      {/* Image Section */}
      <section className="mt-16">
        <Typography variant="h2" className="text-3xl font-bold text-center text-blue-gray-900 mb-6">
          Our Leadership
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { src: "/img/leadership1.jpg", name: "Andrew Rosenthal", description: "CEO & Founder with 20 years of experience in AI-driven analytics." },
            { src: "/img/leadership2.jpg", name: "Bo Shi", description: "CFO with a strong background in financial strategy, risk management, and sustainable growth." },
            { src: "/img/leadership3.jpg", name: "Tanju Sharma", description: "CTO driving innovation, scalability, and cutting-edge technology solutions." },
          ].map(({ src, name, description }, index) => (
            <Card key={index} className="shadow-lg border shadow-gray-500/10 rounded-lg">
              <img 
                src={src} 
                alt={name} 
                className={`h-56 w-full object-cover rounded-t-lg ${
                  src === "/img/leadership3.jpg" ?"object-[30%]" : "object-top"
                }`}
              />
            <CardBody>
              <Typography variant="h5" className="text-blue-gray-900 font-bold text-center">
                {name}
              </Typography>
              <Typography className="text-blue-gray-500 text-center mt-2">
                {description}
              </Typography>
            </CardBody>
            </Card>
          ))}
        </div>
      </section>

      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default About;
