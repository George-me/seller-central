import { InformationCircleIcon } from "@heroicons/react/24/outline";

const TabAlert = () => {
  return (
    <div className="flex space-x-4 border-l-4 border-l-[#016E7E] border-r-[#D1D1D1] border-r p-4 bg-[#EBF8FE]">
      <InformationCircleIcon className="h-6 w-6 text-[#008296] stroke-2" />
      <div className="flex flex-col">
        <span className="text-sm font-bold">
          You are currently viewing a new version of the Add a Product tool,
          with updated product information requirements.
        </span>
        <span className="text-sm text-[#008296] font-semibold cursor-pointer">
          For more information, go to our Help page.
        </span>
      </div>
    </div>
  );
};

export default TabAlert;
