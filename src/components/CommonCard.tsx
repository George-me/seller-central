import Image, { StaticImageData } from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

interface Props {
  cardTitle: string;
  description: string;
  img: StaticImageData;
  btn: string;
}

const CommonCard = ({ cardTitle, description, img, btn }: Props) => {
  return (
    <div className="border-2 border-[#B6B6B6] w-[268px] flex flex-col h-[304px]">
      <div className="flex justify-between items-center px-3 py-2">
        <h2 className="text-xl font-semibold">{cardTitle}</h2>
        <EllipsisHorizontalIcon className="h-6 w-6 stroke-2 cursor-pointer" />
      </div>

      <div className="font-semibold text-[13px] bg-[#DFE9E6] text-[#214b53] px-3 py-2">
        {description}
      </div>

      <Image
        src={img}
        width={200}
        height={200}
        alt="item"
        className="w-full object-contain"
      />

      {/* Push button to the bottom */}
      <button className="w-full font-semibold text-white text-center text-sm py-2 cursor-pointer bg-[#016E7E] focus:outline-none mt-auto">
        {btn}
      </button>
    </div>
  );
};

export default CommonCard;
