import { Skills } from "@/components/(skills)/skills";
import React from "react";

const SkillsPage = () => {
  return (
    <div className="h-screen bg-neutral-50 flex">
      <div className="h-full mx-auto max-w-4xl w-full bg-white p-10">
        <h1 className="text-3xl text-center">Skills</h1>
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
