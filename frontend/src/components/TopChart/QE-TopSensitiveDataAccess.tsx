import React from "react";

const TopSensitiveDataAccess: React.FC = () => {
  const sensitiveData = [
    { name: "客户信息", accessCount: 1500 },
    { name: "财务报表", accessCount: 1200 },
    { name: "员工档案", accessCount: 1000 },
    { name: "产品设计", accessCount: 800 },
    { name: "合同文件", accessCount: 600 },
  ];

  const maxAccessCount = Math.max(...sensitiveData.map(data => data.accessCount));

  return (
    <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Top5被访问的敏感数据
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-8 py-2">
          <div className="col-span-6">
            <p className="text-sm font-medium text-meta-1">敏感数据类型</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm font-medium text-meta-1">访问次数</p>
          </div>
        </div>

        {sensitiveData.map((data, index) => (
          <div key={index} className="relative z-1 grid grid-cols-8 py-2">
            <span
              className="absolute left-0 top-0 -z-1 h-full rounded bg-gray dark:bg-meta-4"
              style={{ width: `${(data.accessCount / maxAccessCount) * 100}%` }}
            ></span>
            <div className="col-span-6 pl-3.5">
              <p className="text-sm font-medium">{data.name}</p>
            </div>
            <div className="col-span-2">
              <p className="text-right text-sm font-medium">{data.accessCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSensitiveDataAccess;