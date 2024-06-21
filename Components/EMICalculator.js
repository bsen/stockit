"use client";
import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import Link from "next/link";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Update chart whenever result changes
    updateChart();
  }, [result]);

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Convert annual rate to monthly and to decimal form
    const n = parseFloat(tenure) * 12; // Convert tenure from years to months

    if (isNaN(p) || isNaN(r) || isNaN(n)) {
      setResult("Please enter valid numbers for all fields.");
      return;
    }

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setResult(`${emi.toFixed(2)}`);
  };

  const updateChart = () => {
    // Access the canvas element
    const ctx = document.getElementById("emiChart");

    // Destroy the existing chart if any
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Draw a new chart
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Principal", "Interest"],
        datasets: [
          {
            label: "Amount",
            data: [
              parseFloat(principal),
              result ? parseFloat(result.split(":")[1]) : 0,
            ],
            backgroundColor: ["#6ffcaa", "#279cf5"],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <>
      <div className="h-aut0">
        <div className="max-sm:px-10">
          <div className="w-full max-w-screen-lg bg-white mb-10 py-5 mx-auto mt-8 border border-gray-200 rounded-xl shadow-lg">
            <div className="p-8 flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2 md:pr-8">
                <h1 className="text-3xl text-gray-700 mb-4">EMI Calculator</h1>
                <div className="">
                  <label>
                    Loan Amount:
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    />
                  </label>

                  <label>
                    Interest Rate (%):
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    />
                  </label>

                  <label>
                    Loan Tenure (years):
                    <input
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    />
                  </label>
                </div>

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md my-4"
                  onClick={calculateEmi}
                >
                  Calculate
                </button>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 shadow-md rounded-xl">
                <div className="overflow-hidden p-10">
                  <canvas id="emiChart" width="auto" height="200vh"></canvas>
                </div>
              </div>
            </div>

            <div className="px-10">
              <h2 className="text-2xl font-light text-gray-700 mb-2">
                Result:
              </h2>
              <div className="flex justify-around py-5">
                <p className="text-md font-light text-gray-600">
                  Monthly EMI:
                  <span className="text-md font-medium"> {result}</span>{" "}
                </p>
                <p className="text-md font-light text-gray-600">
                  Loan Amount:
                  <span className="text-md font-medium">
                    {parseFloat(principal)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;
