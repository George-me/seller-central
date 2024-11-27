import Image from "next/image";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

const infoCards = [
  {
    cardTitle: "MarketPlaces",
    leftIcon: true,
    rightIcon: false,
    value: 4,
  },
  {
    cardTitle: "Open Orders",
    leftIcon: false,
    rightIcon: false,
    value: 29,
  },
  {
    cardTitle: "Today's Sales",
    leftIcon: false,
    rightIcon: false,
    value: "$593.82",
  },
  {
    cardTitle: "Buyer Messages",
    leftIcon: false,
    rightIcon: false,
    value: 0,
  },
  {
    cardTitle: "Buy Box Wins",
    leftIcon: false,
    rightIcon: true,
    value: "80%",
  },
  {
    cardTitle: "Total Balance",
    leftIcon: false,
    rightIcon: false,
    value: "$3,989.69",
  },
  {
    cardTitle: "IPI",
    leftIcon: false,
    rightIcon: false,
    value: 488,
  },
  {
    cardTitle: "Global Promotions Sales",
    leftIcon: false,
    rightIcon: false,
    value: "$0.00",
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {infoCards.map(({ cardTitle, value, leftIcon, rightIcon }, index) => (
          <div className="flex items-center border-[1.5px] border-[#D9D9D9] shadow-sm px-3 py-2">
            {leftIcon && (
              <div>
                <GlobeAltIcon className="h-14 w-14 text-[#008296] stroke-2 mr-1 -ml-1" />
              </div>
            )}
            <div key={index} className="flex flex-col w-full justify-between">
              <h2 className="uppercase text-xs font-semibold">{cardTitle}</h2>
              <div className="flex items-center justify-between mt-3">
                <div className="inline-flex items-center">
                  <span className="text-[#008296] font-semibold">{value}</span>
                  {rightIcon && (
                    <ArrowTrendingDownIcon className="h-4 w-4 text-red-600 stroke-2 ml-0.5" />
                  )}
                </div>
                <ChevronDownIcon className="h-4 w-4 stroke-2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
