import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const revenueData = [
  { label: "Jan", revenue: 64854, cost: 32652 },
  { label: "Feb", revenue: 54628, cost: 42393 },
  { label: "Mar", revenue: 117238, cost: 50262 },
  { label: "Apr", revenue: 82830, cost: 64731 },
  { label: "May", revenue: 91208, cost: 41893 },
  { label: "Jun", revenue: 103609, cost: 83809 },
  { label: "Jul", revenue: 90974, cost: 44772 },
  { label: "Aug", revenue: 82919, cost: 37590 },
  { label: "Sep", revenue: 62407, cost: 43349 },
  { label: "Oct", revenue: 82528, cost: 45324 },
  { label: "Nov", revenue: 56979, cost: 47978 },
  { label: "Dec", revenue: 87436, cost: 39175 },
];

const data = {
  labels: revenueData.map((item) => item.label),
  datasets: [
    {
      label: "Revenue",
      data: revenueData.map((item) => item.revenue),
      backgroundColor: "#36A2EB",
    },
    {
      label: "Cost",
      data: revenueData.map((item) => item.cost),
      backgroundColor: "#FF6384",
    },
    {
      label: "Profit",
      data: revenueData.map((item) => item.revenue - item.cost),
      backgroundColor: "#4CAF50",
    },
  ],
};

const RevenueTable = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Monthly Revenue Report</h2>
      <Bar data={data} />
    </div>
  );
};

export default RevenueTable;