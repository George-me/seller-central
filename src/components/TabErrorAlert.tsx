import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const TabErrorAlert = () => {
  return (
    <div className="flex space-x-4 border-l-4 border-l-red-500 border-r-[#D1D1D1] border-r p-4 bg-[#feebeb]">
      <InformationCircleIcon className="h-8 w-8 text-red-500 stroke-2" />
      <div className="flex flex-col space-y-2">
        <span className="text-sm font-bold">
          Warning: Some of the values entered for this product have a large
          variation when compared to similar products of this category. Can you
          please verify if the entered values are correct.
        </span>
        <div className="flex flex-col space-y-1">
          <span className="font-semibold text-sm">
            Please verify the product dimensions & weight before proceeding
          </span>
          <span className="font-semibold text-sm">
            If you proceed, this may affect delivery options of your product in
            the future
          </span>
          <span className="text-sm text-[#008296] font-semibold cursor-pointer">
            For more information, go to our Help page.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TabErrorAlert;
