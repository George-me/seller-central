import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const drawerLinks = [
  {
    title: "Catalog",
    route: "/product-search",
  },
  {
    title: "Inventory",
    route: "/",
  },
  {
    title: "Pricing",
    route: "/",
  },
  {
    title: "Orders",
    route: "/",
  },
  {
    title: "Advertising",
    route: "/",
  },
  {
    title: "Stores",
    route: "/",
  },
  {
    title: "Growth",
    route: "/",
  },
  {
    title: "Reports",
    route: "/",
  },
  {
    title: "Performance",
    route: "/",
  },
  {
    title: "Partner Network",
    route: "/",
  },
  {
    title: "B2B",
    route: "/",
  },
  {
    title: "Brands",
    route: "/",
  },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

const SideDrawer = ({ open, onClose }: Props) => {
  return (
    <div>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose}></div>
      )}

      {/* Side Drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 
          bg-white 
          shadow-xl 
          transform 
          transition-transform 
          duration-300 
          ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          z-50
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-[#00292D]">
          <h2 className="text-xl font-semibold text-white">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <XMarkIcon className="h-6 w-6 text-white cursor-pointer" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        {drawerLinks.map(({ title, route }, index) => (
          <Link
            key={index}
            href={route}
            onClick={onClose}
            className="block px-3 py-2 pl-4 text-gray-700 font-semibold hover:bg-gray-100"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideDrawer;
