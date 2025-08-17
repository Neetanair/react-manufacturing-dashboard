import React from "react";
import CountUp from "react-countup";

export default function KPIBar({ factories }) {
  const totalOutput = factories.reduce((sum, f) => sum + f.output, 0);
  const avgUptime = (
    factories.reduce((sum, f) => sum + f.uptime, 0) / factories.length
  ).toFixed(1);
  const totalEnergy = factories.reduce((sum, f) => sum + f.energy, 0);
  const avgDefects = (
    factories.reduce((sum, f) => sum + f.defects, 0) / factories.length
  ).toFixed(1);

  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-gray-100 rounded-md shadow-md mt-4">
      <div className="bg-white p-4 rounded-md shadow flex flex-col items-center">
        <span className="text-gray-500">Total Output</span>
        <CountUp end={totalOutput} duration={1.5} className="text-2xl font-bold" />
      </div>
      <div className="bg-white p-4 rounded-md shadow flex flex-col items-center">
        <span className="text-gray-500">Avg Uptime (%)</span>
        <CountUp end={avgUptime} duration={1.5} className="text-2xl font-bold" />
      </div>
      <div className="bg-white p-4 rounded-md shadow flex flex-col items-center">
        <span className="text-gray-500">Total Energy (kWh)</span>
        <CountUp end={totalEnergy} duration={1.5} className="text-2xl font-bold" />
      </div>
      <div className="bg-white p-4 rounded-md shadow flex flex-col items-center">
        <span className="text-gray-500">Avg Defects</span>
        <CountUp end={avgDefects} duration={1.5} className="text-2xl font-bold" />
      </div>
    </div>
  );
}
