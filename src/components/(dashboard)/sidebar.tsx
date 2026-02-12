"use client";

import React, { useState } from "react";

export const Sidebar = () => {
  const [collasped, setCollasped] = useState(false);

  return (
    <>
      <aside
        data-collasped={collasped}
        onClick={() => setCollasped((prevState) => !prevState)}
        className="h-full hidden md:flex data-[collasped=true]:w-[72px] w-64 bg-yellow-400 transition-all duration-300 ease-in-out shrink-0"
      ></aside>
      <header className="p-4 bg-yellow-400 md:hidden">
        <p className="font-semibold">Navbar</p>
      </header>
    </>
  );
};
