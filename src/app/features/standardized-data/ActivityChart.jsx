"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", activity: 4000 },
  { name: "Tue", activity: 3000 },
  { name: "Wed", activity: 2000 },
  { name: "Thu", activity: 2780 },
  { name: "Fri", activity: 1890 },
  { name: "Sat", activity: 2390 },
  { name: "Sun", activity: 3490 },
];

export function ActivityChart() {
  return (
    <div className="w-full h-64 md:h-96"> {/* Added responsive container */}
      <ResponsiveContainer width="100%" height="100%"> {/* Makes the chart responsive */}
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="activity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;




/*is mn changes ki hy*/