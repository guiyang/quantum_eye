import QEAppAnalytics from "@/components/Dashboard/QE-AppAnalytics";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Next.js Marketing Dashboard | TailAdmin - Next.js Admin Dashboard Template",
  description:
    "This is Next.js Marketing Dashboard page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const MarketingPage = () => {
  return (
    <DefaultLayout>
      <QEAppAnalytics />
    </DefaultLayout>
  );
};

export default MarketingPage;
