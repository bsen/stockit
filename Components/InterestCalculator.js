"use client";
import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import Link from "next/link";

const InterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interestType, setInterestType] = useState("simple");
  const [result, setResult] = useState(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Update chart whenever result changes
    updateChart();
  }, [result]);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100; // Convert rate to decimal form
    const t = parseFloat(time);
    const n = 12; // Assuming interest is compounded monthly

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setResult("Please enter valid numbers for all fields.");
      return;
    }

    if (interestType === "simple") {
      const simpleInterest = p * r * t;
      const totalAmount = p + simpleInterest;
      setResult(`Simple Interest: ${simpleInterest.toFixed(2)}`);
      setResult(`: ${totalAmount.toFixed(2)}`);
    } else {
      const compoundInterest = p * Math.pow(1 + r / n, n * t) - p;
      const totalAmount = p + compoundInterest;
      setResult(`Compound Interest: ${compoundInterest.toFixed(2)}`);
      setResult(`: ${totalAmount.toFixed(2)}`);
    }
  };

  const updateChart = () => {
    // Access the canvas element
    const ctx = document.getElementById("interestChart");

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
      <div className="h-auto">
        <div className="max-sm:px-10">
          <div className="w-full bg-white max-w-screen-lg mb-10 py-5 mx-auto mt-8 border border-gray-200 rounded-xl shadow-lg">
            <div className="p-8 flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2 md:pr-8">
                <h1 className="text-3xl text-gray-700 mb-4">
                  Interest Calculator
                </h1>
                <div className="">
                  <label>
                    Principal:
                    <input
                      type="number"
                      value={principal}
                      onChange={(e) => setPrincipal(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    />
                  </label>

                  <label>
                    Rate (%):
                    <input
                      type="number"
                      value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    />
                  </label>

                  <label>
                    Time (years):
                    <input
                      type="number"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    />
                  </label>
                </div>

                <div className="my-4">
                  <label>
                    Interest Type:
                    <select
                      value={interestType}
                      onChange={(e) => setInterestType(e.target.value)}
                      className="border p-2 mt-1 w-full rounded-lg"
                    >
                      <option value="simple">Simple Interest</option>
                      <option value="compound">Compound Interest</option>
                    </select>
                  </label>
                </div>

                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md"
                  onClick={calculateInterest}
                >
                  Calculate
                </button>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0 shadow-md rounded-xl">
                <div className="overflow-hidden p-10">
                  <canvas
                    id="interestChart"
                    width="auto"
                    height="200vh"
                  ></canvas>
                </div>
              </div>
            </div>

            <div className="px-10">
              <h2 className="text-2xl font-light text-gray-700 mb-2">
                Result:
              </h2>
              <div className="flex justify-around py-5">
                <p className="text-md font-light text-gray-600">
                  Amount at maturity:
                  <span className="text-md font-medium"> {result}</span>{" "}
                </p>
                <p className="text-md font-light text-gray-600">
                  Investment amount:
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

export default InterestCalculator;
