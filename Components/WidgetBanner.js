"use client";
import React, { useEffect } from "react";

const WidgetBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";

    // Calculate dynamic width and height based on screen size
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    let width, height;

    if (screenWidth > 550) {
      width = 500;
      height = 450;
    } else {
      width = 300;
      height = 500;
    }

    script.innerHTML = `
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "exchange": "BSE",
        "showChart": true,
        "locale": "in",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": false,
        "showFloatingTooltip": false,
        "width": "${width}",
        "height": "${height}",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
      }
    `;

    const widgetBannerElement = document.querySelector(
      ".tradingview-WidgetBanner"
    );

    if (widgetBannerElement) {
      widgetBannerElement.appendChild(script);
    }

    return () => {
      if (widgetBannerElement && widgetBannerElement.contains(script)) {
        widgetBannerElement.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-banner">
      <div className="tradingview-WidgetBanner"></div>
    </div>
  );
};

export default WidgetBanner;
