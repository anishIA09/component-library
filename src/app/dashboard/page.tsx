import { DashboardMain } from "@/components/(dashboard)/main";
import { Sidebar } from "@/components/(dashboard)/sidebar";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <Sidebar />
      <DashboardMain />
    </div>
  );
};

export default DashboardPage;
