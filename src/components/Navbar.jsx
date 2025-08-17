import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <h1 className="text-xl font-bold">Manufacturing Dashboard</h1>
      </div>
      <div className="space-x-6">
        <button className="hover:underline">Overview</button>
        <button className="hover:underline">Energy</button>
        <button className="hover:underline">Defects</button>
        <button className="hover:underline">Reports</button>
      </div>
    </nav>
  );
}
