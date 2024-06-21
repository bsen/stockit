// SipChart.js
"use client";
import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const SipChart = ({ labels, data, colors }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy existing chart if it exists
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create a new chart
    chartRef.current.chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
      },
    });
  }, [labels, data, colors]);

  return <canvas ref={chartRef} width={200} height={200} />;
};

export default SipChart;
