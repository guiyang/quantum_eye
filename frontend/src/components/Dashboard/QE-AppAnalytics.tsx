"use client";
import React from "react";
import QEDataStatsAppAnalytics from "../DataStats/QE-DataStatsAppAnalytics";
import QEChartAppAccessTrend from "../Charts/QE-ChartAppAccessTrend";
import QETopBusinessAppsAccess from "../TopChart/QE-TopBusinessAppsAccess";
import QETopAlertBehaviorsChart from "../TopChart/QE-TopAlertBehaviorsChart";
import QERiskLevelDistributionChart from "../Charts/QE-RiskLevelDistributionState";


const Marketing: React.FC = () => {
  return (
    <>
      <QEDataStatsAppAnalytics />

      <div className="grid grid-cols-12 gap-4 mt-7.5 md:gap-6 2xl:gap-7.5">
        <div className="col-span-8">
          <QEChartAppAccessTrend />
        </div>
        <div className="col-span-4">
          <QETopBusinessAppsAccess />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 mt-7.5 md:gap-6 2xl:gap-7.5">
        <div className="col-span-6">
          <QERiskLevelDistributionChart />
        </div>
        <div className="col-span-6">
          <QETopAlertBehaviorsChart />
        </div>
      </div>

    </>
  );
};

export default Marketing;
