"use client";
import { useState } from "react";
import Image from "next/image";
import amazonLogo from "../../public/assets/seller-central_logo-white.svg";
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SideDrawer from "@/components/SideDrawer";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <header>
      {/* Top navigation container */}
      <div className="flex justify-between items-center text-white bg-[#00292D]">
        <button
          className="btn text-white p-3"
          onClick={() => toggleDrawer(!open)}
        >
          <Bars3Icon className="h-6 stroke-2" />
        </button>

        <div className="pt-1 mx-3 flex-shrink-0">
          <Link href={`/`}>
            <Image
              alt="amazon logo"
              src={amazonLogo}
              height={25}
              className="cursor-pointer select-none"
            />
          </Link>
        </div>

        <div className="mx-3 border border-[#BBBFBF] opacity-45 h-[30px]" />

        <div className="mx-3 text-black bg-white px-2 py-0.5 text-nowrap rounded-[5px]">
          <span className="font-bold">George </span>
          <span className="font-semibold">| United Arab Emirates</span>
        </div>

        {/* Search bar */}
        <div className="mx-5 hidden md:flex flex-grow focus-within:bg-amazon_search_focus-focus rounded-lg">
          <input
            type="text"
            placeholder="Search"
            className="h-[38px] flex-grow bg-[#085762] text-white placeholder-white focus:outline-none px-2.5"
          />

          <button className="btn bg-[#027084] text-white px-0.5">
            <MagnifyingGlassIcon className="h-[38px] p-2 stroke-2" />
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center text-white space-x-5 mr-6 whitespace-nowrap">
          <EnvelopeIcon className="h-5 stroke-2 cursor-pointer" />
          <Cog6ToothIcon className="h-5 stroke-2 cursor-pointer" />

          <div className="flex items-center justify-center cursor-pointer select-none">
            <span className="text-base font-semibold px-1">EN</span>
            <span className="text-xl h-3.5">🢓</span>
          </div>

          <span className="text-base font-semibold cursor-pointer">Help</span>
        </div>
      </div>
      <SideDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
