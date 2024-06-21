"use client";
import React, { useEffect } from "react";

const WidgetTop = () => {
  useEffect(() => {
    if (
      document.querySelector(".tradingview-widget-container__widget").children
        .length === 0
    ) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;

      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "BSE:SENSEX", title: "BSE Sensex" },
          { proName: "BSE:SBIN", title: "SBI India" },
          { proName: "FX_IDC:USDINR", title: "USD TO INR" },
          { proName: "BSE:RELIANCE", title: "Reliance Industries Ltd" },
          { proName: "BSE:TATAMTRDVR", title: "Tata Motors Ltd" },
          { proName: "BSE:ASIANPAINT", title: " Asian Paints Ltd" },
        ],
        showSymbolLogo: true,
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "in",
      });

      document
        .querySelector(".tradingview-widget-container__widget")
        .appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-top">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default WidgetTop;
