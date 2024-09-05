"use client";
import { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Today", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
    datasets: [
      {
        fill: true,
        borderColor: "rgba(118,106,192,1)",
        pointBackgroundColor: "rgba(118,106,192,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(118,106,192,1)",
        data: [20000, 21400, 22800, 24200, 25750, 27320],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart render; just return any color
            return null;
          }
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(109, 97, 255, 0.2)");
          gradient.addColorStop(1, "rgba(109, 97, 255, 0.05)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      duration: 2000,
      easing: "easeOutQuart",
    },
    scales: {
      x: {
        grid: {
          display: true, // Shows vertical grid lines
          color: "rgba(0,0,0,.05)",
        },
      },
      y: {
        grid: {
          display: false, // Hides horizontal grid lines
        },
        ticks: {
          display: false, // Hides the amounts on the left side (y-axis)
        },
        min: 20000, // Sets the minimum value for the y-axis
        max: 28000, // Sets the maximum value for the y-axis
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend as per your example image
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        displayColors: false,
        titleFont: {
          size: 14,
          weight: "bold",
          color: "#fff",
        },
        bodyFont: {
          size: 14,
          color: "#fff",
        },
        footerFont: {
          size: 14,
          color: "#fff",
        },
        yPadding: 6,
        xPadding: 6,
        caretSize: 8,
        cornerRadius: 6,
        xOffset: 10,
        callbacks: {
          labelColor: () => {
            return {
              borderColor: "rgba(0, 0, 0, 0)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            };
          },
        },
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Line ref={chartRef} data={data} options={options} />
      <div className="absolute bottom-14 left-2 font-[600] text-[12px] sm:text-[16px] text-primary-color leading-[20.16px]">
        USD 20,000
      </div>
      <div className="absolute top-1 right-4 font-[600] text-[12px] sm:text-[16px] text-primary-color leading-[20.16px]">
        USD 27,320
      </div>
    </div>
  );
};

export default LineChart;