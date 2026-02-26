import { DummyBox } from "@/components/(perspective)/dummy-box";
import { Folder } from "@/components/(perspective)/folder";
import React from "react";

const PerspectivePage = () => {
  return (
    <div className="min-h-screen">
      <DummyBox />
      <Folder />
    </div>
  );
};

export default PerspectivePage;
