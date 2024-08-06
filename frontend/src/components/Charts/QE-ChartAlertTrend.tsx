import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#DC3545", "#F0950C", "#259AE6"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 350,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 3,
    curve: "smooth",
  },
  grid: {
    show: true,
    borderColor: "#E2E8F0",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: ["#fff"],
    strokeColors: ["#DC3545", "#F0950C", "#259AE6"],
    strokeWidth: 3,
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2023-08-01", "2023-08-02", "2023-08-03", "2023-08-04", "2023-08-05",
      "2023-08-06", "2023-08-07", "2023-08-08", "2023-08-09", "2023-08-10",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#64748B",
        fontSize: "12px",
        fontWeight: 400,
      },
    },
  },
  yaxis: {
    title: {
      text: "告警数量",
      style: {
        fontSize: "14px",
        fontWeight: 500,
        color: "#64748B",
      },
    },
    min: 0,
    max: 200,
    tickAmount: 5,
    labels: {
      style: {
        colors: "#64748B",
        fontSize: "12px",
        fontWeight: 400,
      },
    },
  },
  tooltip: {
    x: {
      format: "yyyy-MM-dd",
    },
  },
};

interface QEChartAlertTrendState {
  series: {
    name: string;
    data: number[];
  }[];
}

const QEChartAlertTrend: React.FC = () => {
  const [state, setState] = useState<QEChartAlertTrendState>({
    series: [
      // {
      //   name: "告警总数",
      //   data: [150, 141, 145, 152, 135, 158, 165, 160, 148, 155],
      // },
      {
        name: "高风险告警数",
        data: [50, 45, 52, 49, 40, 52, 55, 50, 48, 51],
      },
      {
        name: "中风险告警数",
        data: [60, 58, 60, 65, 55, 65, 70, 68, 62, 64],
      },
      {
        name: "低风险告警数",
        data: [40, 38, 33, 38, 40, 41, 40, 42, 38, 40],
      },
    ],
  });

  const [activeButton, setActiveButton] = useState("day");

  const handleButtonClick = (period: string) => {
    setActiveButton(period);
    // 这里可以添加切换数据的逻辑
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">
              告警趋势
            </h3>
            <p className="text-sm text-gray-500 mt-1">最近30天告警趋势</p>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">
              天
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              周
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark">
              月
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="qeChartAlertTrend" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="line"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default QEChartAlertTrend;
