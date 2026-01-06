"use client";

import { useScroll, motion, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const TargetScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const [hasCompleted, setHasCompleted] = useState(false);

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v >= 0.99) {
        setHasCompleted(true); // lock animation
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="min-h-[200vh] flex items-center justify-center">
      <div ref={containerRef} className="relative flex gap-6">
        <div className="w-[2px] bg-gray-200 relative">
          <motion.div
            style={{ height: hasCompleted ? "100%" : lineHeight }}
            className="w-[2px] bg-blue-600 origin-top absolute top-0 left-0"
          />
        </div>

        <div className="space-y-16">
          <Step
            index={1}
            title="Post Requirements"
            text="Share your industrial needs"
          />{" "}
          <Step
            index={2}
            title="Get price in 10 minutes"
            text="Top suppliers reply quickly"
          />{" "}
          <Step
            index={3}
            title="Choose & Get Fast Delivery"
            text="Get quick delivery"
          />
        </div>
      </div>
    </div>
  );
};

function Step({
  index,
  title,
  text,
}: {
  index: number;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // reveals as line reaches each step
      transition={{ duration: 0.4 }}
      className="space-y-1"
    >
      <div className="font-bold text-lg">
        {index}. {title}
      </div>
      <div className="text-sm text-gray-600">{text}</div>
    </motion.div>
  );
}
