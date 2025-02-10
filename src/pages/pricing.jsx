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

  {/* <section className="bg-white px-4 py-12"> */}
  {/* <div className="container mx-auto"> */}
    {/* Heading */}
    {/* <Typography variant="h2" className="text-center mb-8 font-bold"> */}
      {/* Plans and Pricing */}
    {/* </Typography> */}

    {/* Paragraphs */}
    {/* <div className="text-black-700 text-center mb-6 space-y-4">
      <p>Choose the right plan that fits your needs. Each plan includes essential features and flexible pricing.</p>
      <p>Upgrade anytime as your business grows. Larger plans offer more advanced features.</p>
      <p>Compare the details below to find the perfect match.</p>
    </div> */}

    {/* Table */}
    {/* <div className="overflow-x-auto max-w-3xl mx-auto">
      <table className="min-w-full border border-black table-fixed">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-black px-4 py-2 text-left w-1/5">Netflix Plans</th>
            <th className="border border-black px-4 py-2 text-left w-4/5">Features</th>
          </tr>
        </thead>
        <tbody> */}
          {/* Standard with Ads */}
          {/* <tr>
            <td className="border border-black px-4 py-3 font-semibold">Standard with Ads</td>
            <td className="border border-black px-4 py-3 space-y-2">
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Ad-supported:</span>
                <span className="ml-2 text-sm">Includes mobile games, movies, and TV shows.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Devices:</span>
                <span className="ml-2 text-sm">2 supported devices.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Quality:</span>
                <span className="ml-2 text-sm">1080p (Full HD).</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Download:</span>
                <span className="ml-2 text-sm">2 devices.</span>
              </div>
            </td>
          </tr> */}

          {/* Standard */}
          {/* <tr>
            <td className="border border-black px-4 py-3 font-semibold">Standard</td>
            <td className="border border-black px-4 py-3 space-y-2">
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Ad-free:</span>
                <span className="ml-2 text-sm">Unlimited movies, TV shows, and games.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Devices:</span>
                <span className="ml-2 text-sm">2 supported devices.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Quality:</span>
                <span className="ml-2 text-sm">1080p (Full HD).</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Extra Member:</span>
                <span className="ml-2 text-sm">1 additional member allowed.</span>
              </div>
            </td>
          </tr> */}

          {/* Premium */}
          {/* <tr>
            <td className="border border-black px-4 py-3 font-semibold">Premium</td>
            <td className="border border-black px-4 py-3 space-y-2">
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Ad-free:</span>
                <span className="ml-2 text-sm">Unlimited movies, TV shows, and games.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Devices:</span>
                <span className="ml-2 text-sm">4 supported devices.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Quality:</span>
                <span className="ml-2 text-sm">4K (Ultra HD) + HDR.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Extra Members:</span>
                <span className="ml-2 text-sm">Up to 2 extra members.</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-semibold">Audio:</span>
                <span className="ml-2 text-sm">Netflix spatial audio.</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div> */}

    {/* Pricing Details */}
    {/* <div className="mt-8 p-4 border border-gray-700 bg-black rounded-lg max-w-3xl mx-auto">
      <h3 className="text-lg font-bold mb-2 text-white">Pricing (US Dollar)</h3>
      <ul className="space-y-2 text-gray-300">
        <li><strong>• Standard with ads:</strong> $7.99 / month</li>
        <li><strong>• Standard:</strong> $17.99 / month</li>
      <ul className="ml-5 text-gray-400">
        <li>○ Add <span className="text-red-500 font-semibold">1 extra member</span> for $6.99 / month with ads or $8.99 / month without ads</li>
      </ul>
        <li><strong>• Premium:</strong> $24.99 / month</li>
      <ul className="ml-5 text-gray-400">
        <li>○ Add up to <span className="text-red-500 font-semibold">2 extra members</span> for $6.99 each / month with ads or $8.99 each / month without ads</li>
      </ul>
      </ul>
       <p className="mt-4 text-sm text-gray-400"><strong>NOTE:</strong> Extra members have their own account and password, but their membership is paid for by the person who invited them to share their Netflix account. Your plan determines how many extra member slots you can add.</p>
    </div>

  </div>
</section>   */}

{/*pricing and breakdown */}

{/* 
<section className="bg-black px-4 py-12">
  <div className="container mx-auto">
    <Typography variant="h2" className="text-center mb-8 font-bold text-white">
      Pricing & Clients Breakdown
    </Typography>
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-white text-white">
        <thead>
          <tr className="bg-gray-900">
            <th className="border border-white px-4 py-2 text-center">Client Size</th>
            <th className="border border-white px-4 py-2 text-center">Users</th>
            <th className="border border-white px-4 py-2 text-center">Monthly Prize</th>
            <th className="border border-white px-4 py-2 text-center">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-800">
            <td className="border border-white px-4 py-2 text-center">Small</td>
            <td className="border border-white px-4 py-2 text-center">30</td>
            <td className="border border-white px-4 py-2 text-center">$500</td>
            <td className="border border-white px-4 py-2 text-center">Basic email monitoring forr small teams.</td>
          </tr>
          <tr className="bg-gray-900">
            <td className="border border-white px-4 py-2 text-center">Medium</td>
            <td className="border border-white px-4 py-2 text-center">100</td>
            <td className="border border-white px-4 py-2 text-center">$1,000</td>
            <td className="border border-white px-4 py-2 text-center">Starter feature for small to medium teams.</td>
          </tr>
          <tr className="bg-gray-800">
            <td className="border border-white px-4 py-2 text-center">Large</td>
            <td className="border border-white px-4 py-2 text-center">1,000</td>
            <td className="border border-white px-4 py-2 text-center">$2,000</td>
            <td className="border border-white px-4 py-2 text-center">Advanced features for medium to large teams.</td>
          </tr>
          <tr className="bg-gray-900">
            <td className="border border-white px-4 py-2 text-center">Huge</td>
            <td className="border border-white px-4 py-2 text-center">50,000</td>
            <td className="border border-white px-4 py-2 text-center">$2,000+</td>
            <td className="border border-white px-4 py-2 text-center">API and consulting solutions for huge enterprises.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section> */}












      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Pricing;