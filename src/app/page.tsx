import Image from "next/image";
import {
  ChevronDownIcon,
  GlobeAltIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import RestockIventory from "@/components/RestockIventory";
import News from "@/components/News";
import CommonCard from "@/components/CommonCard";
import laptop from "../../public/assets/laptop.jpg";
import network from "../../public/assets/network.jpg";
import thumbsUp from "../../public/assets/thumbsUp3.jpg";
import feedback from "../../public/assets/feedback.jpg";
import MCF from "../../public/assets/MCF-46.png";
import FBA from "../../public/assets/FBA.png";
import AmazonBox from "../../public/assets/Amazon-1200.jpg";
import analytics from "../../public/assets/analytics.jpg";
import GrowAmazonBusiness from "@/components/GrowAmazonBusiness";
import SellerForums from "@/components/SellerForums";
import shopper from "../../public/assets/shoppers.jpg";

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
    <div className="p-[18px]">
      {/* Top info cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {infoCards.map(({ cardTitle, value, leftIcon, rightIcon }, index) => (
          <div
            key={index}
            className="flex items-center border-[1.5px] border-[#D9D9D9] shadow-sm px-3 py-2 cursor-pointer"
          >
            {leftIcon && (
              <div>
                <GlobeAltIcon className="h-12 w-12 text-[#008296] stroke-2 mr-0.5 -ml-1.5" />
              </div>
            )}
            <div className="flex flex-col w-full justify-between">
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

      {/* Large cards */}
      <div className="flex flex-wrap gap-4 mt-6">
        <CommonCard
          cardTitle="Use MCF for all orders"
          description="Use MCF, deliver orders from all sales channels in as fast as one day"
          img={MCF}
          btn="Start using MCF today"
        />
        <RestockIventory />
        <News />
        <CommonCard
          cardTitle="Add More Products"
          description="Keep expanding your product catalog"
          img={laptop}
          btn="Create More Listings"
        />

        <CommonCard
          cardTitle="List Globally"
          description="Get help listing millions of customers by listing internationally"
          img={network}
          btn="Manage International Listings"
        />

        <CommonCard
          cardTitle="Promote with Coupons"
          description="Merchandise your products with coupon badging"
          img={thumbsUp}
          btn="Create a Coupon"
        />

        <CommonCard
          cardTitle="Sponsored Brands"
          description="Help shoppers discover and engage with your brand on Amazon"
          img={feedback}
          btn="Create a Coupon"
        />

        <CommonCard
          cardTitle="Add More to FBA"
          description="Offer prime shipping for eligible items"
          img={FBA}
          btn="Convert More Offers to FBA"
        />

        <CommonCard
          cardTitle="Get more reviews"
          description="Enroll more products in the Early Reviewer Program"
          img={AmazonBox}
          btn="Choose a SKU to enroll"
        />

        <CommonCard
          cardTitle="Brand Analytics"
          description="See how customers find your products"
          img={analytics}
          btn="View Top Search Terms"
        />

        <GrowAmazonBusiness />
        <SellerForums />

        <CommonCard
          cardTitle="Sponsored Display"
          description="Reach shoppers interested in your products on and off Amazon"
          img={shopper}
          btn="Create a campaign"
        />
      </div>
    </div>
  );
}
