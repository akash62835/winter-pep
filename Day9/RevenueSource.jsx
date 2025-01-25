import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const sourceData = [
  { label: "Ads", value: 32 },
  { label: "Subscriptions", value: 45 },
  { label: "Sponsorships", value: 23 },
];

const data = {
  labels: sourceData.map((item) => item.label),
  datasets: [
    {
      data: sourceData.map((item) => item.value),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const RevenueSources = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Revenue Sources</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default RevenueSources;