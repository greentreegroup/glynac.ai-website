import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

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
          <Typography variant="h1" color="white" className="mb-6 font-black">
            Frequently Asked Questions
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
      

    {/* Case Study Section */}
    <section className="max-w-4xl mx-auto mt-16">
        {/* Section Title */}
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
    </section>

    {/* Summary Section */}
    <section className="max-w-4xl mx-auto mt-16">
        <Typography variant="h3" className="text-2xl font-bold text-blue-gray-900 text-center">
           The below table contains a summary it had generated within seconds.
        </Typography>

        {/* Play Icon */}
        <div className="flex justify-center mt-4">
            <PlayCircleIcon className="h-12 w-12 text-blue-gray-900" />
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
            <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                {/* Table Header */}
                <thead>
                    <tr className="bg-blue-200 text-blue-gray-900">
                        <th className="py-3 px-6 text-left font-bold">Category</th>
                        <th className="py-3 px-6 text-left font-bold">Score</th>
                        <th className="py-3 px-6 text-left font-bold">Key Metric</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    <tr className="border-t">
                        <td className="py-2 px-6">Actions vs. Complaint</td>
                        <td className="py-2 px-6">%90</td>
                        <td className="py-2 px-6">Diana’s email focuses on prompting action...</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-6">Employee Responsiveness</td>
                        <td className="py-2 px-6">%85</td>
                        <td className="py-2 px-6">Her emails are timely and proactive...</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-6">Positive vs. Negatvie Language</td>
                        <td className="py-2 px-6">%95</td>
                        <td className="py-2 px-6">Diana’s emails oncvey a constructive and...</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-6">Frequency of Communication</td>
                        <td className="py-2 px-6">%80</td>
                        <td className="py-2 px-6">Consistent engagement, though long-term...</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-6">Vocabulary and Sophistication      </td>
                        <td className="py-2 px-6">%85</td>
                        <td className="py-2 px-6">Professional and clear vocabilary balance...</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    
    {/* Client Feedback Section */}
    <section className="max-w-6xl mx-auto mt-16 px-4">
        <Typography variant="h2" className="text-4xl font-bold text-blue-gray-900 text-left mb-8">
            Client Feedback
        </Typography>

        {/* Business Feedback List */}
        <div className="flex flex-col space-y-8">

            {/* Salesforce */}
            <div className="flex items-start space-x-6">
                <img src="/img/Salesforce-logo.png" alt="Salesforce Logo" className="h-16 w-auto min-w-[160px] flex-shrink-0" />
                <Typography className="text-lg font-normal text-blue-gray-700">
                    Glynac successfully improved workforce efficiency by an average of 32% across six 
                    major corporations through advanced employee analytics.
                </Typography>
            </div>

        {/* Grammarly*/}
        <div className="flex items-start space-x-6">
            <img src="/img/grammarly.png" alt="Grammarly Logo" className="h-16 w-auto min-w-[160px] flex-shrink-0" />
            <Typography className="text-lg font-normal text-blue-gray-700">
                By leveraging Glynac’s data-driven insights, grammarly saw a 25% reduction 
                in employee turnover within the first year.
            </Typography>
        </div>

        {/*Ferguson*/}
        <div className="flex items-start space-x-6">
            <img src="/img/Ferguson-Logo.png" alt="Ferguson Logo" className="h-16 w-auto min-w-[160px] flex-shrink-0" />
            <Typography className="text-lg font-normal text-blue-gray-700">
                Our custom analytics solutions helped teams at Furguson enhance collaboration, 
                leading to a 40% increase in cross-departmental productivity.
            </Typography>
        </div>
        
        {/* General Electric */}
        <div className="flex items-start space-x-6">
            <img src="/img/general-electric-ge-logo.png" alt="General Electric Logo" className="h-16 w-auto min-w-[160px] flex-shrink-0" />
            <Typography className="text-lg font-normal text-blue-gray-700">
                Over 90% of managers reported greater confidence in decision-making after implementing Glynac’s 
                streamlined reporting tools.
            </Typography>
        </div>

        {/* Broadcom */}
        <div className="flex items-start space-x-6">
            <img src="/img/broadcom.png" alt="Broadcom Logo" className="h-16 w-auto min-w-[160px] flex-shrink-0" />
            <Typography className="text-lg font-normal text-blue-gray-700">
                Within six months, Broadcom experienced an average 18% reduction in operational 
                costs related to workforce inefficiencies.
            </Typography>
        </div>

        {/* Loom */}
        <div className="flex items-start space-x-6">
            <img src="/img/Loom.png" alt="Loom Logo" className="h-16 w-auto min-w-[160px] flex-shrink-0" />
            <Typography className="text-lg font-normal text-blue-gray-700">
                With Glynac’s expertise, loom achieved a 50% improvement 
                in employee engagement scores, fostering stronger workplace communities.
            </Typography>
        </div>
    </div>
    </section>

    {/* Content with Graph */}
    <section className="max-w-6xl mx-auto mt-16 px-4 flex flex-col md:flex-row items-center justify-between">
        <Typography className="text-lg font-semibold text-black max-w-lg">
            With a strong history of notable corporate clients, Glynac has been trusted by industry leaders to help 
            analyze and streamline their employee analytics, improving efficiency and helping foster stronger working 
            communities. 
        </Typography>

        {/* Line Graph */}
        <div className="w-full md:w-[50%] h-64 mt-8 md:mt-0">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                    { month: "Jan", efficiency: 60 },
                    { month: "Feb", efficiency: 65 },
                    { month: "Mar", efficiency: 70 },
                    { month: "Apr", efficiency: 72 },
                    { month: "May", efficiency: 75 },
                    { month: "Jun", efficiency: 78 },
                    { month: "Jul", efficiency: 80 },
                    { month: "Aug", efficiency: 83 },
                    { month: "Sep", efficiency: 85 },
                    { month: "Oct", efficiency: 88 },
                    { month: "Nov", efficiency: 90 },
                    { month: "Dec", efficiency: 92 },

                ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" padding={{left: 10, right:10}} />
                    <YAxis domain={[50, 100]} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Line type="monotone" dataKey="efficiency" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </section>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Other;
