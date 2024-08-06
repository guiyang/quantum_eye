import React from "react";

const TopAlertUsers: React.FC = () => {
  const users = [
    { name: "测试用户A", alertCount: 55 },
    { name: "测试用户B", alertCount: 48 },
    { name: "测试用户C", alertCount: 42 },
    { name: "测试用户D", alertCount: 35 },
    { name: "测试用户E", alertCount: 28 },
  ];

  const maxAlertCount = Math.max(...users.map(user => user.alertCount));

  return (
    <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Top5触发高风险告警用户
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-8 py-2">
          <div className="col-span-6">
            <p className="text-sm font-medium text-meta-1">用户</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm font-medium text-meta-1">告警数量</p>
          </div>
        </div>

        {users.map((user, index) => (
          <div key={index} className="relative z-1 grid grid-cols-8 py-2">
            <span
              className="absolute left-0 top-0 -z-1 h-full rounded bg-gray dark:bg-meta-4"
              style={{ width: `${(user.alertCount / maxAlertCount) * 100}%` }}
            ></span>
            <div className="col-span-6 pl-3.5">
              <p className="text-sm font-medium">{user.name}</p>
            </div>
            <div className="col-span-2">
              <p className="text-right text-sm font-medium">{user.alertCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAlertUsers;