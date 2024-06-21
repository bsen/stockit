"use client";
import React, { useState } from "react";
import SipChart from "./SipChart";

import Link from "next/link";

const SipCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [amount, setAmount] = useState(null);
  const [interestTotal, setInterestTotal] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(principal);
    const i = parseFloat(rateOfInterest) / 1200; // Monthly interest rate
    const n = parseFloat(time) * 12;

    const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);

    setResult(M.toFixed(2));

    const investmentAmount = P * n;
    setAmount(investmentAmount.toFixed(2));

    const interest = M - investmentAmount;
    setInterestTotal(interest.toFixed(2));
  };

  return (
    <>
      <div className="flex justify-center p-5">
        <div className="w-full max-w-screen-lg bg-white border border-gray-300 shadow-lg p-10 rounded-lg flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 md:pr-8">
            <h1 className="text-3xl text-gray-700 mb-4">SIP Calculator</h1>
            <div className="mb-4">
              <label className="block">
                Principal Amount:
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="border p-2 mt-1 w-full rounded-lg"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                Rate of Interest (%):
                <input
                  type="number"
                  value={rateOfInterest}
                  onChange={(e) => setRateOfInterest(e.target.value)}
                  className="border p-2 mt-1 w-full rounded-lg"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block">
                Years:
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="border p-2 mt-1 w-full rounded-lg"
                />
              </label>
            </div>
            <div className="mb-4">
              <button
                onClick={calculateSIP}
                className="bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Calculate
              </button>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-light text-gray-700 mb-2">
                Result:
              </h2>
              <p className="text-md font-light text-gray-600">
                Amount at maturity:{" "}
                <span className="text-md font-medium"> {result}</span>
                <br />
                Investment amount:{" "}
                <span className="text-md font-medium"> {amount}</span> <br />
                Total interest:
                <span className="text-md font-medium">
                  {interestTotal}
                </span>{" "}
                <br />
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="rounded-xl overflow-hidden p-10">
              <SipChart
                labels={["Principal", "Interest"]}
                data={[amount, interestTotal]}
                colors={["#6ffcaa", "#279cf5"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SipCalculator;
