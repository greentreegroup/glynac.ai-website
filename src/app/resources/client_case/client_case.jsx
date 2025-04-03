import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { time: 'Morning', activity: 30 },
  { time: 'Afternoon', activity: 50 },
  { time: 'Evening', activity: 20 },
  { time: 'Night', activity: 10 }
];

const inactivityData = [
  { category: 'Individual', inactivity: 40, benchmark: 30 },
  { category: 'Team', inactivity: 60, benchmark: 50 }
];

const trendData = [
  { date: 'Week 1', activity: 20, inactivity: 80 },
  { date: 'Week 2', activity: 50, inactivity: 50 },
  { date: 'Week 3', activity: 30, inactivity: 70 },
  { date: 'Week 4', activity: 60, inactivity: 40 }
];

const demographicData = [
  { category: 'Female', responses: 45, payRelated: 25 },
  { category: 'Male', responses: 55, payRelated: 35 }
];

const averageActivity = data.reduce((sum, d) => sum + d.activity, 0) / data.length;

const managerPerformanceData = [
  { manager: 'Manager A', satisfaction: 85, taskCompletion: 90, feedbackScore: 80 },
  { manager: 'Manager B', satisfaction: 75, taskCompletion: 80, feedbackScore: 70 },
  { manager: 'Manager C', satisfaction: 90, taskCompletion: 95, feedbackScore: 88 },
  { manager: 'Manager D', satisfaction: 60, taskCompletion: 65, feedbackScore: 55 },
];

const toolIntegrationData = [
  { tool: 'Jira', type: 'Project Management', performance: 85, issues: 'Lagging during peak times', suggestedImprovement: 'Optimize server load handling' },
  { tool: 'Trello', type: 'Project Management', performance: 75, issues: 'Limited integration features', suggestedImprovement: 'Add more integrations with external tools' },
  { tool: 'Google Analytics', type: 'Analytics', performance: 90, issues: 'Data delay in reporting', suggestedImprovement: 'Improve real-time data reporting' },
  { tool: 'Tableau', type: 'Analytics', performance: 80, issues: 'Complexity for new users', suggestedImprovement: 'Simplify user interface' },
  { tool: 'Slack', type: 'Communication', performance: 95, issues: 'Message overload', suggestedImprovement: 'Add message categorization' },
  { tool: 'Microsoft Teams', type: 'Communication', performance: 88, issues: 'Audio quality during video calls', suggestedImprovement: 'Improve network optimization' },
  { tool: 'GitHub', type: 'Development', performance: 90, issues: 'Merge conflicts', suggestedImprovement: 'Enhance conflict resolution tools' },
  { tool: 'Visual Studio', type: 'Development', performance: 85, issues: 'Heavy on system resources', suggestedImprovement: 'Optimize system resource usage' },
];

