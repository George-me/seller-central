import {
  EllipsisHorizontalIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const News = () => {
  return (
    <div className="border-2 border-[#B6B6B6] w-[268px]">
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="text-xl font-semibold">News</h2>
        <EllipsisHorizontalIcon className="h-6 w-6 stroke-2 cursor-pointer" />
      </div>

      {/* Row 1 */}
      <div className="flex flex-col justify-between px-3 py-1">
        <span className="text-xs text-[#949798] mb-[1px] font-semibold">
          Dec 9, 2024
        </span>
        <span className="font-bold text-sm">
          Grow your business with the newly launched Amazon Seller Central
        </span>
        <div className="flex text-sm items-center font-semibold text-[#008296] cursor-pointer">
          <span>Read more</span>
          <ChevronRightIcon className="h-3 w-3 stroke-2 mt-1" />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col justify-between bg-[#F4F6F8] px-3 py-1">
        <span className="text-xs text-[#949798] mb-[1px] font-semibold">
          Dec 9, 2024
        </span>
        <span className="font-bold text-sm">
          Grow your business with the newly launched Amazon Seller Central
        </span>
        <div className="flex text-sm items-center font-semibold text-[#008296] cursor-pointer">
          <span>Read more</span>
          <ChevronRightIcon className="h-3 w-3 stroke-2 mt-1" />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col justify-between px-3 py-1">
        <span className="text-xs text-[#949798] mb-[1px] font-semibold">
          Dec 9, 2024
        </span>
        <span className="font-bold text-sm">
          Grow your business with the newly launched Amazon Seller Central
        </span>
        <div className="flex text-sm items-center font-semibold text-[#008296] cursor-pointer">
          <span>Read more</span>
          <ChevronRightIcon className="h-3 w-3 stroke-2 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default News;
