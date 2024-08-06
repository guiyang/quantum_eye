import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface VisitTrendChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

const QEChartAppAccessTrend: React.FC = () => {
  const [state, setState] = useState<VisitTrendChartState>({
    series: [
      {
        name: "App A",
        data: [1550, 1750, 1650, 1550, 1750, 1650],
      },
      {
        name: "App B",
        data: [1000, 1100, 900, 1200, 1100, 1000],
      },
      {
        name: "App C",
        data: [600, 600, 700, 700, 600, 600],
      },
    ],
  });

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    colors: ["#8884d8", "#82ca9d", "#ffc658"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["2024-07-01", "2024-07-02", "2024-07-03", "2024-07-04", "2024-07-05", "2024-07-07"],
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 1800,
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return value.toFixed(0);
        },
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 40,
    },
    grid: {
      borderColor: "#e0e0e0",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div className="col-span-8 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h4 className="text-title-sm2 font-bold text-black dark:text-white">
          访问趋势
        </h4>
      </div>
      <div id="visitTrendChart" className="-ml-5">
        <ReactApexChart
          options={options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default QEChartAppAccessTrend;