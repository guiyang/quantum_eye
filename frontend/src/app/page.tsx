import ECommerce from "@/components/Dashboard/E-commerce";
import QEDashboard from "@/components/Dashboard/QE-Dashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "UBA数据安全管理平台",
  description: "UBA数据安全管理平台",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        {/* <ECommerce /> */}
        <QEDashboard />
      </DefaultLayout>
    </>
  );
}
