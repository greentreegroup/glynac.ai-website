import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

export function Other() {
  return (
    <>
      {/* Background Wrapper */}
      <div className="relative flex min-h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto text-center">
          <Typography variant="h1" color="white" className="mb-6 font-black">
            Other
          </Typography>
        </div>
      </div>

      {/* Three Card Section */}
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">

            {/* Card 1 */}
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg bg-white p-6 flex flex-col items-center">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-gray-900" />
                <Typography variant="h5" className="font-bold text-blue-gray-900 mt-4">
                    How does Glynac.AI ensure the security and privacy of my company’s communication data?
                </Typography>
                <Typography className="text-blue-gray-500 text-center mt-2">
                    We use End-to-End Encryption (E2EE) and real-time anonymization to protect data, stripping 
                    personal identifiers before AI analysis. For large companies, an open-source anonymization 
                    script ensures secure data handling, with a reverse key system allowing controlled re-identification 
                    only when necessary.
                </Typography>
            </Card>

            {/* Card 2 */}
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg bg-white p-6 flex flex-col items-center">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-gray-900" />
                    <Typography variant="h5" className="font-bold text-blue-gray-900 mt-4">
                    How will I know which subscription is for me?
                    </Typography>
                    <Typography className="text-blue-gray-500 text-center mt-2">
                    Our subscriptions are offered based on your needs. Divided by important of which service aspects you 
                    require, and at prices more affordable than one of our corporate plans or business packages.
                    </Typography>
            </Card>

            {/* Card 3 */}
            <Card className="shadow-lg border shadow-gray-500/10 rounded-lg bg-white p-6 flex flex-col items-center">
                <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-gray-900" />
                <Typography variant="h5" className="font-bold text-blue-gray-900 mt-4">
                    Is customer service available 24/7?
                </Typography>
                <Typography className="text-blue-gray-500 text-center mt-2">
                    We have automated replies set up for general questions, 
                    but our FAQ is always open and responds to question quickly 
                    when you run into trouble outside of the general solutions.
                </Typography>
            </Card>
            
        </div>

    </section>
      

    {/* Content Section */}

    <div className="max-w-4xl mx-auto mt-16">
        <Typography variant="h2" className="text-4xl font-bold text-blue-gray-900 text-left">
            CASE STUDY
        </Typography>
        <Typography variant="h3" className="text-2xl font-bold text-blue-gray-700 text-left mt-2">
            A Major US-headquartered TNC
        </Typography>

    {/* Icon with Text Section */}
    <div className="flex items-start gap-4 mt-6">
        <div className="flex-shrink-0">
            <BriefcaseIcon className="h-10 w-10 text-blue-gray-900" />
        </div>
        <Typography className="text-lg font-normal text-blue-gray-700">
            Before an upcoming bonus review, we fed data to Glynac from Employee 
            #1 at a major TNC. Data was then anonymized as ‘Diana Prince’. Communications 
            ranged from feedback on the latest draft challenging and stressing the team to 
            project reminders, training sessions and team-building events aimed at fostering team connection. 
        </Typography>
    </div>
    
    <div className="flex items-start gap-4 mt-6">
        <div className="flex-shrink-0">
            <BriefcaseIcon className="h-10 w-10 text-blue-gray-900" />
        </div>
        <Typography className="text-lg font-normal text-blue-gray-700">
            HR team imported the data using Glynac’s convenient and fashionable interface before simply clicking ‘Analyze’. 
        </Typography>
    </div>

    <div className="flex items-start gap-4 mt-6">
        <div className="flex-shrink-0">
            <BriefcaseIcon className="h-10 w-10 text-blue-gray-900" />
        </div>
        <Typography className="text-lg font-normal text-blue-gray-700">
            Glynac weighed up and assessed all communications fairly and objectively across 24 categories. 
        </Typography>
    </div>
    </div>

    
      

      
      
      

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

export default Other;
