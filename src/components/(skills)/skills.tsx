"use client";

import { cn } from "@/lib/utils";
import { FacebookIcon, GithubIcon, LinkedinIcon, UserIcon } from "lucide-react";
import React from "react";
import { motion } from "motion/react";

export const Skills = () => {
  return (
    <div className="mt-16 h-[428px] perspective-distant flex items-center justify-center">
      <div className="size-full flex items-center justify-center relative rotate-x-20 rotate-y-20 -rotate-z-20">
        <Orbit delay={0.2} className="z-10 shadow-md">
          <div className="size-14 rounded-md flex items-center justify-center bg-white border-neutral-200 shadow-sm absolute">
            <UserIcon />
          </div>

          <Object
            delay={0.8}
            className="[--translate-position:120px] [--object-delay:0s]"
          >
            <FacebookIcon />
          </Object>
          <Object
            delay={1}
            className="[--translate-position:160px] [--object-delay:0.2s]"
          >
            <LinkedinIcon />
          </Object>
          <Object
            delay={1.2}
            className="[--translate-position:200px] [--object-delay:0.4s]"
          >
            <GithubIcon />
          </Object>
        </Orbit>
        <Orbit delay={0.4} className="size-60 bg-neutral-100 z-9" />
        <Orbit delay={0.6} className="size-80 bg-neutral-100/60  z-8" />
        <Orbit delay={0.8} className="size-100 bg-neutral-100/20  z-7" />
      </div>
    </div>
  );
};

const Orbit = ({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay,
      }}
      className={cn(
        "absolute flex items-center justify-center rounded-full size-40 border border-neutral-200 bg-white",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

const Object = ({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        delay,
        ease: "easeInOut",
      }}
      className={cn(
        "size-10 rounded-md flex items-center justify-center bg-white border-neutral-200 shadow-sm absolute animate-orbit-rotation",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};
