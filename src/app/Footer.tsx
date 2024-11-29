import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
// import ReactCountryFlag from "react-country-flag";

const Footer = () => {
  return (
    <div>
      {/* Horizontal Line */}
      <div className="m-4 my-4 mt-6 border-b-[1px] border-[#BBBFBF] opacity-80" />
      <div className="flex justify-between px-5 pt-2.5 pb-8 text-xs text-[#232f3e]">
        <div className="flex items-center space-x-4">
          <span className="cursor-pointer">Help</span>
          <span className="cursor-pointer">Program Policy</span>

          <div className="flex space-x-2 items-center">
            <div className="flex items-center space-x-1.5 border-[1.5px] border-[#BBBFBF] rounded-[4px] px-[7px] py-[3px] cursor-pointer text-xs">
              <span>English</span>
              <ChevronDownIcon className="h-3 w-3 stroke-2" />
            </div>
          </div>
        </div>

        <div className="space-x-4">
          <span className="cursor-pointer">Terms of Service</span>
          <span className="cursor-pointer">Privacy Policy</span>
          <span>© 2022, Amazon Services LLC</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
