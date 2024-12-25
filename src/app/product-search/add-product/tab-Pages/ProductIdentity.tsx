import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const hasVariations = ["Yes", "No"];

const ProductIdentity = () => {
  return (
    <div className="pt-6 border-x border-[#D1D1D1] border-b shadow-sm bg-white pb-8">
      {/* Variations  */}
      <div className="flex items-center pl-[82px] gap-3 hover:bg-[#E7E9EB] p-2.5">
        <span className="font-bold text-sm">Variations</span>
        <QuestionMarkCircleIcon className="h-5 w-5 cursor-pointer stroke-2" />
        <span>Does the product have variations?</span>

        <div className="flex gap-3">
          {hasVariations.map((variations, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                name="variations"
                value="1"
                defaultChecked={variations === "Yes"}
                className="form-radio accent-[#008296] h-4 w-4"
              />
              <span className="ml-2 text-gray-700">{variations}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Item Name */}
      <div className="flex items-center px-16 justify-center gap-3 hover:bg-[#E7E9EB] p-1.5">
        <span className="font-bold text-sm">* Item Name</span>
        <QuestionMarkCircleIcon className="h-5 w-5 cursor-pointer stroke-2" />

        <div className="flex flex-grow rounded-[3px] border-2 border-[#C0C3C4]">
          <input
            type="text"
            placeholder="Example: Adidas Blue Sneakers"
            className="h-8 flex-grow focus:outline-none px-2"
          />
        </div>
      </div>

      {/* Item Brand */}
      <div className="hover:bg-[#E7E9EB] space-y-1.5 pb-3">
        <div className="flex items-center pl-[55px] pr-16 justify-center gap-3 p-1.5">
          <div className="inline-flex items-center  gap-3">
            <span className="font-bold text-sm">* Brand Name</span>
            <QuestionMarkCircleIcon className="h-5 w-5 cursor-pointer stroke-2" />
          </div>
          <div className="flex flex-grow rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              placeholder="Example: Sony"
              className="h-8 flex-grow focus:outline-none px-2"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center pl-[195px] gap-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox accent-[#008296] rounded transform scale-125"
            />
          </label>
          <span className="text-sm font-semibold text-[#008296]">
            This product does not have a brand name
          </span>
        </div>
      </div>

      {/* External Product ID */}

      <div className="hover:bg-[#E7E9EB] space-y-1.5 pb-3">
        <div className="flex pl-5 pr-16 items-center justify-center gap-3 p-1.5">
          <span className="font-bold text-sm">External Product ID</span>
          <QuestionMarkCircleIcon className="h-5 w-5 cursor-pointer stroke-2" />
          <div className="flex flex-grow rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              placeholder="714532191586"
              className="h-8 flex-grow focus:outline-none px-2"
            />
          </div>
          <div className="flex flex-grow rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              placeholder="-Select-"
              className="h-8 flex-grow focus:outline-none px-2"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center pl-[195px] gap-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox accent-[#008296] rounded transform scale-125"
            />
          </label>
          <span className="text-sm font-semibold text-[#008296]">
            I don't have a Product ID
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductIdentity;
