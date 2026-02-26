"use client";

import { cn } from "@/lib/utils";

export const Folder = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="size-[356px] rounded-mg bg-neutral-100 flex items-center justify-center rounded-lg">
        <div className="perspective-distant group">
          <div className="relative transform-3d size-6 cursor-pointer">
            <div
              data-slot={"folder-back"}
              className="absolute inset-0 bg-linear-to-b from-amber-500 to-amber-400 rounded-xs"
            ></div>
            <div
              data-slot={"item"}
              className="w-5 h-3.5 bg-white border border-neutral-300 shadow-sm absolute left-1/2 -translate-x-1/2 rounded-xs group-hover:h-16 group-hover:w-24 group-hover:-translate-y-20 transition-all duration-300 group-hover:rounded-md"
            />
            <div
              data-slot={"folder-front"}
              className={cn(
                "absolute z-20 bg-linear-to-b from-amber-300 to-amber-400 inset-x-0 h-[80%] bottom-0 rounded-sm transition-transform duration-300",
                "-rotate-x-25 origin-bottom group-hover:-rotate-x-45",
              )}
            >
              <div className="size-full relative">
                <div className="absolute h-px bg-amber-200/70 w-[70%] top-1 left-1/2 -translate-x-1/2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
