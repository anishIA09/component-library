import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/(accordion)/accordion";
import React from "react";

const AccordionPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <Accordion className="w-[300px]">
        <AccordionItem value={"item-1"} className="bg-white">
          <AccordionHeader className="">
            <AccordionTrigger>Opne Item 1</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              ipsum voluptas, earum harum ducimus aliquid quae eligendi
              doloremque dicta adipisci!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-2"} className="bg-white">
          <AccordionHeader>
            <AccordionTrigger>Opne Item 2</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Im content of item 2</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-3"} className="bg-white">
          <AccordionHeader>
            <AccordionTrigger>Opne Item 3</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Im content of item 3</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-4"} className="bg-white">
          <AccordionHeader>
            <AccordionTrigger>Opne Item 4</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Im content of item 4</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-5"} className="bg-white">
          <AccordionHeader>
            <AccordionTrigger>Opne Item 5</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Im content of item 5</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value={"item-6"} className="bg-white">
          <AccordionHeader>
            <AccordionTrigger>Opne Item 6</AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <p>Im content of item 6</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionPage;
