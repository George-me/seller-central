"use client";
import React, { useState, useRef, useEffect } from "react";
import TabsDetails from "./TabsDetails";

const Tabs = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0); // default to the first tab
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({
    width: 0,
    left: 0,
  });
  const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Function to update underline style
  const updateUnderlineStyle = () => {
    const selectedTabElement = tabRefs.current[selectedTabIndex];
    if (selectedTabElement) {
      const width = selectedTabElement.offsetWidth;
      const left = selectedTabElement.offsetLeft;
      setUnderlineStyle({
        width,
        left,
      });
    }
  };

  // Update underline on tab change
  useEffect(() => {
    updateUnderlineStyle();
  }, [selectedTabIndex]);

  // Update underline on window resize
  useEffect(() => {
    const handleResize = () => {
      updateUnderlineStyle();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedTabIndex]);

  const tabs: string[] = [
    "Product Identity",
    "Description",
    "Product Details",
    "Offer",
    "Safety Compliance",
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center shadow-lg relative">
        {tabs.map((tab, index) => (
          <span
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`p-5 cursor-pointer relative select-none text-sm ${
              selectedTabIndex === index ? "font-bold" : ""
            }`}
            onClick={() => setSelectedTabIndex(index)} // Set the tab index instead of the tab name
          >
            {tab}
          </span>
        ))}
        <div
          className="
                absolute
                bottom-0
                h-[5px]
                bg-[#016E7E]
                transition-all
                duration-220
                ease-in-out
              "
          style={{
            width: `${underlineStyle.width}px`,
            left: `${underlineStyle.left}px`,
          }}
        />
      </div>

      {/* Pass the selected tab index to TabsDetails */}
      <TabsDetails selectedTabIndex={selectedTabIndex} />
    </div>
  );
};

export default Tabs;
