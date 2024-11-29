import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const LargeCard = () => {
  return (
    <div className="border-2 border-[#B6B6B6] w-[268px]">
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="text-xl font-semibold">Restock Inventory</h2>
        <EllipsisHorizontalIcon className="h-6 w-6 stroke-2 cursor-pointer" />
      </div>

      {/* Item details section */}
      <div className="flex justify-between bg-[#F4F6F8] px-3 py-1">
        <Image
          src="https://m.media-amazon.com/images/I/51-FK1DFxBL._AC_SL1500_.jpg"
          width={64}
          height={64}
          alt="item"
          className="h-16 w-h-16 object-contain mr-2"
        />

        <div className="flex flex-col text-xs justify-between font-semibold">
          <h3 className="line-clamp-1 text-[#008296]">
            New Bose QuietComfort Wireless Noise Cancelling Earbuds
          </h3>
          <span className="text-[#949798] text-[10px]">
            SKU: &nbsp;&nbsp;JNGLESTIX36
          </span>
          <span className="text-[#949798] text-[10px]">ASIN: B0D8BZDPXB</span>
        </div>
      </div>

      {/* Sales details */}
      <div className="px-3 py-2 space-y-2 text-xs font-semibold">
        <div className="flex justify-between">
          <span>Sales in the last 30 days</span>
          <span>1</span>
        </div>
        <div className="flex justify-between">
          <span>Days of Supply</span>
          <span>0</span>
        </div>
        <div className="flex justify-between">
          <span>Total Inventory</span>
          <span>0</span>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex flex-col justify-between bg-[#EBF0E8] px-3 py-1.5 font-bold text-sm">
        <div className="flex justify-between mb-4">
          <span>Recommended Quality</span>
          <span>60</span>
        </div>

        <button className="mb-1 w-full font-semibold text-white text-center text-sm py-1.5 cursor-pointer bg-[#016E7E] focus:outline-none">
          Restock Now
        </button>

        <span className="flex text-[#008296] font-semibold justify-center cursor-pointer">
          Dismiss
        </span>
      </div>
    </div>
  );
};

export default LargeCard;
