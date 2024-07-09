import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !data || data.length === 0) {
      return;
    }

    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    chartRef.current.chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.start_year),
        datasets: [
          {
            label: "Intensity",
            data: data.map((item) => item.intensity),
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
          {
            label: "Likelihood",
            data: data.map((item) => item.likelihood),
            backgroundColor: "rgba(153,102,255,0.4)",
            borderColor: "rgba(153,102,255,1)",
            borderWidth: 1,
          },
          {
            label: "Relevance",
            data: data.map((item) => item.relevance),
            backgroundColor: "rgba(255,159,64,0.4)",
            borderColor: "rgba(255,159,64,1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "category",
            labels: data.map((item) => item.start_year),
          },
        },
      },
    });

    return () => {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
