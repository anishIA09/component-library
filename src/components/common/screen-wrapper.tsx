import { cn } from "@/lib/utils";
import React from "react";

export const ScreenWrapper = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("min-h-screen flex items-center justify-center", className)}
    >
      {children}
    </div>
  );
};
