import { cn } from "@/lib/utils";
import React from "react";

export const DummyBox = () => {
  return (
    <div className="h-screen p-10 flex items-center justify-center">
      <div className="size-100 bg-neutral-100 rounded-md border border-neutral-200 flex items-center justify-center group perspective-distant overflow-hidden">
        <div
          className={cn(
            "size-60 rounded-lg bg-green-400 relative h-[2000px]",
            "rotate-x-55 rotate-y-0 -rotate-z-45",
          )}
        >
          <div className="absolute left-0 top-0">Top Left</div>
          <div className="absolute top-0 right-0">Top Left</div>
          <div className="absolute bottom-0 left-0">Bottom Left</div>
          <div className="absolute bottom-0 right-0">Bottom Right</div>
        </div>
      </div>
    </div>
  );
};
