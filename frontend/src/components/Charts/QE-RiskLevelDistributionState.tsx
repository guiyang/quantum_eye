import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface RiskLevelDistributionState {
  series: number[];
}

const QERiskLevelDistributionChart: React.FC = () => {
  const [state, setState] = useState<RiskLevelDistributionState>({
    series: [15, 30, 55], // 高风险, 中风险, 低风险
  });

  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#3C50E0", "#80CAEE", "#FBBF24"], // 蓝色, 青色, 黄色
    labels: ["高风险", "中风险", "低风险"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 250,
          },
        },
      },
    ],
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-title-sm2 font-bold text-black dark:text-white">
            风险等级分布
          </h4>
        </div>
      </div>
      <div className="mb-2">
        <div id="riskLevelDistribution" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-primary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              高风险
            </span>
          </div>
          <span className="inline-block rounded-md bg-primary px-1.5 py-0.5 text-xs font-medium text-white">
            15%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-secondary"></span>
            <span className="font-medium text-black-2 dark:text-white">
              中风险
            </span>
          </div>
          <span className="inline-block rounded-md bg-secondary px-1.5 py-0.5 text-xs font-medium text-white">
            30%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full border-4 border-warning"></span>
            <span className="font-medium text-black-2 dark:text-white">
              低风险
            </span>
          </div>
          <span className="inline-block rounded-md bg-warning px-1.5 py-0.5 text-xs font-medium text-white">
            55%
          </span>
        </div>
      </div>
    </div>
  );
};

export default QERiskLevelDistributionChart;