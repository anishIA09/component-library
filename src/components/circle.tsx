import React from "react";
import { ScreenWrapper } from "./common/screen-wrapper";
import { motion } from "motion/react";

export const Circle = () => {
  return (
    <ScreenWrapper>
      <motion.div
        animate={{
          scale: [1, 1, 2, 2, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="size-20 rounded-md bg-purple-400"
      />
    </ScreenWrapper>
  );
};
