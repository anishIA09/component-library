"use client";

import { motion } from "motion/react";

import React from "react";
import { ScreenWrapper } from "./common/screen-wrapper";

export const Square = () => {
  return (
    <ScreenWrapper>
      <motion.div
        whileHover={{
          scale: [null, 1.1, 1.6],
          transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
            ease: ["easeInOut", "easeOut"],
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="size-20 rounded-md bg-purple-400"
      />
    </ScreenWrapper>
  );
};
