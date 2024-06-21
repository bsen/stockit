"use client";
import { useState, useRef, useEffect } from "react";

import Chart from "chart.js/auto";
import Link from "next/link";

const MutualFundsCalculator = () => {
  const [initialValue, setInitialValue] = useState("");
  const [endingValue, setEndingValue] = useState("");
  const [distributions, setDistributions] = useState("");
  const [totalReturn, setTotalReturn] = useState(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Update chart whenever totalReturn changes
    updateChart();
  }, [totalReturn]);

  const calculateTotalReturn = () => {
    const initial = parseFloat(initialValue);
    const ending = parseFloat(endingValue);
    const distribution = parseFloat(distributions);

    if (isNaN(initial) || isNaN(ending) || isNaN(distribution)) {
      setTotalReturn("Please enter valid numbers for all fields.");
      return;
    }

    const totalReturnPercentage =
      ((ending - initial + distribution) / initial) * 100;
    setTotalReturn(`Total Return: ${totalReturnPercentage.toFixed(2)}%`);
  };

  const updateChart = () => {
    // Access the canvas element
    const ctx = document.getElementById("mutualFundsChart");

    // Destroy the existing chart if any
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Draw a new chart
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Initial Investment", "Ending Value", "Distributions"],
        datasets: [
          {
            data: [
              parseFloat(initialValue),
              parseFloat(endingValue),
              parseFloat(distributions),
            ],
            backgroundColor: ["#6ffcaa", "#279cf5", "#ffc107"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };

  return (
    <>
      <div className="h-auto w-auto">
        <div className="flex justify-center py-5 max-sm:px-10">
          <div className="w-full max-w-screen-lg bg-white rounded-lg shadow-lg border border-gray-200">
            <div className="p-8 flex flex-col md:flex-row justify-between">
              <div className="md:w-1/2 md:pr-8">
                <h1 className="text-3xl text-gray-700 mb-4">MF Calculator</h1>
                <div className="grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Initial Investment:
                      <input
                        type="number"
                        value={initialValue}
                        onChange={(e) => setInitialValue(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      />
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Ending Value:
                      <input
                        type="number"
                        value={endingValue}
                        onChange={(e) => setEndingValue(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      />
                    </label>
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                      Distributions:
                      <input
                        type="number"
                        value={distributions}
                        onChange={(e) => setDistributions(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      />
                    </label>
                  </div>

                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 col-span-2"
                    onClick={calculateTotalReturn}
                  >
                    Calculate
                  </button>
                </div>
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0">
                <div className="shadow-md rounded-xl overflow-hidden p-4">
                  <canvas
                    id="mutualFundsChart"
                    width="auto"
                    height="350vh"
                  ></canvas>
                </div>
              </div>
            </div>

            <div className="px-8">
              <h2 className="text-2xl font-light text-gray-700 mb-2">
                Result:
              </h2>
              <div className="w-full h-20 flex items-center justify-center">
                <p className="text-2xl font-light text-gray-600">
                  {totalReturn ? totalReturn : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualFundsCalculator;
