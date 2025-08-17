import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import KPIBar from "./components/KPIBar";
import FactoryCard from "./components/FactoryCard";
import AlertsBar from "./components/AlertsBar";
import FactoryMap from "./components/FactoryMap";
import { factories as initialFactories } from "./data/factories";

function App() {
  const [factories, setFactories] = useState(initialFactories);

  // Simulate dynamic updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFactories((prev) =>
        prev.map((f) => ({
          ...f,
          output: f.output + Math.floor(Math.random() * 10),
          uptime: Math.min(100, f.uptime + (Math.random() - 0.5) * 2),
          defects: Math.max(0, f.defects + Math.floor(Math.random() * 2 - 1)),
          energy: f.energy + Math.floor(Math.random() * 5),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <AlertsBar factories={factories} />
        <FactoryMap factories={factories} />
        <KPIBar factories={factories} />
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {factories.map((f) => (
          <FactoryCard key={f.id} factory={f} />
        ))}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Factory Overview</h2>
        {/* Factory cards and charts will go here in next step */}
      </div>
    </div>
  );
}

export default App;
