import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

const TabSuccessAlert = () => {
  return (
    <div className="flex space-x-4 border-l-4 border-l-green-500 border-r-[#D1D1D1] border-r p-4 bg-[#ebfeee]">
      <CheckBadgeIcon className="h-8 w-8 text-green-500 stroke-2" />
      <div className="flex flex-col space-y-2">
        <span className="text-sm font-bold">
          Success: The information you have provided is valid. Please proceed to
          the next step.
        </span>

        <span className="text-sm text-[#008296] font-semibold cursor-pointer">
          Click on the continue button to go to the next page
        </span>
      </div>
    </div>
  );
};

export default TabSuccessAlert;
