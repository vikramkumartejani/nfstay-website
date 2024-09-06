"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

// Register necessary components with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = ({ small }) => {
  const [activeButton, setActiveButton] = useState("M"); // Default active button

  const handleClick = (button) => {
    setActiveButton(button);
  };

  // State to track the highlighted index and bar thickness
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [barThickness, setBarThickness] = useState(54); // Default bar thickness

  // Effect to handle resizing and bar thickness change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setBarThickness(small ? 45 : 50);
      } else if (window.innerWidth > 500) {
        setBarThickness(30);
      } else {
        setBarThickness(18);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chart data and configuration
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [
          1200, 2500, 3800, 2100, 1300, 2500, 4000, 3500, 5800, 4000, 2100,
          4000,
        ],
        backgroundColor: (context) => {
          const index = context.dataIndex;
          return highlightedIndex === index ? "#954AFC" : "#E8E6F9"; // Change color on click
        },
        borderRadius: 8,
        barThickness: barThickness, // Use dynamic bar thickness
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      tooltip: {
        callbacks: {
          // Custom callback to format tooltip label
          label: (context) => {
            return `$${context.raw} revenue`; // Format the tooltip label without color box
          },
        },
        backgroundColor: "#954AFC",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 10,
        cornerRadius: 4,
        // Hide the box for the tooltip
        boxWidth: 0,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#999999",
        },
      },
      y: {
        grid: {
          drawBorder: false, // Remove y-axis border
          color: "#ffffff", // Use a white color to effectively "hide" grid lines
        },
        ticks: {
          display: false, // Hide the y-axis labels
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        setHighlightedIndex(index); // Update state with the clicked bar index
      }
    },
  };

  return (
    <section
      className={` ${
        small ? "h-full" : "min-h-[352px]"
      }  bg-white rounded-lg md:px-[20px] px-[10px] py-[20px] mb-[50px]`}
      style={{
        boxShadow: `
        0px 18.1px 54.29px -3.39px #00000006,
        0px 5.78px 17.33px -2.55px #0000000F,
        0px 2.18px 6.55px -1.7px #00000012,
        0px 0.72px 2.16px -0.85px #00000012
      `,
      }}
    >
      <h1 className="md:text-[18px] text-[16px] font-[400] leading-[26.1px] tracking-[-0.5%] text-primary-color opacity-[0.7] mb-[8px]">
        Monthly Revenue
      </h1>
      <div className="flex justify-between flex-wrap gap-5">
        <div className="md:text-[32px] text-[24px] font-[700] leading-[40.32px] tracking-[-2%] text-primary-color">
          $5,800
          <span className="ms-[8px] text-[#27AE60] md:text-[14px] text-[12px] leading-[19.6px] font-[700] px-[10px] py-[6px] bg-[#27AE601A] rounded-[12px]">
            +10.6%
          </span>
        </div>
        <div className="flex gap-[10px]">
          <button
            onClick={() => handleClick("D")}
            className={`md:text-[14px] text-[12px] font-[500] leading-[19.6px] w-[34px] h-[34px] rounded-full ${
              activeButton === "D"
                ? "text-white bg-[#954AFC]"
                : "text-primary-color opacity-[0.5]"
            }`}
          >
            D
          </button>
          <button
            onClick={() => handleClick("W")}
            className={`md:text-[14px] text-[12px] font-[500] leading-[19.6px] w-[34px] h-[34px] rounded-full ${
              activeButton === "W"
                ? "text-white bg-[#954AFC]"
                : "text-primary-color opacity-[0.5]"
            }`}
          >
            W
          </button>
          <button
            onClick={() => handleClick("M")}
            className={`md:text-[14px] text-[12px] font-[500] leading-[19.6px] w-[34px] h-[34px] rounded-full ${
              activeButton === "M"
                ? "text-white bg-[#954AFC]"
                : "text-primary-color opacity-[0.5]"
            }`}
          >
            M
          </button>
          <button
            onClick={() => handleClick("Y")}
            className={`md:text-[14px] text-[12px] font-[500] leading-[19.6px] w-[34px] h-[34px] rounded-full ${
              activeButton === "Y"
                ? "text-white bg-[#954AFC]"
                : "text-primary-color opacity-[0.5]"
            }`}
          >
            Y
          </button>
        </div>
      </div>
      <div className={`mt-4 w-full ${small ? "h-[178px]" : "h-[200px]"}`}>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default BarChart;
