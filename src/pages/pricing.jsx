import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Pricing() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-[500px] w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-[500px] w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-7xl"
              >
              Plans & Packages
              </Typography>
              {/* <Typography variant="lead" color="white" className="opacity-80">
              -----
             </Typography> */}
            </div>
          </div>
        </div>
      </div>
      {/* Plans & Packages Section */}
      <section className="bg-white px-4 py-10">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      
      {/* Basic Plan */}
      <Card className="shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
        <Typography variant="h3" className="mb-4 font-bold text-gray-800 text-center">
          BASIC
        </Typography>
        <Typography variant="h4" className="mb-6 text-center font-extrabold text-3xl text-blue-600">
          Free
        </Typography>
        <ul className="list-none text-center space-y-3 mb-6 text-sm"> {/* Reduced text size */}
          <li className="flex items-center gap-2 text-blue-gray-600">
            ✅ <span>Basic Communication Monitoring</span>
          </li>
          <li className="flex items-center gap-2 text-blue-gray-600">
            ✅ <span>Message Frequency Analysis</span>
          </li>
          <li className="flex items-center gap-2 text-blue-gray-600">
            ✅ <span>Visualization</span>
          </li>
          <li className="flex items-center gap-2 text-blue-gray-600">
            ✅ <span>20 Devices</span>
          </li>
        </ul>
        <Button 
          variant="gradient" 
          size="lg" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 transition-all duration-300 mt-auto"
        >
          Learn More
        </Button>
      </Card>

      {/* Starter Plan */}
      <Card className="shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
        <Typography variant="h3" className="mb-4 font-bold text-gray-800 text-center">
          STARTER
        </Typography>
        <Typography variant="h4" className="mb-6 text-center font-extrabold text-3xl text-blue-600">
          $100/Month
        </Typography>
        <ul className="list-none text-center space-y-3 mb-6 text-sm"> {/* Reduced text size */}
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Relationship Mapping</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Department Mapping</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Keywords Trends</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Happiness Trends</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Responsiveness Metrics</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Trend Analysis</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ 25 Devices</li>
        </ul>
        <Button 
          variant="gradient" 
          size="lg" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 transition-all duration-300 mt-auto"
        >
          Learn More
        </Button>
      </Card>

      {/* Advanced Plan */}
      <Card className="shadow-lg border border-gray-300 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
        <Typography variant="h3" className="mb-4 font-bold text-gray-800 text-center">
          ADVANCED
        </Typography>
        <Typography variant="h4" className="mb-6 text-center font-extrabold text-3xl text-blue-600">
          $200/Month
        </Typography>
        <ul className="list-none text-center space-y-3 mb-6 text-sm"> {/* Reduced text size */}
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Language Categorization</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Sentiment Analysis</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Sentiment Mapping</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Pay Issues Analysis</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Manager Analysis</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ Ownership Sentiment Analysis</li>
          <li className="flex items-center gap-2 text-blue-gray-600">✅ 250 Devices</li>
        </ul>
        <Button 
          variant="gradient" 
          size="lg" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 transition-all duration-300 mt-auto"
        >
          Learn More
        </Button>
      </Card>

      {/* Pro Plan - Highlighted */}
      <Card className="shadow-lg border border-gray-700 shadow-gray-500 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center">
      <Typography variant="h3" className="mb-4 font-bold text-white text-center">
          PRO
        </Typography>
        <Typography variant="h4" className="mb-6 text-center font-extrabold text-4xl">
          $300/Month
        </Typography>
        <ul className="list-none text-center space-y-3 mb-6 text-sm"> {/* Reduced text size */}
          <li className="flex items-center gap-2">✅ API Agent Integration</li>
          <li className="flex items-center gap-2">✅ Retention Insights</li>
          <li className="flex items-center gap-2">✅ Keyword Trends</li>
          <li className="flex items-center gap-2">✅ Happiness Trends</li>
          <li className="flex items-center gap-2">✅ 350 Devices</li>
        </ul>
        <Button 
          variant="gradient" 
          size="lg" 
          className="w-full bg-white text-blue-700 hover:text-white hover:bg-blue-600 border border-gray-300 rounded-full py-2 transition-all duration-300 mt-auto"
          >
          Learn More
        </Button>
      </Card>

    </div>
  </div>
</section>

{/*    */}

<section className="bg-white px-4 py-12">
  <div className="container mx-auto">
    {/* Heading */}
    <Typography variant="h2" className="text-center mb-8 font-bold">
      Small vs Large Corporation
    </Typography>

    {/* Table */}
    <div className="overflow-x-auto max-w-2xl mx-auto">
      <table className="min-w-full border border-gray-500 table-fixed">
        <thead className="bg-blue-900">
          <tr>
            <td className="border border-gray-500 px-3 py-2 font-semibold text-center text-white">Feature</td>
            <td className="border border-gray-500 px-3 py-2 font-semibold text-center text-white">Small Company</td>
            <td className="border border-gray-500 px-3 py-2 font-semibold text-center text-white">Large Company</td>
          </tr>
        </thead>
        <tbody>
          {/* Row 2 */}
          <tr className="bg-gray-700">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Glynac's Servers</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
          </tr>

          {/* Row 3 */}
          <tr className="bg-black">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Local Servers Installation</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
          </tr>

          {/* Row 4 */}
          <tr className="bg-gray-700">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Data Extraction</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
          </tr>

          {/* Row 5 */}
          <tr className="bg-black">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Anonymization & Analysis</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
          </tr>

          {/* Row 6 */}
          <tr className="bg-gray-700">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Cloud-Base Infrastructure</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
          </tr>

          {/* Row 7 */}
          <tr className="bg-black">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Standardized Reporting</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
          </tr>

          {/* Row 8 */}
          <tr className="bg-gray-700">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">AI Analysis Tools</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
          </tr>

          {/* Row 9 */}
          <tr className="bg-black">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Front-End Hosting</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
          </tr>

          {/* Row 10 */}
          <tr className="bg-gray-700">
            <td className="border border-gray-500 px-3 py-2 text-center text-white">Report Generation & Sharing</td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white"></td>
            <td className="border border-gray-500 px-3 py-2 text-center text-white">✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>




      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Pricing;