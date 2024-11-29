"use client";
import React, { useState, useRef, useEffect } from "react";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Product Identity");
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({
    width: 0,
    left: 0,
  });
  const tabRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const selectedTabElement = tabRefs.current.find(
      (ref) => ref && ref.textContent === selectedTab
    );

    if (selectedTabElement) {
      const width = selectedTabElement.offsetWidth;
      const left = selectedTabElement.offsetLeft;

      setUnderlineStyle({
        width,
        left,
      });
    }
  }, [selectedTab]);

  const tabs: string[] = [
    "Product Identity",
    "Description",
    "Product Details",
    "Offer",
    "Safety Compliance",
  ];

  return (
    <div>
      <div className="flex justify-center shadow-lg relative">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`
              p-5 
              cursor-pointer 
              relative 
              select-none
              ${selectedTab === tab ? "font-bold" : ""}
            `}
            onClick={() => setSelectedTab(tab)}
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
    </div>
  );
};

export default Page;
