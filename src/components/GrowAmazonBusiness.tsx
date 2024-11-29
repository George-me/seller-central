import Image, { StaticImageData } from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const GrowAmazonBusiness = () => {
  return (
    <div className="border-2 border-[#B6B6B6] w-[268px] flex flex-col h-[304px]">
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="text-xl font-semibold">Grow Amazon Business</h2>
        <EllipsisHorizontalIcon className="h-6 w-6 stroke-2 cursor-pointer" />
      </div>

      <div className="font-semibold text-[13px] bg-[#DFE9E6] text-[#214b53] px-3 py-2">
        Increase your sales on Amazon Business with exclusive features that
        enable you to target millions of business customers.
      </div>

      <div className="flex flex-col items-center py-9 text-[#05323D]">
        <span className="text-3xl font-bold mb-2">$634.49</span>
        <span className="font-semibold text-sm">
          Amazon Business sales last 30 days
        </span>
      </div>

      {/* Push button to the bottom */}
      <button className="w-full font-semibold text-white text-center text-sm py-2 cursor-pointer bg-[#016E7E] focus:outline-none mt-auto">
        Register Now
      </button>
    </div>
  );
};

export default GrowAmazonBusiness;
