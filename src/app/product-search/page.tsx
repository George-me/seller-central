import Image from "next/image";
import React from "react";
import primeBoxes from "../../../public/assets/prime-boxes-3.1.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const infoCards = [
  {
    cardTitle: "What's a GTIN?",
    description:
      "You can find the barcode or GTIN (UPC/EAN/JAN/ISBN) on the package of your item. If you do not have a GTIN, you can apply for exemption.",
    btn: "Learn more",
  },
  {
    cardTitle: "Open Orders",
    description:
      "Sellers are required to obtain approval from Amazon before listing in certain product categories.",
    btn: "Manage your selling applications",
  },
  {
    cardTitle: "Create variations",
    description:
      "Learn about relationship types and when to use variation relationships.",
    btn: "Create variations using Variation Wizard",
  },
  {
    cardTitle: "Compliance references",
    description:
      "Learn Compliance requirements and service providers for your products.",
    btn: "Compliance self-assessment",
  },
];

const page = () => {
  return (
    <div>
      {/* Top section */}
      <div className="grid grid-cols-12 bg-[#F4F6F8] p-6">
        {/* Left column image */}
        <div className="col-span-3">
          <Image
            src={primeBoxes}
            width={200}
            height={200}
            alt="item"
            className="w-full object-contain"
          />
        </div>

        {/* Middle section with search bar */}
        <div className="flex flex-col col-span-7 text-[#214b53] justify-center pl-[100px]">
          <span className="self-start font-semibold">
            To begin adding products
          </span>
          <span className="text-4xl font-semibold mb-7">
            Find your products in Amazon's catalog
          </span>
          <div className="flex rounded-[3px] border-2 border-[#C0C3C4]">
            <input
              type="text"
              placeholder="Product name, UPC, EAN, ISBN, or ASIN"
              className="h-10 flex-grow border-r-2 border-[#C0C3C4] focus:outline-none px-2.5"
            />
            <button className="btn bg-[#F9F9F9] text-black px-0.5">
              <MagnifyingGlassIcon className="h-10 p-2 stroke-2" />
            </button>
          </div>

          <div className="flex justify-between py-3 text-center font-semibold text-[#008296]">
            <Link
              href="/product-search/add-product"
              className="px-3 w-1/2 border-x border-[#C0C3C4] cursor-pointer"
            >
              I'm adding a product not sold on Amazon
            </Link>
            <span className="px-3 w-1/2 border-r  border-[#C0C3C4] cursor-pointer">
              I'm uploading a file to add multiple products
            </span>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-[18px]">
        <h2 className="text-[#214b53] text-lg font-semibold mb-3">
          Additional references
        </h2>

        {/* Bottom info cards */}
        <div className="flex gap-4 flex-wrap">
          {infoCards.map(({ cardTitle, description, btn }, index) => (
            <div
              key={index}
              className="flex shrink-0 items-start border-[1.5px] w-[268px] border-[#D9D9D9] shadow-sm px-3 py-1.5 pt-2.5 cursor-pointer"
            >
              <div className="flex flex-col w-full justify-between">
                <h2 className="uppercase text-[#214b53] text-xs font-bold">
                  {cardTitle}
                </h2>
                <div className="flex items-center justify-between mt-1">
                  <div className="inline-flex items-center">
                    <span className="text-xs font-semibold">{description}</span>
                  </div>
                </div>
                <span className="font-semibold text-sm mt-1 text-[#008296] cursor-pointer">
                  {btn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
