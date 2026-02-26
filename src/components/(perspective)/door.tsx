"use client";

import React from "react";

export const Door = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="size-[356px] rounded-mg bg-neutral-100 flex items-center justify-center rounded-lg">
        <div className="perspective-distant group">
          <div className="relative translate-3d w-20 h-32 border-4 rounded-md border-amber-900 flex items-center justify-center">
            <p className="text-sm text-center">Welcome home!</p>
            <div className="absolute inset-0 bg-amber-700 z-10 rotate-y-0 origin-left group-hover:-rotate-y-180 transition-transform duration-600 ease-in-out">
              <div className="relative size-full p-1">
                <div
                  data-slot={"nob"}
                  className="size-2.5 rounded-full bg-amber-500 absolute right-1.5 top-1/2 -translate-y-1/2 z-10"
                />
                <div className="h-0.5 w-[85%] bg-amber-900 left-1/2 -translate-x-1/2 absolute top-3" />
                <div className="h-0.5 w-[85%] bg-amber-900 left-1/2 -translate-x-1/2 absolute bottom-3" />
                <div className="h-0.5 w-[85%] bg-amber-900 left-1/2 -translate-x-1/2 absolute top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
