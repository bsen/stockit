import React, { useRef, useState } from "react";
import CalculatorsBanner from "./CalculatorsBanner";
import TradingViewChart from "./TradingViewChart";
import HeatMap from "./HeatMap";

const stockData = {
  Dividend: ["ONGC", "NPTC", "Indian Oil", "RECLTD", "Coal India"],
  Penny: [
    "Suzlon",
    "Yes Bank",
    "Triveni Glass",
    "Varanium Cloud",
    "Vikas Ecotech",
  ],
  FII: [
    "Fortis HealthCare",
    "Federal Bank Ltd",
    "Dr Redd's Laboratory",
    "KPR",
    "Union Bank",
  ],
  multiBagger: [
    "India Grid Trust",
    "JSW Holdings",
    "Max Health Care",
    "Varanium Cloud",
    "KPI Green",
  ],
  Growth: ["ITC", "BHEL", "Eicher Motors", "Mazagon", "IDFC LTD"],
};

const PortfoliosBanner = () => {
  const secondDivRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Dividend");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function scroll() {
    secondDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <h4 className=" text-2xl mt-10  ml-24 font-bold text-black max-sm:text-xl max-sm:text-center max-sm:mt-10">
        STOCK VIEW ↘
      </h4>
      <div className="bg-white h-[50vh] mb-20 px-5 md:px-24  w-full flex flex-col md:flex-row justify-between items-center py-16 max-sm:py-4">
        <TradingViewChart />
      </div>

      <div
        ref={secondDivRef}
        className="bg-white h-screen  flex flex-col md:flex-row justify-around items-center w-full px-4 md:px-24 py-16 max-sm:py-4"
      >
        <div className="h-auto w-full md:w-[40%] bg-white rounded-3xl p-4 md:p-5 border border-neutral-200">
          <select
            name="stock"
            id="stock"
            className="w-full h-14 bg-white rounded-2xl text-lg md:text-xl font-light text-center"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Dividend">High Dividend</option>
            <option value="Penny">Penny Stocks</option>
            <option value="FII">Strong FII Buying</option>
            <option value="multiBagger">Multi Bagger</option>
            <option value="Growth">High Growth</option>
          </select>
          {stockData[selectedCategory].map((stock, index) => (
            <div
              key={index}
              className="h-auto w-full py-3 shadow-sm md:py-5 bg-inidgo-50 text-lg md:text-xl font-light text-black flex justify-center items-center rounded-2xl my-2"
            >
              {stock}
            </div>
          ))}
        </div>
        <div className="md:w-1/3">
          <h4 className=" text-2xl font-bold text-white max-sm:text-xl max-sm:text-center max-sm:mt-10">
            FINANCIAL CALCULATORS ↘
          </h4>
          <CalculatorsBanner />
        </div>
      </div>
    </>
  );
};

export default PortfoliosBanner;
