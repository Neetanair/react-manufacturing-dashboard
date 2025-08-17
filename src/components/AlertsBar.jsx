import React from "react";

export default function AlertsBar({ factories }) {
  // Filter factories with any critical issues
  const criticalFactories = factories.filter(
    f => f.uptime < 95 || f.defects > 4 || f.energy > 200
  );

  if (criticalFactories.length === 0) return null;

  return (
    <div className="bg-red-100 border-l-4 border-red-600 text-red-700 p-4 mb-6">
      <h2 className="font-bold mb-2">⚠️ Critical Alerts</h2>
      <ul className="list-disc list-inside">
        {criticalFactories.map(f => (
          <li key={f.id}>
            {f.name}:
            {f.uptime < 95 && ` Low uptime (${f.uptime.toFixed(1)}%)`}
            {f.defects > 4 && ` High defects (${f.defects})`}
            {f.energy > 200 && ` High energy (${f.energy} kWh)`}
          </li>
        ))}
      </ul>
    </div>
  );
}
