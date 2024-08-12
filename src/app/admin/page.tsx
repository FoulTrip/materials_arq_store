"use client";

import SideBar from "@/components/admin/SideBar";
import React, { useState } from "react";
import { pagesTypes } from "@/types/Dashboard";
import ContentDashboard from "@/components/admin/sections/ContentDashboard";
import ContentUsers from "@/components/admin/sections/ContentUsers";
import ContentInventory from "@/components/admin/sections/contentInventory";
import ContentMaterials from "@/components/admin/sections/ContentMaterials";
import ContentCuts from "@/components/admin/sections/ContentCuts";

function AdminComponent() {
  const [option, setOption] = useState<pagesTypes>("dashboard");

  const handlerSetOption = (option: pagesTypes) => {
    setOption(option);
  };

  return (
    <>
      <main className="flex flex-row gap-2">
        <SideBar setOption={handlerSetOption} option={option} />
        {option == "dashboard" && <ContentDashboard />}
        {option == "clients" && <ContentUsers />}
        {option == "inventory" && <ContentInventory />}
        {option == "materials" && <ContentMaterials />}
        {option == "cuts" && <ContentCuts />}
      </main>
    </>
  );
}

export default AdminComponent;
