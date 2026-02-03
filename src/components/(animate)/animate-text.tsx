"use client";

import { stagger, motion } from "motion/react";
import { useAnimate } from "motion/react";
import React, { useEffect } from "react";

export const AnimateText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "Experience the perfect blend of style and performance with this premium everyday essential. Designed with durability and comfort in mind, it delivers reliable results whether you're at home, at work, or on the go.";

  useEffect(() => {
    const stateAnimation = () => {
      animate(
        "span",
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        },
        {
          duration: 0.18,
          delay: stagger(0.12),
          ease: "easeInOut",
        },
      );
    };
    stateAnimation();
  }, []);

  return (
    <div className="h-screen bg-neutral-900 text-white flex items-center justify-center">
      <h1
        ref={scope}
        className="max-w-4xl mx-auto font-medium text-xl text-left"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              style={{
                opacity: 0,
                filter: "blur(4px)",
                y: 6,
              }}
              key={`${word}-${index}`}
              className="inline-block"
            >
              {word} &nbsp;
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
};
