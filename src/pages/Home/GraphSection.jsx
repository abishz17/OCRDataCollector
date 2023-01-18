import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: "true",
        pointStyle: "circle",
        size: "2px",
      },
    },
    title: {
      display: true,
      text: "Words trained",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "This month",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Last month",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#742774",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function GraphSection() {
  return (
    <div className="px-4 md:px-12 lg:px-48 py-10 bg-graph">
      <div class="py-8 flex flex-col md:flex-row w-full gap-5 ">
        <div class="flex-1 border-2 border-gray-200 rounded-lg shadow-lg">
          <Line options={options} data={data} />
        </div>
        <div class="flex-1 border-2 border-gray-200 rounded-lg shadow-lg">
          <Line options={options} data={data} />
        </div>
      </div>
      <div>
        <p className="text-sm text-center font-thin pl-3 flex-none">
          *This graph is just a demonstration it doesnot represent any data
        </p>
      </div>
    </div>
  );
}
