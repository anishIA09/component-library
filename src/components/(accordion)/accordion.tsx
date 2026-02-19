"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import React, { Children, createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type AccordionContextType = {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  accordionItems: any;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("use useAccordion within a Accordion.");
  }

  return context;
};

const Accordion = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState("");

  const accordionItems = Children.map(children, (child) => {
    return child.props.value;
  });

  const contextValue: AccordionContextType = {
    active,
    setActive,
    accordionItems,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={cn("flex flex-col min-w-32", className)}>{children}</ul>
    </AccordionContext.Provider>
  );
};

type AccordionItemProps = {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
} & React.LiHTMLAttributes<HTMLLIElement>;

type AccordionItemContextType = {
  value: string;
  isOpen: boolean;
  disabled?: boolean;
  toggle: () => void;
};

const AccordionItemContext =
  React.createContext<AccordionItemContextType | null>(null);

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("Use AccordionItem components within AccordionItem.");
  }

  return context;
};

const AccordionItem = ({
  value,
  disabled,
  className,
  children,
  ...props
}: AccordionItemProps) => {
  const { active, setActive, accordionItems } = useAccordion();

  const total = accordionItems.length;
  const currentIndex = accordionItems.indexOf(value);
  const activeIndex = accordionItems.indexOf(active);

  const isOpen = active === value;
  const isActive = currentIndex === activeIndex;

  const activeFirst = activeIndex === 0;
  const activeLast = activeIndex === total - 1;
  const activeMiddle = activeIndex > 0 && activeIndex < total - 1;

  let margin = "";

  if (isActive) {
    if (activeFirst) margin = "mb-3";
    else if (activeLast) margin = "mt-3";
    else if (activeMiddle) margin = "my-3";
  }

  let roundedClass = "";

  if (isActive) {
    roundedClass = "rounded-md";
  } else if (activeFirst) {
    if (currentIndex === 1) {
      roundedClass = "rounded-t-md";
    } else if (currentIndex === total - 1) {
      roundedClass = "rounded-b-md";
    }
  } else if (activeLast) {
    if (currentIndex === 0) {
      roundedClass = "rounded-t-md";
    } else if (currentIndex === total - 2) {
      roundedClass = "rounded-b-md";
    }
  } else if (activeMiddle) {
    if (currentIndex < activeIndex) {
      if (activeIndex === 1) {
        roundedClass = "rounded-md";
      } else if (currentIndex === 0) {
        roundedClass = "rounded-t-md";
      } else if (currentIndex === activeIndex - 1) {
        roundedClass = "rounded-b-md";
      }
    }

    if (currentIndex > activeIndex) {
      if (activeIndex === total - 2) {
        roundedClass = "rounded-md";
      } else if (currentIndex === activeIndex + 1) {
        roundedClass = "rounded-t-md";
      } else if (currentIndex === total - 1) {
        roundedClass = "rounded-b-md";
      }
    }
  } else {
    if (currentIndex === 0) {
      roundedClass = "rounded-t-md";
    } else if (currentIndex === total - 1) {
      roundedClass = "rounded-b-md";
    }
  }

  const toggle = () => {
    if (disabled) return;
    setActive((prev) => (prev === value ? "" : value));
  };

  const contextValue = { value, isOpen, disabled, toggle };

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <li
        data-state={isOpen ? "open" : "closed"}
        data-disabled={disabled ? "true" : undefined}
        className={cn("group", margin, roundedClass, className)}
        {...props}
      >
        {children}
      </li>
    </AccordionItemContext.Provider>
  );
};

type AccordionHeaderProps = {
  className?: string;
  children: React.ReactNode;
};

const AccordionHeader = ({ className, children }: AccordionHeaderProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

type AccordionTriggerProps = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => {
  const { toggle, disabled } = useAccordionItem();

  return (
    <button
      onClick={toggle}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-between gap-3 px-3 py-2 text-sm w-full",
        "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        size={16}
        className="transition-transform duration-300 group-data-[state=open]:rotate-180"
      />
    </button>
  );
};

type AccordionContentProps = {
  className?: string;
  children: React.ReactNode;
};

const AccordionContent = ({ className, children }: AccordionContentProps) => {
  const { isOpen } = useAccordionItem();

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
          animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
          exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          style={{ overflow: "hidden" }}
          className={cn("px-3", className)}
        >
          <div className="py-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
