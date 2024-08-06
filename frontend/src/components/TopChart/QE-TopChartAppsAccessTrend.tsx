import React from "react";

const TopAppsAccessTrend: React.FC = () => {
  const businessApps = [
    { name: "CRM系统", accessCount: 10000 },
    { name: "ERP系统", accessCount: 9000 },
    { name: "邮件系统", accessCount: 8000 },
    { name: "OA系统", accessCount: 7000 },
    { name: "人力资源系统", accessCount: 6000 },
  ];

  const maxAccessCount = Math.max(...businessApps.map(app => app.accessCount));

  return (
    <div className="w-full rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Top5被访问的业务应用
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-8 py-2">
          <div className="col-span-6">
            <p className="text-sm font-medium text-meta-1">业务应用</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm font-medium text-meta-1">访问次数</p>
          </div>
        </div>

        {businessApps.map((app, index) => (
          <div key={index} className="relative z-1 grid grid-cols-8 py-2">
            <span
              className="absolute left-0 top-0 -z-1 h-full rounded bg-gray dark:bg-meta-4"
              style={{ width: `${(app.accessCount / maxAccessCount) * 100}%` }}
            ></span>
            <div className="col-span-6 pl-3.5">
              <p className="text-sm font-medium">{app.name}</p>
            </div>
            <div className="col-span-2">
              <p className="text-right text-sm font-medium">{app.accessCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAppsAccessTrend;