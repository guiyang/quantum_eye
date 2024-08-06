import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const QETopAlertBehaviorsChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: false,
      }
    },
    colors: ['#FF9800'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['非常规时间登录', '敏感数据批量访问', '异地登录', '频繁密码错误', '未授权操作尝试'],
      labels: {
        formatter: function (val) {
          return val.toFixed(0)
        },
        style: {
          colors: ['#64748B'],
          fontSize: '12px',
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#64748B'],
          fontSize: '12px',
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 400,
        },
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
  };

  const series = [{
    name: 'count',
    data: [55, 44, 30, 25, 20]
  }];

  return (
    <div className="w-full rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Top告警行为
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.79139 1.59386L9.77668 1.60194L5.89985 5.42613C5.38491 5.91539 4.61511 5.91539 4.10017 5.42613L0.254714 1.60194C0.0184514 1.36122 -0.0657411 0.899434 0.254714 0.578788C0.480052 0.329403 0.937477 0.244537 1.25785 0.557869L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div id="topAlertBehaviors" className="-ml-5">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default QETopAlertBehaviorsChart;