const ClientCase = () => {
  return (
    <div className="bg-white text-black min-h-[450vh] h-auto">
      
      <div className="relative h-[10cm] flex items-center justify-center shadow-md bg-gradient-to-br from-blue-500 to-black-300 rounded-b-[50%] pb-10">
        <h1 className="text-7xl text-white font-bold transition-all duration-500 transform hover:scale-105 hover:text-yellow-300">Visualized Reports</h1>
      </div>
      
      <div className="max-w-full mx-auto p-4">
        
        <div className="bg-green-100 p-6 rounded-lg shadow-lg mb-6 mx-[1cm] min-h-[190vh] hover:scale-1 transition-all duration-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Employee Reports</h2>

          
          <div className="mt-4 flex items-center h-[15cm]">
            <div className="flex items-center justify-center bg-opacity-30 bg-white backdrop-blur-lg p-4 rounded-xl shadow-lg mr-6 w-72 h-72 border border-gray-200 transition-all duration-500 transform hover:scale-105">
              <div className="bg-gray-700 text-white p-6 rounded-xl w-full h-full flex items-center justify-center text-center shadow-md">
                <p className="text-lg font-semibold">Insights: The graph identifies time blocks with the least and most activity and compares them to the overall average.</p>
              </div>
            </div>
            
            
            <div className="mx-[5cm] bg-white p-6 rounded-xl shadow-lg flex-1 border border-gray-200 transition-all duration-500 transform hover:scale-105">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip />
                  <Legend />
                  <ReferenceLine y={averageActivity} stroke="red" strokeDasharray="3 3" label={{ position: 'top', value: 'Avg', fill: 'red' }} />
                  <Bar dataKey="activity" fill="url(#colorUv)" />
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          
          <div className="mt-6 flex items-center">
            <div className="mx-[5cm] bg-white p-6 rounded-xl shadow-lg flex-1 border border-gray-200 hover:scale-105 transition-all duration-500">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={inactivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="inactivity" fill="#FF5733" />
                  <Bar dataKey="benchmark" fill="#33A1FF" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center bg-opacity-30 bg-white backdrop-blur-lg p-4 rounded-xl shadow-lg ml-6 w-72 h-72 border border-gray-200 transition-all duration-500 transform hover:scale-105">
              <div className="bg-gray-700 text-white p-6 rounded-xl w-full h-full flex items-center justify-center text-center shadow-md">
                <p className="text-lg font-semibold">Insights: Determine if inactivity periods are normal or outliers compared to peers. Identify if certain individuals or teams have unusual inactivity patterns.</p>
              </div>
            </div>
          </div>

          
          <div className="h-[16cm] mt-6 flex items-center">
          <div className="flex items-center justify-center bg-opacity-30 bg-white backdrop-blur-lg p-4 rounded-xl shadow-lg ml-6 w-72 h-72 border border-gray-200 transition-all duration-500 transform hover:scale-105">
              <div className="bg-gray-700 text-white p-6 rounded-xl w-full h-full flex items-center justify-center text-center shadow-md">
                <p className="text-lg font-semibold">Insights: The graph highlights recurring inactivity periods over time, allowing trend analysis of activity vs. inactivity.</p>
              </div>
            </div>

            <div className="mx-[5cm] bg-white p-6 rounded-xl shadow-lg flex-1 border border-gray-200 transition-all duration-500 transform hover:scale-105">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" stroke="#4B5563" />
                  <YAxis stroke="#4B5563" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="activity" fill="#34D399" />
                  <Bar dataKey="inactivity" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
          </div>
        </div>

        
        <div className="min-h-[70vh] mt-6 flex items-center bg-light-blue-100 p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-500 transform hover:scale-1">
          <div className="mx-[5cm] bg-white p-6 rounded-xl shadow-lg flex-1 duration-500 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Demographic Report: Female vs. Male</h3>
            <p className="text-md font-medium mb-2"></p>
            
            
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={demographicData}
                  dataKey="responses"
                  nameKey="category"
                  outerRadius="80%"
                  fill="#8884d8"
                  label
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.category === 'Female' ? "#82ca9d" : "#FF73A1"} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            
            <div className="flex justify-center mt-4">
              <div className="flex items-center mr-6 duration-500 transform hover:scale-105">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#82ca9d" }}></div>
                <span className="ml-2">Female</span>
              </div>
              <div className="flex items-center duration-500 transform hover:scale-105">
                <div className="w-4 h-4 rounded-full " style={{ backgroundColor: "#FF73A1" }}></div>
                <span className="ml-2">Male</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-opacity-30 bg-white backdrop-blur-lg p-4 rounded-xl shadow-lg ml-6 w-72 h-72 border border-gray-200 transition-all duration-500 transform hover:scale-105">
            <div className="bg-gray-700 text-white p-6 rounded-xl w-full h-full flex items-center justify-center text-center shadow-md">
              <p className="text-lg font-semibold">Insights: Compares response volumes and pay-related issues based on gender.</p>
            </div>
          </div>
        </div>

        
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-500 transform hover:scale-1">
          <h3 className="text-xl font-semibold mb-4">Manager Performance Report</h3>
          <p className="text-md font-medium mb-4">Overview of performance metrics for managers and areas for improvement based on employee feedback and performance data.</p>

          <table className="min-w-full bg-white border border-gray-300 transition-all duration-500 transform hover:scale-105">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Manager</th>
                <th className="px-4 py-2 text-left">Satisfaction (%)</th>
                <th className="px-4 py-2 text-left">Task Completion (%)</th>
                <th className="px-4 py-2 text-left">Feedback Score (%)</th>
                <th className="px-4 py-2 text-left">Improvement Areas</th>
              </tr>
            </thead>
            <tbody>
              {managerPerformanceData.map((manager, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{manager.manager}</td>
                  <td className="px-4 py-2">{manager.satisfaction}%</td>
                  <td className="px-4 py-2">{manager.taskCompletion}%</td>
                  <td className="px-4 py-2">{manager.feedbackScore}%</td>
                  <td className="px-4 py-2">
                    {manager.satisfaction < 75
                      ? 'Improving employee engagement'
                      : 'Maintain positive feedback'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="mt-8 bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-500 transform hover:scale-1">
          <h3 className="text-xl font-semibold mb-4">Tool and Integration Report</h3>
          <p className="text-md font-medium mb-4">An overview of key software tools in project management, analytics, communication, and development, along with performance metrics, issues, and improvements.</p>

          <table className="min-w-full bg-white border border-gray-300 transition-all duration-500 transform hover:scale-105">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Tool</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Performance (%)</th>
                <th className="px-4 py-2 text-left">Issues</th>
                <th className="px-4 py-2 text-left">Suggested Improvements</th>
              </tr>
            </thead>
            <tbody>
              {toolIntegrationData.map((tool, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{tool.tool}</td>
                  <td className="px-4 py-2">{tool.type}</td>
                  <td className="px-4 py-2">{tool.performance}%</td>
                  <td className="px-4 py-2">{tool.issues}</td>
                  <td className="px-4 py-2">{tool.suggestedImprovement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientCase;
