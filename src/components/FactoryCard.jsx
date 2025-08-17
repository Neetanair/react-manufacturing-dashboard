import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FactoryCard({ factory }) {
  const chartData = Array.from({ length: 12 }).map((_, i) => ({
    month: `M${i + 1}`,
    output: factory.output + Math.floor(Math.random() * 50 - 25),
    defects: factory.defects + Math.floor(Math.random() * 3 - 1),
    energy: factory.energy + Math.floor(Math.random() * 20 - 10),
  }));

  // Function to determine color based on thresholds
  const getColor = (metric, value) => {
    switch(metric) {
      case "uptime": return value < 95 ? "text-red-600" : "text-green-600";
      case "defects": return value > 4 ? "text-red-600" : "text-green-600";
      case "energy": return value > 200 ? "text-orange-600" : "text-green-600";
      default: return "text-gray-800";
    }
  }

  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col space-y-4 hover:shadow-xl transition-shadow">
      <h3 className="text-lg font-bold">{factory.name}</h3>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm">Output</span>
          <span className="font-bold">{factory.output}</span>
        </div>
        <div className={`flex flex-col items-center ${getColor("uptime", factory.uptime)}`}>
          <span className="text-gray-500 text-sm">Uptime (%)</span>
          <span className="font-bold">{factory.uptime.toFixed(1)}</span>
        </div>
        <div className={`flex flex-col items-center ${getColor("defects", factory.defects)}`}>
          <span className="text-gray-500 text-sm">Defects</span>
          <span className="font-bold">{factory.defects}</span>
        </div>
        <div className={`flex flex-col items-center ${getColor("energy", factory.energy)}`}>
          <span className="text-gray-500 text-sm">Energy (kWh)</span>
          <span className="font-bold">{factory.energy}</span>
        </div>
      </div>

      {/* Output Chart */}
      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="output" stroke="#1E40AF" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
